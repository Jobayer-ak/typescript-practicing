// generic type --> Generalize

// normal declaration
const rollNums: number[] = [12, 34, 56];

// const rollcNums: Array<number> = [12, 13, 14];

// const rollNums2: Array<string> = ['22', '33', '55'];
// const rollNum23: Array<boolean> = [true, false, true];

// generic type
type GenericArray<T> = Array<T>; // here is T means Type

const rollcNums: GenericArray<number> = [12, 13, 14];

const rollNums2: GenericArray<string> = ['22', '33', '55'];
const rollNum23: GenericArray<boolean> = [true, false, true];

type NameRollType = {
  name: string;
  roll: number;
};

const useNameAndRollNumbers: GenericArray<NameRollType> = [
  {
    name: 'Mr. X',
    roll: 1,
  },
  {
    name: 'Mr. Y',
    roll: 2,
  },
];

// generic tuple
type GenericTuple<X, Y> = [X, Y]; // generic tuple
const relation: GenericTuple<string, string> = ['Johny', 'Amber'];

type RelationWithSalaryType = {
  name: string;
  salary: number;
};

// we should not use object in generic type
const relationWithSalary: GenericTuple<RelationWithSalaryType, string> = [
  {
    name: 'Johny',
    salary: 100000,
  },
  'Amber',
];
