



// const myString = "Anjali"
// const myRepo = 10

// console.log(myString + myRepo + " value");
// console.log(`myString is: ${myString} and repo is: ${myRepo}`);

const myString = new String("Anjali-Tripathi")
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
console.log(url.split('-'));
console.log(url.split(' '));
console.log(myString.split('-'));
console.log(myString.split(' '));

const value1 = "Hello"
const value2 = " Anjali ,"
console.log(value1.concat(value2));
console.log(value2.concat(value1));
console.log(value1.concat(" ", value2));
console.log(value2.concat(" ", value1));

const score = 500
console.log(score);

const score1 = new Number(300)
console.log(score1);

console.log(score1.toString());
console.log(typeof score1.toString());
console.log(score1.toString().length);

let myNums = 200
console.log(myNums.toFixed(2));
console.log(myNums.toFixed(1));

let myValues = 23.876
console.log(myValues.toPrecision(4));

let hundreads = 1000000
console.log(hundreads.toLocaleString('en-In'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.5));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.5));

console.log(Math.sqrt(289));
console.log(Math.pow(8, 3));

console.log(Math.floor(Math.random() * 10) + 1);

console.log(Math.max(5, 8, 10, 15, 18));
console.log(Math.min(5, 8, 10, 15, 18));

const max = 20
const min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

const mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());

const myNewDate = new Date(2025, 0, 25, 5, 18, 5)
console.log(myNewDate);
console.log(myNewDate.toDateString());
console.log(myNewDate.toTimeString());
console.log(myNewDate.toLocaleString());
console.log(myNewDate.toLocaleTimeString());
console.log(myNewDate.toDateString());

const mycreateddate = new Date("2025-1-23")
console.log(mycreateddate.toString());
console.log(mycreateddate.toLocaleString());

const myNewCreatedDate = new Date("01-25-2024")
console.log(myNewCreatedDate.toString());
console.log(myNewCreatedDate.toLocaleString());

const myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myNewCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

const myNewDate1 = new Date()
console.log(myNewDate1);

console.log(myNewDate1.getFullYear());
console.log(myNewDate1.getMonth() + 1);
console.log(myNewDate1.getDay());
console.log(myNewDate1.getDate());
console.log(myNewDate1.getHours());
console.log(myNewDate1.getMinutes());

console.log(myNewDate1.toLocaleString("default", {
    weekday : "long",
    month : "2-digit",
    day : "numeric",
    hour : "2-digit",
    minute : "numeric",
    year : "numeric",
    second : "2-digit"
}));


































































