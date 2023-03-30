const jwt = require("jsonwebtoken")
const appData = require('../config/app');
const jwtSecretKey = 'group_cooperation';
const jwtExpirationDate = 1000;
function getRefreshedToken(payload, jwtSecretKey, jwtExpirationDate){
    const currentUnixSeconds = Math.round(Number(new Date()) / 1000);
    if(payload.exp - currentUnixSeconds > 30){
        return res.status(401).end();
    }
    return jwt.sign({username: payload.username}, appData.getKey, {
        algorithm: "HS256",
        expiresIn: appData.getDate
    });
}

const authenticateJWT = (req, res, next) => {
    if(req != null){
        let token = req.cookies["access_token"];
        if (token !== "undefined") {
            let payload;
            try {
                payload = jwt.verify(token, jwtSecretKey);
            } catch (e) {
                if (e instanceof jwt.JsonWebTokenError) {
                    return res.status(401).end();
                }
            }
            req.username = req.query.username;
            console.log(req.username)
            return next();
        } else {
            req.username = req.query.username;
            token = jwt.sign({username: req.username}, appData.getKey, {
                algorithm: "HS256",
                expiresIn: appData.getDate
            });
            res.cookie("access_token", token);
           return next();
        }
    }else{
        res.status(401).end();
    }
};

module.exports = {authenticateJWT}

exports.refresh = function(req, res){
    let token = req.cookies["access_token"];
    if(!token){
        return res.status(401).end();
    }

    var payload;
    try{
        payload = jwt.verify(token, appData.getKey);
    }catch (e){
        if(e instanceof jwt.JsonWebTokenError){
            return res.status(401).end();
        }
        return res.status(400).end()
    }
    let newToken = getRefreshedToken(payload, appData.getKey, appData.getDate);

    res.cookie("access_token", newToken, {maxAge: appData.getDate * 1000});
    res.end();
}

