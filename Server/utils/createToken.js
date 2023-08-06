const jwt = require('jsonwebtoken')
const User = require('../models/user')


// Load environment variables from .env file
const dotenv = require('dotenv')
dotenv.config()

const createToken = (user) => {
	const tokenExpirationTime = process.env.TOKEN_EXPIRATION_TIME || '1h'

	// Generate a JWT token with the user ID as the payload
	const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
		expiresIn: tokenExpirationTime,
	})
	
	return token
}

module.exports = createToken
