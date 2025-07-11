// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  console.log(myArray[1]);
 
// let array = []

// for (let index = 0; index < myArray.length; index++ ){
//     const element = myArray[index]
//        console.log(element);
// }

// function addTwoNumbers (num1, num2) {
//      console.log(num1 + num2);
     
// }

// addTwoNumbers(4, 5)


// function myArr (myArray) {
//     for (let i = 0; i < myArray.length; i++){
//           const element = myArray[i]
//           console.log(element);
          
//     }
      
// }
// myArr(myArray)
        

       
// let a;
// let result = a ?? 5;
// let b = 10;
// let result2 = b ?? 15;
// console.log(result);
// console.log(result2);

// function number (num1) {
//     for (let i = 1; i <= 10; i++){
//           console.log( (num1 * i) + 5);
          
//     }
    
    
// }

// number(2)


const myValue = {
    coursename : "Js Series",
    price : 599,
    courseInstructor : "Anjali"
}

const {coursename : c}  = myValue
console.log(c);

const {price : pr} = myValue
console.log(pr);


function addTwoNumbers (number1, number2) {
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(4, 6)
console.log(result);

function loginUserMessage (username) {
    if (username === undefined) {
           console.log(`please enter your name`)
           return
    }

    // if (!username) {
    //     console.log(`please enter your name`);
    //     return
        
    // }
      console.log(`${username}, just logged in`);
      
}

// loginUserMessage("Anjali")
// loginUserMessage("")
loginUserMessage()

function calculateCartPrice (...num1) {
      console.log(num1);
      return num1
    
    }

    console.log(calculateCartPrice(200, 300, 500, 700, 800));

    const user = {
        coursename : "Js Series",
        price : 599,

    }

    function handlefunction (object) {
          console.log(`username is ${object.coursename} and price is ${object.price}`);
          
    }

    handlefunction(user)

    handlefunction({
        coursename : "Java",
        price : 999
    })

    
    function handleobject (anyobject) {
          console.log(`username is : ${anyobject.name} and age is : ${anyobject.age}`);
          
    }

    handleobject({
        name : "Anjali",
        age : 20
    })

    const course = {
        coursename : "python",
        price : 12999
    }

    function handleCourse(co) {
         console.log(`coursename is : ${co.coursename} and price is : ${co.price}`);
         
    }

    handleCourse(course)

    handleCourse({
        coursename : "Mobile Development",
        price : 699
    })

    const getArray = [100, 200, 300, 400, 500]
    function handleArray (arr) {
          return arr
         
    }

    console.log(handleArray(getArray))
    console.log(handleArray([200, 300, 500, 800, 1000]));
    console.log(handleArray(["Anjali", "shaktiman", "goga"]));

    var g = 300
    if (true) {
        let a = 10
        const b = 20
        console.log(a);
        console.log(b);
        
    }

    // console.log(a);
    // console.log(b);
    console.log(g);
    
    function one(){
        const username = "Anjali"

        function two(){
            const website = "youtube"
            console.log(username);
            
        }

        // console.log(website);
        
        two()
    }

    one()

    if (true) {
        const username = "Anjali"
        if (username === "Anjali") {
            const website = " youtube"
            console.log(username + website);
            
        }  
        
        // console.log(website);
        
    }

    // console.log(username);

    console.log(addone(9))

    function addone (num1) {
        return  num1 + 3
    }

    

    const addTwo = function (num1) {
         return num1 + 6
          
    }

   console.log(addTwo(7));

   const myUser = {
      username : "Anjali",
      age : 20,

      welcomeMessage : function () {
          console.log(`username is : ${this.username} and age is : ${this.age}`)
          console.log(this);
          
      }
   }

//    myUser.welcomeMessage()
//    myUser.username = "Saroj"
//    myUser.age = 35
//    myUser.welcomeMessage()

   console.log(this);
   
   function chai () {
       console.log(this)
   }
    
   chai()

//    function chai2 () {
//        let username = "Anjali"
//        console.log(this.username);

       
//    }

//    chai2()

   const chai3 = function () {
       console.log(this);
    //    let username = "Anjali"
    //    console.log(this.username);
       
   }

   chai3()

  
    


    
    


























































 























