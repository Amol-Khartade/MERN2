const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')

require('../DB/connect')
const SignUp = require('../Models/signUp')

router.get('/', (req, res) => {
	res.send('Application is working fine from server router js')
})

router.use(cors())

//using async
router.post('/register', async (req, res) => {
	const {
		fname,
		lname,
		email,
		phone,
		password,
		con_password,
		location,
		date,
	} = req.body

	if (
		!fname ||
		!lname ||
		!email ||
		!phone ||
		!password ||
		!con_password ||
		!location ||
		!date
	) {
		res.status(422).json({ message: 'Please fill all fields' })
	}

	if (password !== con_password) {
		return res.status(422).json({ message: 'Passwords do not match' })
	}

	try {
		const userExist = await SignUp.findOne({
			email: email,
			password: password,
			phone: phone,
		})
		if (userExist) {
			return res.status(422).json({ message: 'User already exist' })
		} else if (password != con_password) {
			return res.status(422).json({ message: 'Passwords do not match' })
		} else {
			const newUser = new SignUp({
				fname,
				lname,
				email,
				phone,
				password,
				con_password,
				location,
				date,
			})
			//Password Hashing function
			await newUser.save()
			// console.log('${newUser} user registered successfully')
			// console.log(userRegistered)

			res.status(201).json({
				message: 'User created successfully',
			})
		}
	} catch (error) {
		console.log(error)
	}
})

//LogIn Routes and Password compare

router.post('/signin', async (req, res) => {
	// console.log(req.body)
	// res.json({ message: 'You are log in' })
	try {
		const { email, password } = req.body

		if (!email || !password) {
			return res.status(422).json({ message: 'Please fill all fields' })
		}
		const userLogIn = await SignUp.findOne({ email: email })

		if (userLogIn) {
			const isMatch = await bcrypt.compare(password, userLogIn.password)

			//Token Generating & Saving on DB
			//Savings cookies for logged in
			const token = await userLogIn.generateAuthToken()
			console.log(token)
			res.cookie('jwtoken', token, {
				expires: new Date(Date.now() + 25892000000),
				httpOnly: true,
			})

			if (!isMatch) {
				return res.status(422).json({ message: 'Invalid Credentials' })
			} else console.log(userLogIn)
			res.json({ message: 'User Logged In Successfully' })
			alert('User Log In')
			navigate('/MyDash')
		} else {
			return res.status(422).json({ message: 'Invalid Credentials' })
		}
	} catch (error) {
		console.log(error)
	}
})

//using Promises
// router.post('/register', (req, res) => {
// 	const {
// 		fname,
// 		lname,
// 		email,
// 		phone,
// 		password,
// 		con_password,
// 		location,
// 		date,
// 	} = req.body

// if (!fname ||!lname || !email ||!phone ||!password ||!con_password ||!location ||!date) {
// 	res.status(422).json({ message: 'Please fill all fields' })
// }

// 	if (password !== con_password) {
// 		return res.status(422).json({ message: 'Passwords do not match' })
// 	}

// 	SignUp.findOne({ email: email, password: password, phone: phone })
// 		.then((userExist) => {
// 			if (userExist) {
// 				return res.status(422).json({ message: 'User already exist' })
// 			}

// 			const newUser = new SignUp({
// 				fname,
// 				lname,
// 				email,
// 				phone,
// 				password,
// 				con_password,
// 				location,
// 				date,
// 			})
// 			newUser
// 				.save()
// 				.then(() => {
// 					res.status(201).json({
// 						message: 'User created successfully',
// 					})
// 				})
// 				.catch((err) =>
// 					res.status(500).json({ error: 'Failed To Register' })
// 				)
// 		})
// 		.catch((err) => {
// 			console.log(err)
// 		})
// })

module.exports = router
