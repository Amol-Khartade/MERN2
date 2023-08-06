const mongoose = require('mongoose')

const createDemoSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
	demoOn: { type: String, required: true },
	demoTopic: { type: String, required: false },
	demoDate: { type: Date, required: true },
	demoTime: { type: String, required: true },
})

const CreateDemo = mongoose.model('CreateDemo', createDemoSchema)

module.exports = CreateDemo

// const mongoose = require('mongoose')

// const createDemoSchema = new mongoose.Schema({
// 	id: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: 'User',
// 	},
// 	  Employee_ID: { type: String, required: true },
// 	  Employee_Name: { type: String, required: true },
// 	  Profile: { type: String, required: true },
// 	demoOn: { type: String, required: true },
// 	demoTopic: { type: String, required: true },
// 	demoDate: { type: Date, required: true },
// 	demoTime: { type: String, required: true },
// })

// const CreateDemo = mongoose.model('CreateDemo', createDemoSchema)

// module.exports = { CreateDemo }
