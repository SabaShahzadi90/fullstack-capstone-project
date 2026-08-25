const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const connectToDatabase = require('./db');

// Route: GET /api/auth/me - current user nikalna
router.get('/api/auth/me', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('users'); // users collection
    
    const userId = req.user.id; // token se aya hua user id
    
    // Yahi line Q11 ke liye chahiye 👇
    const user = await collection.findOne({ _id: new ObjectId(userId) });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
