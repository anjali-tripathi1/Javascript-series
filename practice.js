// function checkOddEven (num) {
//     // return num % 2 === 0 ? "even" : "odd"
// //    const remainder = num % 2

// //    if (remainder === 0) {
// //        return "even"
// //    } else {
// //         return "odd"
// //    }

//  switch (num % 2) {
//        case 0 :
//           return "even"
//          break;

//        default :
//            return "odd"
           
//          break;  
//  }
// }

// console.log(checkOddEven());


// function checkSmallestNumber (a, b, c) {
//     //  if (a < b && a < c ) {
//     //        return a;
//     //  } else if (b < c && b < a) {
//     //        return b;
//     //  }  else if (c < a && c < b) {
//     //        return c;
//     //  }

//     // return a;

//     let smallestNumber = a;
//     if (b < smallestNumber) {
//          smallestNumber = b;
//     }
//     if (c < smallestNumber) {
//           smallestNumber = c;
//     }

//     return smallestNumber;
// }

// console.log(checkSmallestNumber(3, 3, 1));


// function checkSmallestNumber (a, b, c) {
//     // if (a < b && a < c) {
//     //      return a;
//     // } else if (b < c && b < a) {
//     //      return b;
//     // } else if (c < a && c < b) {
//     //      return c;
//     // }

//     // return a;

//     let smallestNumber = a;
//     if (b < smallestNumber) {
//          smallestNumber = b;
//     } 

//     if (c < smallestNumber) {
//          smallestNumber = c;
//     }

//     return smallestNumber;
// }

// console.log(checkSmallestNumber(3, 3, 1))

function checkArea (length, width){
    if (length === 0) {
        throw("length should be greater than 0")
       
    } else if (width === 0) {
         throw("width should be more than 0")    
    }
     
      return length * width
    
}

console.log(checkArea(7, 0));
 



























































 























