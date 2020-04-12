var express = require("express");
var router = express.Router();
var getUsers = require("../controller/getUsersController");

/* GET users listing. */
router.get("/", getUsers);

module.exports = router;
