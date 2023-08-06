// userRoutes.js
// Require necessary modules
const session = require('express-session')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

// const createToken = require('../utils/createToken')
// const authenticateUser = require('../middleware/authenticateUser')

//  import  models
const User = require('../models/user')
const Contact = require('../models/contact')
const DemoRecord = require('../models/VSSTC_DR')
const FeeRecord = require('../models/VSSTC_FR')
const OfferLetter = require('../models/VSSTC_OL')
const CreateDemo = require('../models/CreateDemo')
const Onboarding = require('../models/VSSTC_Onboarding')

router.post('/signup', async (req, res) => {
	const { firstName, lastName, contact, dob, email, password, con_password } =
		req.body

	try {
		const existingUser = await User.findOne({ email })
		if (existingUser) {
			// User already exists
			return res.status(409).json({ message: 'User already exists' })
		} else {
			// Create a new user and save it in the database
			const saltRounds = 12
			const hashedPassword = await bcrypt.hash(password, saltRounds) // Hash the password with configurable salt rounds value
			const newUser = new User({
				id: mongoose.Types.ObjectId().toString(),
				firstName,
				lastName,
				contact,
				dob,
				email,
				password: hashedPassword,
				con_password: hashedPassword,
			})
			await newUser.save()
			// Get the _id of the newly created user
			const userId = newUser._id

			// Save the same ObjectID as index to demo records collection
			const demoRecord = new DemoRecord({ id: userId })
			await demoRecord.save()

			// Save the same ObjectID as index to fee records collection
			const feeRecord = new FeeRecord({ id: userId })
			await feeRecord.save()

			// Save the same ObjectID as index to offer letter collection
			const offerLetterRecord = new OfferLetter({ id: userId })
			await offerLetterRecord.save()

			// Save the same ObjectID as index to onboarding records collection
			const onboardingRecord = new Onboarding({ id: userId })
			await onboardingRecord.save()

			return res.status(200).json({ message: 'Success' })
		}
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: 'Internal server error' })
	}
})

const createToken = (user) => {
	const tokenExpirationTime = process.env.TOKEN_EXPIRATION_TIME || '1h';
	const secretKey = process.env.JWT_SECRET;
  
	// Generate a JWT token with the user ID as the payload
	return jwt.sign({ userId: user._id }, secretKey, { expiresIn: tokenExpirationTime });
  }
const authenticateUser = (req, res, next) => {
	const token = req.headers.authorization;
	console.log('Token2:', token);
  
	if (!token) {
	  return res.status(401).json({ message: 'Authentication failed. Token not found.' });
	}
  
	try {
	  const secretKey = process.env.JWT_SECRET;
	  const decodedToken = jwt.verify(token.replace('Bearer ', ''), secretKey);
	  req.userId = decodedToken.userId;
	  next();
	} catch (error) {
	  console.error('Token Verification Error:', error);
	  return res.status(401).json({ message: 'Authentication failed. Invalid token.' });
	}
  };
// Login route
router.post('/login', async (req, res) => {
	const { email, password } = req.body;
	try {
	  const user = await User.findOne({ email: email });
	  if (!user) {
		// User does not exist
		return res.status(401).json({ message: 'Incorrect email or password' });
	  }
  
	  const isMatch = await bcrypt.compare(password, user.password);
	  if (isMatch) {
		// Generate a JWT token using the createToken helper function
		const token = createToken(user);
  
		// Send the token and user data in the response
		return res
		  .status(200)
		  .json({ user: user.toObject(), token: token, message: 'Login successful.' });
	  } else {
		// Incorrect password
		return res.status(401).json({ message: 'Incorrect password' });
	  }
	} catch (error) {
	  console.error(error);
	  return res.status(500).json({ message: 'Internal server error' });
	}
  })




// Route to get user details by ID
router.get('/user/:userId', authenticateUser, async (req, res) => {
	try {
	  const userId = req.params.userId;
  
	  // Check if the userId is a valid ObjectId
	  if (!mongoose.Types.ObjectId.isValid(userId)) {
		return res.status(400).json({ message: 'Invalid user ID' });
	  }
  
	  // Assuming you have a User model, replace this with your actual database query logic
	  const user = await User.findById(userId);
  
	  if (user) {
		// Return relevant user data
		return res.status(200).json({ user });
	  } else {
		return res.status(404).json({ message: 'User not found' });
	  }
	} catch (error) {
	  console.error(error);
	  return res.status(500).json({ message: 'Internal server error' });
	}
  });
  

// Protected route (requires authentication)
router.get('/dashboard', authenticateUser, async (req, res) => {
	try {
		const userId = req.params.userId
		console.log(userId)
		// Check if the userId is defined and a valid ObjectId
		if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
			return res.status(400).json({ message: 'Invalid user ID' })
		}

		// Assuming you have a User model, replace this with your actual database query logic
		const user = await User.findById(userId)

		if (user) {
			// Return relevant user data
			return res.status(200).json({ user })
		} else {
			return res.status(404).json({ message: 'User not found' })
		}
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: 'Internal server error' })
	}
})

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
// // Storage configuration for Multer
// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		cb(null, 'public/uploads') // Set the destination folder where the images will be stored
// 	},
// 	filename: function (req, file, cb) {
// 		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
// 		cb(null, uniqueSuffix + path.extname(file.originalname))
// 	},
// })

// // File filter to only allow images
// const fileFilter = (req, file, cb) => {
// 	if (file.mimetype.startsWith('image/')) {
// 		cb(null, true)
// 	} else {
// 		cb(new Error('Only images are allowed'))
// 	}
// }

// // Initialize Multer
// const upload = multer({ storage, fileFilter })

// // POST route for uploading profile picture
// router.post(
// 	'/uploadProfilePicture/:userId',
// 	upload.single('profilePicture'),
// 	async (req, res) => {
// 		const userId = req.params.userId
// 		const file = req.file

// 		if (!file) {
// 			return res
// 				.status(400)
// 				.json({ error: 'Please upload a valid image file' })
// 		}

// 		try {
// 			const user = await User.findByIdAndUpdate(
// 				userId,
// 				{ profilePicture: file.path },
// 				{ new: true }
// 			)

// 			if (!user) {
// 				return res.status(404).json({ error: 'User not found' })
// 			}

// 			return res.json(user)
// 		} catch (error) {
// 			console.error(error)
// 			return res.status(500).json({ error: 'Internal server error' })
// 		}
// 	}
// )
module.exports = router
