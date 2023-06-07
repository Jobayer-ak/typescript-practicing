"use strict";
// inheritance
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
}
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('Mr.X', 15, 'Nigeria');
student1.makeSleep;
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation; // different
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
    conductClasses(numberOfClass) {
        // different
        return `This ${this.name} will conduct ${numberOfClass} classes!`;
    }
}
const teacher1 = new Teacher('Teacher', 45, 'Bangladesh', 'Head Master');
teacher1.address;
