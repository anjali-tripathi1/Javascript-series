 const marvel_Heroes = ["thor", "Ironman", "spiderman"]
 const dc_Heroes = ["superman", "flash", "batman"]

 marvel_Heroes.push(dc_Heroes)   
 //  this push in existing array

 console.log(marvel_Heroes);
 // here there is an array inside an array that we don't want in this situation, in javascript arrays take any type of entry data suppose in marval_heroes in's not important that all values should be in strings. we can take boolean value, objects so for proveing that array takes any data so it takes array as a data, array is single element here like element numbers are [1, 2, 3, and this all dc is 4 element and this element has further value this is diffrent ] so it happens like this.

 // if you want to access any value thor[0], ir[1], sp[2], and dc is[3] and if we take this [3] element so it is array in itself if you want to take out more values inside this so we have to do this.

 console.log(marvel_Heroes[3][0]);
 console.log(marvel_Heroes[3][1]);
 console.log(marvel_Heroes[3][2]);

 // we can use one more method for adding

 const allHeroes = marvel_Heroes.concat(dc_Heroes)
 // this concat returns new array
 console.log(allHeroes);
 // now both arrays are merge properly and here we didn't just add a new element which has an array inside it.
 // here we have limitation that we can give only one value in concat
 

 // we have one more easy method to add array which is spread operator
 // spread => it means we have a glass which we dropped and it's spread. 
 const all_new_heroes = [...marvel_Heroes, ...dc_Heroes]
 // everthing is spread as you use dots so now it's not an array and it's all elemnts are indivisual 
 
 console.log(all_new_heroes);
 // here we can give more value in spread.



 // one more method of array that we should know but we use this rarely.

 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// this is very rare situation that we taken array inside array and in second part array inside array inside array  
const real_another_array = another_array.flat(2)
 // inside flat we have to give number that how deep should I solve this. in top we have 2 depth inside array but we can also give infinity this adjusts automatically depth. but we don't use infinity we should give exact depth.  
console.log(real_another_array);

// this flat gives all array in one array
// so all values are spread out here.


// one more thing that we used many times when we do data scraping

// when we select data from any webpage that appears in diffrent format like nodelist, strings, objects but we want array because we can loop above array so there we can use array like this, and you can also ask and convert .


console.log(Array.isArray("Anjali"));  // this ask question that Anjali is in array or not
// if we want to convert this
console.log(Array.from("Anjali"));
console.log(Array.from([1, 2, 3]));
// this makes values array, whatever values like objects, string that you will give this convert them in array
console.log(Array.from({name: "Anjali"}));   // important
// this is inportant this gives an empty array because this is unable to convert this string directly as we have to say that create an array of keys, or only create an array of values if it won't make value so it gives empty array.


// some more example
let score1 = 100
let score2 = 200
let score3 = 300
let score4 = "Anjali"
let score5 = "Saroj"
let score6 =  true
let score7 =  false
//  such situation will appear when we have multiple variables or arrays that we have to convert in array this too can be done easily.

console.log(Array.of(score1, score2, score3, score4, score5, score6, score7));
// set of elements can be anything like variables, arrays and more what we want.
