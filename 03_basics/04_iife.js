//  IIFE => Immidaitely Invoked fuction Expressions

// there  are two reasons
// 1. we don't want that our global scope is polluted.
// 2. fuctions are immedaitely excuted.

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()

// for avoiding problem of global scope polluted we use iife.
// () () this is iife syntax

(function chai(){
    console.log(`DB CONNECTED`);   // Named IIFE 
    
})();

// we write this iife in arrow function
// ( () => {} )()

    ( (name) => {
       console.log(`DB CONNECTED TWO ${name}`);   // Unnamed IIFE/ Simple IIFE
       
    } )('Anjali');
// add variable in console log or pass parameter
// this iife has invoked but he doesn't know where does it stop so we need to end this, for ending this we need to use semicolon (;)