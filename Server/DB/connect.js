const mongoose = require('mongoose')

const DB = process.env.DATABASE

mongoose
	.connect(DB)
	.then(() => {
		console.log('Database CONNECTED to MongoDB Atlas')
	})
	.catch((err) => {
		console.log('Database is NOT CONNECTED to MongoDB Atlas')
	})
