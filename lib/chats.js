const express = require('express');
const router = express.Router();
const Chat = require('./models/chat');

//Get all chats
router.get('/', async (request, response) => {
  try {
    const chats = await Chat.find();
    response.json(chats);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});
//Post
router.post('/:id', (request, response) => {
  response.send(request.params.id);
});
//Patch
router.patch('/:patch', (request, response) => {
  response.send(request.params.patch);
});

module.exports = router;
