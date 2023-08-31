const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  query: {
    type: String,
    required: true
  },
  genere: {
    type: String,
    required: true
  },
  style: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  tempo: {
    type: 'String',
    required: true,
    enum: ['slow', 'medium', 'fast']
      },
  musicUrl: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Query', querySchema);
