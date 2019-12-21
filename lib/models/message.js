const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  type: {
    type: String
  },
  body: {
    type: String
  },
  author: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Message', messageSchema);
