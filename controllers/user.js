const { v4: uuidv4} = require('uuid');
const userModel = require("../models/user");
const {setUser } = require("../service/auth");

async function handleNewuser(req, res){
    const { name, email, password } = req.body;
    await userModel.create({
        name,
        email,
        password,
    });
    return res.render("login");
}

async function handleUserlogin(req, res){
    const { email, password } = req.body;
    const user = await userModel.findOne({email,password});
    if (!user) {
        return res.render("login", {
            error: "Invalid Username and Passwors",
        })
    }  
    const token = setUser(user);
    res.cookie("token", token);
    return res.redirect("/");
}

module.exports = {
    handleNewuser,
    handleUserlogin,
};