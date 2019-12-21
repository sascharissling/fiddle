const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  user1: {
    type: String,
    required: true
  },
  user2: {
    type: String,
    required: true
  },
  messages: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('Chat', chatSchema);
