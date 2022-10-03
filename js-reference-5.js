let bankAccount = {
    balance: 10423,
    moneySpent: 0,
    bonusPoints: 0,
    bank: 'BRD',
    issuedAt: 2020,
};

let bankAccount2 = {
    balance: 572,
    moneySpent: 0,
    bonusPoints: 0,
    bank: 'BT',
    issuedAt: 2021,
};

function payForProduct(account, price) {
    if (account.balance - price >= 0) {
        account.balance = account.balance - price;
        account.moneySpent = account.moneySpent + price;
        account.bonusPoints = account.bonusPoints + 10;
    } else {
        console.log('Not enough money!!!');
    }
}

setTimeout(() => {
    payForProduct(bankAccount, 120);
    console.log(bankAccount);
}, 5000);

setTimeout(() => {
    payForProduct(bankAccount, 1024);
    console.log(bankAccount);
}, 15000);

setTimeout(() => {
    payForProduct(bankAccount, 5100);
    console.log(bankAccount);
}, 30000);

setTimeout(() => {
    payForProduct(bankAccount2, 345);
    console.log(bankAccount2);
}, 40000);

setTimeout(() => {
    payForProduct(bankAccount2, 515);
    console.log(bankAccount2);
}, 60000);
