const express = require('express')

const router = express.Router()

router.get('/FeeRecord', (req, res, next) => {})

router.post('/FeeRecord', (req, res, next) => {})

router.delete('/FeeRecord/:id', (req, res, next) => {})

module.exports = router

const DemoRecord = require('../models/VSSTC_FR')

router.get('/FeeRecord', (req, res, next) => {
	FeeRecord.find({}, 'action')
		.then((data) => res.json(data))
		.catch(next)
})

router.post('/FeeRecord', (req, res, next) => {
	if (req.body.action) {
		FeeRecord.create(req.body)
			.then((data) => res.json(data))
			.catch(next)
	} else {
		res.json({
			error: 'The input field is empty',
		})
	}
})

router.delete('/FeeRecord/:id', (req, res, next) => {
	FeeRecord.findOneAndDelete({ _id: req.params.id })
		.then((data) => res.json(data))
		.catch(next)
})
