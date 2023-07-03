const GoogleStrategy = require('passport-google-oauth20').Strategy
const UserGoogle = require('../models/userGoogle')

module.exports = function (passport) {
	// Configure Passport Google OAuth strategy
	passport.use(
		new GoogleStrategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
				callbackURL: '/auth/google/callback',
			},
			async (accessToken, refreshToken, profile, done) => {
				try {
					// Check if the user already exists in the database based on the Google ID
					const user = await UserGoogle.findOne({
						googleId: profile.id,
					})
					if (user) {
						// User already exists, return the user
						done(null, user)
					} else {
						// User does not exist, create a new user and save it in the database
						const newUser = new UserGoogle({
							googleId: profile.id,
							name: profile.displayName,
							email: profile.emails[0].value,
						})
						await newUser.save()
						done(null, newUser)
					}
				} catch (err) {
					done(err)
				}
			}
		)
	)

	// Serialize user into the session
	passport.serializeUser((user, done) => {
		done(null, user.id)
	})

	// Deserialize user from the session
	passport.deserializeUser((id, done) => {
		user.findById(id, (err, user) => {
			done(err, user)
		})
	})
}
