const schedule = require('node-schedule');
const fetchFromCoinGecko = require('../utils/fetchFromCoinGecko');
const Crypto = require('../models/CryptoData');

const coins = ['bitcoin', 'matic-network', 'ethereum'];

const fetchCryptoData = async () => {
  try {
    for (const coin of coins) {
      const data = await fetchFromCoinGecko(coin);
      await Crypto.create({ coin, ...data });
      console.log(`Data for ${coin} saved.`);
    }
  } catch (error) {
    console.error("Error in background job:", error.message);
  }
};

// Schedule the job to run every 2 hours
schedule.scheduleJob('0 */2 * * *', fetchCryptoData);

module.exports = fetchCryptoData;
