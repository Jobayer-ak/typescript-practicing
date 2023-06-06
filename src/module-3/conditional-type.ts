// a type is dependent on another type is called conditional type in ts
type a1 = number;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;

// nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type Sheikh = {
  wife1: string;
  wife2: string;
};

// check korbe ei Sheikh type e wife1 ase kina? true : false

type A = keyof Sheikh; // "wife1" | "wife2" ---> keyof union type result pabe from sheikh;

type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

type CheckWife1 = CheckProperty<Sheikh, "wife1">;

// Note object cannot extends string;

//another example

// type literal is used for fixed value
type GirlFriends = "Monica" | "Chandler" | "Kerry";
type RemoveFriend<T, R> = T extends R ? never : T;

type CurrentFriend = RemoveFriend<GirlFriends, "Monica">

// Note: -> If any value type is become never type from a union type, that value will be removed from union value;