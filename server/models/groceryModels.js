const mongoose = require('mongoose');

const GrocerySchema = new mongoose.Schema({
    groceryItem: {
        type: String,
        required:[true, 'Grocery item is required'],
    },
    quantity: {
        type: Number
    },
    user_id: {
        type:mongoose.Types.ObjectId
    }
}, {timestamps:true})

const Grocery = mongoose.model('Grocery', GrocerySchema);

module.exports = Grocery