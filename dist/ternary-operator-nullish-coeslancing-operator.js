"use strict";
var _a, _b;
// ternary operator
const age = 15;
// if (age >= 18) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }
const isAdult = age >= 18 ? 'Yes' : 'No';
console.log(isAdult);
// Nullish Coeslancing operator --> it sets default value depends on Null and Undefined. It only works for null and undefined. Not working for any falsy value
//Null and Undefined
const isAuthenticateUser = '';
const userName = isAuthenticateUser !== null && isAuthenticateUser !== void 0 ? isAuthenticateUser : 'Guest';
const userName2 = isAuthenticateUser ? isAuthenticateUser : 'Guest';
console.log({ userName }, { userName2 });
const manush = {
    name: 'Manush',
    age: 100,
    address: {
        city: 'No City',
        road: 'No Road',
    },
};
const home = (_b = (_a = manush === null || manush === void 0 ? void 0 : manush.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No Home'; // default "No Home"
console.log({ home });
