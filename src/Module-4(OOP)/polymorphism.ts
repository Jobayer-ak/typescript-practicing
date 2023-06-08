// polymorphism - it means multifom/polymorphic--> different faces of same thing

class Person {
  takeNap(): void {
    console.log('I am sleeping 8 hours per day!');
  }
}

class NewStudent extends Person {
  takeNap(): void {
    console.log('I am sleeping 10 hours per day!');
  }
}

class Developer extends Person {
  takeNap(): void {
    console.log('I am sleeping 6 hours per day!');
  }
}

function getNap(param: Person) {
  param.takeNap();
}

const person10 = new Person();
const person11 = new NewStudent();
const person12 = new Developer();

getNap(person10);
getNap(person11);
getNap(person12);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
    
    getArea(): number {
        return this.width * this.height;
    }
}

function getAreaOfShape(param: Shape){
    console.log(param.getArea())

}

getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 12));