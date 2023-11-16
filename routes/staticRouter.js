const express = require("express");
const router = express.Router();
const urlMode = require("../models/url");
const { restrictTo } = require("../middleware/auth");

router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
    const allUrl = await urlMode.find({});

    return res.render("home", {
        urls:allUrl,
    });
})

router.get("/", restrictTo(["NORMAL","ADMIN"]), async (req, res) => {
    const allUrl = await urlMode.find({createBy:req.user._id});

    return res.render("home", {
        urls:allUrl,
    });
})

router.get("/signup", (req, res) => {
    return res.render("signup");
})

router.get("/login", (req, res) => {
    return res.render("login");
})

module.exports = router;