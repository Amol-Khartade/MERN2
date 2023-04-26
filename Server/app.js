// const cors = require('cors')
// const { response } = require('express')
// const bcrypt = require('bcrypt')
// const User = require('./Models/SignUp')
// require('dotenv').config()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

//DOTENV
dotenv.config({ path: './config.env' })
require('./DB/connect')
app.use(express.json())

//Models
// const SignUp = required('./Models/signUp')

//this is used to configure router flies to make route easy
// app.use(require('./Models/signUp'))
app.use(require('./Routes/auth'))

//DB
const port = process.env.PORT || 3000

//Middleware is used to restrict user to access particular data
const middleware = (req, res, next) => {
	// console.log('This is middleware')
	next()
}

app.get('/', (req, res) => {
	res.send('Application is working fine form app.js')
})
app.get('/mydash', middleware, (req, res) => {
	console.log('This is middleware for MyDash')
	res.send('This your DashBoard page is working')
})
app.get('/signup', (req, res) => {
	res.send('Application is working fine')
})
app.get('/', (req, res) => {
	res.send('Application is working fine')
})

// app.use(cors())

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// var uri =
// 	'mongodb+srv://amolkhartade97:AMOLKHARTADE1997@merncluster0.l0gfw5v.mongodb.net/authDB?retryWrites=true&w=majority'

// mongoose
// 	.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
// 	.then(() => {
// 		console.log('DATABASE CONNECTED TO MongoDB Atlas')
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})

// app.get('/', (req, res) => {
// 	res.send('Application is working')
// })

// app.use('/api', require('./Routes/SignUp'))

// app.use('/api', require('./Routes/VSSTC_Onboarding'))

// app.use('/api', require('./Routes/VSSTC_DR'))

// app.use('/api', require('./Routes/VSSTC_FR'))

// app.use('/api', require('./Routes/VSSTC_OL'))

app.listen(port, () => {
	console.log(`Server is running at port ${port}`)
})
