 
//  console.log("Hello world");

//  function addTwoNumbers (num1, num2) {
      
//     //    console.log(num1 + num2);
//         let result = num1 + num2 
//         console.log(result);
        
//         // return result
//         // return num1 + num2
//  }

// //  addTwoNumbers(4*2, 1/0)
// //  const result = addTwoNumbers(-1, 5)
// //  console.log("result", result);

// function area(length, width) {
//     if (length <= 0) {
//           throw new RangeError ("length should be a positive number") 
          
         
//     }

//     if (width <= 0) {
//           throw new RangeError ("width should be a positive number") 
          
//     }  
    
//      let ar = length * width
//     // return ar
//     //  return length * width
//      console.log(ar);
//     //  console.log(length * width);
     
// }

// // area(2.5, -2/5)
// // area(35, 22)
// area(0, 5)
// // const ar = area(6, 8)
// // console.log("ar", ar);

 
// console.log("Hello world");
// function addTwoNumbers (num1, num2) {
//       // console.log(num1 + num2);
//       let result = num1 + num2
//       // return num1 + num2
//       console.log(result);
// }


// addTwoNumbers(-5, 2/0)
// // const result = addTwoNumbers(9,5)
// // console.log(result);

// function calculateArea (length, width) {
//       if (length <= 0) {
//             throw new RangeError ("length should be positive number")
//       }

//       if (width <= 0) {
//             throw new RangeError ("width should be positive number")
//       }
// //      console.log(length * width);
//       //   let area = length * width
//       //   console.log(area);
//         return length * width
        
     
// }

// // calculateArea(3, 5)
// const area = calculateArea(5, 1)
// console.log(`area is ${area}`);


// function checkIfEvenOrOdd (a) {
//       const remainder = a % 2
//       if (remainder === 0) {
//             return "even"
//       } 
//       else {
//             return "odd"
//       }
// }

//  console.log("92 is", checkIfEvenOrOdd(92))
//  console.log("-1 is", checkIfEvenOrOdd(-1))
//  console.log("-57 is", checkIfEvenOrOdd(-57))

//  // we can also do this with ternary operator

//  function checkIfEvenOrOdd2 (a) {
//       return  a % 2 === 0 ? "even" : "odd"
//  }

//  console.log(checkIfEvenOrOdd2(58))
// //  checkIfEvenOrOdd2(3)


// function checkEvenOdd (num) {
//       const remainder = num % 2

//       switch (remainder) {
//             case 0:
//                   console.log(`${num} is even `)
//                   break;
      
//               case 1:
//                   console.log(`${num} is odd `)
//                   break;     
//             default:
//                   console.log(`unexpected token`);
                  
//                   break;
//       }
// }

// checkEvenOdd(3)

// function findSmallNumber (a, b, c) {
//        if (a < b && a < c) {
//              return a 
//        } 

//        else if(b < c && b < a){
//            return b
//        }

//        else if(c < b && c < a){
//            return c
//        }
//        return a
// }

// console.log("findSmallNumber(3, 1, 6)", findSmallNumber(3, 1, 6));
// console.log("findSmallNumber(79, 312, 528)", findSmallNumber(79, 312, 528));
// console.log("findSmallNumber(-1, 0, -8)", findSmallNumber(-1, 0, -8));
// console.log("findSmallNumber(5, 5, 5)", findSmallNumber(5, 5, 5));
// console.log("findSmallNumber(5, 0, 5)", findSmallNumber(5, 0, 5));
// console.log("findSmallNumber(5, 8, 5)", findSmallNumber(5, 8, 5));

// //one more way

// function smallestOfThree (a, b, c) {
//       let smallestNumber = a
//       if (b < smallestNumber) {
//            smallestNumber = b
//       }
//       if (c < smallestNumber) {
//          smallestNumber = c
//       }

//       return smallestNumber
// }

// console.log(smallestOfThree(5, 6, 8))
// console.log(smallestOfThree(0, -8, -3))
// console.log(smallestOfThree(3, 3, 3))
// console.log(smallestOfThree(3, 3, 5))
// console.log(smallestOfThree(3, 3, 2))


// function checkNumber (a) {
//     if (typeof(a) === "string") {
//          throw new Error ("Please Input a Number")
         
//     }
// }

// console.log(checkNumber(1))

// function smallNumber (a, b, c) {
//      let smallnum = a < b ? (a < c ? a : c) : (b < c ? b : c)
//      return smallnum
// }

// console.log(smallNumber(3, 8, 6))

var myValue = 10
myValue = 5
var myValue = 15
console.log(myValue);

let myName = "Anjali"
myName = "Saroj"
console.log(myName);

const myCity = "Bengluru"
console.log(myCity);
console.table([myValue, myName, myCity])

const myString = "Anjali"
const myNumber = 100
const isAdmitted = true
const outsideTemp = null
let designation;

console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof isAdmitted);
console.log(typeof outsideTemp);
console.log(typeof designation);

console.log(typeof(myString));

let score = 33
let score1 = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined
let score5 = -1/0
let score6 = true
let score7 = false
let score8 = "Anjali"
let score9 = ""

console.log(`Datatype of score ${typeof score} and value is ${score}`);
console.log(`Datatype of score ${typeof score1} and value is ${score1}`);
console.log(`Datatype of score ${typeof score2} and value is ${score2}`);
console.log(`Datatype of score ${typeof score3} and value is ${score3}`);
console.log(`Datatype of score ${typeof score4} and value is ${score4}`);
console.log(`Datatype of score ${typeof score5} and value is ${score5}`);
console.log(`Datatype of score ${typeof score6} and value is ${score6}`);
console.log(`Datatype of score ${typeof score7} and value is ${score7}`);
console.log(`Datatype of score ${typeof score8} and value is ${score8}`);
console.log(`Datatype of score ${typeof score9} and value is ${score9}`);

let name = new String("Anjali")
console.log(`value of string is ${name} and datatype is ${typeof name}`);

let number = new Number(100)
console.log(`value of number is ${number} and datatype is ${typeof number}`);

let logged = new Boolean(true)
console.log(`value of number is ${logged} and datatype is ${typeof logged}`);

let outsideWeather = null 
console.log(`value of number is ${outsideWeather} and datatype is ${typeof outsideWeather}`);

let accountCity = undefined
console.log(`value of number is ${accountCity} and datatype is ${typeof accountCity}`);

let id = Symbol()
console.log(`value of number is ${id} and datatype is ${typeof id}`);







