 
// var c = 300
let a = 300

 if (true) {
     let a = 10
     const b = 20
    //  var c = 30
    console.log("INNER: ", a);
    
 }

 console.log(a);
//  console.log(b);
//  console.log(c);
 
// nested function

function one(){
    const username = "Anjali"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }

    // console.log(website);

    two()
    

}

// one()

// when we declare apart function so for this a diffrent callstack create means a diffrent scope creats.

// this same can do with if or else

if (true) {
    const username = "Anjali"

    if (username === "Anjali"){
        const website = " Youtube"
        console.log(username + website);
        
    }

    // console.log(website);
    
}

// console.log(username);

console.log(addone(5));


function addone(num){
     return num + 1
}

// here function declartion and storeing variable problem this concept is hoisting

addTwo(5)

const addTwo = function(num){
     return num + 2
}


