// generic in function

// Arrow function
const createArray = (param: string): string[] => {
  return [param];
};

const createArray1 = <T>(param: T): T[] => {
  return [param];
};

// tuple
const createArray2 = <A, B>(param1: A, param2: B): [A, B] => {
  return [param1, param2];
};

const res = createArray2<string, string>('Bangladesh', 'Nepal');

const result1 = createArray1<string>('Bangladesh');
const result2 = createArray1<boolean>(true);

type Name = {
  name: string;
};

const result3 = createArray1<Name>({ name: 'Bangladesh' });

// Spread operator

// const newData = { ...myInfo, crush };

const addMeInMyCrushMind = <T>(myInfo: T) => {
  const crush = 'Angelina Jule';
  const newData = { ...myInfo, crush }; // here spreading working on compile time but typescript determine type before compile i mean at run time
  return newData;
};

const myInfo = {
  name: 'Jobayer',
  age: 89,
  salary: 100,
};

const res1 = addMeInMyCrushMind(myInfo);
res1;

// normal function
function createArray6<T>(param: T): T[] {
  return [param];
}
