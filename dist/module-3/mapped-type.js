"use strict";
// // mapped type
// const arrayOfNumbers = [1, 2, 3];
// const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
// console.log(arrayOfStrings);
// type Volume = {
//   height: number;
//   width: string;
//   depth: number;
// };
// type Area<T> = {
//   //   [key in keyof Volume]: Volume[key];
//   readonly [key in keyof T]: T[key];
// };
// const area1: Area<{ height: number; width: string }> = {
//   height: 10,
//   width: '10',
// };
// area1.height = 20;
// 000
// type AreaString = {
//   height: string;
//   width: string;
// };
// type AreaReadOnly = {
//   readonly height: number;
//   readonly width: number;
// };
// const recangularArea: AreaReadOnly = {
//   height: 10,
//   width: 12,
// };
// // recangularArea.width = 10;
// type mapA = AreaNumber['height']; // look up type
// type B = keyof AreaNumber; // "height" | "width";-> union type;
