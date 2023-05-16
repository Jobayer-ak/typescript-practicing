// ternary operator
const age: number = 15;

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
const userName = isAuthenticateUser ?? 'Guest';
const userName2 = isAuthenticateUser ? isAuthenticateUser : 'Guest';
console.log({ userName }, { userName2 });

type Manush = {
  name: string;
  age: number;
  address: {
    city: 'No City';
    road: 'No Road';
    home?: ''; // optional type
  };
};

const manush: Manush = {
  name: 'Manush',
  age: 100,
  address: {
    city: 'No City',
    road: 'No Road',
  },
};

const home = manush?.address?.home ?? 'No Home'; // default "No Home"

console.log({ home });
