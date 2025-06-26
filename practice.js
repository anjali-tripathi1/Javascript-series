



// const myString = "Anjali"
// const myRepo = 10

// console.log(myString + myRepo + " value");
// console.log(`myString is: ${myString} and repo is: ${myRepo}`);

const myString = new String("Anjali Tripathi")
console.log(myString);
console.log(myString[9]);
console.log(myString.length);
console.log(myString.toLocaleUpperCase());
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.charAt(10));
console.log(myString.indexOf('h'));
const myNewString = myString.substring(1, 4)
console.log(myNewString);

const myString2 = myString.slice(-7, 4)
console.log(myString2);

const myValue = "  Anjali   "
console.log(myValue);
console.log(myValue.trimStart());
console.log(myValue.trimEnd());
console.log(myValue.trim());

const url = "https://anjali.com/anjali%20tripathi" 
console.log(url.replace('%20', '-'));
console.log(url.replace('%20', ' '));
console.log(url.replace('%20', '##'));

console.log(url.includes("anjali"));







































