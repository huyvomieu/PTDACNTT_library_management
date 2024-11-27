const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater');

const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Product = new Schema({
    code: String,
    title: String,
    author: String,
    img: String,
    price: Number,
    description: String,
    category: String,
    quantity: Number,
    review: {
        type: Number,
        default: 0,
    },
    borrow: {
        type: Number,
        default: 0
    },
    slug: {
        type: String,
        slug: "title",
        unique: true,
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model("Product", Product);