const mongoose = require("mongoose")


const OfferLetter = new mongoose.Schema({
    
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


const Offer_Letter = mongoose.model("OfferLetter", OfferLetter )

module.exports = Offer_Letter