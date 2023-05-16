"use strict";
// type assertion
let xyz;
xyz = 'hello typescript';
xyz.length;
xyz.length; // it doesn't work in tsx...better to use as syntex
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is ${value}`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}
const result = kgToGram(1000);
const stringResult = kgToGram('1000');
try {
}
catch (err) {
    console.log(err);
}
