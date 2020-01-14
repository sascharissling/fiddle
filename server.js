require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;

mongoose.connect(`${process.env.MONGO_DB_URL}${process.env.MONGO_DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

//Models imports
const Chat = require('./lib/models/chat');

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to DB'));

const app = express();

app.use(express.json());

const chatsRouter = require('./lib/chats');
app.use('/api', chatsRouter);

// Serve any static files
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const server = require('http').createServer(app);
server.listen(PORT, () => {
  console.log('Server ready!');
});

// ----------------------------------------------

//SOCKET.io
const io = require('socket.io')(server, {
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

//Connection

// Get user specific chats
io.on('connection', socket => {
  socket.on('get-userName', userName => {
    socket.join(userName);
    Chat.find(
      {
        $or: [{ $and: [{ userName1: userName }] }, { $and: [{ userName2: userName }] }]
      },
      function(error, result) {
        if (error) {
          throw error;
        }
        io.to(userName).emit('user-chats', result);
      }
    );
    setInterval(() => {
      Chat.find(
        {
          $or: [{ $and: [{ userName1: userName }] }, { $and: [{ userName2: userName }] }]
        },
        function(error, result) {
          if (error) {
            throw error;
          }
          io.to(userName).emit('user-chats', result);
        }
      );
    }, 2000);
  });

  //Get chat informacion
  socket.on('send-chat-id-for-info', _id => {
    socket.join(_id);
    const ObjectId = require('mongodb').ObjectID;
    const chatId = new ObjectId(_id);
    Chat.findOne(chatId, function(error, result) {
      if (error) {
        throw error;
      }
      io.to(_id).emit('chat-info', result);
    });
  });

  //Get chat specific messages

  socket.on('send-chat-id', _id => {
    socket.join(_id);
    const ObjectId = require('mongodb').ObjectID;
    const chatId = new ObjectId(_id);
    Chat.findOne(chatId, function(error, result) {
      if (error) {
        throw error;
      }
      io.to(_id).emit('chat-messages', result);
    });
  });

  //Send message

  socket.on('message-sent', message => {
    socket.join(message.id);
    io.to(message.id).emit('new-chat-message', message);
  });
});
