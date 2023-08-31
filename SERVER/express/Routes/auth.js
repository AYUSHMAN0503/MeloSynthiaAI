const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendOtp, generateOTP } = require('../Utils/authentication');
const { jwt_secret } = require('../config');

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
    await user.save();

    const authToken = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1d' });
    console.log("User created successfully: ", user.username);
    res.status(201).send({
      message: 'User created successfully',
      success: true,
      authToken
    });

  } catch (error) {
    console.log("Internal server error in signup: ", error);
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

    const authenticatePassword = await bcrypt.compare(password, user.password);
    if (!authenticatePassword) return res.status(400).send({
      message: "Incorrect password",
      success: false
    });

    const authToken = jwt.sign({ id: user.id }, jwt_secret);
    console.log("User logged in successfully: ", user.username);
    res.status(200)
      .cookie("authToken", authToken, { httpOnly: true, secure: true, sameSite: "none" })
      .send({
        message: "User logged in successfully",
        success: true,
      });
  } catch (error) {
    console.log("Internal server error in signin: ", error);
    res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
});

router.post('/request-otp', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) res.status(400).send({
      message: "user not found",
      success: false
    });

    const otp = generateOTP();
    const expirationTimeStamp = new Date(Date.now() + 15 * 60 * 1000);

    user.resetOtp = otp
    user.resetOtpExpiration = expirationTimeStamp;

    await user.save();

    await sendOtp(user.username, email, otp);

    res.status(200).send({
      message: "Password reset request initiated. Check your email for OTP.",
      success: true
    });

  } catch (error) {
    console.error("Error initiating password reset:", error);
    res.status(500).send({
      message: "Error initiating password reset",
      success: false
    });
  }

});

router.post('/reset-password', async (req, res) => {
  const { email, otp, password } = req.body;
  console.log("reset password request: ");

  try {
    if (!email || !otp || !password) return res.status(400).send({
      success: false,
      message: "Enter credentials correctly"
    });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({
      success: false,
      message: "User not found"
    });

    // validate otp and its expiration:
    if (user.resetOtp != otp || user.resetOtpExpiration.getTime() < Date.now()) {
      return res.status(400).send({
        message: "Invalid or expired OTP",
        success: false,
      });
    }

    // validted user
    const salt = bcrypt.genSaltSync(10);
    const newPassword = await bcrypt.hash(password, salt);
    console.log(newPassword, user.password);
    user.password = newPassword;
    user.resetOtp = undefined;
    user.resetOtpExpiration = undefined;
    await user.save();
    console.log("Password reset successful: ", user.username);
    res.status(200).send({
      success: true,
      message: "Password reset successful"
    });

  } catch (error) {
    console.error("Error resetting password:", error.message);
    res.status(500).send({
      success: false,
      message: "Error resetting password"
    });
  }


})

module.exports = router;