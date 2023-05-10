// null type
const searchName = (value: string | null) => {
  if (value === null) {
    console.log('There is nothing to search!');
  } else {
    console.log('Searching');
  }
};

searchName('John');
searchName(null);

// unknown type
const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === 'number') {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`My car speed is ${convertedSpeed}`);
  }
  if (typeof speed === 'string') {
    const [value, unit] = speed.split(' ');
    const convertedSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(`My car speed is ${convertedSpeed}`);
  } else {
    console.log('There is wrong type');
  }
};

getMyCarSpeed(10);
getMyCarSpeed('10 kmh^-1'); //
getMyCarSpeed(true);

//never type --> 
function trhowError(message: string): never {
  throw new Error(message);
}

trhowError("Got an error");
