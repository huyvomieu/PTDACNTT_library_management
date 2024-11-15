const page = require("./page.route")
const product = require("./product.route")

// middleware

// validate

module.exports = (app) => {

    app.use("/admin", page)
    app.use("/admin/product", product)

}


