"use strict";
// access modifiers
// by defualt always public
// private is accessible within same class.
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance() {
        console.log(`My current balance is ${this._balance}`);
    }
    addDeposit(amount) {
        this._balance = this._balance + amount;
    }
}
const myAccount = new BankAccount(450, 'jobayer', 1000);
console.log(myAccount);
myAccount.getBalance();
class StudentAccount extends BankAccount {
    test() {
    }
}
