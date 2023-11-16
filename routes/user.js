const express = require("express");
const router = express.Router();
const {handleNewuser,handleUserlogin} = require("../controllers/user");

router.post("/", handleNewuser);

router.post("/login", handleUserlogin);

module.exports = router;