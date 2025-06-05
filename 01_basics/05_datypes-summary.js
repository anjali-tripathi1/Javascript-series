  // All diffrence between parts are bases on that whatever data are and how they are stored in memory and how can we access our data.

  // #Primitive

//   as many as primitive datypes are call by value, means when you copy them from somewhere then you are not provided original data (memory's refrence), these are copied and given and all changes that you do it is in the copy.

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt 

// In javascript we don't define  language
const score = 100;
const scorevalue = 100.5;  // this is also number

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;
// We can also manually define value undefined
// let userEmail = undefined;

// symbol => uniqueness
 const id = Symbol('123');
 const anotherId = Symbol('123');
 // Both are looking same but result Id and anotherId is diffrent.
 console.log(id === anotherId );
 



// we are not defined that score is number datatype because in javascript there is no need
// like Javascript there's one more language named typescript there we need to defined datatype like this.
// const score:number = 100 

// #Refrence (Non Primitive)
// All values in memory that can be refrenced directly 

// Arrays, Objects, fuctions