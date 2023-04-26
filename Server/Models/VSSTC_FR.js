const mongoose = require("mongoose")

const FeeRecord = new mongoose.Schema({

    Employee_ID: {
        type: String,
        default: ""
    },
    
    Month_of_Year: { 
        type: Date, 
        default: new Date 
    },

    Employee_Name: {
        type: String,
        default: ""
    },

    Contact_Number: {
        type: Number,
        default: 0
    },

    Current_Location: {
        type: String,
        default: ""
    },

    Profile: {
        type: String,
        default: ""
    },

    Date_of_Joining: {
        type: String,
        default: new Date()
    },

    Training_Fee: {
        type: Number,
        default: 0
    },

    Experience_Letter_Fee: {
        type: Number,
        default: 0
    },

    Total_Balance_EL_Fee: {
        type: Number,
        default: 0
    },

    Total_Balance_T_Fee: {
        type: Number,
        default: 0
    },

    Mode_of_Payment: {
        type: String,
        default: ""
    },

    No_of_Installment: {
        type: Number,
        default: 0
    },


})

const Fee_Record = mongoose.model("FeeRecord", FeeRecord )

module.exports = Fee_Record
