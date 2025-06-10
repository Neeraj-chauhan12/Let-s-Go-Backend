const mongooose=require('mongoose')


const connectdb=async ()=>{
    try {
        await mongooose.connect(process.env.MONGO_URI);
        console.log("database connect");
        
    } catch (error) {
        console.log("error in database connection")
        
    }
     
    
}

module.exports=connectdb;