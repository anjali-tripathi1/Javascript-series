 
 const user = {
     username : "Anjali",
     Price : 999,

     WelcomeMessage : function() {
          console.log(`${this.username}, welcome to website`);
          console.log(this);
          
     }
 }

//  user.WelcomeMessage()
//  user.username = "Sam"
//  user.WelcomeMessage()

console.log(this);  // empty object

 // this represents a current context, context means what are we talking about. 

// when this javascript engine runs inside browser the most global object is window object. 

// function chai(){
//     let username = "Anjali"
//     console.log(this.username);  
    
// }

// chai()

const chai = function (){
     let username = "Anjali"
     console.log(this.username);
     console.log(this);
     
     
}

chai()

// we can use (this) inside object but we can't use (this) inside function 


// how to declare functions through arrow function

// here we remove function so this is called arrow function 

const chai1 = () => {
     let username = "Anjali"
     // console.log(this.chai1);
     console.log(this);
     
     
}

chai1()

// () => {}  this is arrow function and we can store this in variable

const  addTwoNumbers = (num1, num2) => {
     return  num1 + num2 
}

console.log(addTwoNumbers(3, 5));


// implicit return here we don't need to use these {} currlibraces.
// implicit means I accept that you don't need to write this return because it's only one line statement.

const addTwoNumber = (num1, num2) => num1 + num2

console.log(addTwoNumber(3, 6));

const addTwo = (num1, num2) => (num1 + num2)  // in react this syntax is important.
console.log(addTwo(5, 5));

// if we write in {} so we need to write return keyword but if we write in () so we don't need to write return.

// when we use return keyword then that is called explicit return.

// if we add object 
const addnumber = (num1, num2) => ({username : "Anjali"})
console.log(addnumber(3, 5));

// when we use loop
// const myArray = [3, 4, 6, 7, 8, 5]

// myArray.forEach(function () {})
// myArray.forEach(() => {})