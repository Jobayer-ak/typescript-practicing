// classes -> encapsulation -> polymorphism -> abstraction
// Class
var Animal = /** @class */ (function () {
    //   name: string;
    //   species: string;
    //   sound: string;
    // parameter properties -> using parameter properties we can do write clean code in typescript
    function Animal(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    // when declare a function inside class it is called method
    Animal.prototype.makeSound = function () {
        console.log("The ".concat(this.name, " says ").concat(this.sound));
    };
    return Animal;
}());
var dog = new Animal('German Shepard', 'dog', 'Ghew Ghew');
var cat = new Animal('Bangaldeshi', 'cat', 'Mew Mew');
dog.makeSound();
cat.makeSound();
