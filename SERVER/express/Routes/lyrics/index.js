const express = require("express");
const router = express.Router();
const Lyrics = require("../../Models/Lyrics");
const fetch = require("node-fetch-commonjs");
const cors = require("cors");
const { requestParamsGuard } = require("../../Utils/requestGuard");
const { flaskUrl } = require("../../config");
const { lyricsGenParams } = require('./parameters.js');

router.use(cors());

/**
 * @swagger
 * /lyrics:
 *   post:
 *     summary: Get lyrics from text
 *     description: Get lyrics from text
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *               - key
 *             properties:
 *               text:
 *                 type: string
 *                 description: query to generate lyrics
 *                 default: 'fast electronic futuristic music'
 *               key:
 *                 type: string
 *                 description: api key to get lyrics. Get it from https://huggingface.co/settings/tokens
 *                 default: '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'
 *     responses:
 *       200:
 *         description: Successful response
 */
router.post('/', async (req, res) => {
  try {

    const { body: { text, key } } = requestParamsGuard(req, res, lyricsGenParams);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, key }),
    };

    const maxRequestCount = 5;
    let lyrics = null;
    let response = null;
    console.log("\n");
    for (let i = 0; i < maxRequestCount; i++) {
      try {
        response = await fetch(`${flaskUrl}/lyrics`, requestOptions);
        const [{ generated_text }] = await response.json();
        lyrics = generated_text;

        console.log(`Lyrics in ${i}th request: `, lyrics);

        if (response.error || response.status !== 200 || !lyrics) continue;
        else break

      } catch (error) {
        if (i === maxRequestCount - 1) {
          console.error("An error occurred:", error);
          res.status(500).json({ message: "An error occurred in lyrics generation.", success: false, error });
        }
      }
    }

    console.log('Generated lyrics:', lyrics);

    const lyricsToSave = new Lyrics({ query: text, lyrics });
    await lyricsToSave.save();

    return res.status(200).json({ lyrics });

  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ message: "An error occurred in lyrics generation.", success: false, error });
  }
})

module.exports = router;
