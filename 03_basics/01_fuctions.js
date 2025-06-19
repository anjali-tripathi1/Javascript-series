 
 function sayMyName(){
    console.log("A");
    console.log("n");
    console.log("j");
    console.log("a");
    console.log("l");
    console.log("i");
    } 

    // sayMyName()   // sayMyName is called refrence


    // function addTwoNumbers(number1, number2){
    //     console.log(number1 + number2);
        
    // }

    // so write this function in diffrent way

     function addTwoNumbers(number1, number2){
       
        // let result = number1 + number2
        // return result
        return  number1 + number2
    }

    // addTwoNumbers(3, 5)
    // store in variable

    const result = addTwoNumbers(3,5)
    console.log("Result ", result);

    function loginUserMessage(username = 'sam'){
        if(username === undefined){
               console.log("Please enter your username");
               return  
             }
        if(!username){
            console.log("please enter your name");
            return
        }   
        return  `${username} just Logged in`
    }
    
    console.log(loginUserMessage("Anjali"))
    console.log(loginUserMessage())
    console.log(loginUserMessage())

    // with the help of if we can check that value is exist or not 
    // ! (not symbol) this convert true to false and false to true

    // (username === undefined) = (!username) both syntax are same
    // if we want to avoid this situation

    // More parameter that we use
    function calculateCartPrice(val1, val2, ...num1){
          return num1
    }

    console.log(calculateCartPrice(200, 300, 400, 500, 2000))

    const user = {
        username : "Anjali",
        Price : 199
    }

    function handleobject(anyobject){
        console.log(`Username is ${anyobject.username} and Price is ${anyobject.Price}`);
        
    }

    handleobject(user)
    // we can also use object like this
    handleobject({
         username : "Anjali",
         Price : 399
    })
    
 const myNewArray = [100, 200, 300, 400, 500]

 function returnSecondValue(getArray){
     return getArray[2]
 }

 console.log(returnSecondValue(myNewArray))
 console.log(returnSecondValue([200, 300, 500, 1000, 1500]));

 