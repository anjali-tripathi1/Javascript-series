 const userEmail = "A@Anjali.ai"
//  const userEmail = ""
//  const userEmail = []

 if(userEmail){
      console.log("Got User Email");
      
 } else {
     console.log("Don't have user Email");
     
 }

 // here we assume that userEmail is truth value because here we are not compare that userEmail === ""
//  so here we just assume that string is a true value so it's truthy value.

// if we give empty string "" so it's value is assume false.


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Instead of all these values all values are true or truthy values.

// truthy values
// "0", 'false', " ", [], {}, function(){}

// for checking array, we check array like this

const emptyArray = []
if(emptyArray.length === 0){
     console.log("Array is Empty");
     
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0 ){
       console.log("Object is empty"); 
       
}

// some more question interview related

// false == 0   // true
// false == ''  // true
// 0 == ''      // true