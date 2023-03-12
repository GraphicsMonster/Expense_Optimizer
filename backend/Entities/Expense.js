const {EntitySchema} = require("typeorm");
var entitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Expense",
    tableName: "expenses",
    columns:{
        expenseId:{
            primary: true,
            type: "int",
            generated: true,
        },
        title:{
            type: "varchar",
        },
        type:{
            type: "varchar",
        },
        amount:{
            type: "int",
        },
        price:{
            type: "int",
        },
    }

});