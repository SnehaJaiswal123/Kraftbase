const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    restaurant_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Restaurant', 
        required: true 
    },
    items: [{ 
        name: String, 
        price: Number, 
        quantity: Number 
    }],
    status: { 
        type: String, 
        required: true, 
        enum: ['placed', 'accepted', 'rejected', 'processing', 'delivered'] },
    rating: { 
        type: Number 
    }
});

module.exports = mongoose.model('Order', orderSchema);
