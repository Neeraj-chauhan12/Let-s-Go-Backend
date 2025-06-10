const mongooose= require('mongoose')


const captainSchema=new mongooose.Schema({
      
         username:String,
         email:String,
         password:String,
         vichle:String,
         vichlenumber:String
})

module.exports= mongooose.model("captain",captainSchema);