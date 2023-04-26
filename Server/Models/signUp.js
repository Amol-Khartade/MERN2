const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { Await } = require('react-router-dom')
const jwt = require('jsonwebtoken')

const signUp = new mongoose.Schema({
	fname: {
		type: String,
		required: true,
	},
	lname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: [true, 'Please provide an Email!'],
		unique: [true, 'Email Exist'],
	},
	location: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},

	password: {
		type: String,
		required: [true, 'Please provide a password!'],
		unique: false,
	},
	con_password: {
		type: String,
		required: [true, 'Please provide a password!'],
		unique: false,
	},
	Date: {
		type: Date,
		default: Date.now,
	},
	tokens: [
		{
			token: {
				type: String,
				required: true,
			},
		},
	],
})

//Passwords hashing

signUp.pre('save', async function (next) {
	console.log('hi from server site')
	if (this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, 12)
		this.con_password = await bcrypt.hash(this.con_password, 12)
	}
	next()
})

//Generating Token For User Log In

signUp.methods.generateAuthToken = async function () {
	try {
		let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
		this.tokens = this.tokens.concat({ token: token })
		await this.save()
		return token
	} catch (error) {
		console.log(error)
	}
}

// const bcrypt = require('bcrypt')

// const saltRounds = 10

// const hashPassword = async (password) => {
//     const salt = await bcrypt.genSalt(saltRounds)
//     const hash = await bcrypt.hash(password, salt)
//     return hash
// }

const SignUp = mongoose.model('SIGNUP', signUp)

module.exports = SignUp
