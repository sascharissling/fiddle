require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGO_DB_URL}${process.env.MONGO_DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
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
