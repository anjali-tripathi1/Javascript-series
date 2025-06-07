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





// ######################################################

// In Javascript How does memory work =>
// There are two types of memory

// stack (primitive) => stack memory is used with primitive datatypes. whenever stack memory is used then you get copy of whatever you declared.


// Heap (non-primitive) => Heap memory is used with non-primitive datatypes. whenever memory is define in heap 
// or object or something inside heap so from there you get refrence of original value or change in original value.

// Ex .

// String datatype
let  myYoutubename = "AnjaliTripathidotcom" 

let  anothername = myYoutubename
anothername = "honeyboney"

console.log(`Result of change in string :- ${myYoutubename}`);  
console.log(`Result of change in string1 :- ${anothername}`);     


// number datatype
let myNumbervalue = 100

let anothervalue = myNumbervalue
anothervalue = 100.5

console.log(`Result of change in value number :- ${myNumbervalue}`);
console.log(`Result of change in value number1 :- ${anothervalue}`);


// boolean datatype
let  isSubmitted = true

let  anotherSubmitted = isSubmitted
anotherSubmitted = false

console.log(`Result of change in boolean :- ${isSubmitted}`);
console.log(`Result of change in boolean1 :- ${anotherSubmitted}`);

// Inside myYoutubename value is old and anothername's value is change. actually value is not given rather you get a copy so you change in copy that means original value won't change .




// obj

 let userOne = {
     email: "user@google.com",
     upi: "user@ybl"
 }


 let userTwo = userOne
//  Inside object to access variables we use dot (.)
 userTwo.email = "Anjali@google.com"

console.log(`Result of change in object :- ${userOne.email}`);
console.log(`Result of change in object :- ${userTwo.email}`);


// inside heap anything goes only its refrence is availble, inside heap you get value's refrence, refrence means whatever you change or update that happens in original value. 


 

