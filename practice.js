
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

(function aurcode(){
     console.log(`DB Connected`);
     
})()

 




















 











 






 


















  
  
     
   
   
   
   
   
   
   
   
   





























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 