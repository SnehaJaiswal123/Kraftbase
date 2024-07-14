const mongoose = require('../db/connect')

const userSchema=new mongoose.Schema({
        name:{
           type:String,
           required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        address:{
             type:String,
             required:true
        },
        contact:{
            type:Number,
            required:true
        }
},
{
    timestamps:true
})

const User = mongoose.model('User',userSchema)

module.exports = User