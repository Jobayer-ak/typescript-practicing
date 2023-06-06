// Asynchronous
// ekta block of code jodi r ekta block of code k badha na diye parralali colte dei eitai holo asynchronous

// Mocking

// creating promise
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = 'Data is fetched';

    if (data) {
      resolve(data);
    } else {
      reject('Failed to fetch data!');
    }
  });
};

const result12 = makePromise();
const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

// console.log("promise data: ", result12)
// Promise<string> Promise<boolean> Promise<object>
const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject('Failed to fetch');
    }
  });
};

const getPromiseDataBoolean = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  return data;
};

const boolResult = getPromiseDataBoolean();
// console.log('boolean Promise: ', boolResult);

// object promise (creating promise with type alias)

type DataType = {
  data: string;
};

const makePromiseObject = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = { data: 'Data is fetched!' };

    if (data) {
      resolve(data);
    } else {
      reject('Failed to fetch Data!');
    }
  });
};

const getPromiseDataObject = async (): Promise<DataType> => {
  const data = await makePromiseObject();
  return data;
};

// json placeholder

// interface
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean; 
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  return await response.json();
};

const getTodoData = async (): Promise<void> => {
  const result35 = await getTodo();
  console.log(result35);
};

getTodoData();
