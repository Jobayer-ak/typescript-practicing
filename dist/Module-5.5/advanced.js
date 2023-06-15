"use strict";
// generic model with 
;
class Userr {
    constructor(firstName, lastName) {
        this.data = { firstName, lastName };
        this.methods = {
            fullNamee: () => `${firstName} ${lastName}`
        };
    }
}
const userOne = new Userr("Jobayer", "Akanda");
console.log(userOne.methods.fullNamee());
