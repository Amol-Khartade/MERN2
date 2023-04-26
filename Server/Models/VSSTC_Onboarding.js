const mongoose = require("mongoose")

const VSSOnboarding = new mongoose.Schema({

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

    Gender: {
        type: String,
        default: ""
    },

    Date_of_Joining: {
        type: String,
        default: new Date()
    },

    CV_Status: {
        type: String,
        default: ""
    },

    Passport: {
        type: String,
        default: ""
    },

    PAN_Card_Number: {
        type: String,
        default: ""
    },
    
    Current_Address: {
        type: String,
        default: ""
    },

    Permenent_Address: {
        type: String,
        default: ""
    },

    Date_of_Birth: {
        type: String,
        default: new Date()
    },

    E_Mail_ID: {
        type: String,
        default: ""
    },

    Contact_Number: {
        type: Number,
        default: 0
    },

    Alternate_Contact_Number: {
        type: Number,
        default: 0
    },

    Bank_Name: {
        type: String,
        default: ""
    },

    Account_Number: {
        type: Number,
        default: 0
    },

    Official_Joining_Designation: {
        type: String,
        default: ""
    },

    Current_Company: {
        type: String,
        default: ""
    },

    Current_Designation: {
        type: String,
        default: ""
    },

    Date_of_OfferLetter: {
        type: String,
        default: new Date()
    },

    Salary_Increment: {
        type: String,
        default: new Date()
    },

    Last_Increment: {
        type: String,
        default: new Date()
    },

    Resignation_Date: {
        type: String,
        default: new Date()
    },

    Last_Working_Date: {
        type: String,
        default: new Date()
    },

    Total_Experience: {
        type: Number,
        default: 0
    },

    Relevant_Experience: {
        type: Number,
        default: 0
    },

    Current_CTC: {
        type: String,
        default: ""
    },

    Notice_Period: {
        type: Number,
        default: 0
    },

    Reason_For_Leaving: {
        type: String,
        default: ""
    },

    Supervisor_Name: {
        type: String,
        default: ""
    },

    Supervisor_Contact: {
        type: String,
        default: ""
    },
    
    Supervisor_EMailID: {
        type: String,
        default: ""
    },

})

const VSS_Onboarding = mongoose.model("VSSOnboarding", VSSOnboarding )

module.exports = VSS_Onboarding
