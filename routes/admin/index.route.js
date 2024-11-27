const page = require("./page.route")
const product = require("./product.route")

const notification = require("./notification.route")

// middleware

// validate

module.exports = (app) => {

    app.use("/admin", page)
    app.use("/admin/product", product)
    app.use("/admin/notification", notification)

}


