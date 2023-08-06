// Require necessary modules
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const dotenv = require('dotenv')
const passport = require('passport')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

//  import  models
const Contact = require('./models/contact')

// Load environment variables from .env file
dotenv.config()

// Connect to MongoDB
require('./config/connectdb')

// Import Routes
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const newDemoRoutes = require('./routes/newDemoRoutes')
// const contact = require('./routes/')

// Initialize Express
const app = express()
const port = process.env.PORT || 5000

// Enable CORS
app.use(cors({ origin: '*' }))
app.options('*', cors())

// Parse request bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

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
app.use('/', userRoutes)
app.use('/createdemo', newDemoRoutes)
// app.use('/contact', )

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
//  import  models
const CreateDemo = require('./models/CreateDemo')

// Define the POST route to save New Demo form data
app.post('/createdemo', async (req, res, next) => {
	try {
		const { userId, optionD, demoTopic, demoDate, demoTime } = req.body
		// Check if required fields are present and not empty
		if (!userId || !optionD || !demoTopic || !demoDate || !demoTime) {
			return res.status(422).json({ error: 'All fields are required.' })
		}

		// Date format validation (YYYY-MM-DD)
		const datePattern = /^\d{4}-\d{2}-\d{2}$/
		if (!datePattern.test(demoDate)) {
			return res
				.status(400)
				.json({ error: 'Invalid date format. Please use YYYY-MM-DD.' })
		}

		// Time format validation (HH:mm)
		const timePattern = /^(?:[01]\d|2[0-3]):[0-5]\d$/
		if (!timePattern.test(demoTime)) {
			return res
				.status(400)
				.json({ error: 'Invalid time format. Please use HH:mm.' })
		}

		// res.json(demoData)
		// Create a new Demo document
		const demo = new CreateDemo({
			id: req.body.userId,
			demoOn: optionD,
			demoTopic,
			demoDate,
			demoTime,
		})
		console.log(demo)

		// Save the Demo document to the database
		await demo.save()
		res.status(201).json({ message: 'Data saved successfully' })
	} catch (error) {
		next(error)
	}
})

// Route to get createDemo data for a specific user based on their id
app.get('/createdemo/:userId', async (req, res) => {
	const userId = req.params.userId
	try {
		// Find all CreateDemo documents with the specified user ID
		const demos = await CreateDemo.find({ id: userId })

		return res.json(demos)
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: 'Internal server error' })
	}
})

const multer = require('multer');
const path = require('path');

// Set up the storage engine for multer
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
	  cb(null, 'uploads/');
	},
	filename: (req, file, cb) => {
	  cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	},
  });
  
  // Create the multer middleware
  const upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
	  const fileTypes = /jpeg|jpg|png/;
	  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
	  const mimetype = fileTypes.test(file.mimetype);
  
	  if (extname && mimetype) {
		return cb(null, true);
	  } else {
		cb('Error: Only images (jpeg, jpg, png) are allowed!');
	  }
	},
  }).single('profilePicture');
  
  // Define the POST route to handle the profile picture upload
  app.post('/uploadProfilePicture', (req, res) => {
	upload(req, res, async (err) => {
	  if (err) {
		return res.status(400).json({ error: err.message });
	  }
  
	  if (!req.file) {
		return res.status(400).json({ error: 'No file uploaded!' });
	  }
  
	  // At this point, the file has been uploaded successfully
	  // Update the profile picture in the User model using the _id for the current user
	  const userId = req.body.userId; // Assuming the frontend sends the userId in the request body
	  try {
		const user = await User.findById(userId);
		if (!user) {
		  return res.status(404).json({ error: 'User not found!' });
		}
  
		// Update the profile picture field in the User model
		user.profilePicture = req.file.path;
		await user.save();
  
		return res.status(200).json({ message: 'Profile picture updated successfully!' });
	  } catch (error) {
		console.error(error);
		return res.status(500).json({ error: 'Internal server error' });
	  }
	});
  });

// Start the server
app.listen(port, () => {
	console.log(`Server is running at port ${port}`)
})
