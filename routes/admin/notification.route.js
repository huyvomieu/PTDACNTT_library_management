const express = require("express")

const NotificationController = require("../../controller/admin/Notification.controller")
const Router = express.Router();

Router.get("/", NotificationController.index)
Router.get("/create", NotificationController.create)
Router.post("/create", NotificationController.createPost)

module.exports = Router;


