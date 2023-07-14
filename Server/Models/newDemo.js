const mongoose = require('mongoose')

const newDemoSchema = new mongoose.Schema({
	Employee_ID: String,
	Employee_Name: String,
	Profile: String,
	Demo_On: String,
	Demo_Topic: String,
	Demo_Date: Date,
    Demo_Time:String,
})

const new_Demo = mongoose.model('new_Demo', newDemoSchema)

module.exports = { new_Demo }
