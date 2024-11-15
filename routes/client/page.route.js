const express = require("express")

const PageController = require("../../controller/client/Page.controler")
const Router = express.Router();


Router.get("/", PageController.index);

module.exports = Router;


