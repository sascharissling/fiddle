const { getCollection } = require('./database');

function getChatsCollection() {
  return getCollection('chats');
}

async function getChats() {
  const collection = await getChatsCollection();
  return await collection.find({}).toArray();
}

exports.getChats = getChats;
