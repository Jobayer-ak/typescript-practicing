"use strict";
// generic type --> Generalize
// normal declaration
const rollNums = [12, 34, 56];
const rollcNums = [12, 13, 14];
const rollNums2 = ['22', '33', '55'];
const rollNum23 = [true, false, true];
const useNameAndRollNumbers = [
    {
        name: 'Mr. X',
        roll: 1,
    },
    {
        name: 'Mr. Y',
        roll: 2,
    },
];
const relation = ['Johny', 'Amber'];
// we should not use object in generic type
const relationWithSalary = [
    {
        name: 'Johny',
        salary: 100000,
    },
    'Amber',
];
