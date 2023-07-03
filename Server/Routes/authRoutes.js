const express = require('express')
const passport = require('passport')

const router = express.Router()

// Route to initiate Google authentication
router.get(
	'/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
)

// Route to handle Google callback after authentication
router.get(
	'/google/callback',
	passport.authenticate('google', { failureRedirect: '/login' }),
	(req, res) => {
		res.redirect('http://localhost:3000/Dashboard')
	}
)

module.exports = router
