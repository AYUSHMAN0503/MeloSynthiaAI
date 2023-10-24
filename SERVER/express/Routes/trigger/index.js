const router = require('express').Router();
const fetch = require("node-fetch-commonjs");
const cors = require("cors");
const { flaskUrl } = require("../../config");

router.use(cors());

router.get('/', async (req, res) => {
  // await new Promise(r => setTimeout(r, 1000));
  console.log("---> Triggering flask");
  try {
    setInterval(() => {
      fetch(`http://localhost:5000/trigger/another`);
      fetch(`${flaskUrl}/trigger`);
      console.log("---> Triggered, flask is now up");
    }, 1000 * 30);

    // return res.send("Triggered, flask is now up");
  } catch (error) {
    fetch(`${flaskUrl}/trigger`);
    console.log("---> Triggered, flask is now up");
  }
});


router.get('/another', async (req, res) => {
  console.log("---> Another trigger");
  return res.send("Another trigger");
});

module.exports = router;