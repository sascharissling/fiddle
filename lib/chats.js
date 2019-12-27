const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Models imports
const Chat = require('./models/chat');

//Get all chats
router.get('/api', async (request, response) => {
  try {
    const chats = await Chat.find();
    response.json(chats);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

//Get one chat
router.get('/api/:id', async (request, response) => {
  try {
    const chat = await Chat.findById(request.params.id);
    response.json(chat);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

//Get messages of one chat
router.get('/api/:id/messages', getChat, async (request, response) => {
  response.send(response.chat.messages);
});

//Get user1 of one chat
router.get('/api/:id/user1', getChat, async (request, response) => {
  response.send(response.chat.user1);
});

//Get user2 of one chat
router.get('/api/:id/user2', getChat, async (request, response) => {
  response.send(response.chat.user2);
});

//Get user-specific chats
router.get('/api/userChats/:name', async (request, response) => {
  try {
    const chats = await Chat.find({
      $or: [{ $and: [{ user1: request.params.name }] }, { $and: [{ user2: request.params.name }] }]
    });
    response.json(chats);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

//Delete one chat
router.delete('/api/:id', getChat, async (request, response) => {
  try {
    await response.chat.remove();
    response.json({ message: 'Chat deleted' });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

//Initiate New Chat
router.post('/api/', async (request, response) => {
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

//Add one message
router.post('/api/:id/messages', async (request, response) => {
  const chatMessage = {
    messages: [
      {
        type: request.body.type,
        body: request.body.body,
        author: request.body.author
      }
    ]
  };
  try {
    const id = mongoose.Types.ObjectId(request.params.id);
    const newMessage = await Chat.findOneAndUpdate(
      { _id: id },
      { $push: chatMessage },
      { new: true }
    ).lean(true);
    if (newMessage) {
      response.status(201).json(newMessage);
    } else {
      response.status(400).json({ message: 'Not able to update messages' });
    }
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

//Delete one chat
router.delete('/api/:id', getChat, async (request, response) => {
  try {
    await response.chat.remove();
    response.json({ message: 'Chat deleted' });
  } catch (error) {
    response.status(500).json({ message: error.message });
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
