const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function connectToDatabase() {
  await client.connect(); // <-- ye line chahiye Q4 me
  console.log("Connected to MongoDB");
  return client.db("capstone");
}

module.exports = connectToDatabase;
