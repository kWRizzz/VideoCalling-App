const mongose= require('mongoose')


const connectDB= async ()=>{
    try {
        if (!process.env.DB_URL) {
            throw new Error("DB_URL is not defined in envoirment variable")
        }
        const connect= await mongose.connect(process.env.DB_URL)
        console.log(`Server Is Connected to DataBase SuccesFully  ${connect.connection.host}`)
    } catch (error) {
        console.log(`Some Error Has Occured While Conecting the Database ${error}`);
        process.exit(1)
    }
}


module.exports=connectDB