const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = "ilovemusic";

router.post('/signup', async (req, res) => {
  console.table(req.body);
  const { username, password, email } = req.body;
  if (!username || !password || !email) return res.status(400).send({
    message: 'Please enter all fields',
    success: false,
  });

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(403).send({
      message: 'User already exists',
      success: false,
    });

    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(password, salt);

    user = new User({ username, password: hash, email });
    user.save();

    const authToken = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1d' });

    res.status(201).send({
      message: 'User created successfully',
      success: true,
      authToken
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      message: 'Server error'
    });
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send({
    message: 'Please enter credetials',
    success: false,
  });

  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(400).send({
      message: 'User not registered',
      success: false
    });

    const authenticatePassword = bcrypt.compare(password, user.password);
    if (!authenticatePassword) return res.status(400).send({
      message: "Incorrect password",
      success: false
    });

    const authToken = jwt.sign({ id: user.id }, jwtSecret);

    res.status(200).send({
      message: "User logged in successfully",
      success: true,
      authToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
});

module.exports = router