# Crypto Stats API
A simple Node.js application that provides real-time cryptocurrency data, including price, market cap, and 24-hour price change for Bitcoin, Matic, and Ethereum. It also calculates the price deviation (standard deviation) based on historical data for these coins.

## Introduction
This API fetches real-time cryptocurrency data from the CoinGecko API and stores it in MongoDB. It then provides two main endpoints to get the latest stats for specified cryptocurrencies and calculate the price deviation based on historical data.

## Features
1. **Fetch real-time cryptocurrency data:** Get the current price, market cap, and 24-hour price change for Bitcoin, Matic, and Ethereum.
2. **Standard deviation calculation:** Compute the price deviation (standard deviation) for the records of a specified cryptocurrency.
3. **Background job:** Automatically fetch and store the latest data from CoinGecko every 2 hours.

## Installation
### Follow these steps to install and set up the Crypto Stats API locally:

1. **Clone the Repository**

Clone the repository to your local machine:
```bash
git clone https://github.com/Zedoman/crypto_stats
cd crypto_stats
```
2. **Install Dependencies**

Make sure you have Node.js and npm installed. Then, run:
```bash
npm install
```

3. **Set Up Environment Variables**

#### Create a .env file in the root directory and add the following:
```bash
MONGO_URI=''
PORT=5000
COINGECKO_API_URL=https://api.coingecko.com/api/v3
```
4. **MongoDB:** You can use MongoDB locally or set up a cloud database via MongoDB Atlas.

### API Endpoints
1. **/api/stats**
This endpoint fetches the latest stats (price, market cap, and 24-hour price change) for a specified cryptocurrency.

**Request Method:** GET \
**Query Parameters:** \
***coin (Required):*** The cryptocurrency to fetch stats for. Can be one of bitcoin, matic-network, or ethereum. \
Example Request:
```bash
GET http://localhost:5000/api/stats?coin=bitcoin
```
**Sample Response:**
```bash
{
  "price": 40000,
  "marketCap": 800000000,
  "24hChange": 3.4
}
```
**Error Response:**\
If no data is found for the requested coin:
```bash
json
{
  "error": "No data found for the specified coin."
}
```

2. **/api/deviation**
This endpoint calculates the standard deviation of the price for a specified cryptocurrency based on the last 100 records stored in the database.

**Request Method:** GET \
**Query Parameters:** \
***coin (Required):*** The cryptocurrency to calculate the price deviation for. Can be one of bitcoin, matic-network, or ethereum. \
Example Request:
```bash
GET http://localhost:5000/api/deviation?coin=bitcoin
```
**Sample Response:**
```bash
json
{
  "deviation": 4082.48
}
```

### Background Job
The background job fetches data every 2 hours from CoinGecko API and stores it in the MongoDB database.

1. **CoinGecko IDs:** 
**Bitcoin:** bitcoin \
**Matic:** matic-network \
**Ethereum:** ethereum 

### Testing the Application
To test the APIs, you can use Postman or curl to make the following requests:

1. **Test 1:** Fetch Latest Stats for Bitcoin
```bash
GET http://localhost:5000/api/stats?coin=bitcoin
```
2.**Test 2:** Fetch Standard Deviation for Ethereum
```bash
GET http://localhost:5000/api/deviation?coin=ethereum
```
