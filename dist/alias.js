"use strict";
const crush1 = {
    name: 'Moina',
    age: 22,
    profession: 'soft e.',
    address: 'Honduras',
};
const crush2 = {
    name: 'Tia',
    profession: 'mid level web devloper',
    address: 'Canada',
};
const isCrushMarried = false;
const courseName = 'Next Level web development';
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 5, (x, y) => x * y);
