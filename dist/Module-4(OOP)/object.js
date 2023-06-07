"use strict";
// classes -> encapsulation -> polymorphism -> abstraction
// Class
class Animal {
    //   name: string;
    //   species: string;
    //   sound: string;
    // parameter properties -> using parameter properties we can do write clean code in typescript
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    // when declare a function inside class it is called method
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal('German Shepard', 'dog', 'Ghew Ghew');
const cat = new Animal('Bangaldeshi', 'cat', 'Mew Mew');
dog.makeSound();
cat.makeSound();
