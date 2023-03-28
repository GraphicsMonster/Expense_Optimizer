var location = require('../models/userModel.js');
const jwt = require("jsonwebtoken")
const appData= require('../config/app.js');
const userService = require('../services/userService.js');
const db = require('../db/data-source.js');
const passwordManager = require('../auth/hashes.js');
const {type} = require("@testing-library/user-event/dist/type");

const uService = new userService.UserService(db.dataSource.getRepository("User"));
exports.register = async function (req, res) {
    if (!req.body) {
        res.status(400).send({message: "user model can't be empty"});
    }

    let body = req.body;
    let username = body.username;
    let password = body.password;
    password = await passwordManager.hashPassword(password);
    let userModel = new location.UserModel(username, req.body.salary, req.body.desiredLeft, password);
    let isRegistered = await uService.checkExistence(username);
    if (isRegistered){
        res.status(409).send({message: "User with this username is already registered"});
        return;
    }
    await uService.addNewUser(userModel);
    let id = userModel.userId;
    const token = jwt.sign({username, id}, appData.getKey, {
        algorithm: "HS256",
        expiresIn: 300,
    })
    res.cookie("access_token", token, {maxAge: appData.getDate * 300})
    res.status(200).send(userModel);
}

exports.login = async function(req, res){
    if(!req.body){
        res.status(400).send({message: "user model can't be empty"});
    }
    let body = req.body;
    let isRegistered = uService.checkExistence(body.username);
    if(!isRegistered){
        req.status(409).send({message: "There's no such user with these credentials."});
        return;
    }
    let password = await uService.fetchPassword(body.username);
    let result = await passwordManager.comparePassword(body.password, password);

    if(result){
        res.status(200).send(JSON.stringify("Successfully logged in"));
        return;
    }
    res.status(400).send("Wrong password, try again.");
}

exports.logout = function(req, res){
    res.cookie('access_token', '', {maxAge: 0});
    res.end();
}

exports.getUserInfo = function(req, res){
    let token = req.cookies["access_token"];
    var payload
    try {
        payload = jwt.verify(token, appData.getKey);
    }catch (e){
        if (e instanceof jwt.JsonWebTokenError){
            return res.status(401).end();
        }
    }
    return res.status(400).send(payload.username);
}

exports.changeUsername = async function(req, res){
    let token = req.cookies["access_token"];
    var payload;
    try {
        payload = jwt.verify(token, appData.getKey);
    }catch (e){
        if (e instanceof jwt.JsonWebTokenError){
            return res.status(401).end();
        }
    }
    if(!req.body){
        res.status(401).send({message: "HTTP body can't be empty"});
    }
    let newUsername = req.body.username;
    await uService.changeUsername(payload.username, newUsername);
    console.log(newUsername);
    res.status(200).send(JSON.stringify(newUsername));
}

exports.changeDesiredLeft = async function(req, res){
    let token = req.cookies["access_token"];
}





