// inheritance
class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }

  //   makeSleep(hours: number): string {
  //     return `This ${this.name} will sleep for ${hours}`;
  //   }
}

const student1 = new Student('Mr.X', 15, 'Nigeria');
student1.makeSleep;

class Teacher extends Parent {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);

    this.designation = designation; // different
  }

  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours}`;
  }

  conductClasses(numberOfClass: number): string {
    // different

    return `This ${this.name} will conduct ${numberOfClass} classes!`;
  }
}

const teacher1 = new Teacher('Teacher', 45, 'Bangladesh', 'Head Master');
teacher1.address;