 // reduce
 // this is most used in shopping cart

 // in basic function
 const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//      console.log(`acc: ${acc} and currval: ${currval}`);
     
//      return acc + currval
//  }, 0)

 // in arrow function

 const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)

 console.log(myTotal);
 

 // this accumultor doesn't know how should it start from so after function add comma and there we write what we want to take value of accumulator so we start from 0.  

 // here value comes but we want to check that what value is coming inside accumulator every time and too currentvalue.


 const shoppingCart = [
    {
        itemname : "Js course",
        Price : 2999
    },

     {
        itemname : "Py course",
        Price : 999
    },

     {
        itemname : "Mobile dev course",
        Price : 5999
    },

     {
        itemname : "Datascience course",
        Price : 12999
    }
 ]

 // now we have to add all prices

 const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.Price, 0)

 console.log(priceToPay);

 // item denotes the value of objects those inside array 
 



































 