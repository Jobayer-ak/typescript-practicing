// generic keyof constraints

type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = 'name' | 'age' | 'address'; // manually

type newTypeUsingKeyOf = keyof PersonType;

// const a: newType = "age";
// const b: newTypeUsingKeyOf = "address"; // manually union type na kore...amra keyof diye ekta type er key gulo use kore new type create korte pari jekhane age type er key gulo union hisebe use hobe

// create object

function getProperty<X,Y extends keyof X>(obj: X, key: Y) {
    obj[key];
}

const property = getProperty({ name: "Mr. X", age: 200 }, "age");