const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserGoogleSchema = new Schema({
	googleId: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
})

const UserGoogle = mongoose.model('UserGoogle', UserGoogleSchema)

module.exports = UserGoogle
