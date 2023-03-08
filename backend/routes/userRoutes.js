const {create} = require("../handlers/userHandlers.js");
module.exports = function(app){
    var jwtLocation = require('../auth/refreshToken.js')
    var location = require('../handlers/userHandlers.js')

    //Register new user
    app.post('/register', location.register)


    //Login into users account
    //app.post('/login', location.login)

    //Change current user's salary
    app.put('/user/salary/:newSalary')

    //Change desired left money amount
    app.put('/user/money/left/:leftMoney')

    //Get all the user information without expenses
    app.get('/user', location.getUserInfo)

    //Change users nickname
    app.put('/user/nickname/:nickname')

    //Get ALL the user information (expenses included)
    app.get('/user/expenses')

    //Refresh JWT token
    app.post('/refresh', jwtLocation.refresh)

    app.post('/logout', location.logout)
}