const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../Middleware/auth');
const { fileUpload, createTempUrl, deleteTempFile, videoToAudioConverter } = require('../Utils/fileUpload');
const Query = require('../Models/Query');
const fetch = require('node-fetch-commonjs')
const path = require('path');


router.post('/query', authenticateUser, async (req, res) => {
  try {
    const { genere, style, length, tempo, query } = req.body;
    console.log({ query, genere, style, length, tempo });

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, genere, style, length, tempo })
    };

    const response = await fetch('http://localhost:7000/predict', requestOptions);
    const musicBuffer = await response.arrayBuffer();
    const music = Buffer.from(musicBuffer);

    const tempUrl = createTempUrl(music);
    const musicUrl = await fileUpload(tempUrl);
    deleteTempFile(tempUrl);
    console.log({ musicUrl });

    // todo save musicUrl to query collection:
    const queryData = new Query({
      userId: req.user.id,
      query,
      genere,
      style,
      duration: length,
      tempo,
      musicUrl
    });

    await queryData.save();

    res.setHeader('Content-Disposition', 'attachment; filename=batch.mp3');
    res.setHeader('Content-Type', 'audio/mpeg');
    res.send(music);
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.get('/getAllQueries', authenticateUser, async (req, res) => {
  try {
    const queries = await Query.find({ userId: req.user.id })
      .select('-userId -__v -createdAt -updatedAt -musicUrl')
      .sort({ createdAt: -1 })
      .lean();
    res.status(200).json({ queries });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
})

router.post('/getGradioMusic', authenticateUser, async (req, res) => {
  try {
    const {
      model,
      text,
      audio,
      duration,
      top_k,
      top_p,
      temperature,
      classifier_free_guidance, } = req.body;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model,
        text,
        audio,
        duration,
        top_k,
        top_p,
        temperature,
        classifier_free_guidance,
      })
    };

    const response = await fetch('http://localhost:7000/getGradioMusic', requestOptions);

    const musicBuffer = await response.arrayBuffer();
    const music = Buffer.from(musicBuffer);

    const tempVideoUrl = createTempUrl(music, 'video.mp4');
    const tempMusicUrl = '../temp/music.mp3';

    videoToAudioConverter(tempVideoUrl, tempMusicUrl, function (err) {});

    const uploadedMusicUrl = await fileUpload(tempMusicUrl);
    console.log({ uploadedMusicUrl });

    // const queryData = new Query({
    //   userId: req.user.id,
    //   query: text,
    //   genere,
    //   style,
    //   duration: length,
    //   tempo,
    //   uploadedMusicUrl
    // });
    // await queryData.save();

    res.status(200).json({ url:uploadedMusicUrl });

  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
})

module.exports = router;
