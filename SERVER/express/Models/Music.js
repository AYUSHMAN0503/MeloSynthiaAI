const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  query: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  genTime: {
    type: Number,
    required: true
  },
  musicUrl: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Music', musicSchema);
