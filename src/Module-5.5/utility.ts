// utility types

// Pick -> accepts two arguments <interfaceName, key>

interface Person1 {
  name: string;
  email: string;
  contactNo?: string;
}

type Email = Pick<Person1, "name">;
type ContactNo = Pick<Person1, 'email' | 'contactNo'>;

// omit --> except mentioned keys
type NameOne = Omit<Person1, "email" | "contactNo">

// partial and required
// to make all the properties be optional type
type Optional = Partial<Person1>;


// required --> reverse of Partial
type RequiredProps = Required<Person1>;

// readonly
const personn: Readonly<Person1> = {
  name: "Jobayer",
  email: "jobayer.ak@gmail.com",
  contactNo: "123456",
};

// personn.name = "Jb"

// Record type

// type myObjj = {
//   a: string;
//   b: string;
//   c: string;
// }


// using index signature
// type myObjSig = {
//   // [key: string]: string 
//   // [key: "a" | "b" | "c"]: string;
// } 

// Record "a" | "b" | "c"
type myObjSig = Record<"a" | "b" | "c", string>
  
const objj: myObjSig = {
  a: "1",
  b: "2",
  c: "3",
  
}
