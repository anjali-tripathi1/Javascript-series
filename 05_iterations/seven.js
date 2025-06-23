//  like filter we have many values

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// as we have to add 10 in every value
const mynums = myNumbers.map( (num) => num + 10) 
console.log(mynums);

const mynums1 = myNumbers.map( (num) => { return num + 15 })
console.log(mynums1);

// it return values automatically


// foreach
const  newvals = []
myNumbers.forEach( (num) => {
    if (num + 5) {
        newvals.push(num + 5)
    }
})

console.log(newvals);



// chaining method
// it means we can use two or three method directly

const mynewNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mynewNums = mynewNumbers
                  .map( (num) => num * 10)
                  .map( (num) => num + 1)
                  .filter( (num) => num >= 40)


  console.log(mynewNums);
                  