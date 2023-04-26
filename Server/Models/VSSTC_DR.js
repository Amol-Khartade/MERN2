const mongoose = require("mongoose")

const DemoRecord = new mongoose.Schema({

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

    
    Profile: {
        type: String,
        default: ""
    },

    Date_of_Joining: {
        type: String,
        default: new Date()
    },


    Agenda_On_Linux: {
        type: Object,
        default: {}
    },

    Demo_On_Linux: {
        type: Number,
        default: 0
    },

    Agenda_on_Cloud: {
        type: Object,
        default: {}
    },

    Demo_On_Cloud: {
        type: Number,
        default: 0
    },

    Agenda_On_Tool: {
        type: Object,
        default: {}
    },

    Demo_On_Tool: {
        type: Number,
        default: 0
    },

    Total_Demo: {
        type: Number,
        default: 0
    },

})

const Demo_Record = mongoose.model("DemoRecord", DemoRecord )

module.exports = Demo_Record