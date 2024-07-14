const Restaurant = require('../models/restaurant');
const Order = require('../models/order');
const DeliveryAgent = require('../models/deliveryAgent');


const updateMenu = async (req, res) => {
    const { restaurantId, menu } = req.body;
    try {
        await Restaurant.findByIdAndUpdate(restaurantId, { menu });
        res.json({ message: 'Menu updated' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateStatus = async (req, res) => {
    const { restaurantId, onlineStatus } = req.body;
    try {
        await Restaurant.findByIdAndUpdate(restaurantId, { onlineStatus:onlineStatus });
        res.json({ message: 'Status updated' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const acceptOrder = async (req, res) => {
    const { orderId } = req.body;
    try {
        const order = await Order.findById(orderId);
        if (!order) throw new Error('Order not found');

        order.status = 'accepted';
        await order.save();

        const availableAgent = await DeliveryAgent.findOneAndUpdate({ is_available: true }, { is_available: false });
        if (availableAgent) {
            order.delivery_agent_id = availableAgent._id;
            await order.save();
        }

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const rejectOrder = async (req, res) => {
    const { orderId } = req.body;
    try {
        const order = await Order.findByIdAndUpdate(orderId, { status: 'rejected' },{new:true});
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    updateMenu ,updateStatus,acceptOrder,rejectOrder
}
