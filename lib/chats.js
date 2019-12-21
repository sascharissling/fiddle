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
//New Chat
router.post('/', async (request, response) => {
  const chat = new Chat({
    id: request.body.id,
    user1: request.body.user1,
    user2: request.body.user2,
    messages: request.body.messages
  });

  try {
    const newChat = await chat.save();
    response.status(201).json(newChat);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});
//Patch
router.patch('/:patch', (request, response) => {
  response.send(request.params.patch);
});

module.exports = router;
