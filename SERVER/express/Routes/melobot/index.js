const express = require("express");
const router = express.Router();
const fetch = require("node-fetch-commonjs");
const cors = require("cors");
const { requestParamsGuard } = require("../../Utils/requestGuard");
const { flaskUrl } = require("../../config");
const { melobotChatParams } = require('./parameters.js')


router.use(cors());

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