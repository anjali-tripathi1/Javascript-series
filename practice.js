 
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

// var myValue = 10
// myValue = 5
// var myValue = 15
// console.log(myValue);

// let myName = "Anjali"
// myName = "Saroj"
// console.log(myName);

// const myCity = "Bengluru"
// console.log(myCity);
// console.table([myValue, myName, myCity])

// const myString = "Anjali"
// const myNumber = 100
// const isAdmitted = true
// const outsideTemp = null
// let designation;

// console.log(typeof myString);
// console.log(typeof myNumber);
// console.log(typeof isAdmitted);
// console.log(typeof outsideTemp);
// console.log(typeof designation);

// console.log(typeof(myString));

// let score = 33
// let score1 = "33"
// let score2 = "33abc"
// let score3 = null
// let score4 = undefined
// let score5 = -1/0
// let score6 = true
// let score7 = false
// let score8 = "Anjali"
// let score9 = ""

// console.log(`Datatype of score ${typeof score} and value is ${score}`);
// console.log(`Datatype of score ${typeof score1} and value is ${score1}`);
// console.log(`Datatype of score ${typeof score2} and value is ${score2}`);
// console.log(`Datatype of score ${typeof score3} and value is ${score3}`);
// console.log(`Datatype of score ${typeof score4} and value is ${score4}`);
// console.log(`Datatype of score ${typeof score5} and value is ${score5}`);
// console.log(`Datatype of score ${typeof score6} and value is ${score6}`);
// console.log(`Datatype of score ${typeof score7} and value is ${score7}`);
// console.log(`Datatype of score ${typeof score8} and value is ${score8}`);
// console.log(`Datatype of score ${typeof score9} and value is ${score9}`);

// let name = new String("Anjali")
// console.log(`value of string is ${name} and datatype is ${typeof name}`);

// let number = new Number(100)
// console.log(`value of number is ${number} and datatype is ${typeof number}`);

// let logged = new Boolean(true)
// console.log(`value of number is ${logged} and datatype is ${typeof logged}`);

// let outsideWeather = null 
// console.log(`value of number is ${outsideWeather} and datatype is ${typeof outsideWeather}`);

// let accountCity = undefined
// console.log(`value of number is ${accountCity} and datatype is ${typeof accountCity}`);

// let valueInString = String(score)
// let valueInString1 = String(score1)
// let valueInString2 = String(score2)
// let valueInString3 = String(score3)
// let valueInString4 = String(score4)
// let valueInString5 = String(score5)
// let valueInString6 = String(score6)
// let valueInString7 = String(score7)
// let valueInString8 = String(score8)
// let valueInString9 = String(score9)

// console.log(`value of valueInString: ${valueInString} and datatype is : ${typeof valueInString}`);
// console.log(`value of valueInString1: ${valueInString1} and datatype is : ${typeof valueInString1}`);
// console.log(`value of valueInString2: ${valueInString2} and datatype is : ${typeof valueInString2}`);
// console.log(`value of valueInString3: ${valueInString3} and datatype is : ${typeof valueInString3}`);
// console.log(`value of valueInString4: ${valueInString4} and datatype is : ${typeof valueInString4}`);
// console.log(`value of valueInString5: ${valueInString5} and datatype is : ${typeof valueInString5}`);
// console.log(`value of valueInString6: ${valueInString6} and datatype is : ${typeof valueInString6}`);
// console.log(`value of valueInString7: ${valueInString7} and datatype is : ${typeof valueInString7}`);
// console.log(`value of valueInString8: ${valueInString8} and datatype is : ${typeof valueInString8}`);
// console.log(`value of valueInString9: ${valueInString9} and datatype is : ${typeof valueInString9}`);


// let valueInNumber = Number(score)
// let valueInNumber1 = Number(score1)
// let valueInNumber2 = Number(score2)
// let valueInNumber3 = Number(score3)
// let valueInNumber4 = Number(score4)
// let valueInNumber5 = Number(score5)
// let valueInNumber6 = Number(score6)
// let valueInNumber7 = Number(score7)
// let valueInNumber8 = Number(score8)
// let valueInNumber9 = Number(score9)

// console.log(`value of valueInNumber: ${valueInNumber} and datatype is ${typeof valueInNumber}`);
// console.log(`value of valueInNumber1: ${valueInNumber1} and datatype is ${typeof valueInNumber1}`);
// console.log(`value of valueInNumber2: ${valueInNumber2} and datatype is ${typeof valueInNumber2}`);
// console.log(`value of valueInNumber3: ${valueInNumber3} and datatype is ${typeof valueInNumber3}`);
// console.log(`value of valueInNumber4: ${valueInNumber4} and datatype is ${typeof valueInNumber4}`);
// console.log(`value of valueInNumber5: ${valueInNumber5} and datatype is ${typeof valueInNumber5}`);
// console.log(`value of valueInNumber6: ${valueInNumber6} and datatype is ${typeof valueInNumber6}`);
// console.log(`value of valueInNumber7: ${valueInNumber7} and datatype is ${typeof valueInNumber7}`);
// console.log(`value of valueInNumber8: ${valueInNumber8} and datatype is ${typeof valueInNumber8}`);
// console.log(`value of valueInNumber9: ${valueInNumber9} and datatype is ${typeof valueInNumber9}`);


// let valueInBoolean = Boolean(score)
// let valueInBoolean1 = Boolean(score1)
// let valueInBoolean2 = Boolean(score2)
// let valueInBoolean3 = Boolean(score3)
// let valueInBoolean4 = Boolean(score4)
// let valueInBoolean5 = Boolean(score5)
// let valueInBoolean6 = Boolean(score6)
// let valueInBoolean7 = Boolean(score7)
// let valueInBoolean8 = Boolean(score8)
// let valueInBoolean9 = Boolean(score9)

// console.log(`value of valueInBoolean: ${valueInBoolean} and datatype is ${typeof valueInBoolean}`);
// console.log(`value of valueInBoolean1: ${valueInBoolean1} and datatype is ${typeof valueInBoolean1}`);
// console.log(`value of valueInBoolean2: ${valueInBoolean2} and datatype is ${typeof valueInBoolean2}`);
// console.log(`value of valueInBoolean3: ${valueInBoolean3} and datatype is ${typeof valueInBoolean3}`);
// console.log(`value of valueInBoolean4: ${valueInBoolean4} and datatype is ${typeof valueInBoolean4}`);
// console.log(`value of valueInBoolean5: ${valueInBoolean5} and datatype is ${typeof valueInBoolean5}`);
// console.log(`value of valueInBoolean6: ${valueInBoolean6} and datatype is ${typeof valueInBoolean6}`);
// console.log(`value of valueInBoolean7: ${valueInBoolean7} and datatype is ${typeof valueInBoolean7}`);
// console.log(`value of valueInBoolean8: ${valueInBoolean8} and datatype is ${typeof valueInBoolean8}`);
// console.log(`value of valueInBoolean9: ${valueInBoolean9} and datatype is ${typeof valueInBoolean9}`);


// let value = 5
// let negValue = -value
// console.log(negValue);

// console.log((5 + 2) * 5);
// console.log(5 + (-2));
// console.log(5 % 2);
// console.log(5 / 0);
// console.log(0 / 2);

// console.log("1" + "2");
// console.log("1" + (-2));
// console.log(1 + (-"2"));
// console.log("1" + 2 + 3);
// console.log("1" + (-2) + 3);
// console.log(1 + 2 + "3");
// console.log(1 + (-2) + "3");
// console.log(1 + "");
// console.log(typeof 1 + "");
// console.log("" + 1);
// console.log(typeof "" + 1);

// let gamecounter1 = 100
// let gamecounter2 = 200
// console.log(`value of gamecounter1: ${gamecounter1} and gamecounter2: ${gamecounter2}`);
// gamecounter1++
// ++gamecounter2
// console.log(`value of gamecounter1: ${gamecounter1} and gamecounter2: ${gamecounter2}`);

// console.log(`valueInNumber : ${null > 0}`);
// console.log(`valueInNumber : ${null < 0}`);
// console.log(`valueInNumber : ${null == 0}`);
// console.log(`valueInNumber : ${null >= 0}`);
// console.log(`valueInNumber : ${null <= 0}`);
// console.log(`valueInNumber : ${null != 0}`);

// console.log("2" == 2);
// console.log("2" === 2);

// let userName = "Anjali"
// let repo = 50

// console.log(userName + repo + " value");
// console.log(`username is ${userName} and repo ${repo}`);

// const myString = new String("Anjali-Tripathi")
// console.log(myString);
// console.log(typeof myString);
// console.log(myString.length);
// console.log(myString.indexOf('i'));
// console.log(myString.endsWith('i'));
// console.log(myString.substring(1, 8));
// console.log(myString.slice(-3, 4));

const value1 = "Hello"
const value2 = "world"
console.log(value1.concat(", ", value2));
console.log(value2.concat(", ", value1));


// let mySapce = "   Anjali    "
// console.log(mySapce.trimEnd());

// console.log(myString.includes("Tripathi"));

// let url = "https://anjali-tripathi%20.com"
// console.log(url.replace('%20', '-'));
// console.log(url.replace('%20', ' '));
// console.log(url.replace('%20', '#'));

// console.log(myString.split('-'));
// console.log(myString.split(' '));

// const number = 500
// console.log(number);

// const myNumber = new Number(500)
// console.log(`my number is: ${myNumber} and datatype is: ${typeof myNumber}`);

// console.log(myNumber.toString().length);

// console.log(myNumber.toFixed(1));

// const float = 23.55
// console.log(float.toPrecision(3));

// const hundreads = 1000000000
// console.log(hundreads.toLocaleString('en-In'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(Math.abs(-3));

// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(256));
// console.log(Math.pow(8, 3));
// console.log(Math.max(5, 8 , 9, 4, 2));
// console.log(Math.min(5, 8 , 9, 4, 2));

// console.log(Math.round(Math.random() * 10) + 1);

// const max = 20
// const min = 10
// console.log(Math.floor(Math.random()* (max - min + 1) + min));

// const mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(typeof mydate);

// let mynewdate = new Date(2025, 0, 15, 5, 15, 5)
// console.log(mynewdate.toLocaleString());

// let myCreateDate = new Date("2025-07-8" )
// console.log(myCreateDate.toLocaleString());

// let mytimeStamp =  Date.now()
// console.log(mytimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);

// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());

// console.log(newDate.toLocaleString('default',{
//     weekday : "long",
//     day : "2-digit",
//     month : "long",
//     year : "2-digit",
//     hour : "numeric",
//     minute : "2-digit"
// }));

// const name = ["Anjali", "Aditya", "saroj"]
// console.log(name);
// const myArray = ["Anjali", 100, true, ["Saroj", 500, true], {name : "sam", age : 25}]
// console.log(myArray[4].age);

const myArr = new Array(1, 2, 3, 4, 5)
console.log(myArr);
// myArr.push(6)
// myArr.pop()
// myArr.shift()
// myArr.unshift(7)
// console.log(myArr);
// console.log(myArr.includes(8));
// console.log(myArr.indexOf(8));

const newArray = myArr.join()
console.log(newArray);
console.log(typeof newArray);

console.log(myArr.slice(1, 3));
console.log(myArr.splice(1, 3));





































 























