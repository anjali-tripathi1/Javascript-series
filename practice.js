// function checkOddEven (num) {
//     // return num % 2 === 0 ? "even" : "odd"
// //    const remainder = num % 2

// //    if (remainder === 0) {
// //        return "even"
// //    } else {
// //         return "odd"
// //    }

//  switch (num % 2) {
//        case 0 :
//           return "even"
//          break;

//        default :
//            return "odd"
           
//          break;  
//  }
// }

// console.log(checkOddEven());


// function checkSmallestNumber (a, b, c) {
//     //  if (a < b && a < c ) {
//     //        return a;
//     //  } else if (b < c && b < a) {
//     //        return b;
//     //  }  else if (c < a && c < b) {
//     //        return c;
//     //  }

//     // return a;

//     let smallestNumber = a;
//     if (b < smallestNumber) {
//          smallestNumber = b;
//     }
//     if (c < smallestNumber) {
//           smallestNumber = c;
//     }

//     return smallestNumber;
// }

// console.log(checkSmallestNumber(3, 3, 1));


// function checkSmallestNumber (a, b, c) {
//     // if (a < b && a < c) {
//     //      return a;
//     // } else if (b < c && b < a) {
//     //      return b;
//     // } else if (c < a && c < b) {
//     //      return c;
//     // }

//     // return a;

//     let smallestNumber = a;
//     if (b < smallestNumber) {
//          smallestNumber = b;
//     } 

//     if (c < smallestNumber) {
//          smallestNumber = c;
//     }

//     return smallestNumber;
// }

// console.log(checkSmallestNumber(3, 3, 1))

// function checkOddEven (num) {
//     return num % 2 === 0 ? "even" : "odd"
//     // let remainder = num % 2
//     // if(remainder === 0){
//     //       return "even"
//     // }  else {
//     //      return "odd"
//     // }
// }

// console.log(checkOddEven(56));

// function calculateArea (length, width) {
//     if(length <= 0){
//          throw new Error ("Length should be a positive number")
//     }

//     if (width <= 0) {
//          throw new Error ("width should be positive number")
//     }
//     console.log(length * width);
    
// }

// calculateArea(4, -3)


// function checkOddEven (num) {
//        return num % 2 === 0 ? "even" : "odd"
//     //  const remainder = num % 2
//     //  if(remainder === 0){
//     //       return "even"
//     //  } else{
//     //      return "odd"
//     //  }
// }

// console.log(checkOddEven(89))

// calculateArea = (width, length) => {
//     if(width <= 0){
//         throw new RangeError("width should be positive number")
//     }

//     if(length <= 0){
//         throw new RangeError("length should be positive number")
//     }

//      return width * length
     
// }

// console.log(calculateArea(3, 7));


// function checkSmallestNumber (a, b, c) {
//     //  if (a < b && a < c ){
//     //        return a;
//     //  } else if (b < a && b < c) {
//     //         return b;
//     //  } else if (c < a && c < b) {
//     //         return c;
//     //  }

//     //  return a;

//     let smallestNumber = a;
//     if (b < smallestNumber) {
//          smallestNumber = b;
//     }  else if (c < smallestNumber) {
//          smallestNumber = c;
//     }

//     return smallestNumber
// }

// console.log(checkSmallestNumber ( 41, 40, 41));


//  function addTwoNumbers (num1, num2) {
//       return num1 + num2
    
    
//  }

 
//  console.log(addTwoNumbers(4, 9))

//  function loginUserMessage (username) {
//     // if(username === undefined) {
//     //      return (`please enter your username`);
         
//     // } 

//     if (!username) {
//         return `Please enter your username`
//     }
//     //  console.log(username, "just logged in");
     
//  }
 
// //  loginUserMessage("Anjali")
// //  loginUserMessage("")
// console.log(loginUserMessage());

// function showNum (val1, val2, ...num1) {
//      return num1
// }

// console.log(showNum(100, 200, 300, 400, 500));

// const myArray = [100, 200, 300, 400, 500]

// function returnSecondValue(getArray) {
//       return getArray[1]
// }

// console.log(returnSecondValue(myArray));
// console.log(returnSecondValue([600, 800, 1000, 1200, 1400]));

// function one () {
//     const username = "Anjali"

//     function two(){
//          const website = "youtube"
//          console.log(username);
         
//     }

//     // console.log(website);

//     two()
    
// }

// one()

// if (true) {
//    const username = "Anjali"

//     if (username === "Anjali") {
//         const website = " youtube"
//           console.log(username + website);
          
//     }

// }

// function addone (num) {
//     return num + 3
// }

// console.log(addone(5));

// const user = {
//     username : "Anjali",
//     age  : 40,


//     welcomeMessage : function () {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
        
//     }
// }

// user.welcomeMessage("Anjali")
// user.username = "Saroj"
// user.welcomeMessage()

// function chai () {
//     let username = "Anjali"
//     console.log(this.username);
    
//     // console.log(this);
    
// }
  
// chai()

// const chai1 = function () {
//     let username = "Saroj"
//     console.log(this.username);
    
// }

// chai1()
 
// const chai2 = () => {
//     let username = "Anjali"
//     console.log(this.username);
    
// }

// chai2()


function calculateArea (length, width) {
    if(length <= 0){
         throw new Error("length should be positive number")
    }

    if(width <= 0){
        throw new Error("width should be positive number")
    }
     console.log(length*width);
     
}

calculateArea(9, 8)

function checkOddEven (num){
    return num % 2 === 0 ? "even" : "odd"
    // const remainder = num % 2
    // if(remainder === 0){
    //     return "even"
    // }  else {
    //     return "odd"
    // }
}

console.log(checkOddEven(89));

// function findSmallestNumber (a, b, c) {
//     let smallestNumber = a;
//     if (b < smallestNumber) {
//           smallestNumber = b;
//     } else if (c < smallestNumber) {
//           smallestNumber = c;
//     }

//     return smallestNumber
//     //  if (a < b && a < c) {
//     //        return a;
//     //  }  else if (b < a && b < c) {
//     //        return b;
//     //  }  else if (c < a && c < b) {
//     //        return c;
//     //  }
//     //  return a;
// }

// console.log(findSmallestNumber(3, 3, 7));
 

//  const array = [a, b, c].sort(a < b && a < c || b < c && b < a || c < a && c < b)

// function reverseString (inputString) {
//     let result = ""
//     for(let i = inputString.length - 1; i >= 0; i-- ){
//         result = result + inputString[i]
//         // console.log(inputString[i]);
//     }
    
//     return result
// }

// console.log(reverseString("Anjali"));



// function reverseString (inputString){
//     if (typeof inputString !== 'string') {
//          throw new Error("only strings allowed");
         
//     }
//     let result = ""
//     for (let i = inputString.length -1; i >= 0; i--){
//            result  = result + inputString[i]
//         //    result += inputString
//     }
//     return result
// }
 
// console.log( reverseString("Anjali"));
// console.log(reverseString("software Engenier"));
// // console.log(reverseString(12345));

// function reverseString2  (inputString) {
//       const splitArray = inputString.split('')
//       const reverse =   splitArray.reverse()
//       const result = reverse.join('')
//     //   console.log(result);
//       return result      
// }
 
//  console.log(reverseString2("Anjali")    );
 
// function factorial (inputNumber) {
//     if(inputNumber < 0 ){
//          throw new Error("factorial should be positive or greater than 0")
//     }

//     if (typeof inputNumber === 'string') {
//          throw new Error("factorial should be a number")
//     }
//     let result = 1
//     for(let i = 1; i <= inputNumber; i++){
//         //   result = result * i 
//           result *= i 
//     }
//     return result
    
// }

// console.log(factorial(12));

// function factorialUsingRecurtion(inputNumber){
//     console.log("inputNumber is", inputNumber);
    
      
//     if (inputNumber == 0 || inputNumber == 1) {
//           return 1
//     }

//     return inputNumber * factorialUsingRecurtion(inputNumber-1)
// }
 
// console.log(factorialUsingRecurtion(5));

// function isLeapYear(num){
//     if(isNaN(num)){
//          throw new Error("value should be a number")
//     }
//     return num % 4 === 0 ? "leap year true" : "leap year false"
//     //  const year = num % 4 
//     //  if (year === 0) {
//     //      return "leap year true"
//     //  }  else {
//     //      return "leap year false"
//     //  }
// }

// console.log(isLeapYear(2036));




 
// function reversestring (inputString) {
//     if(typeof inputString !== 'string') {
//         throw new Error("value should be string");
        
//     }
//      let result = ""
//      for(let i = inputString.length - 1; i >= 0; i--) {
//           result = result + inputString[i]
//      }
  
//      return result
// }

// console.log(reversestring("Saroj"));

// function reverseString2 (inputString) {
//      const splitArray = inputString.split('')
//      const reverse = splitArray.reverse()
//      const string = reverse.join('')
//      console.log(string);
     
// }

// reverseString2("Anjali")

// function calculatefactorial(inputNumber){
//     if(typeof inputNumber === 'string'){
//         throw new Error("value should be in number");
        
//     }
//     let result = 1
//     for(let i = 1; i <= inputNumber; i++){
//           result = result * i 
//     }
//     return result
// }

// console.log(calculatefactorial(6));

// function calculateFactorialUsingRecursion(inputNumber){
//      if (inputNumber == 0 || inputNumber == 1) {
//           return 1
//      }

//      return inputNumber * calculateFactorialUsingRecursion(inputNumber - 1)
// }

// console.log(calculateFactorialUsingRecursion(6));

// function reverseString (inputString) {
//     let result = ""
//     for(let i = inputString.length - 1; i >= 0; i--){
//         result = result + inputString[i]
           
//     }
     
//      return result
// }

// console.log( reverseString("Anjali"));

// function reverseString2(inputString){
//     if(typeof inputString !== 'string'){
//           throw new Error('value should be in string')
//     }
//      const splitArray = inputString.split('')
//      const reverse = splitArray.reverse()
//      const string = reverse.join('')
//      console.log(string);
     
// }

// reverseString2("Anjali")
// reverseString2("software Engineer")
// reverseString2("Hagoo")

// function calculatefactorial (inputNumber) {
//     if(typeof inputNumber === 'string'){
//           throw new Error("value should be in number")
//     }
//     let result = 1
//       for(let i = 1; i <= inputNumber; i++){
//             result = result * i 
            
            
//       }
//       return result
// }

// console.log(calculatefactorial(6));
// console.log(calculatefactorial(9));

// function calculateFactorialUsingRecursion(inputNumber){
//      if(inputNumber == 0 | inputNumber == 1){
//            return 1
//      }

//      return inputNumber * calculateFactorialUsingRecursion(inputNumber - 1)
               
// }               

// console.log(calculateFactorialUsingRecursion(5));


// function isLeapYear(num){
//      const year = num % 4
//      if (year === 0) {
//           return "true"
//      } else {
//         return "false"
//      }
     
// }

//  console.log("leap year is", isLeapYear(2025));

//  function findSmallestNumber (a, b, c){
//     let smallestNumber = a
//     if(b < smallestNumber){
//          smallestNumber = b
//     } 

//     if(c < smallestNumber) {
//          smallestNumber = c
//     }

//     return smallestNumber
//     //  if(a < b && a < c){
//     //      return a
//     //   } 
//     //  if(b < c && b < a) {
//     //      return b
//     //   }  
//     //   if(c < a && c < b){
//     //     return c
//     //   }

//     //   return a 
//  }

//  console.log(findSmallestNumber(9, 15, 14));

//  function checkOddEven (num) {
//     //  return num % 2 === 0 ? "even" : "odd"
//     const remainder = num % 2
//     if(remainder === 0){
//         return "even"
//     } else {
//         return "odd"
//     }
//  }

// console.log(checkOddEven(89));

// function calculateArea(length, width){
//     if(length <= 0){
//          throw new Error("length should be positive number")
//     }

//     if(width <= 0){
//          throw new Error("width should be positive number")
//     }
//      return length * width
// }

// console.log(calculateArea(7, 9));



// function calculateSum(inputNumber){
//     if(inputNumber < 1){
//         throw new Error("not float values")
//     }
//     const string = inputNumber.toString()
//     const split = string.split('')
    
//     let sum = 0
//     split.forEach( (num) => {
//         // console.log(parseInt(num));
//         sum = sum + parseInt(num)
//     })

//     return sum 
// }

// console.log((calculateSum(96)));


// function calculateSums (inputNumber) {
   
//       let number = inputNumber
//       let sum = 0
//       while (number > 0) {
//           let lastDigit = number % 10
//           number = Math.floor(number / 10)
//           sum = sum + lastDigit
//       }

//       return sum 
// }

// console.log(calculateSums(456));



// var name = "Anjali"
// name = "Saroj"
// console.log(name);

// var name = "Ramesh"

// let age = 32
// age = 45

// const city = "Jaipur"
// console.log(city);

// console.log(name);


// let name = "Anjali"
// console.log(typeof name);

// function calculateTables(a){
//     if(typeof a== 'string'){
//        throw new Error("value should be a number")
//     }
//      for(let i = 1; i <= 10; i++){
//          console.log(`value of a ${a} and value of i ${i}  ${a * i}`);
         
//      }
// }

// calculateTables(13)

// function calculateTables (tableof, tabletill){
//     for(let i = tableof; i <= tableof * tabletill; i = i + tableof){
//           console.log(i);
          
//     }
// }

// calculateTables(2, 10)


function calculatefactorial(inputNumber) {
    let result = 1
    for(let i = 1; i <= inputNumber; i++) {
        result = result * i 
    }

    return result
}

console.log(calculatefactorial(6));

function calculateFactorialUsingRecursion (inputNumber) {
     if(inputNumber == 0 || inputNumber == 1) {
          return 1
     }

     return inputNumber * calculateFactorialUsingRecursion (inputNumber - 1) 
}

 
console.log(calculateFactorialUsingRecursion(6));

function sum (num) {
    let number = num
    let sum = 0
    while (number > 0) {
        let lastDigit = number % 10
        number = Math.floor(number / 10)
        sum = sum + lastDigit
    }
    return sum
}

console.log(sum(64));


function sums (inputNumber) {
     let number = inputNumber
     let sum = 0
     while (number > 0) {
          let lastDigit = number % 10
          number = Math.floor(number / 10)
          sum = sum + lastDigit
     }

     return sum
    }

    console.log(sums(357));
    
  function sums (num) {
    for(let i = 1; i <= 10; i++){
          console.log(num * i);
          
    }
     
      
  }

//   sums(4)

  function calculateSum(tableof, tabletill){
       for(let i = tableof; i <= tableof * tabletill; i = i + tableof){
             console.log(i);
             
       }
  }
   
  calculateSum(3, 10)
   
    
function reverseString (inputString){
    let result = ''
   for(let i = inputString.length - 1; i >= 0; i--){
       result = result + inputString[i]
          
   }

   return result
    
}

console.log(reverseString("Anjali"));
 

function calculatefactorial (inputNumber) {
    if(inputNumber == 0 || inputNumber == 1){
          return 1
    }

    return 
}

console.log(calculatefactorial(5));


let userName =  new String("Anjali-Tripathi")

console.log(userName.toUpperCase());
console.log(userName.substring(0, 5));
console.log(userName.slice(0, -8));

const space = "   Anjali  "
console.log(space.trimEnd());

const url = "https://anjali%20Tripathi.com"
console.log(url.replace('%20', '-'));
console.log(url.includes('Anjali'));

console.log(userName.split(' '));

const value1 = "Hello"
const value2 = "Anjali"
console.log(value1.concat(", ", value2));

const number = new Number(2)
console.log(number.toString().length);

const myNumber = 25.887632
console.log(myNumber.toPrecision(5));

const hundreads = 200000000
console.log(hundreads.toLocaleString('en-In'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Math.abs(-8));
console.log(Math.floor(4.9));
console.log(Math.max(5, 8, 9, 3, 2));
console.log(Math.min(5, 8, 9, 3, 2));
console.log(Math.pow(8, 3));

const max = 10
const min = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

let date = new Date()
console.log(date.toLocaleString());

console.log(Math.floor(Date.now() / 1000));
console.log(Math.floor(date.getTime() / 1000));

console.log(date.toLocaleString('default', {
      weekday : 'long',
      month : '2-digit',
      day : 'numeric',
      year : 'numeric',
      minute : '2-digit',
      hour : 'numeric'
}));


const array = ["Anjali", "Saroj", "Aditya", 200, 300, true, {name: 'Sam', age: '20'}, ["superman", "Steve", "sameer"]]
console.log(array[6].age);

const myArray = new Array( 1, 2, 3, 4, 5)
console.log(myArray.length);

// myArray.push(8)
// myArray.pop()
// myArray.shift()
// myArray.unshift(6)

console.log(myArray);
console.log(myArray.indexOf(19));

const newArray = myArray.join('')
console.log(newArray);

const myArr1 = myArray.slice(1, 3)
console.log(myArr1);

const myArr2 = myArray.splice(1, 3)
console.log(myArr2);

const myHeroes = ["superman", "spiderman", "Ironman"]
const dcHeroes = ["doga", "shaktiman", "nagraj"]
// myHeroes.push(dcHeroes)
// console.log(myHeroes[3][0]);

// console.log(myHeroes.concat(dcHeroes));
const myValues = myHeroes.concat(dcHeroes)
console.log(myValues);

const anotherArray = [...myHeroes, ...dcHeroes]
console.log(anotherArray);

const myNewArray = [1, 2, 3,[4, 5], [6, 7, 8,[3, 4, 5]]]
console.log(myNewArray.flat(2));

console.log(Array.isArray("Anjali"));
console.log(Array.from("Anjali"));
console.log(Array.from([123]));
console.log(Array.from({name : 'Anjali'}));

let score1 = 100
let score2 = "Anjali"
let score3 = true
let score4 = ["Anjali", 100, true]
let score5 = {name : "Saroj", age:20}
let score6 = function (name) {
    console.log(name);
    
}

console.log(Array.of([score1, score2, score3, score4, score5, score6]));

const mySym = Symbol("key1")
const myObject = {
     name : "Anjali",
     "full Name" : "Anjali Tripathi",
     [mySym] : "myKey1",
     age : 20,
     email : 'anjali@.com',
     lastLoginDays : ["Monday", "Sunday"],
    
     
}

console.log(myObject["full Name"]);
console.log(myObject[mySym]);
console.log(myObject);

myObject.email = "saroj@.com"
// Object.freeze(myObject)
myObject.email = "saroj7398.com"
console.log(myObject);

myObject.greeting = function () {
     console.log("Hello, JsUser");
     
}

console.log(myObject.greeting());

myObject.greetingTwo = function () {
     console.log("Hello User", this.name);
     
}

console.log(myObject.greetingTwo());















 




































































 
 
  

























































 























