"use strict";
// normal function
// default parameer
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(30, 50);
// arrow function
const addArrow = (num1, num2) => num1 + num2;
const arr = [1, 3, 5];
const newArray = arr.map((element) => element * element);
const person1 = {
    name: 'json',
    balance: 5,
    addBalance(money) {
        console.log(`My balance is ${this.balance + money}`);
    },
};
// spread operator
const myFriends = ['chandler', 'johny', 'ross'];
const newFriends = ['jessy', 'rachel', 'sirry'];
myFriends.push(...newFriends);
// console.log('My friends: ', myFriends);
const myBestFriend = {
    fullName: 'Addy Ron',
    age: 24,
};
const [bestFreind] = myFriends;
const { fullName } = myBestFriend; // when destructuring, don't need to mention type because typescript infers type
console.log('Full Name: ', fullName);
// rest perameter
const greetFriends = (...friends) => {
    // console.log(`Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}`);
    // console.log('Freinds: ', friends);
    friends.forEach((friend) => console.log('Friend: ', friend));
};
greetFriends('john', 'jason', 'Henry', 'Josh', 'Derran');
// array and object destructuring
