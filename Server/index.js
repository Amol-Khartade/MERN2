const express = require('express')
const session = require('express-session')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const passport = require('passport')

// Load environment variables from .env file
dotenv.config()
require('./config/connectdb')

// Initialize Express
const app = express()
const port = process.env.PORT || 5000

// Enable CORS
app.use(cors({ origin: '*' }))
app.options('*', cors())

// Middleware is used to restrict user access to particular data

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configure session
app.use(
	session({
		secret: process.env.JWT_SECRET,
		resave: false,
		saveUninitialized: false,
	})
)

// Initialize Passport &  Use routes
require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth', require('./routes/authRoutes'))

// Import the userRoutes.js file and Use the userRoutes middleware
const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes)

// Start the server
app.listen(port, () => {
	console.log(`Server is running at port ${port}`)
})
