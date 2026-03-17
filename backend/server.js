const express= require('express')
const dotenv= require('dotenv')
const connectDB=require('./src/lib/db')
const cors= require("cors")
const cookiepareser=require('cookie-parser')
const userRouter=require('./src/routes/user.routes')
const { serve } = require("inngest/express")
const { inngest } = require("./src/lib/inngest")
const { syncUser, deletUser } = require("./src/inngest/functions")
const path=require('path')

dotenv.config()
connectDB()

const _dirname=path.resolve()
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
app.use(cookiepareser())

app.use('/api/user',userRouter)


// app for production ready state

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(_dirname,"../frontend/dist")))
}


app.listen(process.env.PORT,()=>{
    console.log(`server Started`);
})