//  Date => Javascript date objects represents a single moment in a platform. and these moments are define from 1 January 1970 and from here whatever date we declare is count. rhese dates are usually counts in millisec. so whenever we declare date object a long string has come that's nothing but a millisec time taken from january 1st . so this can be store/compare easily in mili/sec  because in that case you can compare dates but it's not too easy.   

let mydate = new Date()
// so this is date's object or date's instance. now how this instance look a like.
console.log(mydate);
// so here that result came it can't comparable and can't used. so here that case come that how does we bring some more conversion.  
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(typeof mydate);


// if we want declare a specific date
// in javascript months start with 0
let mycreateddate = new Date(2023, 0, 25) 
console.log(mycreateddate.toDateString());

// we can also take time like hours, minutes etc.
let mynewcreateddate = new Date(2025, 0, 25, 5, 5, 3) 
console.log(mynewcreateddate.toLocaleString());

// if we want to take dates in more specific format if we want to see specifically format in dd/mm/yy or yy/mm/dd
let mymorenewcreateddate = new Date("2025-01-23")
console.log(mymorenewcreateddate.toLocaleString());

// if we write in single digit or count array so month starts 0 and if we write in dd/mm/yy so our month start with 1. in india this syntax is not so popular. we prefer mm//dd/yy

let mynewdate = new Date("01-23-2025")
console.log(mynewdate.toLocaleString());

// you can also have timestamps inside date. this is useful for when we want to check exact timestampvalue especially when we designs quizes in javascript and design poles who gives fastest we want to declare him winner so in these cases we use timestamps.

let myTimeStamp = Date.now()
// we can also use new keyword.
console.log(myTimeStamp);
// so the result is large string and this long digit is millisecond that we read 1st january 1970 from there to now millisecond value. so it becomes difficult to get any value from this millisecond values. suppose we have to get millisecond from this mynewdate when we create hotel apps or poll so many times we have to compare that dates. then that case:
console.log(mynewdate.getTime());
// as we print this we get date because this date is object so we will give this gettime this gettime will give that same big millisecond value from 1st january 1970 so now we can compare easily both millisecond value.


//we want to convert this in seconds
console.log(Date.now()/1000);  // so this gives decimal value and we don't want this. so we write this in Math.floor or Math.roundof.
console.log(Math.floor(Date.now()/1000));
// so we get seconds and such small value compare easily.



// some more method that get with date easily

let newdate = new Date()
console.log(newdate);  
// because date is a object in itself but if we print this as it is so newdate doesn't give you some important imformation we have to calculate this and convert this if we want to extract some more information form this suppose we don't want to convert all in string we only want to know month or year so we can easily and for this we have some method.
console.log(newdate.getMonth() + 1 );  // here we +1 because here month is count from 0
console.log(newdate.getDate());
console.log(newdate.getDay());
console.log(newdate.getFullYear());
console.log(newdate.getHours());
console.log(newdate.getMinutes());
console.log(newdate.getSeconds());

//  one more method that is very important

console.log(newdate.toLocaleString('default', {
     weekday: "long",
     day: "numeric",
     month: "short",
     year: "numeric",
     hour: "numeric",
     minute: "numeric",
     second: "numeric",
    
}))
// inside this we define object and we can also define lots of parameters first we write interlization so we write here default and after that object and inside this object what do we want we can define here there are many properties with the help of this format we can more coustomize values.
















