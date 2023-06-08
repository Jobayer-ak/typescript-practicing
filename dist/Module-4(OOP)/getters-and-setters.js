"use strict";
// access modifiers
// by defualt always public
// private is accessible within same class.
// getter returns private property;
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    // getter
    get balance() {
        return this._balance;
    }
    //   getBalance(): number {
    //     return this._balance;
    //   }
    // setter
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
}
const myAccount = new BankAccount(450, 'jobayer', 10);
console.log(myAccount);
console.log(myAccount.balance);
myAccount.deposit = 30;
console.log(myAccount.balance);
class StudentAccount extends BankAccount {
}
