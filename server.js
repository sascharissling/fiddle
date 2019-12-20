require('dotenv').config();
const express = require('express');
const { initDb } = require('./lib/database');
const { getChats } = require('./lib/chats');

const app = express();

app.get('/api/chats', async (request, response) => {
  const chats = await getChats();
  response.json(chats);
});

initDb(process.env.MONGO_URL, process.env.DB_NAME).then(() => {
  console.log('DB initialized');
  app.listen(8080, () => {
    console.log('Server ready on http://localhost:8080');
  });
});
