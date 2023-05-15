const mongoose = require('mongoose');

const GrocerySchema = new mongoose.Schema({
    groceryItem: {
        type: String,
        required:[true, 'Grocery item is required'],
        minLength:[1, 'The Item name must be 1 or more characters'],
        maxLength:[50, 'The Item name is too long']
    },
    quantity: {
        type: Number,
        min:[0, 'No Quantity below 1 allowed']
    },
    // user_id: {
    //     type:mongoose.Types.ObjectId
    // }
}, {timestamps:true})

const Grocery = mongoose.model('Grocery', GrocerySchema);

module.exports = Grocery