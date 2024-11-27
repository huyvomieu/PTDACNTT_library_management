const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Notification = new Schema(
    {
        title: String,
        description: String,
        user_id: String,
        expireAt: {
            type: Date,
            // expires: 2 * 24 * 60 * 60,
            default: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
        }
    }, {
    timestamps: true
})

module.exports = mongoose.model("Notification", Notification);