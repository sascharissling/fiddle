const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Models imports
const Chat = require('./models/chat');

//Get all chats
router.get('/', async (request, response) => {
  try {
    const chats = await Chat.find();
    response.json(chats);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error.message });
  }
});

//Get user-specific chats
router.get('/userChats/:name', async (request, response) => {
  try {
    const chats = await Chat.find({
      $or: [
        { $and: [{ userName1: request.params.name }] },
        { $and: [{ userName2: request.params.name }] }
      ]
    });
    response.json(chats);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error.message });
  }
});

//Get one chat
router.get('/:id', async (request, response) => {
  try {
    const chat = await Chat.findById(request.params.id);
    response.json(chat);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error.message });
  }
});

//Get messages of one chat
router.get('/:id/messages', getChat, async (request, response) => {
  response.send(response.chat.messages);
});

//Get userName1 of one chat
router.get('/:id/userName1', getChat, async (request, response) => {
  response.send(response.chat.userName1);
});

//Get userName2 of one chat
router.get('/:id/userName2', getChat, async (request, response) => {
  response.send(response.chat.userName2);
});

//Get chat ID by userName1 and userName2
router.get('/:name1/:name2', async (request, response) => {
  try {
    const chat = await Chat.find({
      $or: [
        { $and: [{ userName1: request.params.name1 }, { userName2: request.params.name2 }] },
        { $and: [{ userName1: request.params.name2 }, { userName2: request.params.name1 }] }
      ]
    });
    response.json(chat[0]._id);
  } catch (error) {
    response.json(false);
    //Error Handling should go here
  }
});

//Delete one chat
router.delete('/:id', getChat, async (request, response) => {
  try {
    await response.chat.remove();
    response.json({ message: 'Chat deleted' });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error.message });
  }
});

//Initiate New Chat
router.post('/', async (request, response) => {
  const chat = new Chat({
    id: request.body.id,
    userName1: request.body.userName1,
    userName2: request.body.userName2,
    messages: request.body.messages
  });

  try {
    const newChat = await chat.save();
    response.status(201).json(newChat);
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error.message });
  }
});

//Add one message
router.post('/:id/messages', async (request, response) => {
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
    const newMessage = await Chat.findByIdAndUpdate(
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
    console.log(error);
    response.status(400).json({ message: error.message });
  }
});

//Delete one chat
router.delete('/:id', getChat, async (request, response) => {
  try {
    await response.chat.remove();
    response.json({ message: 'Chat deleted' });
  } catch (error) {
    console.log(error);
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
    console.log(error);
    return response.status(500).json({ message: error.message });
  }
  response.chat = chat;
  next();
}
module.exports = router;
