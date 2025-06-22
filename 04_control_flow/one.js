 // Code should be excuted conditonally it means when we login so other code is excuted and when we logout then another code is excuted so this is called control flow.

 // if Statement

 const isUserLoggedIn = true
 const temprature = 41

 if(isUserLoggedIn === true){
      console.log("Excuted LoggedIN");
      
 }

 if(temprature < 50){
      console.log("Less than 50");
      
 }



 // comparison operator  <, >, <=, >=, ==, !=, ===, strictly check in negative !==,
 // inside if condition should be true.

 if(temprature === 41){
     console.log("Less than 50");
     
 } else{
      console.log("temprature is greater than 50");
 }

 console.log("Executed");
 

 if(temprature === 40){
     console.log("Less than 50");
     
 } else{
      console.log("temprature is greater than 50");
 }
  
 // here we have two sentence less than 50, greater than 50 so which one is correct so for checking correct sentence we use else and here conditional test is happend.

 const score = 200
 if(score > 100){
     const power = "fly"
     console.log(`User Power: ${power}`);

    }

    // console.log(`User Power: ${power}`);

    // a diffrent scope counts that means which variable we declare inside scope that's excution only inside that scope we can't excute that variable outside of that scope.


    // shorthand notation
    const balance = 1000
    if(balance > 500)  console.log("test");
    // this is implicit scope means we assume that it's in scope but this excute in one line we can't write here multiple lines but there's a way but that's not a good practice.

    // if(balance > 500)  console.log("test"), console.log("test2");  // not use this structure 
    
    

    // Nesting
    // sometmes we have to check multiple conditions, or between two or two or three conditions
    
    if(balance < 500){
         console.log("Less than 500");
         
        } else if(balance < 750){
              console.log("Less than 750");
              
        } else if(balance < 900){
              console.log("Less than 900");
              
        } else {
            console.log("Less than 1200");
            
        }


        // we can check multiple conditions inside this if condition here we write whatever condition that's statement should be true or false. this && checks the both value.

        const userLoggedIn = true
        const debitCard = true

        if(userLoggedIn && debitCard && 2 == 2){
               console.log("Allow to buy course");
               
        }
        // here we will check both userloggedin and debitcard both.

        if(userLoggedIn && debitCard && 2 == 3){
               console.log("Allow to buy course");
               
        }

        // in this situation we don't go inside code.

        const loggedInFromGoggle = false
        const loggedInFromEmail = true

        if(loggedInFromEmail || loggedInFromGoggle){
             console.log("User Logged In");
             
        }

        //here we will check either he logged with goggle or email
        // this || pipesign used for testing multiple conditions