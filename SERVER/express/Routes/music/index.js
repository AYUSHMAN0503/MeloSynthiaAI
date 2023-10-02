const express = require("express");
const router = express.Router();
const {
  fileUpload,
  createTempUrl,
} = require("../../Utils/fileUpload");
const Music = require("../../Models/Music");
const fetch = require("node-fetch-commonjs");
const cors = require("cors");
const { requestParamsGuard } = require("../../Utils/requestGuard");
const { flaskUrl } = require("../../config");
const { gradioGenerateMusicParams, musicParams } = require('./parameters.js')

router.use(cors());

// removed authentication middleware for testing and development
/**
 * @swagger
 * /music/getGradioMusic:
 *   post:
 *     summary: Get music from text
 *     description: Get music from text
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - model
 *               - text
 *               - audio
 *               - duration
 *               - top_k
 *               - top_p
 *               - temperature
 *               - classifier_free_guidance
 *             properties:
 *               model:
 *                 type: string
 *                 description: model name
 *               text:
 *                 type: string
 *                 description: query to generate music
 *               audio:
 *                 type: string
 *                 description: audio file to generate music
 *               duration:
 *                 type: number
 *                 description: duration of the generated music
 *               top_k:
 *                 type: number
 *                 description: top k
 *               top_p:
 *                 type: number
 *                 description: top p
 *               temperature:
 *                 type: number
 *                 description: temperature
 *               classifier_free_guidance:
 *                 type: boolean
 *                 description: classifier free guidance
 *     responses:
 *       200:
 *         description: Successful response
 */
router.post('/getGradioMusic', async (req, res) => {
  try {
    requestParamsGuard(req, res, gradioGenerateMusicParams);

    const {
      model,
      text,
      audio,
      duration,
      top_k,
      top_p,
      temperature,
      classifier_free_guidance,
    } = req.body;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        text,
        audio,
        duration,
        top_k,
        top_p,
        temperature,
        classifier_free_guidance,
      }),
    };

    const initialTime = Date.now();
    const response = await fetch(`${flaskUrl}/getGradioMusic`, requestOptions);

    const finalTime = Date.now();
    const genTime = finalTime - initialTime;
    console.log("Time taken to generate music: ", finalTime - initialTime);

    const musicBuffer = await response.arrayBuffer();
    const music = Buffer.from(musicBuffer);

    const tempVideoUrl = createTempUrl(music, 'video.mp4');

    // code to convert video to audio (but not required)
    // const tempMusicUrl = '../temp/music.mp3';
    // videoToAudioConverter(tempVideoUrl, tempMusicUrl, function (err) { });

    const uploadedMusicUrl = await fileUpload(tempVideoUrl);
    console.log({ uploadedMusicUrl });


    // code to save to database for future use of data:
    const queryData = new Music({
      query: text,
      duration,
      genTime,
      musicUrl: uploadedMusicUrl
    });
    await queryData.save();

    res.status(200).json({ url: uploadedMusicUrl });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});


router.post('/generate', async (req, res) => {
  const { body } = requestParamsGuard(req, res, gradioGenerateMusicParams);
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
    const response = await fetch(`${flaskUrl}/generate_music`, requestOptions);
    const responseData = await response.json();

    if (response.error) {
      return res.status(400).json({ error: response.error });
    }

    res.status(200).json({ responseData });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred" });
  }
})


router.post('/get', async (req, res) => {
  const { body: { filename } } = requestParamsGuard(req, res, musicParams);
  try {
    const musicRequestUrl = `${flaskUrl}/music?filename=${filename}`
    const statsRequestUrl = `${flaskUrl}/stats?filename=${filename}`

    const fetchMusic = await fetch(musicRequestUrl);
    const fetchStats = await fetch(statsRequestUrl);

    console.log(fetchMusic.status)
    if (fetchMusic.status !== 200) {
      const fetchMusicJson = await fetchMusic.json();

      console.log({ fetchMusicJson })
      return res.status(400).json({ message: fetchMusicJson.message });
    }
    else {
      const musicBuffer = await fetchMusic.arrayBuffer();
      const music = Buffer.from(musicBuffer);

      const tempVideoUrl = createTempUrl(music, 'video.mp4');
      const uploadedMusicUrl = await fileUpload(tempVideoUrl);
      console.log({ uploadedMusicUrl });

      const stats = await fetchStats.json();
      console.log({ stats })

      const queryData = new Music({
        query: stats.text,
        duration: stats.duration,
        genTime: stats.genTime,
        musicUrl: uploadedMusicUrl
      })
      await queryData.save();

      return res.status(200).json({ uploadedMusicUrl });
    }


  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred in finding music" });
  }
})



module.exports = router;
