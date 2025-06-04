 
 // comparison => 
 // 
 // when we compare two same datatype with each other there is no problem.
 
 console.log( 2 > 1 );
 console.log( 2 < 1 );
 console.log( 2 >= 1 );
 console.log( 2 <= 1 );
 console.log( 2 == 1 );
 console.log( 2 != 1 );

 // whwn we don't compare same datatype then there is a problem.
 
 console.log(`Result of not same datatype :- ${"2" > 1}` );
 console.log(`Result of not same datatype1 :- ${"2" < 1}`);
 console.log(`Result of not same datatype2 :- ${"2" >= 1}`);
 console.log(`Result of not same datatype3 :- ${"2" <= 1}`);
 console.log(`Result of not same datatype4 :- ${"2" == 1}`);
 console.log(`Result of not same datatype5 :- ${"2" != 1}`);

 // Javascript has automatically converted 2 to a number. when we do this type of compare sometimes result is not predictable, whenever you compare then ensure that both values should be same datatypes. this same is doing with boolean value.
 
 // Typescript is a language that doesn't allow to compare diffrent datatypes.

 console.log(`Result of boolean :- ${"2" > true}`);
 console.log(`Result of boolean1 :- ${"2" > (-true)}`);
 console.log(`Result of boolean2 :- ${"2" < true}`);
 console.log(`Result of boolean3 :- ${"2" < (-true)}`);
 console.log(`Result of boolean4 :- ${"2" >= true}`);
 console.log(`Result of boolean5 :- ${"2" >= (-true)}`);
 console.log(`Result of boolean6 :- ${"2" == true}`);
 console.log(`Result of boolean7 :- ${"2" == (-true)}`);
 console.log(`Result of boolean8 :- ${"2" != true}`);
 console.log(`Result of boolean9 :- ${"2" != (-true)}`);
 

 console.log(`Result of number :- ${ 2 > true}`);
 console.log(`Result of number :- ${ 2 > +true}`);

 
 
 



 