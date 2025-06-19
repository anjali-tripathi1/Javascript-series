






function sayMyName(){
    console.log("A");
    console.log("n");
    console.log("j");
    console.log("a");
    console.log("l");
    console.log("i");
    
}

sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return  number1 + number2
    
}

// addTwoNumbers(3, 5)
const result = addTwoNumbers(3, 5)
console.log("Result ", result);

function loginUserMessage(username = "sam"){
    //   if(username === undefined){
    //         console.log("Please enter your username");
            
    //   }
      if(!username){
           console.log("please enter your name");
           return
      }
      return `${username} just Logged in`
}

// console.log(loginUserMessage("Anjali"))
console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
        return  num1
}

console.log(calculateCartPrice(100, 200, 300, 400, 500))


const user = {
    username : "Anjali",
    Price : 199
}

function handleobject(anyobject){
       console.log(`Username is ${anyobject.username}  and Price is ${anyobject.Price}`);
       
}

handleobject(user)
handleobject({
    username : "Anjali",
    Price : 399
})

const myNewArray = [100, 200, 300, 400, 500]

function returnSecondValue(getArray){
     return getArray[4]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 500, 800, 1000]));
 



















 











 






 


















  
  
     
   
   
   
   
   
   
   
   
   





























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 