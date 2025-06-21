
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

let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);


































 











 






 


















  
  
     
   
   
   
   
   
   
   
   
   





























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 