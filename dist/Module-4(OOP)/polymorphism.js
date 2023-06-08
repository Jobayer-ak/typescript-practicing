"use strict";
// polymorphism - it means multifom/polymorphic--> different faces of same thing
class Person {
    takeNap() {
        console.log('I am sleeping 8 hours per day!');
    }
}
class NewStudent extends Person {
    takeNap() {
        console.log('I am sleeping 10 hours per day!');
    }
}
class Developer extends Person {
    takeNap() {
        console.log('I am sleeping 6 hours per day!');
    }
}
function getNap(param) {
    param.takeNap();
}
const person10 = new Person();
const person11 = new NewStudent();
const person12 = new Developer();
getNap(person10);
getNap(person11);
getNap(person12);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.width * this.height;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 12));
