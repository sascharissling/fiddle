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

//Get one chat
router.get('/:id', getChat, async (request, response) => {
  response.send(response.chat.id);
});

//Delete one chat
router.delete('/:id', getChat, async (request, response) => {
  try {
    await response.chat.remove();
    response.json({ message: 'Chat deleted' });
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
router.patch('/:id', getChat, async (request, response) => {
  if (request.body.message != null) {
    response.chat.message = request.body.message;
  }
  if (request.body.user1 != null) {
    response.chat.user1 = request.body.user1;
  }
  if (request.body.user2 != null) {
    response.chat.user1 = request.body.user2;
  }
  try {
    const updatedChat = await response.chat.save();
    response.json(updatedChat);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

//Middleware
async function getChat(request, response, next) {
  let chat;
  try {
    chat = await Chat.findById(request.params.id);
    if (chat == null) {
      return response.status(404).json({ message: 'Cannot find chat' });
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
  response.chat = chat;
  next();
}

module.exports = router;
