// authController.js
exports.getUserData = (req, res) => {
	if (req.user && req.user.googleId) {
		User.findOne({ googleId: req.user.googleId })
			.then((user) => {
				res.json(user)
			})
			.catch((error) => {
				res.status(500).json('Internal server error')
			})
	} else {
		res.status(401).json('Unauthorized')
	}
}
// Middleware function to ensure user is authenticated
exports.ensureAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		// User is authenticated, proceed to the next middleware or route handler
		return next()
	}

	// User is not authenticated, redirect or return an error response
	res.status(401).json({ message: 'Unauthorized' })
}
