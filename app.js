async function connectToDatabase() {
    client = new MongoClient(url);
    await client.connect(); // ye line zaroori hai
    console.log('Connected to MongoDB');
    return client.db(dbName);
}

module.exports = connectToDatabase; // YE LINE ADD KARO
