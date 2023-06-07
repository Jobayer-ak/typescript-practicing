"use strict";
// mapped type
const arrayOfNumbers = [1, 2, 3];
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrings);
const area1 = {
    height: 10,
    width: '10',
};
area1.height = 20;
const recangularArea = {
    height: 10,
    width: 12,
};
