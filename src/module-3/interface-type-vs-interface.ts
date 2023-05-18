// type alias
// -> type alias for primitive type
type User = {
  name: string;
  age: number;
};

// type extend
type extendedUser = User & {
  role: string;
};

const oldUser: extendedUser = {
  name: 'Abdul',
  age: 49,
  role: 'user',
};

//## ---> Primitive type is builtin type. So, we cannot customize with interface

// interface
// -> interface uses for object type(non-primitive type)

interface IUser {
  name: string;
  age: number;
}

// interface extends
interface IEtendUser extends IUser {
  role: string;
}

const newUser: IEtendUser = {
  name: 'Abdul',
  age: 49,
  role: 'user',
};

// const userWithTypeAlias: User = {
//   name: 'Type Alias',
//   age: 100,
// };

// const userWithInterface: IUser = {
//   name: 'Interface',
//   age: 200,
// };

// non primitive type is object. Object --> Object, function, array

// function type signature
type addNumberType = (num1: number, num2: number) => number;

const addNumbers: addNumberType = (num1, num2) => num1 + num2;

// function interface signature
interface IAddNumbers {
  (num1: number, num2: number): number;
}

const addNum: IAddNumbers = (num1, num2) => num1 + num2;

//*** recommendation: for function we should use type signature. The reason is type alias code is more cleaner than interface

// Array type alias
type rollNumbersType = number[];
// const rollNumbers: rollNumbersType = [1, 2, 3, 4, 5];

// Array interface
interface IRollNumbers {
  [index: number]: number;
}

const rollNumbers: IRollNumbers = [1, 2, 3, 4, 5];

// final sugg: Type alias uses for primitive type
// Interface uses for non-primitive type--> object like object, function , class, array;
