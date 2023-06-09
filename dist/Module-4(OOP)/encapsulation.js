"use strict";
// abstraction of ts
class Car {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log('i am starting engine.');
    }
    stopEngine() {
        console.log('I am stopping Engine...');
    }
    move() {
        console.log('I am moving engine');
    }
}
const vehicle1 = new Car('Car', 'Toyota', 2022);
// console.log(vehicle1);
// abstract class
// abstract class Vehicle {
//     constructor(
//       public name: string,
//       public brand: string,
//       public model: number
//     ) {}
//     abstract startEngine(): void;
//     abstract stopEngine(): void
//     move(): void {
//       console.log('I am moving engine');
//     }
//     test() {
//       console.log('I am for testing purpose!');
//     }
//   }
//   class Car extends Vehicle {
//       startEngine(): void {
//           console.log("I am starting engine..")
//       }
//       stopEngine(): void {
//           console.log("I am stopping engine....")
//       }
//   }
