 
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
 // spread method
 const obj7 = {...obj1, ...obj2, ...obj3}
 console.log(obj7);
 
 
// one more syntax which we will use when values come from database.
// suppose users have come when users come from  most of the database then users come array of objects.
  
 const users = [
      {
        id : 1,
        email : "h@email.com"
      },

       {
        id : 2,
        email : "a@email.com"
      },

       {
        id : 3,
        email : "b@email.com"
      }
 ]
     // so we have many objects inside array or you have to do loop through or print any value
     console.log(users[1].email);
     console.log(users[0].id);
     console.log(users[2].id);


     // sometimes we need this type of method.
     console.log(tinderUser);
     console.log(Object.keys(tinderUser));
     // we write Object and we want all the keys of Object whenever we use Object method so it doesn't know that on whow does it want to use the method so we have to write the value, and the value which we get that's datatype is array so we have taken all values and keep them in array now you can put a loop on it if we want and that can be use many places. just like keys we can also find the value.
     console.log(Object.values(tinderUser));
     // and another basic properties we can use like length, position, keys and values.
     console.log(Object.entries(tinderUser));
     // here we get array inside array, every keyvalue has created as an array so its first value will be key and second value will be value.
     
     // 
    //  sometimes you do complete loopthrough inside objects and after doing loop value is coming out after extracting the value that value doesn't exist if the value is not exist so value can be crashed. so either you see that manually or you can also ask that do you have this value so it's result appears in boolean 
    console.log(tinderUser.hasOwnProperty('isLoggedIn'));
    

    // destructureing so destructureing is doing in array and bjects too so here we talk about destructuring in objects.

    const course = {
        Coursename : "Js Series",
        Price : "999",
        CourseInstructor : "Anjali"
    }

    // so we can access value like this
        // console.log(course.CourseInstructor);

    //  we have one more syntax which we can use 
     const {CourseInstructor : Instructor} = course
    //  console.log(CourseInstructor);
     console.log(Instructor);
     // here we don't need to write course again. if you don't want to write such big value (CourseInstructer) so you can give another name so now we call this Instructor in place of CourseInstructor so this is the syntax so we can do any value's destructure. so this is called that how we can do object destructure.
    
     const {Price : P} = course
    //  console.log(Price);
     console.log(P);
     
     


     // In react we have destructureing method 
     
    //  const navbar = ({company}) => {

    //  }
     
    //  navbar (company = "Anjali")
     
      
    // ApI's documentation

    // {
    //     "coursename" : "Js Series",
    //     "Price" : "free",
    //     "name" : "Anjali"
    // }
     
    //  in  array format
    [
        {},
        {},
        {}
    ]

 