const express= require('express')
const dotenv= require('dotenv')
const connectDB=require('./src/lib/db')
const cors= require("cors")
const { serve } = require("inngest/express")
const { inngest } = require("./src/lib/inngest")
const { syncUser, deletUser } = require("./src/inngest/functions")
dotenv.config()
connectDB()


const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}))
app.use('/api/inngest',serve({
    client:inngest,
    functions:[syncUser,deletUser]
}))

app.listen(process.env.PORT,()=>{
    console.log(`server Started`);
})