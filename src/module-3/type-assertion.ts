// type assertion

let xyz: any;
xyz = 'hello typescript';
(xyz as string).length;
<string>xyz.length // it doesn't work in tsx...better to use as syntex

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === 'string') {
    const value = parseFloat(param) * 1000;
    return `The converted result is ${value}`;
  }

  if (typeof param === 'number') {
    const value = param * 1000;
    return value;
  }
}

const result = kgToGram(1000) as number;
const stringResult = kgToGram('1000') as string;

type CustomErrorType = {
  message: string;
};

try {
} catch (err) {
  console.log(err as CustomErrorType);
}
