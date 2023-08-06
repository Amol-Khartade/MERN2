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

// Logout route
router.post('/logout', (req, res) => {
	// Clear the session data and remove the token cookie
	req.session.destroy((err) => {
		if (err) {
			console.error(err)
			return res.status(500).json({ message: 'Internal server error' })
		}
		res.clearCookie('token')
		return res.status(200).json({ message: 'Logout successful' })
	})
})

module.exports = router
