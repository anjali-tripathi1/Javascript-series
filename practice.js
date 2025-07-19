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



function calculateSum(inputNumber){
    if(inputNumber < 1){
        throw new Error("not float values")
    }
    const string = inputNumber.toString()
    const split = string.split('')
    
    let sum = 0
    split.forEach( (num) => {
        // console.log(parseInt(num));
        sum = sum + parseInt(num)
    })

    return sum 
}

console.log((calculateSum(96)));


function calculateSums (inputNumber) {
   
      let number = inputNumber
      let sum = 0
      while (number > 0) {
          let lastDigit = number % 10
          number = Math.floor(number / 10)
          sum = sum + lastDigit
      }

      return sum 
}

console.log(calculateSums(456));











































 
 
  

























































 























