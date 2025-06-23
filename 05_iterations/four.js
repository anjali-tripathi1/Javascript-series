 
// for in loop for object

 const myObject = {
     js : 'Javascript',
     cpp : 'C++',
     rb : 'ruby',
     swift : 'Swift by apple'
 }

 for (const key in myObject) {
      console.log(key);
      
 }

 // here only keys are come but we want object too.
 // if you have keys so you can get object easily.

 for (const key in myObject) {
     console.log(myObject[key]);
     
 }

 // if you want to run

 for (const key in myObject) {
     console.log(`${key} shortcut is for ${myObject[key]}`);
     
 }


 // forin loop with array

 const programing = ["js", "java", "cpp", "py", "rb" ]
 for (const key in programing) {
     console.log(key);
       
 }

 // here keys print in number but we want value so we'll do it with [].

 for (const key in programing) {
     console.log(programing[key]);
       
 }

// the diffrence between (forof, forin) both the loops is that which gives the value and which gives the keys.

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('In', "India")

for (const key in map) {
    console.log(key);
    
}

// here this is not print because map is not iteratable if something is not iteratable so we can't write that like this in loops we have another ways that we've seen next.