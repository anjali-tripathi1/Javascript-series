 const myString = ["shaktiman", "Doremon", "Pokemon"]
 const myNumber = [100, 200, 300]
 const myBoolean = [true, false]
 const myArray = ["pokemon", 100, true, {name : "Anjali", age : 19, isLoggedIn : true},]
console.log(myString[2]);
console.log(myNumber[1]);
console.log(myBoolean);
console.log(myArray);

const myArray2 = new Array("Anjali", "Saroj", "Shaktiman", 100, 200, true, false, ["Anjali", 300, true, {name : "Anjali"}], { number : 200, name : "Anjali"})
console.log(myArray2);

const myArr = ["Anjali", 100, 200, true, false]
console.log(myArr);

myArr.push(300)
// console.log(myArr);
myArr.pop()
myArr.shift()
myArr.unshift(25)
// console.log(myArr);

// console.log(myArr.length);
// console.log(myArr.includes(200));
// console.log(myArr.indexOf(9));

// const mynewArr = myArr.join()
// console.log(myArr);
// console.log(mynewArr);
// console.log(typeof mynewArr);
const myArr3 = new Array("Anjali", 100, 200, true, false)

const myn1 = myArr3.slice(0, 3)
console.log(myn1);

const myn2 = myArr3.splice(0, 3)
console.log(myn2);

const marval_heroes = ["shaktiman", "Pokemon", "Doremon"]
const dc_Heroes = ["Anjali", "Saroj", 200, 300]

marval_heroes.push(dc_Heroes)
console.log(marval_heroes);

marval_heroes.concat(dc_Heroes)
console.log(marval_heroes);

console.log(marval_heroes[3][1]);


const myvalue1 = ["shaktiman", "pokemon", 200, 300]
const myvalue2 = ["shinchan", "Doremon", 300, 200]

const allValues = myvalue1.concat(myvalue2)
console.log(allValues);

const all_new_heroes = [...myvalue1, ...myvalue2]
console.log(all_new_heroes);

const mynewvalues = [0, 1, 2, 3, 4, 5, [4, 5], [5, 6, 7, [4, 5]]]
const my_new_values = mynewvalues.flat(2)
console.log(my_new_values);

console.log(Array.isArray("Anjali"));
console.log(Array.from("Anjali"));
console.log(Array.from([100, 200, 300]));
console.log(Array.from([true, false]));
console.log(Array.from({name : "Anjali"[0, 0]}));

let score1 = "Anjali"
let score2 = 200
let score3 = true
let score4 = false
let score5 = ["Anjali", 100, true]
let score6 = {
    name : "Anjali",
    age :  19,
    isLoggedIn : true
}

console.log(Array.of(score1, score2, score3, score4, score5, score6));



const mynewArr1 = [0, 1, 2, 3, 4, 5]
console.log(mynewArr1);

const myn3 = mynewArr1.slice(1, 3)
console.log(myn3);

const myn4 = mynewArr1.splice(1, 3)
console.log(myn4);
 
const mySym = Symbol("key1")

const myobj = {
    name : "Anjali",
    age : 19,
    [mySym] : "mykey1",
    "fullname" : "Anjali Tripathi",
    isLoggedIn : true,
    myvalue : ["shaktiman", 100, true],
    myobj1 : {
        myfirstname : "Anjali",
        mylastname : "Trupathi"
    }
}

console.log(myobj);
console.log( myobj.name);
console.log( myobj.myobj1);
console.log(myobj["name"]);
console.log(myobj["fullname"]);

console.log(myobj[mySym]);

myobj.name = "Saroj"
// Object.freeze(myobj)
myobj.name = "Peter"
console.log(myobj);

myobj.greeting = function(){
    console.log("Hello Js user");
    
}

console.log(myobj.greeting);
console.log(myobj.greeting());


myobj.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`);
    
}

console.log(myobj.greetingTwo());



let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toTimeString());
console.log(typeof mydate);


let mynewdate = new Date(2023, 0, 25, 5, 20, 5)
console.log(mynewdate.toDateString());
console.log(mynewdate.toLocaleString());


let mynewdate1 = new Date("2025-01-23")
console.log(mynewdate1.toLocaleString());

let mynewdate2 = new Date("01-25-2023")
console.log(mynewdate2.toLocaleDateString());

let myTimeStamp =  Date.now()
console.log(myTimeStamp);

console.log(mynewdate.getTime());

console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let myupdatedate = new Date()
console.log(myupdatedate);

console.log(myupdatedate.getMonth() + 1);
console.log(myupdatedate.getDate());
console.log(myupdatedate.getDay());
console.log(myupdatedate.getFullYear());
console.log(myupdatedate.getSeconds());

console.log(myupdatedate.toLocaleString('default', {
    weekday : "long",
    month : "long",
    day : "numeric",
    year : "numeric",
    hour : "2-digit",
    minute : "2-digit"
}));


// const tinderUser = new Object()
const tinderUser = {}
console.log(tinderUser);

tinderUser.id = "abc123"
tinderUser.name = "Peter"
tinderUser.isLoggedIn = true
console.log(tinderUser);

const mysub = {
    email : "abc@gmail.com",
    id : "123@",
    fullname : {
        userfullname : {
            firstname : "Anjali",
            lastname : "Tripathi"
        }
    }
}

console.log(mysub.fullname.userfullname.lastname);

let myobj1 = {1 : "a", 2 : "b"}
let myobj2 = {3 : "a", 4 : "b"}
let myobj3 = {5 : "a", 6 : "b"}

console.log(myobj1, myobj2, myobj3);
let obj4 = {myobj1, myobj2, myobj3}
console.log(obj4);

const obj5 = Object.assign(myobj1, myobj2, myobj3)
console.log(obj5);

const obj6 = {...myobj1, ...myobj2, ...myobj3}
console.log(obj6);

const users = [
    {
        email : "abc@gmail.com",
        id : "ybl123@"
    },

     {
        email : "xyz@gmail.com",
        id : "ybl123@"
    },

     {
        email : "mno@gmail.com",
        id : "ybl123@"
    }
]

console.log(users);
console.log(users[1].email);
console.log(users[0].id);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "Js Series",
    Price : "999",
    courseInstructer : "peter"
}

// console.log(course.Price);

const {courseInstructer : Instructor} = course
console.log(Instructor);

const {Price : p} = course
console.log(p);



























 











 






 


















  
  
     
   
   
   
   
   
   
   
   
   





























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 