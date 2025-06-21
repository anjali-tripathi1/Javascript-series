

const myString = "Anjali"
const myNumber = 100
console.log(myString + myNumber + " value");
console.log(typeof myString);
console.log(`myString name is :- ${myString} and myNumber is : ${myNumber}` );

const myString1 = new String("Anjali-Tripathi")
console.log(myString1);

console.log(myString1[5]);
console.log(myString1.length);

console.log(myString1.__proto__);

console.log(myString1.toUpperCase());
console.log(myString1.toLowerCase());
console.log(myString1.charAt(7));
console.log(myString1.indexOf('r'));

const myNewString1 = myString1.substring(0, 4)
console.log(myNewString1);

const myanotherString = myString1.slice(2, -5)
console.log(myanotherString);

const myanotherString1 =  "    Saroj   "
// console.log(myanotherString1.trim());
console.log(myanotherString1.trimStart());
console.log(myanotherString1.trimEnd());

const url = "https://anjali.com//anjali%20Tripathi"
console.log(url.replace("%20", "-"));
console.log(url.replace("%20", " "));

console.log(url.includes("anjali"));
console.log(myString1.split("-"));
console.log(myString1.split(" "));


console.log(myString1.at(5));
console.log(myString1.at(-5));

console.log(myString1.charCodeAt(2));

const myNewNumber = 200
console.log(myNewNumber);

const myNewNumber1 = new Number(500)
console.log(myNewNumber1);

console.log( myNewNumber1.toString().length);

console.log(myNewNumber1.toFixed(2));

const myanotherNumber = 23.8569
console.log(myanotherNumber.toPrecision(3));

const hundreads = 100000000
console.log(hundreads.toLocaleString('en-In'));


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Math);

console.log(Math.abs(-6));

console.log(Math.round(4.5));

console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));

console.log(Math.sqrt(196));
console.log(Math.pow(2, 5));

console.log(Math.max(3, 5, 8, 6, 2));
console.log(Math.min(3, 5, 8, 6, 2));

console.log(Math.random());
console.log((Math.random() * 10) + 1 );

console.log(Math.floor(Math.random() * 10) + 1 );

const max = 25
const min = 20
console.log(Math.floor(Math.random () * (max - min + 1) ) + min);

const mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());

const mynewdate = new Date(2025, 0, 25, 5, 15, 5)
console.log(mynewdate.toLocaleDateString());
console.log(mynewdate.toDateString());
console.log(mynewdate.toLocaleString());
console.log(mynewdate.toLocaleDateString());

const mynewcreateddate = new Date("2023-01-20")
console.log(mynewcreateddate.toLocaleDateString());
console.log(mynewcreateddate.toLocaleString());


const myanotherdate = new Date("01-25-2023")
console.log(myanotherdate.toLocaleDateString());

const mytimestamp = Date.now()
console.log(mytimestamp);

console.log(mydate.getTime());

console.log(Math.floor(Date.now()/1000));

const newdate = new Date()
console.log(newdate);

console.log(newdate.getMonth() + 1);
console.log(newdate.getFullYear());
console.log(newdate.getDate());
console.log(newdate.getDay());
console.log(newdate.getHours());
console.log(newdate.getMinutes());
console.log(newdate.getSeconds());
console.log(newdate.getMilliseconds());

console.log(newdate.toLocaleString('default', {
      weekday : "long",
      day : "2-digit",
      month : "numeric",
      year : "numeric",
      hour : "2-digit",
      minute : "numeric",
      second : "2-digit"
}));

const myArray = ["Shaktiman", "Doremon", 100, 200, true, false, ["Anjali", 100, true], {name : "Anjali", age : 19, isLoggedIn : true}]

console.log(myArray[7]);

const myArray1 = new Array("Anjali", 300, true, ["Saroj", 200, false], { cartoonname : "Pokemon", email : "abc123@.com"})

console.log(myArray1);
myArray1.push(["shinchan, 200, true", {name : "Saroj", age : 40, isLoggedIn : true}])
console.log(myArray1);


const mynewArray = new Array(0, 1, 2, 3, 4, 5)
mynewArray.push(6)
console.log(mynewArray);
mynewArray.pop()
mynewArray.shift()
mynewArray.unshift(7)

console.log(mynewArray);
console.log(mynewArray.includes(9));
console.log(mynewArray.indexOf(3));

const myanotherarray = mynewArray.join()
console.log(myanotherarray);

const mya1 = mynewArray.slice(1, 4) 
console.log(mya1);

const mya2 = mynewArray.splice(1, 4)
console.log(mya2);


const marval_heroes = ["spiderman", "batman", "superman"]
const dc_Heroes = ["shaktiman", "doga, mukambo"]

 
// marval_heroes.push(dc_Heroes)
// console.log(marval_heroes);

const allHeroes = marval_heroes.concat(dc_Heroes)
console.log(allHeroes);

const all_new_heroes = [...marval_heroes, ...dc_Heroes]
console.log(all_new_heroes);

const myrareArray = [0, 1, 2, 3, 4, 5, [4, 5], [6, 7, 8, [3, 4, 5]]]
console.log(myrareArray.flat(2));

console.log(Array.isArray("Anjali"));
console.log(Array.from("Anjali"));
console.log(Array.from([100, 200, 300]));
console.log(Array.from({ name : "Anjali"}));

let score1 = "Anjali"
let score2 =  100
let score3 =  true
let score4 =  ["shaktiman", 100, true] 
let score5 =  {user : "Anjali", age : 19, isLogged : true}
let score6 =  ["Doremon", 300, true, { username : "Saroj"}]
let score7 =  false

console.log(Array.of(score1, score2, score3, score4, score5, score6, score7));

const mySym = Symbol("mykey1")

const myobject = {
     name : "Anjali",
     age : 19,
     "fullname" : "Anjali Tripathi",
     [mySym] : "mykey1",
     isLoggedIn : true,
     location : "Banda",
     email : "abc123@.com",
     Lastlogindays : ["Monday", "Saturday"],
     myobj : {
         username : "Anjali",
         Price : 199
     }
}

console.log(myobject);

console.log(myobject.Lastlogindays);
console.log(myobject["email"]);
console.log(myobject["fullname"]);
console.log(myobject[mySym]);
// console.log(typeof myobject.mySym);

myobject.email = "Anjali123@.com"
// Object.freeze(myobject)
myobject.email = "Saroj123@.com"
console.log(myobject);

myobject.greeting = function(){
      console.log("Hello Js user");
      return 
}

console.log(myobject.greeting());

myobject.greetingTwo = function(){
      console.log(`Hello Js user ${this.email}`);
      
}

console.log(myobject.greetingTwo());

// const tinderUser = new Object()


const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Anjali"
tinderUser.isAdmitted =  true


console.log(tinderUser);

const regularUser = {
      email : "Anjali@.com",
      fullname : {
            firstname : "Anjali",
            lastname : "Tripathi",
          address : {
             location : "Bengluru",
             Road : "Ab Line" ,
             Address : true
           }  
      }
}

console.log(regularUser);
console.log(regularUser.fullname.address.Road);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj6 = {5 : "c", 6 : "d"}

const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2, obj6)
console.log(obj4);

const obj5 = {...obj1, ...obj2, ...obj6}
console.log(obj5);

const user = [
      {
         email : "123@.com",
         id : "1bl@" 
      },

       {
         email : "abc@.com",
         id : "abl@" 
      },

       {
         email : "xyz@.com",
         id : "xbl@" 
      }
]

console.log(user[0].email);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isAdmitted")); 



const course = {
      coursename : "Js Series",
      courseInstructor : "Anjali" ,
      Price : 199
}

console.log(course.coursename);

const {courseInstructor : Instr} = course
console.log(Instr);

// {
//       "course" : "Js Series",
//       "Price" : "199",
//       "courseInstructor" : "Anjali"
// }

// [
//       {},
//       {},
//       {}
// ]


// function sayMyName (){
//       console.log("A");
//       console.log("n");
//       console.log("j");
//       console.log("a");
//       console.log("l");
//       console.log("i");
      
// }

// console.log(sayMyName());

// function addTwoNumbers(number1, number2){
//         console.log(number1 + number2);
        
// }

function addTwoNumbers(number1, number2){
//      let result = number1 + number2
//      return result
        return number1 + number2
}

// addTwoNumbers(3, 5)
const result = addTwoNumbers(3, 5)
console.log("Result", result);

function loginUserMessage(username = "Sam"){
      if(username === undefined){
           console.log("Please enter your name");
           return
      }
      if(!username){
          console.log("please enter your name");
          return
          
      }
      return `${username} just Logged In`
}

console.log(loginUserMessage("Anjali"))
// console.log(loginUserMessage("")) 
console.log(loginUserMessage())


















 




























































 











 






 


















  
  
     
   
   
   
   
   
   
   
   
   





























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 