 // arrays
 //  arrays are object, javascript arrays are resizable that means once we declare element then we can also add more elements and contain a mix of diffrent datatypes like number, string, boolean, object and also can be array inside array.  
// array elements can't be accessed using arbitary strings as indexes. for access this we use square bracket[] and we see its indexing, arrays indexing start with 0, first element's indexing is 0. so this is the way to access values.

// console.log(myArr[0]);      this is arrays feature like this arrays are design. 
// console.log(myArr["one"])   we can't access value like this.

// Javascript array-copy operations create shallow-copies (All Standard built-in-copy operations with any javascript objects create shallow copies, rathar than deep copies.)

// shallow copy => An shallow copy of an object is a copy whose properties share the same refrences (point to the same undefying values) as those of the source object from which the copy was made.
// do same refrence point that means which we will change that will also change in original array.

// Deep copy => a deep copy of an object is a copy whose properties do not share the same refrences (point to the same undefying values) as those of the source object from which the copy was made.


 // how to declare arrays
 
     const myArr = [0, 1, 2, 3, 4, 5]
     const myHeroes = ["shaktiman", "Naagraj"]
     console.log(myArr[0]);
     console.log(myHeroes[1]);
     

     //   const myArr = [0, 1, 2, 3, 4, 5, true, "Anjali"]
   // Arrays write in square bracket []. and inside this there are element. it has elements inside it. and these elements can be in string, number, and mix  and elements can be diffrent types used together.  


   // one more way to declare array
   const myArr2 = new Array(0, 1, 2, 3, 4, 5)    // here we give direct value, we do not add square bracket this automatically add square bracket. 
   console.log(myArr2[0]);
   
   // when we print this array value in console we get array prototype access and object prototype access both so this is important. and a property length which through we can see length.


   // Array methods

   myArr.push(6)
   // now myArr value has changed and one more value has added in myArr. 
   myArr.push(7)         
   // this is also add.
   myArr.pop()           
   // it means it removes last value of array inside this pop we don't need to give argument.
                          
   myArr.unshift(5)         
   //  this add values in start.
    
   console.log(myArr);   
    console.log(myArr.includes(9));
   console.log(myArr.indexOf(3));   // 9 is not exist in array so it gives -1 whatever value is, if value is exist so it will show in index 4.

   // some fuction in javascript and array that ask questions and they answer in true or false. this ask questions in array and it gives answer in true or false.  

  const myArr1 = [0, 1, 2, 3, 4, 5]
  myArr1.shift()          
    //  this is like pop and push inside shift we don't give argument and this removes first element. 0 is despair and here 0 is shift. 
    myArr1.unshift()  // insert new elements at the start of an array. 
   console.log(myArr1); 
   
   const newArr = myArr.join()
   
   console.log(myArr);
   console.log(newArr);
   console.log(typeof newArr);

   // myArr has come in array form and In newArr values are same but change in type when we run this in type of so we will know that join has binded our array and inside this it has converted in string.   
   
   
  // slice,  splice

  console.log("A ", myArr);     // original array
  
  const myn1 = myArr.slice(1, 3)  // here last range is not print.
  // returns section of array

  console.log(myn1);           // slice
   console.log("B ", myArr);

   const myn2 = myArr.splice(1, 3)  // here last range is print.
   console.log("C ", myArr);
   console.log(myn2);      // splice    // here original array has been manipulated. 
      

  // => important > what is diffrence between slice and splice ?
             ///      the diffrence between slice and splice depends on that which operation manipulates the original array and which don't.