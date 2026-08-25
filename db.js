const { MongoClient } = require('mongodb');
require('dotenv').config(); // dotenv use karo

const url = process.env.MONGO_URL; // .env se lo
const dbName = 'giftdb'; // database ka naam giftdb ho

let client;

async function connectToDatabase() {
    client = new MongoClient(url);
    await client.connect(); // ye line zaroori hai
    console.log('Connected to MongoDB');
    return client.db(dbName);
}
