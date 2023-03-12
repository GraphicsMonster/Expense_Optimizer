let typeorm = require("typeorm")
const UserEntity = require('../Entities/User.js');
const ExpenseEntity = require('../Entities/Expense.js');


var dataSource = new typeorm.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "E9602922",
    database: "Budget_Optimizer",
    synchronize: true,
    entities: [UserEntity, ExpenseEntity],

})


module.exports = {dataSource}