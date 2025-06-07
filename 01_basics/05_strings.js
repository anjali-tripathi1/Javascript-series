 
 const name = "Anjali"
 const repoCount = 10

 console.log(name +  repoCount +  " value");   // this is outdated


 console.log(`My name is :- ${name} and my repoCount is :- ${repoCount}`);

 // backticks (``) use for string interpolation.


 // one more way to declare string

 const gameName = new String('Anjali')
 // when we write string in console they have position and these are keyvalue pairs 0 is key and A is value. string is object. 


 // if we want any property we know that we have keyvalue pairs so we will get property easily.
 console.log(gameName[0]);    // we want to access key.

 // we can also access prototype. 
 console.log(gameName.__proto__);
 
 