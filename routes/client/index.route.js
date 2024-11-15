const user = require("./user.route")
const page = require("./page.route")
const product = require("./product.route")

const userMiddleware = require("../../middlewares/user.middleware")
module.exports = (app) => {
    app.use(userMiddleware);
    app.use("/", page)
    app.use("/user", user)
    app.use("/product", product)

}


