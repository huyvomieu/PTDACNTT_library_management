const express = require("express")

const UserController = require("../../controller/client/User.controler")
const Router = express.Router();

const userValidate = require('../../validate/user.validate')

Router.get("/login", UserController.login)
Router.post("/login", UserController.loginPost)
Router.post("/register", userValidate.varidateInfo, UserController.registerPost)
Router.get("/register", UserController.register)
Router.get("/logout", UserController.logout)
Router.get("/", UserController.index)
Router.get("/change-password", UserController.changePass)
Router.patch("/update/:id", UserController.update)
Router.get("/borrowed", UserController.borrowed)

module.exports = Router;


