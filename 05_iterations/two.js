//  while loop 

let index = 0
while (index <= 10) {
    console.log(`Value of index is: ${index}`);
    index = index + 2
    
}


// array with this while loop

let myArray = ["flash", "superman", "batman"]

let arr = 0
while (arr < myArray.length ) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// arr++ = arr + 1


// do while loop
// this specilization that the condition will check in last and the work will be done first .

let score = 10
do {
    console.log(`Score is: ${score}`);
    score++
} while (score <= 10);



let score1 = 11
do {
    console.log(`Score is: ${score}`);
    score++
} while (score <= 10);

// hre we can see that this also print 11 this is because it works first and then check the condition .