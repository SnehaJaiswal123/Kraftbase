const mongoose = require('../db/connect')

const restaurantSchema=new mongoose.Schema({
        name:{
           type:String,
           required:true
        },
        menu:[{
            type:String
        }],
        onlineStatus:{
            type:Boolean,
            default:false
        }

},
{
    timestamps:true
})

const Restaurant = mongoose.model('Restaurant',restaurantSchema)

module.exports = Restaurant