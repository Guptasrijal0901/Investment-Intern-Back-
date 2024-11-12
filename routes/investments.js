const express = require('express');
const router = express.Router();
const Investment = require('../models/Investment');

// Endpoint to create a new investment
router.post('/invest', async (req, res) => {
  const { tweetId, amount } = req.body;
  try {
    const investment = new Investment({ tweetId, amount });
    await investment.save();
    res.status(201).json({ message: 'Investment successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to get all investments
router.get('/investments', async (req, res) => {
  try {
    const investments = await Investment.find();
    res.status(200).json(investments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
