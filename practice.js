
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

var c = 300

if (true) {
   let a = 10
   const b = 20
   
   console.log("Inner:", a);
   
}

// console.log(a);
// console.log(b);
console.log(c);

function One () {
    const username = "Anjali"

    function Two () {
        const website = "youtube"
        console.log(username);
        
    }

    // console.log(website);

    Two()
    
}

One()

if (true) {
    const username = "Anjali"

    if (username === "Anjali") {
          const website = " youtube"
          console.log(username + website);
          
    }

    // console.log(website);
    
}

// console.log(username);

console.log(addone(5))

function addone (num) {
    return num + 1
}


console.log(addone(3))

function addone (num) {
    return num + 1
}



const myFunction = function(num) {
   return num + 1
}

console.log(myFunction(7))

const user = {
    username : "Anjali",
    age : 20,
    location : "banda",

    welcomeMessage : function () {
        // console.log(`${this.username}, welcome to website`)
        console.log(this);
        
    }
}

user.welcomeMessage()
// user.username = "Saroj"
// user.welcomeMessage()

console.log(this);

// function chai() {
//     console.log(this);
    
// }

// chai()

// function chai () {
//      let username = "Anjali"
//      console.log(this.username);
    
// }

// chai()

// const chai = function () {
//     let username = "Anjali"
//     // console.log(this);
//     console.log(this.username)
// }

// chai()
    
// const chai1 = () => {
//     // let username = "Anjali"
//     console.log(this.username)
    
// }

// chai1()

const addTwoNumber = (num1, num2) => {
    //   console.log(num1 + num2);
    //   let nums = num1 + num2
    //   return nums
    return num1 + num2
}

// console.log(addTwoNumber(5, 7))
const nums = addTwoNumber(3, 8)
console.log(nums);


// const user1 = {
//     username : "Anjali",
//     age : 20,

//     welcomeMessage : function () {
//         console.log(`${this.username}, Welcome to website`);
//         console.log(this);
        
//     }
// }

// user1.welcomeMessage()
// user1.username = "Sam"
// user1.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Anjali"
//     console.log(this.username);

    
// }

const chai1 = function ()  {
    let username = "Anjali"
    console.log(this.username);
    
}

chai1()
















































