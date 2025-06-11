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
 // priority is getting before decimal priority can also get after decimal but calculation value should be dependency.
 
 const hundreads = 1000000
 console.log(hundreads.toLocaleString('en-In'));
// in javascript we get some method with the help of these methods we can easily these 0 repersentation.
// these are presented with comma and these comma are usually or by default related with US standards. and  in US standrads values are 100, 1000 and 1000, 1000 like this we can also convert this default value so we can use  indian standrads 'en-In' and there are more values that we can check in mdn docs.

// for computing programing or dsa so here aconcept that is min and max value

 
 
 
 
 