
// function addTwoNumbers (number1, number2){
//      console.log(number1 + number2);
     
// }

// addTwoNumbers(4, 5)

// function addTwoNumbers (number1, number2) {
//      let result = number1 + number2
//      return result
//     //  return number1 + number2
// }

// // console.log(addTwoNumbers(3, 4))

// const result = addTwoNumbers(3, 4)
// console.log("Result:", result);


// function loginUserMessage (username = "Sam"){
//     if(username === undefined){
//          console.log("Please enter your name");
         
//     }

//     if(!username){
//          console.log("Please enter your name");
         
//     }
//      console.log(`${username} just Logged In`);
     
// }

// loginUserMessage("Anjali")
// loginUserMessage("")
// loginUserMessage()

// const user = {
//      username : "Anjali",
//      age : 19
// }

// function handleobject (anyobject){
//       console.log(`username is: ${anyobject.username} and age is: ${anyobject.age}`);
      
// }

// handleobject(user)
// handleobject({
//      username : "Saroj",
//      age : 40
// })

// const myArray = [100, 200, 300, 400, 500]

// function handlearray(getArray){
//       return getArray[2]
     
// }

// console.log(handlearray(myArray))
// console.log(handlearray([500, 600, 700, 800, 900]));

// var c = 300

// if(true){
//    let a = 10
//    const b = 20
// //    var c = 30
//   console.log("INNER:", a);
  
// }

// // console.log(a);
// // console.log(b);
// console.log(c);

//  function one(){
//      const username = "Anjali"

//      function two (){
//           const website = "youtube"
//           console.log(username);
          
//      }
//      // console.log(website);
     

//      // two()
//  }

//  one()

 

//  if (true) {
//      const username = "Anjali"

//      if (username === "Anjali") {
//           const website = " youtube"
//           console.log(username + website);
          
//      }

//      // console.log(website);
     
//  }

// //  console.log(username);

// console.log(addone(5))

// function addone (num){
//    return  num + 1
// }


// console.log(addTwo(5))

// function addTwo(num){
//      return num + 2
// }



// const addThree = function (num) {
//      return num + 3
      
// } 

// console.log(addThree(5))

// // const myobj = {
// //      username : "Anjali",
// //      Price : 399,

// //      welcomeMessage : function(){
// //           console.log(`${this.username}, welcome to website`);
// //           // console.log(this);
          
// //      }
// // }

// // myobj.welcomeMessage()
// // myobj.username = "Saroj"
// // myobj.welcomeMessage()

// // // console.log(this);

// // function chai(){
// //      console.log(this);
     
// // }

// // function chai(){
// //     let username = "Anjali"
// //     console.log(this.username);
    
// // }

// // chai()

// // const chai1 = function(){
// //      let username = "Saroj"
// //      console.log(this.username);
         
// // }

// // chai1()

// // const chai = () => {
// //      let username = "Anjali"
// //      console.log(this.username);
     
// // }

// // chai()

// // const addTwoNumber = (num1, num2) => {
// //       return num1 + num2
// // }

// // console.log(addTwoNumber(3, 2))

// // const addTwoNumber = (num1, num2) => num1 + num2

// // console.log(addTwoNumber(4, 6))

// const addTwoNumber = (num1, num2) => (num1 + num2)

// console.log(addTwoNumber(8, 7));

// const addnumber = (num1, num2) => ({username : "Anjali"})

// console.log(addnumber(6, 7));


// // function chai (){
// //      console.log(`DB Connected`);
     
// // }

// // chai()

// // (function aurcode(){
// //      console.log(`DB Connected`);
     
// // })()

 
// (function myCode(){
//      console.log(`MY Code Printed`);
     
// })();


//  ((name) => {
//      console.log(`My code printed ${name}`);
     
//  })("Anjali")

// let val1 = 10
// let val2 = 15
// function addNum(num1, num2){
//     return num1 + num2
// }

// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 15)

// console.log(`Result1: ${result1} `);
// console.log(`Result2: ${result2} `);

// const userLoggedIn = true
// const temprature = 41

// if(userLoggedIn === true){
//      console.log(`Login Excuted`);

// }

// if(temprature < 50){
//      console.log(`Temprature Excuted`);
     
// }

// if(temprature === 41){
//      console.log(`Less than 50`);
// } else{
//      console.log(`Greater than 50`);
     
// }

// console.log('greater than 20');

// const score = 200
// if(score > 100){
//      const power = "fly"
//     console.log(`User Power: ${power}`);
    
// }

// // console.log(`User power: ${power}`);

// const balance = 1000
// if(balance > 500)  console.log(`balance excuted`), console.log(`excuted`);

// const salary = 2000
// if(salary < 1500){
//     console.log(`Less than 1500`);
    
// } else if(salary < 1600){
//      console.log(`Less than 1600`);
     
// } else if(salary < 1700){
//      console.log(`Less than 1700`);
     
// } else if(salary < 1800){
//      console.log(`Less than 1800`);
     
// } else{
//      console.log(`Greater than 2500`);
     
// }

// const userAdmittedIn = true
// const debitCard = true

// if(userLoggedIn && debitCard && 2 == 2){
//       console.log(`Allow to buy course`);
      
// }

// const loggedInFromGoogle = true
// const loggedInFromEmail =  false
// if(loggedInFromEmail || loggedInFromGoogle){
//      console.log(`User Logged In`);
     
// }

// let val3;
// val3 = 5 ?? 10
// val3 = null ?? 15
// val3 = undefined ?? 20
// val3 = null ?? 16 ?? 18
// console.log(val3);

// const IceTeaPrice = 100
// IceTeaPrice <= 80 ? console.log(`Less than 80`) : console.log(`More than 80`);


//  const month = "september"
//  switch (month) {
//      case "jan":
//           console.log("January");
//        break;

//          case "feb":
//           console.log("Feb");
//        break;

//          case "march":
//           console.log("March");
//        break;

//          case "april":
//           console.log("April");
//        break;

//          case "may":
//           console.log("May");
//        break;

//          case "june":
//           console.log("June");
//        break;

//          case "july":
//           console.log("July");
//        break;
 
//      default:
//           console.log(`Default case match`);
//         break;
//  }

// //  const userEmail = "A@Anjali.ai"
// //  const userEmail = ""
// // const userEmail = []
// // const userEmail = {}
// const userEmail = "false"

//  if(userEmail){
//      console.log(`Got useremail`);
     
//  } else{
//      console.log(`Don't have userEmail`);
     
//  }

//  const emptyArray = []
//  if(emptyArray.length === 0){
//      console.log(`Array is empty`);
     
//  }

//  const emptyObject = {}
//  if(Object.keys(emptyObject).length === 0){
//       console.log(`Object is empty`);
      
//  }

//  for (let index = 0; index <= 10; index++) {
//      const element = index;
//      console.log(element);
     
//  }

//  for (let i = 0; i <= 10; i++) {
//      const element = i;
//      if(element == 5){
//          console.log("five is best number");
         
//      }

//       console.log(element);
//  }

//  for (let i = 1; i <= 10; i++) {
//      console.log(`Outer loop value: ${i}`);
//      for (let j = 1; j <= 10; j++) {
//           // console.log(`Inner loop value: ${j} and Inner loop: ${i}`);
//           console.log(i + '*' + j + ' = ' + i*j )
          
//      }
     
//  }

//  const myArr = ["shinchan", "Doremon", "pokemon"]
//  console.log(myArr.length);
//  for (let index = 0; index < myArr.length; index++) {
//      const element = myArr[index];
//      console.log(element)
//  }

//  for (let i = 1; i <= 10; i++) {
//      // const element = i;
//      for (let j = 5; j <= 10; j++) {
//           const element = j;
//           console.log(i + '+' + j + ' = ' + i+j);
          
//      }
//  }

//  for (let index = 1; index <= 20; index++) {
     
//      if(index == 5){
//         console.log(`5 is Detected`)
//         continue
//      }

//      console.log(`value is: ${index}`);
     
//  }

//  let index = 1
//  while (index <= 10) {
//      console.log(`Value is ${index}`);
//      //  index++
//       index = index + 3
//  }


//  const myArray1 = ["Anjali", "Aman", "Aditya", 100, 200, true, false]
//  let item = 1
//  while (item < myArray1.length) {
//      console.log(`value is: ${myArray1[item]}`);
//      // item++
//      item = item + 2
//  }

//  const calculateCartPrice = [100, 200, 500, 1000]

//  for (let index = 0; index < calculateCartPrice.length; index++) {
//      const element = calculateCartPrice[index];
//      console.log(element)
//  }

//  let anyValue = 0
//  while (anyValue <= 10) {
//      console.log(anyValue);
//      // anyValue++
//      anyValue = anyValue + 2
//  }

//  let myUser = 16
//  do {
//      console.log(`Value is: ${myUser}`);
//      myUser = myUser + 5
//  } while (myUser <= 15);
 

//  const myArray  = [100, 300, 500, 700, 1000]
//  for (const num of myArray) {
//      console.log(num);
     
//  }

//  const greetings = "Hello World!"
//  for (const greet of greetings) {
//      console.log(`Value is: ${greet}`);
     
//  }

//  const map = new Map()
//  map.set('In', "India")
//  map.set('Pa', "Paris")
//  map.set('USA', "United States of America")
//  map.set('Fr', "France")

//  console.log(map);

//  for (const key of map) {
//      console.log(key);
     
//  }

//  for (const [key, value] of map) {
//      console.log(key,":", value);
     
//  }

//  const myObject = {
//      "game1" : "Super Mario",
//      "game2" : "NFS",
//      game1 : "Trans",
//      game2 : "spiderman"
//  }

//  for (const key of myObject) {
//      console.log(key);
     
//  }

//  for (const [key, value] of myObject) {
//      console.log(key, ':', value);
     
//  }

// const myObject = {
//     js : "Javascript",
//     py : "Python",
//     java : "Java",
//     cpp : "C++",
//     rb : "ruby",
//     swift : "swift by apple"
// }

// for (const obj in myObject) {
//     console.log(myObject[obj]);
    
// }

// for (const obj in myObject) {
//     console.log(`Key is: ${obj} and value is: ${myObject[obj]}`);
    
// }

// const myArr = ["Anjali", "Saroj", 100, 200, 300]
// for (const key in myArr) {
//     console.log(myArr[key]);
    
// }

// const coding = ["js", "python", "ruby", "java", "swift"]
// coding.forEach( function (val) {
//      console.log(val);
     
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe (item){
//       console.log(item);
      
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

// const myCoding = [
//     {
//         languageName : "javascript",
//         languageFileName : "js"
//     },

//     {
//         languageName : "java",
//         languageFileName : "java"
//     },

//     {
//         languageName : "python",
//         languageFileName : "py"
//     },

//     {
//         languageName : "ruby",
//         languageFileName : "rb"
//     }
// ]

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
    
// })

// const coding = ["javascript", "java", "python", "ruby", "swift"]
 
// const myvals  = coding.forEach( (item) => {
//     // console.log(item);
//     // return item
// })

// console.log(myvals);

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnums = mynums.filter( (num) => { return num > 4})
// console.log(newnums);

const myvals = []
mynums.forEach( (num) => {
    if(num > 5){
        myvals.push(num) 
    }
})

console.log(myvals);

const books = [
     { title: 'Book One', genre: 'History', publish: 1968, edition: 2009  },
     { title: 'Book Two', genre: 'Science', publish: 1928, edition: 2013  },
     { title: 'Book Three', genre: 'Non-Fiction', publish: 1998, edition: 2010  },
     { title: 'Book Four', genre: 'Fiction', publish: 1988, edition: 1934  },
     { title: 'Book Five', genre: 'History', publish: 2011, edition: 2014  },
     { title: 'Book Six', genre: 'Fiction', publish: 1944, edition: 1984  },
     { title: 'Book Seven', genre: 'Non-Fiction', publish: 2018, edition: 2008  },
     { title: 'Book Eight', genre: 'Science', publish: 1938, edition: 2006 },
     { title: 'Book Nine', genre: 'History', publish: 2005, edition: 1954  },       
     { title: 'Book Ten', genre: 'Fiction', publish: 2008, edition: 1995  }       
]

let myBooks = books.filter( (bk) => bk.genre === "History")
myBooks = books.filter( (bk) => { return bk.publish >= 1995})
myBooks = books.filter( (bk) => {return bk.publish >= 1995 && bk.genre === "Fiction"})
myBooks = books.filter( (bk) => bk.edition === 2013)
console.log(myBooks);

const addnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let myaddnums = addnums.map( (num) => num + 10)
// myaddnums = addnums.map( (num) => { return num + 10 - 2})
// myaddnums = addnums.map( (num) => {
//     return num *10 + 5
// })

// console.log(myaddnums);

// const mynewnums = []
// addnums.forEach( (num) => {
//     if(num){
//         mynewnums.push(num + 10)
//     }
// })

// console.log(mynewnums);

// const myArr = [100, 200, 300, 400, 500]
// function myvalue (num){
//     console.log(num);
    
// }

// myArr.forEach(myvalue)

let mynums2 = addnums
              .map( (num) => num + 10)
              .map( (num) => { return num * 5})
              .filter( (num) => num >= 65)
              .filter( (num) => { return num >= 70})



  console.log(mynums2);

  const myvalues = [1, 2, 3]
//   const myTotal = myvalues.reduce( function (acc, currval) {
//        console.log(`acc is: ${acc} and currval is: ${currval}`);
//        return acc + currval
//   }, 0)
           
  

  const myTotal = myvalues.reduce( (acc, currval) => {
      console.log(acc, currval);
      return acc + currval
  }, 0)
  
console.log(myTotal);

const myshoppingcart = [
    {
        coursename : "Javascript course",
        Price : 2999
    },

     {
        coursename : "Java course",
        Price : 999
    },

     {
        coursename : "Mobile dev course",
        Price : 5999
    },

     {
        coursename : "Datascience course",
        Price : 12999
    },
]

const PayToPrice = myshoppingcart.reduce( (acc, item) => acc + item.Price, 0 )
console.log(PayToPrice);

















  
  
     
   
   
   
   
   
   
   
   
   





























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 