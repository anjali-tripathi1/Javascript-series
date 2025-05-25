 
//   Qu.1 What are the variables ? And How do we use variables in Javascript ?     
//     Ans. In JavaScript, variables are used to store data values or They are used for creating  space in 
//          memory for store data value. and for using variables in Javascript we declare variables.


// We have some Variables
// suppose we have created e-commerce Website and we have to give users uniqueId Email and some more options.

  const accountId = 23451
  var accountEmail = "Anjali@.com"
  let accountPassword = "12345"
  accountCity = "Jaipur"    // this syntax should't use
  let accountState;        //  if we don't assign the value it becomes undefined.

//   const accountId = 553322  (not allowed)

accountEmail = "abc@.com"
accountPassword = "212121"
accountCity = "Bengluru"

  console.log(accountId);
  console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

  //  we don't use var because it has some problem it doesn't know about block scope and fuctional scope (Prefer not to use var )

 
  
 