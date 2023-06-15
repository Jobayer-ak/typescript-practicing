// // type guard

// // keyof guard (keyof operator)
// type AlphaNumeric = string | number;

// function add(param1: AlphaNumeric, param2: AlphaNumeric) {
//   if (typeof param1 === 'number' && typeof param2 === 'number') {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }

// add('1', '2');
// add(1, 2);

// // in guard (in is used for object);
// type NormalUserType = {
//   name: string;
// };

// type AdminUserType = {
//   name: string;
//   role: `admin`;
// };

// function getUser(user: NormalUserType | AdminUserType): string {
//   if ('role' in user) {
//     return `I am an admin and my role is ${user.role}`;
//   } else {
//     return `I am a normal user!`;
//   }
// }

// const normalUser1: NormalUserType = { name: 'Mr.John' };
// const adminUser1: AdminUserType = { name: 'Mr. Depp', role: 'admin' };

// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));

// // instance of guard -> it guards class and objects
// class NewAnimal {
//   nam: string;
//   sp: string;

//   constructor(nam: string, sp: string) {
//     this.nam = nam;
//     this.sp = sp;
//   }

//   sound() {
//     console.log(`I am making sound`);
//   }
// }

// class Dog extends NewAnimal {
//   constructor(nam: string, sp: string) {
//     super(nam, sp);
//   }

//   makeBark() {
//     console.log('I am barking!');
//   }
// }

// class Cat extends NewAnimal {
//   constructor(nam: string, sp: string) {
//     super(nam, sp);
//   }

//   makeMew() {
//     console.log('I am mewing!');
//   }
// }

// function isDog(animal: NewAnimal): animal is Dog {
//   return animal instanceof Dog;
// }

// function isCat(animal: NewAnimal): animal is Cat {
//   return animal instanceof Cat;
// }

// function getAnimal(obj: NewAnimal) {
//   if (isDog(obj)) {
//     obj.makeBark();
//   }

//   if (isCat(obj)) {
//     obj.makeMew();
//   }
// }

// const animal1 = new Dog('Husky', 'dog'); // instance of Dog
// const animal2 = new Cat('BD Cat', 'cat'); // instance of Cat

// getAnimal(animal1);
// getAnimal(animal2);
