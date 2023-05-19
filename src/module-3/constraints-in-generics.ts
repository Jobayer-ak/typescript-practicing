// constraints in generics

type MandatoryTypes = { name: string; age: number; salary: number };

type MandatoryInterface = { name: string; age: number; salary: number };

const addMeInMyCrushMind1 = <
  T extends MandatoryInterface // constraints
>(
  myInfo: T
) => {
  const crush = 'Angelina Jule';
  const newData = { ...myInfo, crush }; // here spreading working on compile time but typescript determine type before compile i mean at run time
  return newData;
};

type MyInfoType = {
  name: string;
  age: number;
  salary: number;
  other1: boolean;
  other2: null;
};

const myInfo1 = {
  name: 'Jobayer',
  age: 89,
  salary: 100,
  other1: false,
  other2: null,
};

const res11 = addMeInMyCrushMind1(myInfo1);
res11;
