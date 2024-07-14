const Restaurant = require('../models/restaurant')
const  Order = require('../models/order')
const User = require('../models/user')

const retrieveRestaurant= async(req,res)=>{
    try{
        const OnlineRestaurant = await Restaurant.find({onlineStatus:true})
        if(OnlineRestaurant.length==0){
            return res.status(200).json({
                success:true,
                message:"No Online restaurants available"
            })
        }
        return res.status(200).json({
            success:true,
            Restaurant:OnlineRestaurant
        })
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while retreiving restaurant"
        })
    }
}

const orderPlace = async (req, res) => {
    const { userId, restaurantId, items } = req.body;
    try {
        const order = await Order.create({ user_id: userId, restaurant_id: restaurantId, items, status: 'placed' });
        await User.findByIdAndUpdate(userId, { $push: { orders: order._id } });
        res.status(201).json({
            message:"order placed successfully",
            success:true,
            data:order
        });
    } catch (error) {
        res.status(500).json({ 
            success:false,
            message:"Something went wrong while placing order",
            error: error.message 
        });
    }
}

const rating = async (req, res) => {
    const { userId, orderId, rating} = req.body;
    try {
        const order = await Order.findById(orderId);
        if (!order || order.user_id.toString() !== userId) throw new Error('Order not found or unauthorized');

        order.rating = rating;
        await order.save();
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addRestaurant = async (req, res) => {
    const { name, menu } = req.body;
    try {
        const restaurant = await Restaurant.create({ name, menu});
        res.status(201).json({
            success:true,
            message:"Restaurant added successfully",
            data:restaurant
        });
    } catch (error) {
        res.status(500).json({ 
            success:false,
            message:"Something went wrong in adding Restaurant",
            error:error.message
         });
    }
}

const createUser =  async (req, res) => {
    const { name, email, address, contact } = req.body;
    try {
        const user = await User.create({ name, email, address, contact });
        res.status(201).json({
            success:true,
            message:"User created successfully",
            data:user
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports={
        retrieveRestaurant,
        orderPlace,
        rating,
        addRestaurant,
        createUser
}
