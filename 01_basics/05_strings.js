 
 const name = "Anjali"
 const repoCount = 10

 console.log(name +  repoCount +  " value");   // this is outdated


 console.log(`My name is :- ${name} and my repoCount is :- ${repoCount}`);

 // backticks (``) use for string interpolation it means we make placeholder and for help of this we can directely inject variable inside this.


 // one more way to declare string

 const gameName = new String('Anjali-Tr')
 // when we write string in console they have position and these are keyvalue pairs 0 is key and A is value. string is object. and they have prototype.
// here string is object.
//  0 : "A"
//  1 : "n"
//  2 : "j"
//  3 : "a"
//  4 : "l"
//  5 : "i"
// length : 6

 // if we want any property we know that we have keyvalue pairs so we will get property easily.
 console.log(gameName[0]);    // we want to access key.

 // we can also access prototype. 
 console.log(gameName.__proto__); // we get object it looks empty now but actually it's not empty there is a lot of value in it. 

 console.log(gameName.length);
 // all other methods can access like this.

 // the f next to prototypes is functon or methods that are directly availble.
 console.log(gameName.toUpperCase());

 // suppose we want to see any charecter's position. in index which charecter.
 console.log(gameName.charAt(5));

//  for knowing charecter's number. 
console.log(gameName.indexOf("l"));

//  sometimes we have to break string into parts or we have to sanitize it. so we should know about string.

//  we have to slice this we can store this in variable. and In substring we have to give start number and end number and in end number  which value we give is not including. like we give end number 4 but only 3 charecters appared. here we can't give -neg values.
const newString = gameName.substring(0, 5)
console.log(newString);

//  in slice protype we can also give negative value.
const anotherString = gameName.slice(-8, 6)
console.log(anotherString);

// one more method that we use in string that trim or replace.

// inside string we add spaces this type of string is very common where it come, when you create input form in your website then user deliberatily, unknowingly or knowingly add lots of extra charcters or specially spaces sometimes we don't want these spaces in password field we won't do this sometimes it gives email and we don't want spaces so there we should't need these spaces.
const anotherStringOne =  "   Anjali   "
console.log(anotherStringOne);
//  trim removes starting or ending space.
console.log(anotherStringOne.trim());    // this use for removeing both space.
console.log(anotherStringOne.trimStart()); // this is used for removing starting space.
console.log(anotherStringOne.trimEnd());   // this is used for removing ending space.





 





  
 
 
 
 