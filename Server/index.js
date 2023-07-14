// Require necessary modules
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const passport = require('passport')
const bcrypt = require('bcryptjs')
const { User } = require('./models/user')
const Contact = require('./models/contact')
const { new_Demo } = require('./models/newDemo');

// Load environment variables from .env file
dotenv.config()

// Connect to MongoDB
require('./config/connectdb')

// Import modules
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

// Initialize Express
const app = express()
const port = process.env.PORT || 5000

// Enable CORS
app.use(cors({ origin: '*' }))
app.options('*', cors())

// Parse request bodies
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

// Initialize Passport
require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

// Use routes
app.use('/auth', authRoutes)
app.use('/user', userRoutes)

app.post('/signup', async (req, res) => {
	const { firstName, lastName, contact, dob, email, password, con_password } =
		req.body

	try {
		const existingUser = await User.findOne({ email })
		if (existingUser) {
			// User already exists
			return res.status(409).json({ message: 'User already exists' })
		} else {
			// Create a new user and save it in the database
			const hashedPassword = await bcrypt.hash(password, 10) // Hash the password
			const newUser = new User({
				id: mongoose.Types.ObjectId().toString(), // Generate a unique ID
				firstName,
				lastName,
				contact,
				dob,
				email,
				password: hashedPassword,
				con_password: hashedPassword,
			})
			await newUser.save()
			return res.status(200).json({ message: 'Success' })
		}
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: 'Internal server error' })
	}
})

app.post('/login', async (req, res) => {
	const { email, password } = req.body
	try {
		const user = await User.findOne({ email })
		if (!user) {
			// User does not exist
			return res.status(404).json({ message: 'User does not exist' })
		}
		const isMatch = await bcrypt.compare(password, user.password)
		if (isMatch) {
			return res.json(user)
		} else {
			// Incorrect password
			return res.status(401).json({ message: 'Incorrect password' })
		}
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: 'Internal server error' })
	}
})

app.post('/logout', (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			console.error(err)
			return res.status(500).json({ message: 'Internal server error' })
		}
		// localStorage.clear()

		res.status(200).json({ message: 'Logout successful' })
	})
})

// Route to get user details
app.get('/user/:_id', async (req, res) => {
	const userId = req.params._id
	try {
		const user = await User.findById(userId)
		if (user) {
			const { firstName, lastName, email } = user
			return res.json({ firstName, lastName, email })
		} else {
			return res.status(404).json({ message: 'User not found' })
		}
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: 'Internal server error' })
	}
})

// Define a POST route to save contact form data
app.post('/contact', async (req, res) => {
	try {
		const { name, email, message } = req.body

		// Create a new contact document
		const contact = new Contact({ name, email, message })

		// Save the contact document to the database
		await contact.save()

		res.status(201).json({ message: 'Data saved successfully' })
	} catch (error) {
		console.error('Error saving data:', error)
		res.status(500).json({ error: 'Error saving data' })
	}
})
// Define the POST route to save New Demo form data
app.post('/newdemo', async (req, res) => {
	try {
		const {
			Employee_ID,
			Employee_Name,
			Profile,
			Demo_On,
			Demo_Topic,
			Demo_Date,
			Demo_Time
		} = req.body

		// Create a new Demo document
		const newdemo = new new_Demo({
			Employee_ID,
			Employee_Name,
			Profile,
			Demo_On,
			Demo_Topic,
			Demo_Date,
			Demo_Time
		})

		// Save the Demo document to the database
		await newdemo.save()

		res.status(201).json({ message: 'Data saved successfully' })
	} catch (error) {
		console.error('Error saving data:', error)
		res.status(500).json({ error: 'Error saving data' })
	}
})

const zoomRoutes = require('./routes/zoomRoutes')

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)
	next()
})

app.use('/api/zoom', zoomRoutes)

// Start the server
app.listen(port, () => {
	console.log(`Server is running at port ${port}`)
})
