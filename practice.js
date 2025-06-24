
function addTwoNumbers (number1, number2){
     console.log(number1 + number2);
     
}

addTwoNumbers(4, 5)

function addTwoNumbers (number1, number2) {
     let result = number1 + number2
     return result
    //  return number1 + number2
}

// console.log(addTwoNumbers(3, 4))

const result = addTwoNumbers(3, 4)
console.log("Result:", result);


function loginUserMessage (username = "Sam"){
    if(username === undefined){
         console.log("Please enter your name");
         
    }

    if(!username){
         console.log("Please enter your name");
         
    }
     console.log(`${username} just Logged In`);
     
}

loginUserMessage("Anjali")
loginUserMessage("")
loginUserMessage()

const user = {
     username : "Anjali",
     age : 19
}

function handleobject (anyobject){
      console.log(`username is: ${anyobject.username} and age is: ${anyobject.age}`);
      
}

handleobject(user)
handleobject({
     username : "Saroj",
     age : 40
})

const myArray = [100, 200, 300, 400, 500]

function handlearray(getArray){
      return getArray[2]
     
}

console.log(handlearray(myArray))
console.log(handlearray([500, 600, 700, 800, 900]));

var c = 300

if(true){
   let a = 10
   const b = 20
//    var c = 30
  console.log("INNER:", a);
  
}

// console.log(a);
// console.log(b);
console.log(c);

 function one(){
     const username = "Anjali"

     function two (){
          const website = "youtube"
          console.log(username);
          
     }
     // console.log(website);
     

     // two()
 }

 one()

 

 if (true) {
     const username = "Anjali"

     if (username === "Anjali") {
          const website = " youtube"
          console.log(username + website);
          
     }

     // console.log(website);
     
 }

//  console.log(username);

console.log(addone(5))

function addone (num){
   return  num + 1
}


console.log(addTwo(5))

function addTwo(num){
     return num + 2
}



const addThree = function (num) {
     return num + 3
      
} 

console.log(addThree(5))

// const myobj = {
//      username : "Anjali",
//      Price : 399,

//      welcomeMessage : function(){
//           console.log(`${this.username}, welcome to website`);
//           // console.log(this);
          
//      }
// }

// myobj.welcomeMessage()
// myobj.username = "Saroj"
// myobj.welcomeMessage()

// // console.log(this);

// function chai(){
//      console.log(this);
     
// }

// function chai(){
//     let username = "Anjali"
//     console.log(this.username);
    
// }

// chai()

// const chai1 = function(){
//      let username = "Saroj"
//      console.log(this.username);
         
// }

// chai1()

// const chai = () => {
//      let username = "Anjali"
//      console.log(this.username);
     
// }

// chai()

// const addTwoNumber = (num1, num2) => {
//       return num1 + num2
// }

// console.log(addTwoNumber(3, 2))

// const addTwoNumber = (num1, num2) => num1 + num2

// console.log(addTwoNumber(4, 6))

const addTwoNumber = (num1, num2) => (num1 + num2)

console.log(addTwoNumber(8, 7));

const addnumber = (num1, num2) => ({username : "Anjali"})

console.log(addnumber(6, 7));


// function chai (){
//      console.log(`DB Connected`);
     
// }

// chai()

// (function aurcode(){
//      console.log(`DB Connected`);
     
// })()

 
(function myCode(){
     console.log(`MY Code Printed`);
     
})();


 ((name) => {
     console.log(`My code printed ${name}`);
     
 })("Anjali")

let val1 = 10
let val2 = 15
function addNum(num1, num2){
    return num1 + num2
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 15)

console.log(`Result1: ${result1} `);
console.log(`Result2: ${result2} `);

const userLoggedIn = true
const temprature = 41

if(userLoggedIn === true){
     console.log(`Login Excuted`);

}

if(temprature < 50){
     console.log(`Temprature Excuted`);
     
}

if(temprature === 41){
     console.log(`Less than 50`);
} else{
     console.log(`Greater than 50`);
     
}

console.log('greater than 20');

const score = 200
if(score > 100){
     const power = "fly"
    console.log(`User Power: ${power}`);
    
}

// console.log(`User power: ${power}`);

const balance = 1000
if(balance > 500)  console.log(`balance excuted`), console.log(`excuted`);

const salary = 2000
if(salary < 1500){
    console.log(`Less than 1500`);
    
} else if(salary < 1600){
     console.log(`Less than 1600`);
     
} else if(salary < 1700){
     console.log(`Less than 1700`);
     
} else if(salary < 1800){
     console.log(`Less than 1800`);
     
} else{
     console.log(`Greater than 2500`);
     
}

const userAdmittedIn = true
const debitCard = true

if(userLoggedIn && debitCard && 2 == 2){
      console.log(`Allow to buy course`);
      
}

const loggedInFromGoogle = true
const loggedInFromEmail =  false
if(loggedInFromEmail || loggedInFromGoogle){
     console.log(`User Logged In`);
     
}

let val3;
val3 = 5 ?? 10
val3 = null ?? 15
val3 = undefined ?? 20
val3 = null ?? 16 ?? 18
console.log(val3);

const IceTeaPrice = 100
IceTeaPrice <= 80 ? console.log(`Less than 80`) : console.log(`More than 80`);


 const month = "september"
 switch (month) {
     case "jan":
          console.log("January");
       break;

         case "feb":
          console.log("Feb");
       break;

         case "march":
          console.log("March");
       break;

         case "april":
          console.log("April");
       break;

         case "may":
          console.log("May");
       break;

         case "june":
          console.log("June");
       break;

         case "july":
          console.log("July");
       break;
 
     default:
          console.log(`Default case match`);
        break;
 }

//  const userEmail = "A@Anjali.ai"
//  const userEmail = ""
// const userEmail = []
// const userEmail = {}
const userEmail = "false"

 if(userEmail){
     console.log(`Got useremail`);
     
 } else{
     console.log(`Don't have userEmail`);
     
 }

 const emptyArray = []
 if(emptyArray.length === 0){
     console.log(`Array is empty`);
     
 }

 const emptyObject = {}
 if(Object.keys(emptyObject).length === 0){
      console.log(`Object is empty`);
      
 }

 for (let index = 0; index <= 10; index++) {
     const element = index;
     console.log(element);
     
 }

 for (let i = 0; i <= 10; i++) {
     const element = i;
     if(element == 5){
         console.log("five is best number");
         
     }

      console.log(element);
 }

 for (let i = 1; i <= 10; i++) {
     console.log(`Outer loop value: ${i}`);
     for (let j = 1; j <= 10; j++) {
          // console.log(`Inner loop value: ${j} and Inner loop: ${i}`);
          console.log(i + '*' + j + ' = ' + i*j )
          
     }
     
 }

 const myArr = ["shinchan", "Doremon", "pokemon"]
 console.log(myArr.length);
 for (let index = 0; index < myArr.length; index++) {
     const element = myArr[index];
     console.log(element)
 }

 for (let i = 1; i <= 10; i++) {
     // const element = i;
     for (let j = 5; j <= 10; j++) {
          const element = j;
          console.log(i + '+' + j + ' = ' + i+j);
          
     }
 }

 for (let index = 1; index <= 20; index++) {
     
     if(index == 5){
        console.log(`5 is Detected`)
        continue
     }

     console.log(`value is: ${index}`);
     
 }

 let index = 1
 while (index <= 10) {
     console.log(`Value is ${index}`);
     //  index++
      index = index + 3
 }


 const myArray1 = ["Anjali", "Aman", "Aditya", 100, 200, true, false]
 let item = 1
 while (item < myArray1.length) {
     console.log(`value is: ${myArray1[item]}`);
     // item++
     item = item + 2
 }


 





 


















  
  
     
   
   
   
   
   
   
   
   
   





























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 