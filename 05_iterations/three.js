 // now these loops are array specific loops and we have direct properties of array for loops

//  ["", "", ""]
//  [{}, {}, {}]
// these are common situations.

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    
}

// here iterator/element of object means that value which we want to use for loop
// and iterators are anything like object, array, strings
// in place of element basically we use this as a variable name.

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each Char is: ${greet} `);
    
}

// Maps

// it's a bit like an array.

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('In', "India")


console.log(map);
// maps do not give duplicate value it gives unique value. as we can see that this not print the value again so it gives unique value.
// maps are also in keyvalue pairs and that order we insert it remains in that order.

for (const key of map) {
    console.log(key);
    
}

// if we excute like this so all comes in array but if we want values diffrent (Alag- Alag) so we have shortcut.

// now we use here [] and we can hold key and value diffrent so here array gets destructured. 

for (const [key, value] of map) {
    console.log(key, ':-' ,value);
    
}

// for object

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'spiderman',
//     game1 : 'NFS',
//     game2 : 'spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// for iterating object we have another ways so this syntax is not working here

