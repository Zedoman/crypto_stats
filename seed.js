require('dotenv').config();
const mongoose = require('mongoose');
const Crypto = require('./models/CryptoData');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    const data = [
        // Bitcoin entries
        {
          coin: "bitcoin",
          price: 40000,
          marketCap: 800000000,
          change24h: 3.4,
          timestamp: new Date("2025-01-10T10:00:00Z")
        },
        {
          coin: "bitcoin",
          price: 41000,
          marketCap: 810000000,
          change24h: 3.8,
          timestamp: new Date("2025-01-10T12:00:00Z")
        },
        {
          coin: "bitcoin",
          price: 42000,
          marketCap: 820000000,
          change24h: 4.2,
          timestamp: new Date("2025-01-10T14:00:00Z")
        },
        {
          coin: "bitcoin",
          price: 41500,
          marketCap: 815000000,
          change24h: 4.0,
          timestamp: new Date("2025-01-10T16:00:00Z")
        },
        {
          coin: "bitcoin",
          price: 43000,
          marketCap: 830000000,
          change24h: 5.0,
          timestamp: new Date("2025-01-10T18:00:00Z")
        },
        
        // Matic Network entries
        {
          coin: "matic-network",
          price: 1.2,
          marketCap: 15000000,
          change24h: -0.5,
          timestamp: new Date("2025-01-10T10:00:00Z")
        },
        {
          coin: "matic-network",
          price: 1.3,
          marketCap: 16000000,
          change24h: 0.8,
          timestamp: new Date("2025-01-10T12:00:00Z")
        },
        {
          coin: "matic-network",
          price: 1.25,
          marketCap: 15500000,
          change24h: 0.0,
          timestamp: new Date("2025-01-10T14:00:00Z")
        },
        {
          coin: "matic-network",
          price: 1.35,
          marketCap: 16500000,
          change24h: 1.2,
          timestamp: new Date("2025-01-10T16:00:00Z")
        },
        {
          coin: "matic-network",
          price: 1.4,
          marketCap: 17000000,
          change24h: 2.5,
          timestamp: new Date("2025-01-10T18:00:00Z")
        },
        
        // Ethereum entries
        {
          coin: "ethereum",
          price: 2000,
          marketCap: 300000000,
          change24h: 1.2,
          timestamp: new Date("2025-01-10T10:00:00Z")
        },
        {
          coin: "ethereum",
          price: 2050,
          marketCap: 310000000,
          change24h: 2.5,
          timestamp: new Date("2025-01-10T12:00:00Z")
        },
        {
          coin: "ethereum",
          price: 2100,
          marketCap: 320000000,
          change24h: 3.0,
          timestamp: new Date("2025-01-10T14:00:00Z")
        },
        {
          coin: "ethereum",
          price: 2080,
          marketCap: 315000000,
          change24h: 2.8,
          timestamp: new Date("2025-01-10T16:00:00Z")
        },
        {
          coin: "ethereum",
          price: 2150,
          marketCap: 325000000,
          change24h: 3.5,
          timestamp: new Date("2025-01-10T18:00:00Z")
        }
      ];
      

    await Crypto.insertMany(data);
    console.log("Data seeded successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error.message);
    process.exit(1);
  }
};

seedData();
