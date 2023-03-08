var location = require('../models/userModel.js');
const jwt = require("jsonwebtoken")
const appData= require('../config/app.js');

exports.register = function (req, res){
    console.log("Date: " + appData.getDate)
    if(!req.body){
        res.status(400).send({message: "user model can't be empty"});
    }

    let body = req.body;
    let username = body.username;
    let userModel = new location.userModel(username, req.body.salary, req.body.desiredLeft);

    const token = jwt.sign({username}, appData.getKey,{
        algorithm: "HS256",
        expiresIn: 300,
    })

    console.log("Token: " + token);


    res.cookie("access_token", token, {maxAge: appData.getDate * 300})
    res.status(200).send(userModel);
}

exports.login = function(req, res){
    if(!req.body){
        res.status(400).send({message: "user model can't be empty"});
    }

    let body = req.body;
    let userModel = new location.userModel(body.username, req.body.salary, req.body.desiredLeft);
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



