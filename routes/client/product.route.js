const express = require("express")

const ProductController = require("../../controller/client/Product.controler")
const Router = express.Router();

Router.get("/api/all", ProductController.listProduct)

Router.get("/:slug", ProductController.detail)
Router.post("/borrow/:productId/:userId", ProductController.borrow)

module.exports = Router;


