const express = require('express');
const connectDB = require('./config/db');
const cryptoRoutes = require('./routes/cryptoRoutes');
require('dotenv').config();
require('./jobs/fetchCryptoData');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', cryptoRoutes);

module.exports = app;
