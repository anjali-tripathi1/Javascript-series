  // All diffrence between parts are bases on that whatever data are and how they are stored in memory and how can we access our data.

  // #Primitive

//   as many as primitive datypes are call by value, means when you copy them from somewhere then you are not provided original data (memory's refrence), these are copied and given and all changes that you do it is in the copy.

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt 

// In javascript we don't define  language
const score = 100;

// we are not defined that score is number datatype because in javascript there is no need
// like Javascript there's one more language named typescript there we need to defined datatype like this.
// const score:number = 100 

const scorevalue = 100.5;  // this is also number

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;
// We can also manually define value undefined
// let userEmail = undefined;

// symbol => uniqueness
 const id = Symbol('123');
 const anotherId = Symbol('123');
 // Both are looking same but result Id and anotherId is diffrent. this is the work of the symbol that if you pass the same value weateher it is string or anything then your result Id and anotherId is not same.
 console.log(id === anotherId );


 const bignumber = 122545566677788778988n

 

 // #Refrence (Non Primitive)
// All values in memory that can be refrenced directly 

// Arrays, Objects, fuctions

 const heros = ["shaktiman", "naagraj", "doga" ];
 const number = [19, 20, 25];
 const isMarried = [true];
 const weather = [null];
 let state;
 console.table([heros, number, isMarried, weather, state]);
 
 // Arrays are write in [] square brackets.


 let myobj = {
    name: "Anjali",
    age: 19,
    isAdmitted: false,
    
 }

 // objects are in {} currlibraces. In curr- we write value in keyvalue pairs. we can declare value like this. if we want we can store this in variable. 
 // Inside {} whaterver values are object and can be anything like sring, number, boolean, fuction, Array and  another object .


 // fuction can be treated like variable
//  function(){}  this is fuction's defination
// now we want that this fuction defination is store into varible. 
const myFunction = function(){
    console.log("Hello World");
    
    
}


// Extracting datatype of any value

console.log(`Datatype of score :- ${typeof score}`);                  // number
console.log(`Datatype of scorevalue :- ${typeof scorevalue}`);       // number
console.log(`Datatype of isLoggedIn :- ${typeof isLoggedIn}`);      // boolean
console.log(`Datatype of outsideTemp :- ${typeof outsideTemp}`);   // object
console.log(`Datatype of userEmail :- ${typeof userEmail}`);      // undefined
console.log(`Datatype of Id :- ${typeof id}`);                   // symbol
console.log(`Datatype of anotherId :- ${typeof anotherId}`);    // symbol
console.log(`Datatype of bignumber :-  ${typeof bignumber}`);    // without comments => bigint
console.log(`Datatype of bignumber :- ${typeof bignumber}`);    // with comments => undefined
console.log(`Datatype of heros :- ${typeof heros}`);                   // object
console.log(`Datatype of number :- ${typeof number}`);                // object
console.log(`Datatype of isMarried :- ${typeof isMarried}`);         // object
console.log(`Datatype of weather :- ${typeof weather}`);            // object
console.log(`Datatype of state :- ${typeof state}`);               // undefined
console.log(`Datatype of myobj :- ${typeof myobj}`);              // object
console.log(`Datatype of myFunction :- ${typeof myFunction}`);   // object function



// All refrence (non-primitive) datatypes are called fuctions, and function's datatype is called object fuction. 

