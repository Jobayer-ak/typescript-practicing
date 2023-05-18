"use strict";
// generic in function
// Arrow function
const createArray = (param) => {
    return [param];
};
const createArray1 = (param) => {
    return [param];
};
// tuple
const createArray2 = (param1, param2) => {
    return [param1, param2];
};
const res = createArray2('Bangladesh', 'Nepal');
const result1 = createArray1('Bangladesh');
const result2 = createArray1(true);
const result3 = createArray1({ name: 'Bangladesh' });
// Spread operator
// const newData = { ...myInfo, crush };
const addMeInMyCrushMind = (myInfo) => {
    const crush = 'Angelina Jule';
    const newData = Object.assign(Object.assign({}, myInfo), { crush }); // here spreading working on compile time but typescript determine type before compile i mean at run time
    return newData;
};
const myInfo = {
    name: 'Jobayer',
    age: 89,
    salary: 100,
};
const res1 = addMeInMyCrushMind(myInfo);
res1;
// normal function
function createArray6(param) {
    return [param];
}
