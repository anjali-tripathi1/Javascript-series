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

// you can also have timestamps inside date. this is useful for when we want to check exact timestampvalue especially when we designs quizes in javascript and design poles who gives fastest we want to declare him winner so in these cases we use timestamps







