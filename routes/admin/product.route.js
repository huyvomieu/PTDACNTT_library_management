const express = require("express")

const ProductController = require("../../controller/admin/Product.controler")
const Router = express.Router();

// validate data
const productValidate = require("../../validate/product.validate")

Router.get("/", ProductController.index)
Router.get("/create", ProductController.create)
Router.post("/create", productValidate, ProductController.createPost)
Router.get("/:id/edit", ProductController.edit)
Router.patch("/:id", productValidate, ProductController.editPatch)
Router.delete("/:id", ProductController.delete)

module.exports = Router;


