// alias
type CrushType = {
  name: string;
  age?: number; // optional type
  profession: string;
  address: string;
};

const crush1: CrushType = {
  name: 'Moina',
  age: 22,
  profession: 'soft e.',
  address: 'Honduras',
};

const crush2: CrushType = {
  name: 'Tia',
  profession: 'mid level web devloper',
  address: 'Canada',
};

// boolean
type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

// string
type CourseNameType = string;
const courseName: CourseNameType = 'Next Level web development';

// callback function
type OperationType = (x: number, y: number) => number;
const calculate = (
  number1: number,
  number2: number,
  operation: OperationType
) => {
  return operation(number1, number2);
};

calculate(10, 20, (x, y) => x + y);
calculate(10, 5, (x, y) => x * y);
