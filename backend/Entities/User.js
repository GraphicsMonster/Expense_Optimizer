const {EntitySchema} = require("typeorm");
var entitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
   name: "User",
    tableName: "Users",
    columns: {
        userId: {
            primary: true,
            type: "int",
            generated: true
        },
        username: {
            type: "varchar",
        },
        salary: {
            type: "int",
        },
        desiredLeft: {
            type: "int",
        },
        password:{
            type: "varchar",
        }
    },
    relations:{
       categories:{
           target: "Expense",
           type: "one-to-many",
           joinTable: true,
           cascade: true,
       }
   }
});