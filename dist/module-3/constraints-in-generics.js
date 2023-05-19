"use strict";
// constraints in generics
const addMeInMyCrushMind1 = (myInfo) => {
    const crush = 'Angelina Jule';
    const newData = Object.assign(Object.assign({}, myInfo), { crush }); // here spreading working on compile time but typescript determine type before compile i mean at run time
    return newData;
};
const myInfo1 = {
    name: 'Jobayer',
    age: 89,
    salary: 100,
    other1: false,
    other2: null,
};
const res11 = addMeInMyCrushMind1(myInfo1);
res11;
