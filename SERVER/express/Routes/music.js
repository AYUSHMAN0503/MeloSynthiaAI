const express = require("express");
const router = express.Router();
const {
  fileUpload,
  createTempUrl,
  deleteTempFile,
  videoToAudioConverter,
} = require("../Utils/fileUpload");
const fetch = require("node-fetch-commonjs");
const cors = require("cors");
const { requestParamsGuard } = require("../Utils/requestGuard");
const { flaskUrl } = require("../config");


router.use(cors());

// removed authentication middleware for testing and development
router.post('/getGradioMusic', async (req, res) => {
  try {

    const requiredParameters = [
      { name: "model", description: "model name" },
      { name: "text", description: "query to generate music" },
      { name: "audio", description: "audio file to generate music" },
      { name: "duration", description: "duration of the generated music" },
      { name: "top_k", description: "top k" },
      { name: "top_p", description: "top p" },
      { name: "temperature", description: "temperature" },
      { name: "classifier_free_guidance", description: "classifier free guidance" }
    ]

    requestParamsGuard(req, res, requiredParameters);

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

    const response = await fetch(`${flaskUrl}/getGradioMusic`, requestOptions);

    const musicBuffer = await response.arrayBuffer();
    const music = Buffer.from(musicBuffer);

    const tempVideoUrl = createTempUrl(music, 'video.mp4');

    // code to convert video to audio (but not required)
    // const tempMusicUrl = '../temp/music.mp3';
    // videoToAudioConverter(tempVideoUrl, tempMusicUrl, function (err) { });

    const uploadedMusicUrl = await fileUpload(tempVideoUrl);
    console.log({ uploadedMusicUrl });


    // code to save to database (only for authenticated users)
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

    res.status(200).json({ url: uploadedMusicUrl });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post('/getLyrics', async (req, res) => {
  try {

    const requiredParameters = [
      {
        name: "text",
        description: "query to get lyrics"
      },
      {
        name: "key",
        description: "api key to get lyrics. Get it from https://huggingface.co/settings/tokens"
      }
    ];

    requestParamsGuard(req, res, requiredParameters);

    const { text, key } = req.body;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, key }),
    };

    const response = await fetch(`${flaskUrl}/getLyrics`, requestOptions);
    const lyrics = await response.json();

    if (response.error) {
      return res.status(400).json({ error: response.error });
    }
    res.status(200).json({ lyrics });

  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred" });
  }
})


module.exports = router;
