const express = require('express')
const router = express.Router()
const User = require("../models/customer.Schema")
const userController = require("../controllers/userController")

var moment = require("moment");
router.get("/user/add.html", userController.user_add_get);
// POST Requst
router.post("/user/add.html", userController.user_post);
module.exports = router