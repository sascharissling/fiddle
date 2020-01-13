require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = process.env.LOCAL_PORT || 8080;

mongoose.connect(`${process.env.MONGO_DB_URL}${process.env.MONGO_DB_NAME}`, {
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

// Serve any static files
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server ready on http://localhost:8080');
});
