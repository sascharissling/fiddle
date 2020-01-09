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

const chatSchema = new mongoose.Schema({
  userName1: String,
  userName2: String,
  messages: [messageSchema]
});

module.exports = mongoose.model('Chat', chatSchema);
