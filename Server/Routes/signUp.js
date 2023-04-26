// const express = require('express')

// const app = express.Router()
// const bcrypt = require('bcrypt')

// app.get('/SignUp', (req, res, next) => {})

// app.post('/SignUp', (req, res, next) => {})

// module.exports = app

// const signUp = require('../Models/signUp')

// app.get('/SignUp', (req, res, next) => {
// 	signUp
// 		.find({}, 'action')
// 		.then((data) => res.json(data))
// 		.catch(next)
// })

// app.post('/signUp', (req, res, next) => {
// 	// hash the password
// 	bcrypt
// 		.hash(request.body.password, 10)
// 		.then((hashedPassword) => {
// 			// create a new user instance and collect the data
// 			const user = new User({
// 				firstName: request.body.firstName,
// 				lastName: request.body.lastName,
// 				email: request.body.email,
// 				phone: request.body.phone,
// 				password: hashedPassword,
// 				location: request.body.location,
// 				date: request.body.location,
// 			})

// 			// save the new user
// 			user.save()
// 				// return success if the new user is added to the database successfully
// 				.then((result) => {
// 					response.status(201).send({
// 						message: 'User Created Successfully',
// 						result,
// 					})
// 				})
// 				// catch error if the new user wasn't added successfully to the database
// 				.catch((error) => {
// 					response.status(500).send({
// 						message: 'Error creating user',
// 						error,
// 					})
// 				})
// 		})
// 		// catch error if the password hash isn't successful
// 		.catch((e) => {
// 			response.status(500).send({
// 				message: 'Password was not hashed successfully',
// 				e,
// 			})
// 		})
// })

// // app.delete('/SignUp/:id', (req, res, next) => {
// // 	SignUp.findOneAndDelete({ _id: req.params.id })
// // 		.then((data) => res.json(data))
// // 		.catch(next)
// // })
