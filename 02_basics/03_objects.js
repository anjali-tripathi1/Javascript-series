 
 // how to declare object
//  there are two ways to declare object
//  (1) as literal    (2) as constructer
// here one more concept
  // Singleton => if we create from any constructer then a singleton object is created. that is, it is the only object of its kind, but when you make it the other way around then that's not singleton multiple instances of it's created.


  //  Important=> when we declare as literals then singleton is not created if it created with constructer then it will always made singleton.

  // object literals 
  // this is the way to declare objects both ways create objects as such anything performance improvement is not done. only the diffrence is singleton.
  
  // how to declare objects

 const mySym = Symbol("key1")

  const JsUser = {
        name: "Anjali",
        "full name": "Anjali Tripathi",
        [mySym] : "mykey1",
         age:  19,
        isLoggedIn: false,
        location: "banda",
        email: "Anjali@.com",
        LastLoginDays: ["Monday", "Saturday"]

}   
  // these {} are objects now this is empty object but if we insert value inside this so we can access this. inside objects there is a whirlwind(chakkar) of keys and values (before this down line 1.) but in objects this is change, here you can define key and value both in array you can't define keys you only give [1], [2] and so on. in objects you can also give 0, 1, 2  in place of name or something like this. by default in it when we give name so system process this as in string => "name" but we don't write like this because that already accept in itself that i am string. and inside this value which you want to give you can like string, boolean, number, fuction, array, or one more object. doesn't matter.
  

// 1.  like we declare array and we give values so we don't have any another way to access this, we only know one method and this can be access from this same way.
// myarray = ["A", "n"]
// myarray[1]      //  this property of array like [0], [1] access like this so we have only this way to access.

  // one more method to declare object this is called through constructer method and inside this constructor create singleton.
//   Object.create  


// how to access objects
console.log(JsUser.email);
// we can access like this all with .value that you want to access and then console.log.

// one more way to access objects.
console.log(JsUser["email"]);    
// behind the scence it is taken as in string so we use string. we have to know this if we hae value like this so in this case we have to use this method and you can access this type of string structure with (.)
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);



// you can also use symbol

// how to declare symbol 
// const mySym = Symbol("key1") 

// now if we want to declare this symbol in object so how will we do. now if we want to declare this symbol in object Jsuser then how will we do it or we have to use symbol as a key so this ask inerview many times that a  take a symbol and add that in object keys and then print and show me.

// if we want to use symbol as key so can't use direct. if you do like this so it is not done.
// mySym: "mykey1" so here mykey1 is print but if we will check datatype so it is not usee as symbol if we want to use this as an symbol so we have only one way to use these in bracket because this is syntax.

// [mySym] = "mykey1"  so we have to use this insted of that. if we want to access this so we have to use this in square bracket. 
// console.log(JsUser[mySym]);
// so here inside value doesn't change but the correct syntax is bracket .

// suppose we want to change value so

JsUser.email = "Anjali7398.com" 
// so with aasignment operater (=) we can overright the value. we can also lock the value. if you want that none can change this value so you can freeze that object value.
// we have to use this structure
// Object.freeze(JsUser)
JsUser.email = "Saroj9452google.com"
console.log(JsUser);
// so here before frreze structure is changed but that new change is not propogated and here key1 is showing is a symbol


// now we add function in our object so inside javascript function is treated like type1 citizen type it means inside function there is no discrimination you can treat them like a variable there is no diffrence. 
JsUser.greeting = function(){
   console.log("Hello JS user");
   
}


console.log(JsUser.greeting);
// whenever you refer a method then value is undefined. so here we get a fuction returend back function is not executed but only get fuction's refrence.
console.log(JsUser.greeting());
// so if we use like this so the value is print. and we have to remove freeze.

JsUser.greetingTwo = function(){
   console.log("Hello JS user");
   
}
// now we have to refrence that name that is inside object JsUser so refrence that name we have change its console from strings to backticks so this is called string inerpolation. 