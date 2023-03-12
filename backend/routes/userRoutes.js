const {create} = require("../handlers/userHandlers.js");
const {authenticateJWT} = require("../auth/refreshToken");
module.exports = function(app){
    let jwtLocation = require('../auth/refreshToken.js')
    let location = require('../handlers/userHandlers.js')



    //Register new user
    app.post('/register', location.register)


    //Login into users account
    //app.post('/login',jwtLocation.authenticateJWT,(req, res)=>{location.login})
    app.post('/login', location.login)
    //Change current user's salary
    app.put('/user/salary/:newSalary')

    //Change desired left money amount
    app.put('/user/money/left/:leftMoney')

    //Get all the user information without expenses
    app.get('/user',jwtLocation.authenticateJWT,(req, res)=>{ location.getUserInfo})

    //Change users nickname
    app.put('/user/nickname/:nickname',jwtLocation.authenticateJWT,(req, res)=>{ location.changeUsername})

    //Get ALL the user information (expenses included)
    app.get('/user/expenses')

    //Refresh JWT token
    app.post('/refresh',jwtLocation.authenticateJWT, (req, res)=>{jwtLocation.refresh})

    //Logout
    app.post('/logout',jwtLocation.authenticateJWT,location.logout)
}