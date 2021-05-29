const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sellPrice: {
        type: Number,
        required: true
    },
    buyPrice: {
        type: Number,
        required: true
    },
},
{
    timestamps: true
});

const Products = mongoose.model("products", ProductsSchema);

module.exports = Products;
