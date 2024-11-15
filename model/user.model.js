const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater');
const randomToken = require("../util/generateStringRandom")
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const User = new Schema({
    fullname: String,
    password: String,
    email: String,
    token: {
        type: String,
        default: randomToken(20)
    }
},
    {
        timestamp: true
    })

module.exports = mongoose.model("User", User);