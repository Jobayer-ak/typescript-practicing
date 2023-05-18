// Generic interface
// we can use more than 1 generics
interface CrushInterface<T, U = null> {
  // here U has default value
  name: string;
  husband: T; // generic
  wife?: U; // optional type
}

interface PersonInterface {
  name: string;
  age: number;
}

const crush0: CrushInterface<boolean, string> = {
  name: 'Angelina',
  husband: true,
  wife: 'Karima',
};

const crush01: CrushInterface<string> = { name: 'Angelina', husband: 'Pete' };

interface HusbandInterface {
  name: string;
  salary: number;
}

const crush03: CrushInterface<HusbandInterface> = {
  name: 'Angelina',
  husband: {
    name: 'Pete',
    salary: 100000,
  },
};

const crush04: CrushInterface<PersonInterface, PersonInterface> = {
  name: 'Angelina',
  husband: { name: 'Pete', age: 35 },
  wife: {
    name: 'Emma',
    age: 32,
  },
};
