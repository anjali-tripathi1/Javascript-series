 
// strings are very powerful in any language. 

 const name = "Anjali"
 const repoCount = 10

 console.log(name +  repoCount +  " value");   // this is outdated


 console.log(`My name is :- ${name} and my repoCount is :- ${repoCount}`);

 // backticks (``) use for string interpolation it means we make placeholder and for help of this we can directely inject variable inside this.


 // one more way to declare string

 const gameName = new String('Anjali-Tr-com')
 // when we write string in console they have position and these are keyvalue pairs 0 is key and A is value. string is object. and they have prototype.
// here string is object.
//  0 : "A"
//  1 : "n"
//  2 : "j"
//  3 : "a"
//  4 : "l"
//  5 : "i"
//  6 : "-"
//  7 : "T"
//  8 : "r"
//  9 : "-"
// 10 : "c"
// 11 : "o"
// 12 : "m"

// length : 13

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

// The .substring() method is used to extract a portion of a string between two specified indices


//  in slice method we can also give negative value.
const anotherString = gameName.slice(-8, 6)
console.log(anotherString);

// The .slice() method is used to extract a portion of a string without modifying the original string.


// one more method that we use in string that trim or replace.

// inside string we add spaces this type of string is very common where it come, when you create input form in your website then user deliberatily, unknowingly or knowingly add lots of extra charcters or specially spaces sometimes we don't want these spaces in password field we won't do this sometimes it gives email and we don't want spaces so there we should't need these spaces.
const anotherStringOne =  "   Anjali   "
console.log(anotherStringOne);
//  trim removes starting or ending space.
console.log(anotherStringOne.trim());    // this use for removeing both space.
console.log(anotherStringOne.trimStart()); // this is used for removing starting space.
console.log(anotherStringOne.trimEnd());   // this is used for removing ending space.


const url = "https://anjali.com/anjali%20tripathi"
// the problem is that browser doesn't understand spaces like someone add space in webpage so browser directly convert this space in %20 in url coding so in this situation we want to remove this %20 so for this we have some method.

// so in replace we have to write what we want to search and with which replace.
console.log(url.replace('%20', '-' ));
console.log(url.replace('%20', ' ' ));
console.log(url.replace('%20', '@#' ));

// you can also ask questions with this. like inside url some keywords are like anjali is include here or not
// whether a given string may be found within this string, returning true or false as appropriate.
console.log(url.includes('anjali'));
console.log(url.includes('saroj'));

// now we want to convert that gamename string into array based on what so in (-) that i what whatever values like Anjali-Tr-com this is split on diffrent part based on (-)  and based on anything like spaces, dashes.

console.log(gameName.split('-'));

const cartoonName = new String("Saroj#@ Tri#@ @@#@")
console.log(cartoonName.split(' '));
console.log(cartoonName.split('#@'));

// we use anchor method of string values creates a string that embeds this string is an element with a name.

const contentName = new String("Hello World")
console.log(contentName.anchor("hello"));   // now it's outdated and we don't use this. in place of this we use directly html. 

 // this at method takes an integer value and returns a new string consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.

 const atSentence = new String ("A lion is a ferocious animal.")
 const indexName = new String (5) 
 
//  console.log(`value of at method :- ${indexName} and value of at sentence :- ${atSentence.at(indexName)}`);
console.log(atSentence.at(-10));

// we also write this.
 const indexNegName = (-9)
 console.log(`value of at method :- ${indexNegName} and value of at sentence :- ${atSentence.at(indexNegName)}`);

 

 // big method  creates a string that embeds this string in a <big> element which causes this string to be displayed in a big font.
 
 const bigName = new String("Anjali")
 console.log(bigName.big());   // this is outdated in place of this we use directly html and css
  
 
//  The blink() method of String values creates a string that embeds this string in a <blink> element (<blink>str</blink>), which used to cause a string to blink in old browsers. 
// this is also outdated.


// The bold() method of String values creates a string that embeds this string in a <b> element (<b>str</b>), which causes this string to be displayed as bold.
// this is also outdated.

// The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

console.log(`value of charcodeat :- ${indexName} and sentence value is ${atSentence.charCodeAt(indexName)}`);
console.log(atSentence.charCodeAt(0));


// The codePointAt() method of String values returns a non-negative integer that is the Unicode code point value of the character starting at the given index. Note that the index is still based on UTF-16 code units, not Unicode code points.

console.log(atSentence.codePointAt(2));

// The concat() method of String values concatenates the string arguments to this string and returns a new string.

const value1 = new String("Hello")
const value2 = new String("Anjali")
console.log(value1.concat("  ", value2));
console.log(value2.concat(",  ", value1));


// The String() constructor creates String objects. When called as a function, it returns primitive values of type String.



// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

const  valueName = new String("A Dog is a very faithful animal.")
console.log(valueName.endsWith("animal."));
console.log(valueName.endsWith("animal", 31));

const valueName1 = new String("Are you fine?")
console.log(valueName1.endsWith("fine"));
console.log(valueName1.endsWith("fine?"));
console.log(valueName1.endsWith("fine?", 13));




// The isWellFormed() method of String values returns a boolean indicating whether this string contains any lone surrogates.


// The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.

const paragraph = "All things are good."
const searchterm = "good" 
console.log(`Index of the last:-  ${searchterm} is :- ${paragraph.lastIndexOf(searchterm)}`);


// The localeCompare() method of String values returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order. When comparing large numbers of strings, such as in sorting large arrays.











 





  
 
 
 
 