const express= require('express')
const dotenv= require('dotenv')
const connectDB=require('./src/lib/db')
const cors= require("cors")
dotenv.config()
connectDB()


const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}))
app.listen(process.env.PORT,()=>{
    console.log(`server Started`);
})