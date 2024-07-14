const DeliveryAgent = require('../models/deliveryAgent');
const Order = require('../models/order');

const status = async (req, res) => {
    const { orderId, status } = req.body;
    try {
        const order = await Order.findById(orderId);
        if (!order) throw new Error('Order not found');

        order.status = status;
        await order.save();

        if (status === 'delivered') {
            await DeliveryAgent.findByIdAndUpdate(order.delivery_agent_id, { is_available: true },{new: true});
        }

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = status
