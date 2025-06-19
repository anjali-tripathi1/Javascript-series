 
 const user = {
     username : "Anjali",
     Price : 999,

     WelcomeMessage : function() {
          console.log(`${this.username}, welcome to website`);
          console.log(this);
          
     }
 }

//  user.WelcomeMessage()
//  user.username = "Sam"
//  user.WelcomeMessage()

console.log(this);  // empty object

 // this represents a current context, context means what are we talking about. 

// when this javascript engine runs inside browser the most global object is window object. 

// function chai(){
//     let username = "Anjali"
//     console.log(this.username);  
    
// }

// chai()

const chai = function (){
     let username = "Anjali"
     console.log(this.username);
     
     
}

chai()

// we can use (this) inside object but we can't use (this) inside function 


// how to declare functions through arrow function