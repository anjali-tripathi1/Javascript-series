 
 const coding = ["Javascript", "java", "python", "cpp", "ruby"]

 // if we store this in variable
 const values = coding.forEach(  (item) => {
    //  console.log(item);
     return item
     
 })

//  console.log(values);
 // here we want to see that what value retutn this foreach or it return something or not so this foreach does not return value wheater you want or not.
 
 
//   sometime we only want that each value return or conditionally checked so we can't do this with foreach so in this situation 

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnums = mynums.filter( (num) => num > 4 )
console.log(newnums);

 
//we can defined arrow function like this () => = () => {}
 // so this returns value and this same operation happens in foreach but that doesn't return values and this return values.  

 // in filter we have to give callback function and there we have to give condition.


 // so this is filter's basic but inside this we have some problem.

 const mynums1 = [1, 2, 3,4, 5, 6, 7, 8, 9, 10]

const newnums1 = mynums1.filter( (num) => {
    return  num > 4
} )
console.log(newnums1);

// here we get empty array because here when we used () then it returned itself but now we add {}, started scope if we will start scope so we have to write return keyword .



// if we want to use this same in foreach so how can we do

const myvals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newvals = []
myvals.forEach( (num) => {
    if (num > 5) {
        newvals.push(num)
    }
})

console.log(newvals);

// so here we can also use this.



// we can do more basic things in filter

const books = [
     { title: 'Book One', genre: 'History', publish: 1968, edition: 2009  },
     { title: 'Book Two', genre: 'Science', publish: 1928, edition: 2013  },
     { title: 'Book Three', genre: 'Non-Fiction', publish: 1998, edition: 2010  },
     { title: 'Book Four', genre: 'Fiction', publish: 1988, edition: 1934  },
     { title: 'Book Five', genre: 'History', publish: 2011, edition: 2014  },
     { title: 'Book Six', genre: 'Fiction', publish: 1944, edition: 1984  },
     { title: 'Book Seven', genre: 'Non-Fiction', publish: 2018, edition: 2008  },
     { title: 'Book Eight', genre: 'Science', publish: 1938, edition: 2006 },
     { title: 'Book Nine', genre: 'History', publish: 2005, edition: 1954  },       
     { title: 'Book Ten', genre: 'Fiction', publish: 2008, edition: 1995  }       
]

// we get values like this from database now user add filters in his webpage now whatever user speak to do to as it is and print.  

let userBooks = books.filter( (bk) => bk.genre === "History")
userBooks = books.filter( (bk) => {return bk.publish >= 1995 } )
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "Fiction"})
// now we want to check two condition that book has published next to 1995 and its genre is Fiction
console.log(userBooks);
