var ExpenseModel = {
    title: String,
    type: ExpenseType,
    Weight: generateWeight(this.type),
    Amount: Number,
    Price: Number
};


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