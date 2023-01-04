const mongoose = require('mongoose');

// userid, products, address, amount, status
const OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [{
        productId: { type: String, required: true },
        quantity: { type: Number, default: 1 },
    }],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'pending', required: true }
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('Order', OrderSchema);