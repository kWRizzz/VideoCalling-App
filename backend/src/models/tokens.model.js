const mongoose = require('mongoose')



const tokenBlaklistingModel= mongoose.Schema({
    token:{
        type:String,
        required:[true,"NO TOKEN HAS BEEN PROVIDED DURING LOG OUT"]
        
    }
},
{
    timestamp:true
}
)


module.exports= mongoose.model("token",tokenBlaklistingModel)