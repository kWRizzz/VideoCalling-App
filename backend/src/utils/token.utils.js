const jwt= require('jsonwebtoken')


const generateToken= async (userId,userEmail) => {
    try {
        const token= jwt.sign({
            userId,
            userEmail
        },process.env.JWT_SECRET)
        return token
    } catch (error) {
        console.log(`some Error generated While Genarating the token ${error}`);
        process.exit(1)
    }
}


module.exports=generateToken