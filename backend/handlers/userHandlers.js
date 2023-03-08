var location = require('../models/userModel.js')

exports.create = function (req, res){
    if(!req.body){
        res.status(400).send({message: "user model can't be empty"});
    }

    body = req.body;
    var userModel = new location.userModel(body.username, req.body.salary, req.body.desiredLeft);
    res.send(JSON.stringify(userModel));
}