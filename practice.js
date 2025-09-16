//  let name = 'AnjaliTrapathi'
//  anotherName = name
//  anotherName = 'Saroj'
//  console.log(name.toUpperCase());
//  console.log(anotherName);
 
// let user1 = {
//   name: 'rahul',
//   age:32
// };

// let user2 = user1;
// user2.name = 'geeta';
// console.log(user1);
// console.log(user2);

// console.log(name.charAt(4));
// console.log(name.indexOf('l'));
// console.log(name.slice(0, 5));
// console.log(name.split(''));
// const url = 'anjali.com%20.com'
// console.log(url.replace('%20.com', ''));

// console.log(String(33));
// console.log(typeof String(33));

// const array = ['Anjali', 200, true, {name:'Saroj', age:40}, ['anjali@.com']]
// console.log(array.indexOf(true)); 
// console.log(array.slice(1, 3));
// console.log(array, "Slice"); 
// console.log(array.splice(1, 3));
// console.log(array, "splice");

// console.log(JSON.stringify(array));
// console.log(typeof JSON.stringify(array));

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];

// arr1.push(arr2)
// console.log(arr1);

    // [1,2, 3, 4,5,  [6,7, 8, 9, 10]]

//   arr1.concat(arr2)   
//   console.log(arr1); 
//  const newArray = [...arr1, ...arr2]
//  console.log(newArray)
 
//  let arrayInsideArray = [1,2,[3,4], [5,6,[7,8, [9, 10]]]];
//  console.log(arrayInsideArray.flat(3)); 
 
  
//  (function chai() {
//    console.log("DB connected.");
   
//  })();  

//  ((name) => {
//      console.log(`DB Connected 2 ${name}`);
     
//  })('Anjali')

//  function myName (num1, num2) {
//     console.log(num1 + num2);
    
//  }

//  myName(5, 8)

 function name () {
     console.log("this is function declaration.");
     
 }

 name()

 const message = function () {
     console.log("age is 32");
     
 }

 message()

 const messageOne = function message () {
      console.log("group is one");
      
 }

 messageOne()

 const show = (a, b) => {
     console.log(`sum of ${a} and ${b}: ${a+b}`);
     
 }

 show(5, 3)

 const details = {
    name: 'Anjali',
    age: function (age) {
        console.log(`${this.name} and age is ${age}`);
        
    }
 }

 details.age(20)

 var a = 100

 if(true){
    // var a = 10
    let b = 20
    const c = 30

    console.log(c);
    
 }

 console.log(a);
//  console.log(b);
//  console.log(c);
 
 function one() {
     const username = 'Anjali'
     function two () {
          const website = ' youtube'
          console.log(username + website);
          
     }

     
     

     two()
 }

 one()


if(true){
    const username = ' saroj'
    if(true){
        const msg = 'Hello'
        console.log(msg + username);
        
    }

    
    
}

let userOne = {
     name : 'Anjali',
     age: 20,
     display : function () {
         console.log(`name is : ${this.name} and age is: ${this.age}`);
         
     }
}

userOne.display()

// function print () {
//      console.log(this);
     
// }

// print()

const print2 = () => {
     console.log(this);
     
}

print2()

 function print () {
     let username = 'Anjali'
     console.log(this.username);
     
} 

print()

const addone = (a, b) => {
     console.log(a+b);
     
}

addone(5, 8)

const addTwo = (a, b) => console.log(a+b);
addTwo(4, 3)
 
// const addnumber = () => ({username:'Anjali'});
// console.log(addnumber());

// (function add () {
//      console.log("DB Connected");
     
// }) ();

// ((name) => {
//     console.log(`DB Connected 2 ${name}` );
    
// }) ('Anjali')

// const promiseOne = new Promise((resolve, reject) => {
//      setTimeout(() => {
//          console.log("async task is completed.");
//          resolve()
//      }, 2000)
// })

// promiseOne.then(function () {
//      console.log("promiseOne consumed");
     
// })

// new Promise((resolve, reject) => {
//      setTimeout(() => {
//          console.log("async2 called");
//          resolve()
//      }, 2000)
// }).then(() => {
//      console.log("promise consumed");
     
// })

// const promiseThree = new Promise((resolve, reject) => {
//      setTimeout(() => {
//          resolve({username:'Anjali', email:'anjali@.com'})
//      }, 1000)
// })

// promiseThree.then(function (user) {
//      console.log(user)
// })

// const promiseFour = new Promise(function (resolve, reject) {
//      setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username:'Anjali', })
//         } else{
             
//             reject('ERROR: something went wrong.')
//         }
//      }, 1000)
// })

// promiseFour.then( (user) => {

// })

let user1 = {
     name: 'Anjali'
}

let user2 = user1
user2.name = 'Saroj'
console.log(user1);
console.log(user2);

let name1 = 'Anjali'
let anotherName = name1
anotherName = 'Sam'
console.log(name1);
console.log(anotherName);

let array = ['anjali', 'sam', 'steve']

for(let i = 1; i <= 10; i++){
    if(i == 5){
       console.log("5 is best.");
       continue
    }
      let element = i
      console.log(i);
      
}

let myArray = ['Anjali', 'sam']
let arr = 0
while ( arr < myArray.length) {
    console.log(myArray[arr]);
    arr++
}

let i = 12
do{
   console.log(i);
   i++
} while(i <= 10)

const array1 = [1, 2, 3, 4, 5]
for(const key of array1){
    console.log(key);
    
}    

const map = new Map()
map.set('In', 'India' )
map.set('Ln', 'London' )
map.set('Pa', 'Paris' )

// console.log(map);
for(const key in map){
     console.log(key);
     
}

// let myObject = {
//      'name': 'Anjali',
//      age: 20
// }

// for(const key in myObject){
//     console.log(myObject[key]);
    
     
// }

// const coding = ['Anjali', 'Aman', 'Aditya']
// coding.forEach((val) => {
//     //  console.log(val);
     
// } )

// coding.forEach((item, index, arr) => {
//      console.log(item, index, arr);
     
// } )

// const myList = [
//      {
//         course: 'Java',
//         courseInstructor: 'Anjali'
//      },

//      {
//         course: 'Ruby',
//         courseInstructor: 'Aditya'
//      },

//      {
//         course: 'JavaScript',
//         courseInstructor: 'Aman'
//      },
// ]

// myList.forEach((item) => {
//      console.log(item.courseInstructor);
     
// })

const code = ["java", 'js', 'ruby']
const newCode = code.forEach((item) => {
     return item
    //  console.log(item);
     
}) 

console.log(newCode);

const nums = [1, 2, 3, 4, 5]
const newNums = nums.filter((num) =>  num > 3)
console.log(newNums);

const arra = [10, 20, 30, 40, 50, ]
const empty = []
arra.forEach((num) => {
     if(num > 10){
         empty.push(num)
     }
})

console.log(empty);

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

let book = books.filter((bk) => {return bk.genre === 'History'})
console.log(book);

const myNumber = [11, 12, 13, 14, 15]
const mynum = myNumber.map((num) => {return num + 20})
console.log(mynum);

const new1 = myNumber.map((num) => num + 2  )
                     .filter((num) => {return num > 15})
                     .map((num) => num * 2)
 console.log(new1);
                    
const myNums = [1, 2, 3, 5, 8]
const myTotal = myNums.reduce((acc, currval) => {return acc+currval})
console.log(myTotal);

const price = [
    {
        price:2999,
        lang:'java'
    },

    {
        price:5999,
        lang: 'js'
    },

    {
        price:2999,
        lang: 'ruby'
    },
]

const pay = price.reduce((acc, currval) => { return acc + currval.price}, 0)
console.log(pay);


function calculateArea (l, w) {
    const area = l*w
    if(l <= 0 ){
        throw Error('Length should be positive number. ')
    } 
     if (w <= 0) {
       throw Error('width should be positive number.')
    } 

    return area

    
     
}

console.log(calculateArea(2.5, 8));

// function checkIfEvenOrOdd (num) {
//    return num % 2 === 0 ? `${num} is Even` : `${num} is odd.`
    
// }

// console.log(checkIfEvenOrOdd(22.4));

// function findSmallestNumber (a, b, c) {
//     let smallestNumber = a
//     if(smallestNumber > b){
//         smallestNumber = b
//     } if (smallestNumber > c) {
//          smallestNumber = c
//     }

//     return `${smallestNumber} is smallestNumber`
 
//     }

// console.log(findSmallestNumber(1000, 9999, ));



// const smallestNumber = (a, b, c) => {
//     if((typeof a) ===  "string" | (typeof b) !== "number" | (typeof c) !== "number"  ){
//          throw Error('Please Enter a Number')
//     } else {
//          if(a <= 0 | b <= 0 | c <= 0){
//         throw Error('Num should be positive.')
//     } else {
//        let small = a < b ? (a < c ? a : c) : (b < c ? b : c)
//      return `${small} is smallest number`
//     }
//     }
   
     
// }

// console.log(smallestNumber(1, 2, 1));


// const fruits = ['Apple', 'Banana', 'Guava']
// fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
// console.log(fruits);


// let num = [1, 35, 8, 5, 96]
// num.sort((a, b) => { return a - b})
// console.log(num);

// let user = [
//     {name : 'Anjali', age:20},
//     {name : 'Aditya', age:17},
//     {name : 'Aman', age:21},
     
     
// ]
// user.sort((a, b) => {return a.age - b.age})
// console.log(user[0]);



    

// function getSmall (a, b, c) {
//      let arr = [a, b, c]
//      arr.sort((a, b) => a - b)
//      return `${arr[0]} is smallest number`
// }

// console.log(getSmall(225, 85, 65));

// function findSmallestNumber (a, b, c) {
//     if((typeof a) === "string" | (typeof b) !== "number" | (typeof c) === "string" ){
//          throw Error('Please Enter a Number')
//     } else {
//                if(a <= 0 | b <= 0 | c <= 0){
//          throw Error('Number should be positive.')
//     } else {
//             let smallestNumber = a

//         if(smallestNumber > b){
//              smallestNumber = b
//         } 

//         if(smallestNumber > c){
//              smallestNumber = c
//         }

//         return `${smallestNumber} is smallest number.`
//     }
//     }
   
       
//     }

//    console.log(findSmallestNumber(9, 7, 5));
    
//    console.log(Math.min(5, 8, 2, 83, 24, 1 ));

  

function calculateFactorial(num){
    return [...Array(num).keys()].map((i) => {return i+1}).reduce((acc, val) => acc*val, 1)
}

console.log(calculateFactorial(5));


let name3 = 'Anjali Tripathi'
let repo3 = '15'
console.log(`name is ${name3} and repo is ${repo3}`);

console.log(name3.length);

let extra = '    Saroj    '
console.log( extra.trimEnd());

let url = 'https://anjali%20Tripathi'
console.log(url.replace('%20', '-'));

console.log(name3.split('-'));

let val1 = 'Hello'
let val2 = 'World'
console.log(val2.concat(' ', val1));

let num = new Number(200)

let num2 = 113.656
console.log(num2.toPrecision(4));

const hundread = 10000
console.log(hundread.toLocaleString('en-In'));




let max = 20
let min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  
let date = new Date()
console.log(date.toLocaleString('default', {
      weekday:'long',
      month:'long',
      day:'2-digit',
      year:'2-digit',
      hour:'2-digit',
      minute:'2-digit'
}));


// Write a program that checks if a number is even or odd 

// Ask the user for their age. If they are 18 or older, log "You can vote", otherwise "You cannot vote".


function checkEvenOdd (num) {
    const remainder = num % 2
    
    if(remainder === 0){
         console.log(`${num} is Even`);
         
    } else {
         console.log(`${num} is Odd`);
         
    }

    for(let i = 1; i <= 10; i++){
          console.log(num * i);
          
    }
}

checkEvenOdd(5)


function canVote (age) {
     if(age >= 18){
        console.log(`you can Vote, your age is ${age}`);
        
     } else {
          console.log(`you can't Vote, your age is ${age}`);
     }
}

canVote(35)
canVote(17)


function calAvg (array) {
     let sum = 0
     for(let i = 0; i < array.length; i++){
         sum = sum + array[i]
     }

     let result = sum / array.length 
     return `${sum} and avg is: ${result}`
}

console.log(calAvg([45, 76, 23]));

 