
const myArray = ["shaktiman", "doremon", "pokemon", 100, 200, 300, true, false, {name : "Anjali", age : 19}, ["Saroj", "Anjali", 100, 200, true, {course : "javascript", price: 399}]]

console.log(myArray[9][5]);
console.log(typeof myArray);

const myNewArray = new Array(1, 2, 3, 4, 5)
// console.log(typeof myNewArray);
myNewArray.push(6)
myNewArray.pop()
myNewArray.shift()
myNewArray.unshift("Anjali") 
console.log(myNewArray);

const myArr = ["Anjali", "Saroj", 100, 200, 300]
console.log(myArr.includes("Anjali"));
console.log(myArr.indexOf(200));

const myValue = myArr.join()
console.log(myValue);
console.log(typeof myValue);

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);
const myn2 = myArr.splice(1, 3)
console.log(myn2);

const marval_heroes = ["shaktiman", "doremon", "pokemon"]
const dc_Heroes = ["flash", "Anjali", "naga"]

// const all_new_heroes = marval_heroes.push(dc_Heroes)
// console.log(all_new_heroes);

// marval_heroes.push(dc_Heroes)
// console.log(marval_heroes);
// console.log(marval_heroes[3][2]);

// const allHeroes = marval_heroes.concat(dc_Heroes)
// console.log(allHeroes);

const allHeroes = [...marval_heroes, ...dc_Heroes]
console.log(allHeroes);

const rareArray = [1, 2, 3, 4, 5, [6, 7, 8], [3, 4, 5,[6, 7, 8]]]
const newRareArray = rareArray.flat(2)
console.log(newRareArray);

console.log(Array.isArray("Anjali"));
console.log(Array.from("Anjali"));
console.log(Array.from([100, 200, 300]));
console.log(Array.from({name : "Anjali"}));

let score1 = "Anjali"
let score2 = 100
let score3 = true
let score4 = ["Anjali", 200, true, { name : "Saroj", age : 19 }]
let score5 = {course : "Javascript", Price : 399}

console.log(Array.of(score1, score2, score3, score4, score5));

const mySym =  Symbol("key1")

const myObject = {
    name : "Anjali",
    "fullName" : "Anjali Tripathi",
    age : 19,
    [mySym] : "mykey1",
    isLoggedIn : true,
    location : "banda",
    email : "anjali@7393.com",
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(myObject.email);
console.log(myObject["email"]);
console.log(myObject["fullName"]);
console.log(myObject[mySym]);
console.log(myObject);



// Object.create()

myObject.email = "Saroj7398@gmail.com"
Object.freeze(myObject)
myObject.email = "Aman@.com"
console.log(myObject);

















