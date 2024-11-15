const express = require("express")

const HomeController = require("../../controller/admin/Home.controller")
const Router = express.Router();


Router.get("/dashboard", HomeController.home);

module.exports = Router;


