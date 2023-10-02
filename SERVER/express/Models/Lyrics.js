const mongoose = require('mongoose');

const lyricsSchema = new mongoose.Schema({
  query: {
    type: String,
    required: true
  },
  lyrics: {
    type: String,
    required: true
  },
})


module.exports = mongoose.model('Lyrics', lyricsSchema);