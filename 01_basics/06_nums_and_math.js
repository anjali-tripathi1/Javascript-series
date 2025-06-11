 const score = 500
 // here javascript automatically detact that this score has type number but sometimes we can explicitly define that we want number type.
 console.log(score);

 const balance = new Number(100)
 console.log(balance);

 // so this is the diffrence between both that score is 500 because it define automatically that it is number type. but in balance number is specifically cast that it is number type so this is the diffrence new is being defineing object and this is number type. 

 //  we have lots of methods or fuction of number prototype

 console.log(balance.toString());
 console.log(balance.toString().length);
 // now it's typeof is string and now we have also additional properties of string like length and so on.

 // we can also things fixed
 console.log(balance.toFixed(2));
 console.log(balance.toFixed(1));
 // especially in e-commerce website because there many times calculation and multiplication happens and calculate gst so pricision value gets bigger and client doesn't want to see that so there we should always use tofixed.


 // precesion value can be used in other ways as well 

 const otherNumber = 1123.8966
 console.log(otherNumber.toPrecision(5));
 // it means we want pecise value how many values we have to focus. priority is getting before decimal priority can also get after decimal but calculation value should be dependency.
 
 const hundreads = 1000000
 console.log(hundreads.toLocaleString('en-In'));
// in javascript we get some method with the help of these methods we can easily these 0 repersentation.
// these are presented with comma and these comma are usually or by default related with US standards. and  in US standrads values are 100, 1000 and 1000, 1000 like this we can also convert this default value so we can use  indian standrads 'en-In' and there are more values that we can check in mdn docs.

// for computing programing or DSA  there a concept that is min and max value that how many max values can we take in number.
// Number is a datatype and with attach this we get direct properties and there are very fuctions like native code and as we put (.) so we have many values.
// if we put max value we know that this can be maximum value. just like this we get min value,In max safe integer we can say that just that much can be value and other on.  
//  Number.maxvalue


// ###################### maths ########################

// this math subject and maths library comes default with javascript  and this library is very intresting and powerful.

console.log(Math);
// this is object in itself and inside this many properties.
// here we get less value but in console we get lots of properties. and we can access these values by doing add (.).
// we can akso access fuctions.
console.log(Math.abs(-5));
// abs is absolute value sometimes we have negative values and we have to change the sign and here only _neg values change +positive and this is absolute. and +posit is +Posi that's not change.


console.log(Math.round(4.3));
// here we don't want decimal so gave 4.3 roundof.

console.log(Math.round(4.6));
// as we regular ways if value is .5 or bigger then .5 so it will be 5. and if small it remain same.
// but if we want to control that value will choose upper or lower.
console.log(Math.ceil(4.2)); // it is called ceiling means top it choose upper value if it little more than the force the value choose top.
console.log(Math.floor(4.3));  // it is called floor means lower value and it takes lower value.
console.log(Math.floor(4.9)); 

// this takes the square root of the value.
console.log(Math.sqrt(25));
console.log(Math.sqrt(64));

// this is for power increase
console.log(Math.pow(5, 2));
console.log(Math.pow(6, 3));

// we can use min value if we want to check what is the lowest value in array.
console.log(Math.min(5, 4 , 8, 7, 1));

// like this max works if we want to check what is the biggest value in array.
console.log(Math.max(5, 8, 9, 11, 15));


// where the math library is most used and where we use this most.
// we use this most in random
console.log(Math.random());
// it value lies always between 0 to 1 and it can be 0 to 0 and 0 to 1

// now question will come or problem Statement now in math.random the value will be between some range to some range. like we are making dice game so we know that we want value between 1 to 6 or we are making some other game which value lies between 1 to 10.
console.log(Math.random()*10 + 1);  // this structure compiles bodmas and becomes problem so exact avoid same first we multiply this Math.random with*10 and then wrap in bracket now that result comes that do +1 so now it's 100% guranted that values are confirm and we don't need to check which one will excute first and which one is excute second.
// value can be 0 like 0.041 this is also between 0 to 1 so avoid thar thing we add +1 so now it's guranted that min value will be 1 not 0. 














 
 
 
 
 