require('dotenv').config()
// To connect with your mongoDB database
const mongoose = require('mongoose')
const dns = require('dns')

// Set default result order for DNS resolution
dns.setDefaultResultOrder('ipv4first')

// Connecting to database
mongoose.connect(
	process.env.MONGO_DB_CONNECTION_STRING,
	{
		dbName: 'skyage',
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) =>
		err ? console.log(err) : console.log('Connected to SkyAge database')
)
const express = require('express')
const app = express()
const cors = require('cors')

// mongoose
// 	.connect(DB)
// 	.then(() => {
// 		console.log('Database is CONNECTED to MongoDB Atlas')
// 	})
// 	.catch((err) => {
// 		console.log('Database is NOT CONNECTED to MongoDB Atlas')
// 	})
