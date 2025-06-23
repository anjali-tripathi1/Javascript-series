 
 // some loops are direct add in array property 
 // foreach is a parameter of loop that by default inject in array property so we use this most.

 // foreach is a higher order function

 const coding = ["js", "java", "python", "ruby", "cpp"]

 coding.forEach( function (val) {
      console.log(val);
      
 })

 // callback function means we don't need to write name 


 // we use arrow function insted of basic function

 coding.forEach( (item) => {
    console.log(item);
    
 })


 // we have one more way

 function printMe(item){
      console.log(item);
      
 }

 coding.forEach(printMe)

 // if we already make function so we have to give him only refrence we don't need to excute that.

 coding.forEach( (item, index, arr) => {
       console.log(item, index, arr);
       
 })


 // forEach have more parameters like item, index and array (list of array).

 // when we call database so from here we get value in array format and inside that we have many objects.

 const mycoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },

    {
        languageName : "java",
        languageFileName : "java"
    },

    {
        languageName : "Python",
        languageFileName : "py"
    }
 ]

 mycoding.forEach( (item) => {
      console.log(item.languageName);
      
 })
 
