// Require necessary modules

const express = require('express')
const router = express.Router()

//  import  models
const CreateDemo = require('../models/CreateDemo')

// Define the POST route to save New Demo form data
router.post('/createdemo', async (req, res, next) => {
	try {
		const { optionD, demoTopic, demoDate, demoTime } = req.body

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

		// Save the Demo document to the database
		await demo.save()
		res.status(201).json({ message: 'Data saved successfully' })
	} catch (error) {
		next(error)
	}
})

// Route to get createDemo data for a specific user based on their id
router.get('/createdemo/:userId', async (req, res) => {
	const userId = req.params.userId
	console.log('Received userId:', userId)
	try {
		// Find all CreateDemo documents with the specified user ID
		const demos = await CreateDemo.find({ id: userId })

		return res.json(demos)
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: 'Internal server error' })
	}
})

module.exports = router
