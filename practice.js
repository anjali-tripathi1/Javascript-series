// const value1 = "Hello"
// const value2 = "world" 
// console.log(value1.concat(", ", value2));
// console.log(value2.concat(", ", value1));

// const marvalHeroes = ["batman", "superman", "spiderman"]
// const dcHeroes = ["shaktiman", "naagraj", "doga"]
// //  marvalHeroes.push(dcHeroes)
// // console.log(marvalHeroes);

// const allHeroes = marvalHeroes.concat(dcHeroes)
// console.log(allHeroes);

// const allNewHeroes = [...marvalHeroes, ...dcHeroes]
// console.log(allNewHeroes);

// const anotherArray = [1, 2, 3, 4, 5,[6, 7, 8], [3, 4, 5, [6, 7, 8]]]
// const realArray = anotherArray.flat(2)
// console.log(realArray);

// console.log(Array.isArray("Anjali"));
// console.log(Array.from("Anjali"));
// console.log(Array.from([1, 2, 3]));
// console.log(Array.from({name : "Anjali"}));

// let score1 = "Anjali"
// let score2 = 100
// let score3 = true 
// let score4 = ["Saroj", 200, true, {name : "Anjali", age : 20}]
// let score5 = {username : "Anjali", price : 399}

// console.log(Array.of(score1, score2, score3, score4, score5));

// const mySym = Symbol("key1")
// const myObject = {
//     name : "Anjali",
//     "full name" : "Anjali Tripathi",
//     [mySym] : "mykey1",
//     age : 20,
//     isLoggedIn : true,
//     location : "Banda",
//     email : "Anjali@.com",
//     lastLoginDays : ["Monday", "Saturday", "Sunday"],
    
// }

// console.log(myObject["name"]);
// console.log(myObject["full name"]);
// console.log(myObject[mySym]);
// console.log(myObject);

// myObject.email = "Anjali7398@.com"
// // Object.freeze(myObject)
// myObject.email = "Saroj@.com"
// console.log(myObject);

// myObject.greeting = function () {
//      console.log("Hello World");
     
// }

// myObject.greetingTwo = function () {
//      console.log(`Hello myObject ${this.email}`);
     
// }

// console.log(myObject.greeting());
// console.log(myObject.greetingTwo());

// console.log(myObject);


// // const myUser = new Object()
// const myUser = {}
// console.log(myUser);

// myUser.id = "Anjali@.com"
// myUser.name = "Anjali"
// myUser.isLoggedIn = true
// console.log(myUser);


// const regularUser = {
//     email : "Anjali@.com",
//      name : {
//         username : {
//             fullname : {
//                  firstName : "Anjali",
//                  lastName : "Tripathi"
//             }
//         }
//      }
// }

// console.log(regularUser.name.username.fullname.lastName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

// const myAllObj = {obj1, obj2, obj3}
// console.log(myAllObj);

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const myObj = {...obj1, ...obj2, ...obj3}
console.log(myObj);



























































 























