const router = require('express').Router();
const fetch = require("node-fetch-commonjs");
const cors = require("cors");
const { flaskUrl } = require("../../config");

router.use(cors());

router.get('/', async (req, res) => {
  // await new Promise(r => setTimeout(r, 1000));
  console.log("---> Triggering flask and express");
  try {
    setInterval(() => {
      // fetch(`http://localhost:5000/trigger/another`);
      fetch(`https://melosynthia-ai.onrender.com/trigger/another`);
      fetch(`${flaskUrl}/trigger`);
    }, 1000 * 60 * 5);

    // return res.send("Triggered, flask is now up");
  } catch (error) {
    fetch(`${flaskUrl}/trigger`);
    console.log("---> Triggered, flask is now up");
  }
});


router.get('/another', async (req, res) => {
  console.log("---> Express is up");
  return res.send("Another trigger");
});

module.exports = router;