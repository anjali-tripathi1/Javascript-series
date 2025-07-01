
// function chai () {
//    console.log(`DB connected`);
   
// }

// chai()

// (function code () {
//     console.log(`DV connected`);
    
// }) ();


// ((name) => {
//     console.log(`DB connected Two, ${name}`);
    
// }) ("Anjali");

// const userLoggedIn = true
// const temprature = 41

// if(userLoggedIn === true){
//    console.log(`User logged in`);
   
// }

// if (temprature < 50) {
//    console.log(`Less than 50`);
   
// }

// if (temprature === 42) {
//    console.log(`Less than 50`);
   
// } else {
//     console.log(`greater than 50`);
    
// }

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(power);
    
// }

// // console.log(power);

// const balance = 1000
// if (balance > 500)  console.log(`test`);


// if (balance > 500) {
//   console.log(`greater than 500`);
  
// } else if (balance < 750) {
//     console.log(`Less than 750`);
    
// } else if (balance < 900) {
//    console.log(`Less than 900`);
   
// } else {
//     console.log(`Less than 1200`);
    
// }

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard && 2==2) {
    console.log(`user logged and debitcard is true`);
    
}

const loggedInFromEmail = true
const loggedInFromGoggle = false
if (loggedInFromEmail || loggedInFromGoggle) {
    console.log(`user logged in`);
    
}

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 4 ?? 5
console.log(val1);

const IceTeaPrice = 100
IceTeaPrice >= 80 ? console.log("less than 50") : console.log("more than 80");
IceTeaPrice <= 80 ? console.log("less than 50") : console.log("more than 80");

const month = "feb"
switch (month) {
    case "jan":
        console.log("January");
     break;

     case "feb":
        console.log("Feb");
     break;

     case "march":
        console.log("March");
     break;

     case "april":
        console.log("April");
     break;

     case "may":
        console.log("May");
     break;

    default:
        console.log(`month is not print`);
        
        break;
}

// const userEmail = "A@Anjali.ai"
// const userEmail = ""
const userEmail = []

if (userEmail) {
    console.log(`got userEmail`);
    
} else {
    console.log(`don't have userEmail`);
    
}

const emptyArray = []
if (emptyArray.length === 0) {
    console.log(`array is empty`);
    
}

const myObject = {}
// if (Object.keys(myObject).length === 0) {
//     console.log(`object is empty`);
    
// }
if (Object.keys(myObject).length === 0) {
    console.log(`obj is empty`);
    
}

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
         console.log(`5 is best number`);
         
    }
    console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
      console.log(`outer loop value: ${i}`);
      
    
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value: ${i} and inner loop ${j}`)
        console.log(i + '*' + j  + ' = ' + i*j);
        
    }
}

const myArray = ["shaktiman", "flash", "poga"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
   
}

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
         console.log(`Detected 5`);
         continue
    }
    console.log(i);
    
    
}

let index = 0
while (index <= 10) {
    console.log(`value of index is: ${index}`);
    // index = index + 2
    // index++
    index = index + 1
}

const myArr = ["flash", "shaktiman", "doga"]
let arr = 0 
while (arr < myArr.length) {
    console.log(`value is ${myArr[arr]}`);
    arr++   
}

// let score = 10
// do {
//     console.log(``);
    
// } while (sco);






