module.exports = function(app){
    var location = require('../handlers/userHandlers')

    //Add new user instance - registration
    app.post('/user')

    //Change current user's salary
    app.put('/user/salary/:newSalary')

    //Change desired left money amount
    app.put('/user/money/left/:leftMoney')

    //Get all the user information without expenses
    app.get('/user')

    //Change users nickname
    app.put('/user/nickname/:nickname')

    //Get ALL the user information (expenses included)
    app.get('/user/expenses')
}