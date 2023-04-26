const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { response } = require("express")

const app = express()
const port = process.env.PORT || 5000 
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))


mongoose.connect("mongodb+srv://ashishwanjare90:ashish%4090@merndb.ecovqwl.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("DATABASE CONNECTED")
}).catch((error)=>{
    console.log(error)
})


app.get("/", (req,res)=>{
    res.send("Application is working")
})

app.listen(port, ()=>{
    console.log(`app listening at port ${port}`)
})