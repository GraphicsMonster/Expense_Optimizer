const {create} = require("../handlers/userHandlers.js");
const {authenticateJWT} = require("../auth/jwt");
module.exports = function(router){
    let jwtLocation = require('../auth/jwt.js')
    let user = require('../handlers/userHandlers.js')

    //Register new user
    router.post('/user/register', user.register)

    //Login into user's account
    router.post('/user/login',user.login)

    //Change desired left money amount
    router.put('/user/money/left/:leftMoney', user.changeDesiredLeft)

    //Get all the user information without expenses
    router.get('/user',user.getUserInfo)

    //Change users nickname
    router.put('/user/nickname/:nickname',user.changeUsername)

    //Get ALL the user information (expenses included)
    router.get('/user/expenses')

    //Refresh JWT token
    router.post('/refresh',function (req, res){
        jwtLocation.refresh;
    })

    //Logout
    router.post('/user/logout',user.logout)
}