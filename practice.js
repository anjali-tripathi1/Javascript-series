
function addTwoNumbers (number1, number2) {
    console.log(number1 + number2);
    
}

addTwoNumbers(2, 4)

function addTwoNumbers (number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
console.log("Result:", result);

function loginUserMessage(username = "Sam") {
    if(username === undefined){
        console.log(`Please enter your username`);
        
    }
    if(!username){
        console.log(`Please enter your username`);
        
    }
    console.log(`${username} just logged in`);
    
}

loginUserMessage("Anjali")
loginUserMessage("")
loginUserMessage()

function calculateCartPrice (val1, val2, ...num1) {
      return num1
}

console.log(calculateCartPrice(200, 300, 500, 800, 1000));

const myObj = {
    Coursename : "Js Series",
    Price : 399
}

function handleobject (anyobject){
     console.log(`coursename is: ${anyobject.Coursename} and Price is: ${anyobject.Price}`);
     
}

handleobject(myObj)
handleobject({
    Coursename : "Java",
    Price : 599
})

const myArray = [100, 400, 600, 800, 1000]
function returnSecondValue (getArray) {
      return  getArray[3]  
}

console.log(returnSecondValue(myArray))
console.log(returnSecondValue([500, 800, 1100, 1400, 1700]))

if (true) {
   let a = 10
   const b = 20
   var c = 30
}

// console.log(a);
// console.log(b);
console.log(c);











































