require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const io = require('socket.io')(9090, {
  handlePreflightRequest: (req, res) => {
    const headers = {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Origin': req.headers.origin, //or the specific origin you want to give access to,
      'Access-Control-Allow-Credentials': true
    };
    res.writeHead(200, headers);
    res.end();
  }
});

mongoose.connect(`mongodb://${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/fiddle`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to DB'));

const app = express();

app.use(express.json());

const chatsRouter = require('./lib/chats');
app.use('/api', chatsRouter);

app.listen(8080, () => {
  console.log('Server ready on http://localhost:8080');
});

//SOCKET.io for getting messages
io.on('connection', socket => {
  console.log('user arrived');
  socket.on('send-chat-id', _id => {
    const chats = db.collection('chats');
    const ObjectId = require('mongodb').ObjectID;
    const chatId = new ObjectId(_id);
    chats.findOne(chatId, function(error, result) {
      if (error) {
        throw error;
      }
      socket.emit('chat-messages', result);
    });
  });
});
