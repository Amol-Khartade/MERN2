const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Schema to store user details
// Define the User schema
const UserSchema = new Schema({
	id: {
		type: String,
		unique: true, // Ensure the "id" field is unique
		required: true,
	},
	firstName: {
		type: String,
		default: '',
	},
	lastName: {
		type: String,
		default: '',
	},
	contact: {
		type: String,
		default: '',
	},
	dob: {
		type: Date,
		default: '',
	},
	email: {
		type: String,
		default: '',
	},
	password: {
		type: String,
		default: '',
	},
	con_password: {
		type: String,
		default: '',
	},
})

// Create the User model
const User = mongoose.model('User', UserSchema)

module.exports = { User }
