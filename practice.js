// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  console.log(myArray[1]);
 
// let array = []

// for (let index = 0; index < myArray.length; index++ ){
//     const element = myArray[index]
//        console.log(element);
// }

// function addTwoNumbers (num1, num2) {
//      console.log(num1 + num2);
     
// }

// addTwoNumbers(4, 5)


// function myArr (myArray) {
//     for (let i = 0; i < myArray.length; i++){
//           const element = myArray[i]
//           console.log(element);
          
//     }
      
// }
// myArr(myArray)
        

       
// let a;
// let result = a ?? 5;
// let b = 10;
// let result2 = b ?? 15;
// console.log(result);
// console.log(result2);

// function number (num1) {
//     for (let i = 1; i <= 10; i++){
//           console.log( (num1 * i) + 5);
          
//     }
    
    
// }

// number(2)


// const myValue = {
//     coursename : "Js Series",
//     price : 599,
//     courseInstructor : "Anjali"
// }

// const {coursename : c}  = myValue
// console.log(c);

// const {price : pr} = myValue
// console.log(pr);


// function addTwoNumbers (number1, number2) {
//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumbers(4, 6)
// console.log(result);

// function loginUserMessage (username) {
//     if (username === undefined) {
//            console.log(`please enter your name`)
//            return
//     }

//     // if (!username) {
//     //     console.log(`please enter your name`);
//     //     return
        
//     // }
//       console.log(`${username}, just logged in`);
      
// }

// // loginUserMessage("Anjali")
// // loginUserMessage("")
// loginUserMessage()

// function calculateCartPrice (...num1) {
//       console.log(num1);
//       return num1
    
//     }

//     console.log(calculateCartPrice(200, 300, 500, 700, 800));

//     const user = {
//         coursename : "Js Series",
//         price : 599,

//     }

//     function handlefunction (object) {
//           console.log(`username is ${object.coursename} and price is ${object.price}`);
          
//     }

//     handlefunction(user)

//     handlefunction({
//         coursename : "Java",
//         price : 999
//     })

    
//     function handleobject (anyobject) {
//           console.log(`username is : ${anyobject.name} and age is : ${anyobject.age}`);
          
//     }

//     handleobject({
//         name : "Anjali",
//         age : 20
//     })

//     const course = {
//         coursename : "python",
//         price : 12999
//     }

//     function handleCourse(co) {
//          console.log(`coursename is : ${co.coursename} and price is : ${co.price}`);
         
//     }

//     handleCourse(course)

//     handleCourse({
//         coursename : "Mobile Development",
//         price : 699
//     })

//     const getArray = [100, 200, 300, 400, 500]
//     function handleArray (arr) {
//           return arr
         
//     }

//     console.log(handleArray(getArray))
//     console.log(handleArray([200, 300, 500, 800, 1000]));
//     console.log(handleArray(["Anjali", "shaktiman", "goga"]));

//     var g = 300
//     if (true) {
//         let a = 10
//         const b = 20
//         console.log(a);
//         console.log(b);
        
//     }

//     // console.log(a);
//     // console.log(b);
//     console.log(g);
    
//     function one(){
//         const username = "Anjali"

//         function two(){
//             const website = "youtube"
//             console.log(username);
            
//         }

//         // console.log(website);
        
//         two()
//     }

//     one()

//     if (true) {
//         const username = "Anjali"
//         if (username === "Anjali") {
//             const website = " youtube"
//             console.log(username + website);
            
//         }  
        
//         // console.log(website);
        
//     }

//     // console.log(username);

//     console.log(addone(9))

//     function addone (num1) {
//         return  num1 + 3
//     }

    

//     const addTwo = function (num1) {
//          return num1 + 6
          
//     }

//    console.log(addTwo(7));

//    const myUser = {
//       username : "Anjali",
//       age : 20,

//       welcomeMessage : function () {
//           console.log(`username is : ${this.username} and age is : ${this.age}`)
//           console.log(this);
          
//       }
//    }

// //    myUser.welcomeMessage()
// //    myUser.username = "Saroj"
// //    myUser.age = 35
// //    myUser.welcomeMessage()

//    console.log(this);
   
//    function chai () {
//        console.log(this)
//    }
    
//    chai()

// //    function chai2 () {
// //        let username = "Anjali"
// //        console.log(this.username);

       
// //    }

// //    chai2()

//    const chai3 = function () {
//        console.log(this);
//     //    let username = "Anjali"
//     //    console.log(this.username);
       
//    }

//    chai3()

   

//  const addnumber = (num1, num2) => {
//       return  num1 + num2
       
//  }

//  console.log(addnumber(9, 5))
    
//  const addOne = (num1, num2) => num1 + num2
 
//  console.log(addOne(8, 3))

//  const addnum = (num1, num2) => (num1 + num2)
//  console.log(addnum(2, 3));

//  const addnums = (num1, num2) => ({name : "Anjali"})
// console.log(addnums(8, 9));
 
// function chai (num1, num2) {
//     console.log(num1 + num2);
    
// }
// chai(2, 1)

(function code (val1, val2) {
    console.log(val1 * val2);
    
}) (5, 6);


( (name) => {
    console.log(name);
    
}) ("Anjali");


const username = true
const temprature = 41

if (username === true) {
   console.log(`username is logged`);
   
}

if (temprature < 42) {
    console.log(`temprature is correct`);
    
}

if (temprature > 42) {
    console.log(`temp is right`);
    
} else {
    console.log(`temp is not right`);
    
}

const score = 200
if (score === 200) {
    const power = "fly"
    console.log(`user power ${power}`);
    
} else {
    console.log(`power is not defined`);
    
}

const balance = 300
if (balance > 200) console.log(`balance is: ${balance}`), console.log(`balance is one more ${balance}`);

const salary = 5000
if (salary < 3000) {
    console.log(`salary 1is: ${salary}`);
    
} else if (salary > 3500) {
   console.log(`salary 2is: ${salary}`);
   
} else if (salary < 4500) {
   console.log(`salary 3is: ${salary}`);
   
} else {
    console.log(`salary is greater than 5000`);
    
}

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 2==2 ) {
   console.log(`userLoggedIn and debitcard is it`);
   
}

const userLoggedGoogle = true
const userLoggedEmail = false

if (userLoggedEmail || userLoggedGoogle || 2 == 2) {
    console.log(`Logged with anyone`);
    
}

const icecream = 100
icecream <= 100 ? console.log(`greater than 100`) : console.log(`less than 100`);

const month = "mar"
switch (month) {
      case "jan" :
        console.log(`January`);
        
         break;

        case "feb":
        console.log(`Febuary`);
        
         break;
         
         case "mar" :
        console.log(`March`);
        
         break;

         case "apr" :
        console.log(`April`);
        
         break;

         case "may" :
        console.log(`May`);
        
         break;

         default:
            console.log(`not match`);
            
            break;

} 

// const userEmail = "Anjali@.com"
// const userEmail = ""
// const userEmail = []
const userEmail =function () {}

if (userEmail) {
   console.log(`got userEmail`);
   
} else {
    console.log(`don't have userEmail`);
    
}

const emptyArray = []
if (emptyArray.length === 0) {
   console.log(`Array is empty`);
   
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log(`Object is empty`);
    
}

for (let i = 1; i <= 10; i++) {
      if (i == 5) {
           console.log(`5 is the best number`);
           
      }
      console.log(i);
      
} 

for(let i = 1; i <= 5; i++) {
      
      for (let j = 1; j <= 3; j++) {
        //   console.log(`inner j value: ${j} and inner i value: ${i}`);
        //   console.log(`i and j * : ${i * j} and i value : ${i} and j value : ${j}`);
          console.log(i + '*' + j + ' = ' + i*j);
          
      }
}


const myArr = ["shaktiman", "naagraj", "doga"]
console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {
      const element = myArr[i]
      console.log(element);
      
}

for (let j = 1; j <= 20; j++) {
    if (j == 5) {
       console.log(`5 is the best number ${j}`);
       break
    }
      console.log(`value is j: ${j}`);
      
      
}

for (let i = 0; i <= 10; i++) {
      if (i == 5) {
          console.log(`Detected 5`)
          continue
      }

      console.log(`value of i : ${i}`);
      
}

let i = 1
while (i <= 10) {
    console.log(i);
    // i++
    i = i + 3 
}

let array = ["Anjali", "Saroj", "Sam"]

let arr = 0
while (arr < array.length) {
    console.log(array[arr]);
    arr = arr + 1
    
}

let value = 10
do {
 console.log(`value is : ${value}`);
 value++
} while (value <= 11)

for (const num of array) {
     console.log(num);
     
}

const greet = "Hello World"
for(const g of greet) {
   console.log(g);
   
}







const object = {
    "game1" : "Super Mario",
    "game2" : "Ben10"
}
for (const key in object) {
      console.log(object[key]);
      
}

for (const key in object) {
    console.log(`${key} and value is: ${object[key]}`);
    
}

const myarr = ["Javascript", "Java", "python", "ruby", "swift"]
for (const key in myarr) {
    console.log(myarr[key]);
    
}

const map = new Map()
map.set('In', "India")
map.set('pa', "Paris")
map.set('lo', "London")
map.set('lo', "London")

console.log(map);

for (const [key, value] of map) {
     console.log(key, ":-", value);
     
}

const coding = ["batman", "superman", "spiderman"]
coding.forEach( (num) => {
    console.log(num);
    
})

coding.forEach( function (val) {
  console.log(val);
  
} )

function printMe (item) {
    console.log(item);
    
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})
  
addnum = (num1, num2) => (num1 + num2)
    
console.log(addnum(33, 2))

const myValue = [
    {
        coursename : "Javascript",
        price :399
    },

    {
        coursename : "Java",
        price :599
    },

    {
        coursename : "Mobile development",
        price :5999
    },

    {
        coursename : "Python",
        price :2999
    },

    {
        coursename : "Datascience",
        price :12999
    },
]

myValue.forEach( (item) => {
    console.log(item.price);
    
})

// const myValues = ["Spiderman", "batman", "superman"]

// const mycodings = myValues.forEach( (item) => {
//     return item
     
// })

// console.log(mycodings);

const myValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// const mycodings = myValues.filter( (item) => {
//     return item > 4
// })

// const mycodings = myValues.filter( (num) => num > 5)

// console.log(mycodings);
const myEach = []
myValues.forEach( (num) => {
    if (num > 1) {
         myEach.push(num)
    }
})

console.log(myEach);

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

// const book = books.filter( (bk) => {return bk.edition >= 1995 })
// const book =  books.filter( (bk) => bk.genre === "History" && bk.publish >= 2010)
const book = books.filter( (bk) => bk.title === 'Book Five' && bk.publish >= 2005)
console.log(book);

const myNewArray = [100, 200, 300, 400, 500]
// const myArrays =  myNewArray.map( (num) => num + 10)

 myNewArray.map( (num) => { return num * 3})

 const myCreateArray = []
 myNewArray.forEach( (num) => { 
    if (num + 10 ) {
          myCreateArray.push(num + 10)
    }
 })

 console.log(myCreateArray);

 const myNewNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const myNum = myNewNums
              .map( (num) => num + 20)
              .map( (num) => num * 2 )
              .filter( (num) => num >= 45)

              console.log(myNum);

  const myNums = [1, 2, 3, 4, 5]
  
//   const totalNum =  myNums.reduce( (acc, currval) => { 
//     console.log(`acc is ${acc} and currval is ${currval}`);
    
//     return acc + currval
// }, 0)

const totalNum = myNums.reduce( (acc, currval) => 
     acc + currval, 0)
  console.log(totalNum);
  
  const shoppingCart = [
    {
        itemname : "Js course",
        Price : 2999
    },

     {
        itemname : "Py course",
        Price : 999
    },

     {
        itemname : "Mobile dev course",
        Price : 5999
    },

     {
        itemname : "Datascience course",
        Price : 12999
    }
 ]

 const cart = shoppingCart.reduce( (acc, item) => { return acc + item.Price}, 0)
 console.log(cart);
 
              
 
 

    
    


























































 























