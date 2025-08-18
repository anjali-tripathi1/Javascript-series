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
 
const addnumber = () => ({username:'Anjali'});
console.log(addnumber());

(function add () {
     console.log("DB Connected");
     
}) ();

((name) => {
    console.log(`DB Connected 2 ${name}` );
    
}) ('Anjali')


