const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const connectToDatabase = require('./db');

// Route 1: GET /api/gifts - sab gifts lana
router.get('/api/gifts', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('inserted_items');
    const gifts = await collection.find({}).toArray();
    res.json(gifts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route 2: GET /api/gifts/:id - 1 gift by ID lana
router.get('/api/gifts/:id', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('inserted_items');
    const gift = await collection.findOne({ _id: new ObjectId(req.params.id) });
    if (!gift) {
      return res.status(404).json({ message: 'Gift not found' });
    }
    res.json(gift);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
