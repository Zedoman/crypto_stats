const express = require('express');
const Crypto = require('../models/CryptoData');
const router = express.Router();

// GET /stats
router.get('/stats', async (req, res) => {
  const { coin } = req.query;

  if (!coin) return res.status(400).json({ error: "Coin query param is required" });

  const latestData = await Crypto.findOne({ coin }).sort({ timestamp: -1 });
  if (!latestData) return res.status(404).json({ error: "No data found for the requested coin" });

  res.json({
    price: latestData.price,
    marketCap: latestData.marketCap,
    "24hChange": latestData.change24h
  });
});

// GET /deviation
router.get('/deviation', async (req, res) => {
  const { coin } = req.query;

  if (!coin) return res.status(400).json({ error: "Coin query param is required" });

  const records = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(100);
  if (!records.length) return res.status(404).json({ error: "Not enough data for the requested coin" });

  const prices = records.map(record => record.price);
  const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
  const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;
  const deviation = Math.sqrt(variance);

  res.json({ deviation: parseFloat(deviation.toFixed(2)) });
});

module.exports = router;
