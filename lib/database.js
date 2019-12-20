const { MongoClient } = require('mongodb');

let db = null;

// Use connect method to connect to the Server
async function initDb(url, dbName) {
  // Create a new MongoClient
  const client = new MongoClient(url);

  await client.connect();
  db = client.db(dbName);
}

function getCollection(collectionName) {
  if (db === null) {
    throw new Error('Database is not initialized. Call initDb first.');
  }
  return db.collection(collectionName);
}

exports.initDb = initDb;
exports.getCollection = getCollection;
