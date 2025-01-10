const axios = require('axios');

const fetchFromCoinGecko = async (coinId) => {
  try {
    const response = await axios.get(`${process.env.COINGECKO_API_URL}/simple/price`, {
      params: {
        ids: coinId,
        vs_currencies: 'usd',
        include_market_cap: 'true',
        include_24hr_change: 'true'
      }
    });

    const data = response.data[coinId];
    return {
      price: data.usd,
      marketCap: data.usd_market_cap,
      change24h: data.usd_24h_change
    };
  } catch (error) {
    console.error("Error fetching data from CoinGecko:", error.message);
    throw error;
  }
};

module.exports = fetchFromCoinGecko;
