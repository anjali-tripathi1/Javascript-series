 
 console.log("Hello world");

 function addTwoNumbers (num1, num2) {
      
    //    console.log(num1 + num2);
        let result = num1 + num2 
        console.log(result);
        
        // return result
        // return num1 + num2
 }

//  addTwoNumbers(4*2, 1/0)
//  const result = addTwoNumbers(-1, 5)
//  console.log("result", result);

function area(length, width) {
    if (length <= 0) {
          throw new RangeError ("length should be a positive number") 
          
         
    }

    if (width <= 0) {
          throw new RangeError ("width should be a positive number") 
          
    }  
    
     let ar = length * width
    // return ar
    //  return length * width
     console.log(ar);
    //  console.log(length * width);
     
}

// area(2.5, -2/5)
// area(35, 22)
area(0, 5)
// const ar = area(6, 8)
// console.log("ar", ar);

 

 