class ExpenseModel{
    title
    amount
    price
    type

    constructor(title, amount, price, type) {
        console.log('New uuid: ' + this.id);
        this.price = price;
        this.amount = amount;
        this.title = title;
        this.type = ExpenseType.type;
    }

    get Type() {
        return this.type;
    }

    set Type(type) {
        this.type = type;
    }

    get Amount() {
        return this.amount;
    }

    set Amount(amount) {
        this.amount = amount;
    }

    get Price() {
        return this.price
    }

    set Price(price) {
        this.price = price;
    }

    get Title(){
        return this.title;
    }
    set Title(title){
        this.title = title;
    }
}

const ExpenseType = {
    Housing: 'Housing',
    Healthcare: 'Healthcare',
    Food: 'Food',
    Transportation: 'Transportation',
    CashContributions: 'Cash contributions',
    Entertainment: 'Entertainment',
    InsuranceAndPensions: 'Insurance or Pensions',
    Clothes: 'Clothes',
    PersonalCareProductsAndServices: 'Personal care products and services',
    Alcohol: 'Alcohol',
    Education: 'Education',
    Reading: 'Reading',
    SmokingSupplies: 'Smoking Supplies'
};

function generateWeight(type){
    switch (type){
        case ExpenseType.Housing:

        case ExpenseType.Alcohol:

        case ExpenseType.Food:

        case ExpenseType.Education:

        case ExpenseType.Clothes:

        case ExpenseType.CashContributions:

        case ExpenseType.Entertainment:

        case ExpenseType.Healthcare:

        case ExpenseType.InsuranceAndPensions:

        case ExpenseType.PersonalCareProductsAndServices:

        case ExpenseType.Reading:

        case ExpenseType.SmokingSupplies:

        case ExpenseType.Transportation:

        default:
            return -1
    }
}

module.exports = {ExpenseModel, ExpenseType, generateWeight}