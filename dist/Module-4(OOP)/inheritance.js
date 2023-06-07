"use strict";
// inheritance
class Student {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
}
class Teacher {
    constructor(name, age, address, designation) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
    ;
    conductClasses(numberOfClass) {
        return `This ${this.name} will conduct ${numberOfClass} classes!`;
    }
}
