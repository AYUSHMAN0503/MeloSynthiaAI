const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  resetOtp: Number,
  resetOtpExpiration: Date,
  isVerified: Boolean,
  verificationToken: String,
});

module.exports = mongoose.model('User', userSchema);