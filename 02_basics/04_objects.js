 
//   as constructer

// const tinderUser = new Object()   // singleton object

const tinderUser = {}                // non singleton object

// if we doesn't give value inside object so it gives empty object {}. and if we declare this as literal so that also give empty object {} . but the diffrence in both ways that as constructer creats singelton and as literal doesn't create singleton. 

// now add some value inside this and now add id 
tinderUser.id = "123abc"
// here we gave unique id because this is add in user database
tinderUser.name = "Peter"
tinderUser.isLoggedIn = true 
console.log(tinderUser);
// so this is basic.


// now we will declare one more inside that we will give object inside object
const regularUser = {
    email : "some@gmail.com", 
    fullname : {
       userfullname : {
           firstname : "Anjali",
           lastname :  "Tripathi"
       }
    }
}
 // now we declare something like fullname inside that objects come further and we can declare one more object inside this object we have further value.


 // for access this value we use (.)
 console.log(regularUser.fullname.userfullname.firstname);
 // inside this object fullname this object userfullname variable is stroed which is nested deeep inside. if you want to open its more nesting so use (.) for access more. so whatever your objects inside object so you can access like this.

 
 // here comes one more thing this is called optional chaining sippose if fullname doesn't exist so what's problem, In project sometimes we get syntax like this fullname? this makes protection, if fullname not exist so sometimes from API that response come that we have to use this syntax fullname?, that if you have this value fullname? so do or otherwise use if, else everywhere.
 
 // as we combined/merged array mutually likewise we will combine/merge objects.
 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}
 const obj3 = {5: "a", 6: "b"}
 // now we don't use name so we take keys as number , and take values as strings.
 const obj4 = { obj1, obj2,obj3 }
 console.log(obj4);
 // here value is print object inside object.

//  one more syntax to combine
 const obj5 = Object.assign(obj1, obj2, obj3)
 console.log(obj5);

 // we can also use currlibraces with this syntax by adding this there is no change the result remains same. so this {} is optional parameter but if we will give this it'll good because as much as values will add gurranted. 
 const obj6 = Object.assign({}, obj1, obj2, obj3)
 console.log(obj6);
 

 // one more syntax that we use for combine
 const obj7 = {...obj1, ...obj2, ...obj3}
 console.log(obj7);
 
 
// one more syntax which we will use when values come from database.
// suppose users have come when users come from  most of the database then users come array of objects.
  
 