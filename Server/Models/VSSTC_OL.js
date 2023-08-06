const mongoose = require("mongoose")


const offerLetterSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    Employee_ID: {
        type: String,
        default: ""
    },

    Month_of_Year: { 
        type: Date, 
        default: new Date 
    },

    Date_of_Offer: {
        type: String,
        default: new Date()
    },

    Employee_Name: {
        type: String,
        default: ""
    },

    Current_Profile: {
        type: String,
        default: ""
    },

    Company_Name: {
        type: String,
        default: "VSS"
    },

    Annual_Package: {
        type: Number,
        default: 0
    },

    Profile : {
        type: String,
        default: ""
    },

    Date_of_Joining: {
        type: String,
        default: new Date()
    }
})


const OfferLetter = mongoose.model("OfferLetter",offerLetterSchema )

module.exports = OfferLetter