const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  type: {
    type: String
  },
  body: {
    type: String
  },
  author: {
    type: Array
  }
});

module.exports = mongoose.model('Message', messageSchema);
