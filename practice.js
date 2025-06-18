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











 






 


















  
  
     
   
   
   
   
   
   
   
   
   





























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 