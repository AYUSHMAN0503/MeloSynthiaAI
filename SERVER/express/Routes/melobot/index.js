const express = require("express");
const router = express.Router();
const fetch = require("node-fetch-commonjs");
const cors = require("cors");
const { requestParamsGuard } = require("../../Utils/requestGuard");
const { flaskUrl } = require("../../config");
const { melobotChatParams } = require('./parameters.js')


router.use(cors());


/**
 * @swagger
 * /melobot:
 *   post:
 *     summary: Get response from Melobot
 *     description: Get a response from Melobot.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *             properties:
 *               message:
 *                 type: string
 *                 default: 'Hello'
 *                 description: The message to send to Melobot.
 *     responses:
 *       200:
 *         description: Successful response from Melobot.
 *       400:
 *         description: Bad request or error response.
 *       500:
 *         description: Internal server error.
 * @param {express.Request} req - The Express request object.
 * @param {express.Response} res - The Express response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
router.post('/', async (req, res) => {
  const { body: { message } } = requestParamsGuard(req, res, melobotChatParams);
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    };
    const response = await fetch(`${flaskUrl}/melobot`, requestOptions);
    const melobotResponse = await response.json();

    console.log(melobotResponse);

    if (response.status !== 200) {
      return res.status(400).json({ error: response.error });
    }

    return res.status(200).json(melobotResponse);

  } catch (error) {
    console.log("Error: ", error.message);
    return res.status(500).json({ error: error.message });
  }
});


module.exports = router;