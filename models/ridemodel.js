const mongooose= require('mongoose')

const rideSchema=new mongooose.Schema({
    
    user:{
        type:mongooose.Schema.Types.ObjectId,
        ref:'user',
        
    },
    captain:{
        type:mongooose.Schema.Types.ObjectId,
        ref:'captain',
    },
    pickup:{
        type:String,
        required:true,
    },
     destination:{
        type:String,
        required:true,
    },
    fare:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:['pending', 'accepted', 'ongoing', 'completed','cancle'],
        default:'pending',
    },

    duration:{
        type:Number

    },

    distance:{
        type:Number

    },
    orderId:{
        type:String

    },
    signature:{
        type:String

    },
    otp:{
        type:String,
       // required:true,
        select:false

    }



})

module.exports=mongooose.model("ride",rideSchema)