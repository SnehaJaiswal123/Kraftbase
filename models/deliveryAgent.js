const mongoose = require('mongoose');

const deliveryAgentSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    is_available: { 
        type: Boolean, 
        default: true 
    },
    orders: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Order' 
    }],
});

module.exports = mongoose.model('DeliveryAgent', deliveryAgentSchema);
