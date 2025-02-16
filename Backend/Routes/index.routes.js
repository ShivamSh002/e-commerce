const { allData } = require("../Controller/index.controller");

const Router = require("express").Router();

Router.get("/data",allData)



module.exports = Router;