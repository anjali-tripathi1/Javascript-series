 
 // how to declare object
//  there are two ways to declare object
//  (1) as literal    (2) as constructer
// here one more concept
  // Singleton => if we create from any constructer then a singleton object is created. that is, it is the only object of its kind, but when you make it the other way around then that's not singleton multiple instances of it's created.


  //  Important=> when we declare as literals then singleton is not created if it created with constructer then it will always made singleton.

  // object literals 
  // this is the way to declare objects both ways create objects as such anything performance improvement is not done. only the diffrence is singleton.
  
  // how to declare objects
  const JsUser = {
        name: "Anjali",
        "full name": "Anjali Tripathi",
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


// you can also use symbol

// how to declare symbol 
const mySym = Symbol("key1")

// now if we want to declare this symbol in object so how will we do.