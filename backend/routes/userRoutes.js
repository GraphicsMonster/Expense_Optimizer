const {create} = require("../handlers/userHandlers.js");
const {authenticateJWT} = require("../auth/refreshToken");
module.exports = function(router){
    let jwtLocation = require('../auth/refreshToken.js')
    let location = require('../handlers/userHandlers.js')



    //Register new user
    router.post('/user/register', location.register)


    //Login into users account
    //app.post('/login',jwtLocation.authenticateJWT,(req, res)=>{location.login})
    router.post('/user/login',location.login)
    //Change current user's salary
    //app.put('/user/salary/:newSalary', location.updateSalary)

    //Change desired left money amount
    router.put('/user/money/left/:leftMoney')

    //Get all the user information without expenses
    router.get('/user',location.getUserInfo)

    //Change users nickname
    router.put('/user/nickname/:nickname',location.changeUsername)

    //Get ALL the user information (expenses included)
    router.get('/user/expenses')

    //Refresh JWT token
    router.post('/refresh',function (req, res){
        jwtLocation.refresh;
    })

    //Logout
    router.post('/user/logout',location.logout)
}