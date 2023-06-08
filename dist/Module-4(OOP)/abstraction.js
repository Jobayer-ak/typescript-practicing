"use strict";
// abstraction of ts
// interface
// interface IVehicle {
//   name: string;
//   model: string;
// }
// const vehicle: IVehicle = {
//   name: 'Car',
//   model: '2000',
// };
// interface IVehicle {
//   startEngine(): void;
//   stopEngine(): void;
//   move(): void;
// }
// class Vehicle implements IVehicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number
//   ) {}
//   startEngine(): void {
//     console.log('i am starting engine.');
//   }
//   stopEngine(): void {
//     console.log('I am stopping Engine...');
//   }
//   move(): void {
//     console.log('I am moving engine');
//   }
//   test() {
//     console.log('I am for testing purpose!');
//   }
// }
// const vehicle1 = new Vehicle('Car', 'Toyota', 2022);
// console.log(vehicle1);
// abstract class
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log('I am moving engine');
    }
    test() {
        console.log('I am for testing purpose!');
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log("I am starting engine..");
    }
    stopEngine() {
        console.log("I am stopping engine....");
    }
}
