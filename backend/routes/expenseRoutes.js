module.exports = function(app){

    var location = require('../handlers/expenseHandlers')

    //Form a new expense
    app.post('/expense')

    //Get last expense
    app.get('/expense')

    //Get last X expenses
    app.get('/expenses/:amount')

}