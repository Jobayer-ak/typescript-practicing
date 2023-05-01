// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 3, 5];

const newArray = arr.map((element: number) => element * element);
