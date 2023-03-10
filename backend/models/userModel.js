
const expense = require('./expenseModel.js')
const uuid = require('uuid')

class UserModel{
    username
    salary
    desiredLeft
    expenseArray

    password
    constructor(username, salary, desiredLeft, password) {
        this.username = username;
        this.salary = salary;
        this.desiredLeft = desiredLeft;
        this.expenseArray = [];
        this.password = password;
    }


    get Username(){
        return this.username
    }

    set Username(username){
        this.username = username
    }

    get Salary(){
        return this.salary
    }
    set Salary(salary) {
        this.salary = salary
    }
    get DesiredLeft(){
        return this.desiredLeft
    }
    set DesiredLeft(desiredLeft){
        this.desiredLeft = desiredLeft
    }

    append(expense){
        this.expenseArray.append(expense)
    }

    set ExpenseArray(expenseArray){
        this.expenseArray = expenseArray
    }

    get expenseArray() {
        return this.expenseArray;
    }




}

module.exports = {UserModel}




