const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    jk:{
        type:String,
        enum:['L','P']
    },
    usia:{
        type:Number
    },
    pekerjaan:{
        type:String
    },
    bb:{
        type:Number
    },
    tb:{
        type:Number,

    }
})
module.exports=mongoose.model('User',userSchema)