
function mySayName (){
      console.log("A");
      console.log("n");
      console.log("j");
      console.log("a");
      console.log("l");
      console.log("i");
      
}

mySayName()

// function addTwoNumbers(number1, number2){
//       console.log(number1 + number2);
      
// }

// addTwoNumbers(3, 5)

function addTwoNumbers(number1, number2){
      // let result = number1 + number2
      // return result
      return number1 + number2
}

addTwoNumbers(3, 5)
const result = addTwoNumbers(3, 5)
console.log("Result:", result);


function loginUserMessage(username = "Sam"){
      if(username === undefined){
           console.log("Please enter your name");
           return
      }

      if(!username){
            console.log("please enter your name");
            return
      }
      return `${username} just logged In`
}

console.log(loginUserMessage("Anjali"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
      return num1
}

console.log(calculateCartPrice(100, 200, 300, 400, 500)) 

// const user = {
//       username : "Anjali",
//       Price : "199"
// }

function handleobject(anyobject){
      console.log(`${anyobject.username} and Price is :- ${anyobject.Price}`);
      
}

// handleobject(user)

handleobject({
      username : "Anjali",
      Price : "199"
})

const myArray = [100, 200, 300, 400, 500]

function returnSecondValue(getArray){
      return getArray[4]
}

console.log(returnSecondValue(myArray))
console.log(returnSecondValue([100, 300, 500, 1000, 1500, 2000]));

let a = 300

if(true){
  let a = 10
  const b = 20
  console.log("Inner:", a);
  console.log("Inner:", b);
  
}


console.log(a);
// console.log(b);
// console.log(c);

function one(){
      const username = "Anjali"
      function two(){
            const website = "youtube"
            console.log(username);

            }
      //    console.log(website);

         two()   
}

// one()

if (true) {
    const username = "Anjali"
    if(username === "Anjali"){
        const website = " youtube"
        console.log(username + website);
        
    }

//     console.log(website);

}

// console.log(username);

console.log(addone(5))

function addone(num){
     return num + 1
}



const addTwo = function(num){
     return num + 2
}

console.log(addTwo(5))
    
// this is called expression, in javascript variables are powerful and they can hold anything.


const user = {
      username : "Anjali",
      Price : "399",

      welcomeMessage : function (){
            console.log(`${this.username}, Welcome to website`);
            console.log(this);
            
      }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage() 

console.log(this);

function chai (){
      console.log(this);
      
}

chai()

 function chai2 (){
     let username = "Anjali"
     console.log(this.username);
     
}

chai2()





const course = {
      coursename : "Js series",
      Price : 199
}

// const {coursename} = course

console.log(course.coursename);

let data = [383,23, 45, 92,92, 122]
data.push("Anjali")
data.unshift("Aman")
data.shift()
data.pop()
console.log(data);



let myNumber = 4

if(myNumber > 18){
     console.log("My number is greater than 18");
     
} else {
      console.log("my number is less than 18");
      
}






































 











 






 


















  
  
     
   
   
   
   
   
   
   
   
   





























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 