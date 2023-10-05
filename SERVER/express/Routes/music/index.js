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

/**
 * @swagger
 * /music/getGradioMusic:
 *   post:
 *     summary: Get music from text
 *     description: Get music from text
 *     requestBody:
 *       required: true
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
 *                 enum: ['melody', 'harmony', 'drums', 'bass', 'full']
 *                 description: model name
 *                 default: 'melody'
 *               text:
 *                 type: string
 *                 description: query to generate music
 *                 default: 'fast electronic futuristic music'
 *               audio:
 *                 type: string
 *                 description: audio file to generate music
 *                 default: 'https://github.com/gradio-app/gradio/raw/main/test/test_files/audio_sample.wav'
 *               duration:
 *                 type: number
 *                 description: duration of the generated music
 *                 default: 1
 *               top_k:
 *                 type: number
 *                 description: top k
 *                 default: 50
 *               top_p:
 *                 type: number
 *                 description: top p
 *                 default: 0.9
 *               temperature:
 *                 type: number
 *                 description: temperature
 *                 default: 0.8
 *               classifier_free_guidance:
 *                 type: boolean
 *                 description: classifier free guidance
 *                 default: false
 *     responses:
 *       200:
 *         description: Successful response
 */
router.post('/getGradioMusic', async (req, res) => {
  try {
    const { body } = requestParamsGuard(req, res, gradioGenerateMusicParams);


    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    const initialTime = Date.now();
    const response = await fetch(`${flaskUrl}/gradio`, requestOptions);

    const musicBuffer = await response.arrayBuffer();
    const music = Buffer.from(musicBuffer);

    const tempVideoUrl = createTempUrl(music, 'video.mp4');

    // code to convert video to audio (but not required)
    // const tempMusicUrl = '../temp/music.mp3';
    // videoToAudioConverter(tempVideoUrl, tempMusicUrl, function (err) { });

    const uploadedMusicUrl = await fileUpload(tempVideoUrl);
    console.log({ uploadedMusicUrl });


    // code to save to database for future use of data:
    // const queryData = new Music({
    //   query: text,
    //   duration,
    //   genTime,
    //   musicUrl: uploadedMusicUrl
    // });
    // await queryData.save();

    res.status(200).json({ url: uploadedMusicUrl });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

/**
 * @swagger
 * /music/generate:
 *   post:
 *     summary: Get music from text
 *     description: Get music from text
 *     requestBody:
 *       required: true
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
 *                 enum: ['melody', 'harmony', 'drums', 'bass', 'full']
 *                 description: model name
 *                 default: 'melody'
 *               text:
 *                 type: string
 *                 description: query to generate music
 *                 default: 'fast electronic futuristic music'
 *               audio:
 *                 type: string
 *                 description: audio file to generate music
 *                 default: 'https://github.com/gradio-app/gradio/raw/main/test/test_files/audio_sample.wav'
 *               duration:
 *                 type: number
 *                 description: duration of the generated music
 *                 default: 1
 *               top_k:
 *                 type: number
 *                 description: top k
 *                 default: 50
 *               top_p:
 *                 type: number
 *                 description: top p
 *                 default: 0.9
 *               temperature:
 *                 type: number
 *                 description: temperature
 *                 default: 0.8
 *               classifier_free_guidance:
 *                 type: boolean
 *                 description: classifier free guidance
 *                 default: false
 *     responses:
 *       200:
 *         description: Successful response
 */
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

/**
 * @swagger
 * /music/get:
 *   post:
 *     summary: Retrieve music and statistics data based on a filename.
 *     description: Retrieve music and statistics data for a given filename from external sources,
 *                  process the data, and save it to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - filename
 *             properties:
 *               filename:
 *                 type: string
 *                 default: "fd2787d0-ae9c-439b-862b-9a0f98d98912"
 *                 description: The filename for which music and statistics data is requested.
 *     responses:
 *       200:
 *         description: Successful retrieval and processing of music and statistics data.
 *       400:
 *         description: Bad request or error response during the data retrieval or processing.
 *       500:
 *         description: Internal server error during the operation.
 * @param {express.Request} req - The Express request object.
 * @param {express.Response} res - The Express response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
router.post('/get', async (req, res) => {
  const { body: { filename } } = requestParamsGuard(req, res, musicParams);
  try {
    const musicRequestUrl = `${flaskUrl}/music?filename=${filename}`
    const statsRequestUrl = `${flaskUrl}/stats?filename=${filename}`

    const fetchMusic = await fetch(musicRequestUrl);
    const fetchStats = await fetch(statsRequestUrl);

    console.log(fetchMusic.status);

    if (fetchMusic.status === 500) {
      const fetchMusicJson = await fetchMusic.json();

      console.log({ fetchMusicJson })
      return res.status(500).json({ message: fetchMusicJson.message });
    }
    else if (fetchMusic.status !== 200) {
      const fetchMusicJson = await fetchMusic.json();

      console.log({ fetchMusicJson })
      return res.status(200).json({ message: fetchMusicJson.message });
    }
    else if (fetchMusic.status === 200) {
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
