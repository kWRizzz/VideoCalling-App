const mongoose= require('mongoose')

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profileImage:{
        type:String,
        default:""
    },
    password:{
        type:String,
        required:[true,"Enter The Password"]
    }
},
{
    timestamps:true
}
)


module.exports=mongoose.model("user",userSchema)