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


 function addTwoNumbers (num1, num2) {
      return num1 + num2
    
    
 }

 
 console.log(addTwoNumbers(4, 9))

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

function showNum (val1, val2, ...num1) {
     return num1
}

console.log(showNum(100, 200, 300, 400, 500));

const myArray = [100, 200, 300, 400, 500]

function returnSecondValue(getArray) {
      return getArray[1]
}

console.log(returnSecondValue(myArray));
console.log(returnSecondValue([600, 800, 1000, 1200, 1400]));

function one () {
    const username = "Anjali"

    function two(){
         const website = "youtube"
         console.log(username);
         
    }

    // console.log(website);

    two()
    
}

one()

if (true) {
   const username = "Anjali"

    if (username === "Anjali") {
        const website = " youtube"
          console.log(username + website);
          
    }

}

function addone (num) {
    return num + 3
}

console.log(addone(5));

const user = {
    username : "Anjali",
    age  : 40,


    welcomeMessage : function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage("Anjali")
user.username = "Saroj"
user.welcomeMessage()

function chai () {
    let username = "Anjali"
    console.log(this.username);
    
    // console.log(this);
    
}
  
chai()

const chai1 = function () {
    let username = "Saroj"
    console.log(this.username);
    
}

chai1()
 
const chai2 = () => {
    let username = "Anjali"
    console.log(this.username);
    
}

chai2()



 
    





 


























































 























