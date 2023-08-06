const express = require('express')

const router = express.Router()

router.get('/VSSOnboarding', (req, res, next) => {})

router.post('/VSSOnboarding', (req, res, next) => {})

router.delete('/VSSOnboarding/:id', (req, res, next) => {})

module.exports = router

const VSSOnboarding = require('../models/VSSTC_Onboarding')

router.get('/VSSOnboarding', (req, res, next) => {
	VSSOnboarding.find({}, 'action')
		.then((data) => res.json(data))
		.catch(next)
})

router.post('/VSSOnboarding', (req, res, next) => {
	if (req.body.action) {
		VSSOnboarding.create(req.body)
			.then((data) => res.json(data))
			.catch(next)
	} else {
		res.json({
			error: 'The input field is empty',
		})
	}
})

router.delete('/VSSOnboarding/:id', (req, res, next) => {
	VSSOnboarding.findOneAndDelete({ _id: req.params.id })
		.then((data) => res.json(data))
		.catch(next)
})
