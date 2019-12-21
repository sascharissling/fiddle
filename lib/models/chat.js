const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  user1: {
    type: String
  },
  user2: {
    type: String
  },
  messages: {
    type: Array
  }
});

module.exports = mongoose.model('Chat', chatSchema);
