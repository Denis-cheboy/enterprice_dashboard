const cors=require("cors")
const cookieParser=require("cookie-parser")
const mongoose=require("mongoose")
const connectDB=require("./dbConnection")
const express=require("express")
const PORT=process.env.PORT || 3500
const app=express()

connectDB()

app.use(cors({
    origin:[
        "http://localhost:3000","https://enterprice_dashboard.onrender.com"
    ]
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connection.once("open",()=>{
    console.log("Connected to  mongo DB")
    app.listen(PORT,()=>console.log("Application running on port",PORT))
})