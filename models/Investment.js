const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema({
  tweetId: String,
  amount: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Investment', InvestmentSchema);
