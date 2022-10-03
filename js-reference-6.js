let bankAccount = {
    balance: 10423,
    moneySpent: 0,
    bonusPoints: 0,
    bank: 'BRD',
    issuedAt: 2020,
    payForProduct: function (price) {
        if (this.balance - price >= 0) {
            this.balance = this.balance - price;
            this.moneySpent = this.moneySpent + price;
            this.bonusPoints = this.bonusPoints + 10;
        } else {
            console.log('Not enough money!!!');
        }
    },
};

let bankAccount2 = {
    balance: 572,
    moneySpent: 0,
    bonusPoints: 0,
    bank: 'BT',
    issuedAt: 2021,
    payForProduct: function (price) {
        if (this.balance - price >= 0) {
            this.balance = this.balance - price;
            this.moneySpent = this.moneySpent + price;
            this.bonusPoints = this.bonusPoints + 10;
        } else {
            console.log('Not enough money!!!');
        }
    },
};

setTimeout(() => {
    bankAccount.payForProduct(120);
    console.log(bankAccount);
}, 5000);

setTimeout(() => {
    bankAccount.payForProduct(1024);
    console.log(bankAccount);
}, 15000);

setTimeout(() => {
    bankAccount.payForProduct(5100);
    console.log(bankAccount);
}, 30000);

setTimeout(() => {
    bankAccount2.payForProduct(345);
    console.log(bankAccount2);
}, 40000);

setTimeout(() => {
    bankAccount2.payForProduct(515);
    console.log(bankAccount2);
}, 60000);
