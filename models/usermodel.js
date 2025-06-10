const mongooose= require('mongoose')


const userSchema=new mongooose.Schema({
      
         username:String,
         email:String,
         password:String
})

module.exports= mongooose.model("user",userSchema);



