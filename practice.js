

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



























































 











 






 


















  
  
     
   
   
   
   
   
   
   
   
   





























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 