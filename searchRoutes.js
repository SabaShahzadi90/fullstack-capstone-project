const express = require('express');
const router = express.Router();
const connectToDatabase = require('./db');

// Route: GET /api/gifts/search?category=Toys - category se filter karna
router.get('/api/gifts/search', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('inserted_items');
    
    const category = req.query.category; // URL se category lega
    
    const query = {};
    if (category) {
      query.category = category; // category ke basis pe filter
    }
    
    const gifts = await collection.find(query).toArray();
    res.json(gifts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
