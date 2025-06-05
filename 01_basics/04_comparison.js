 
 // comparison => 
 // 
 // when we compare two same datatype with each other there is no problem.
 
 console.log(`valueInNumber :- ${2 > 1}`);
 console.log(`valueInNumber1 :- ${2 < 1}`);
 console.log(`valueInNumber2 :- ${2 >= 1}`);
 console.log(`valueInNumber3 :- ${2 <= 1}`);
 console.log(`valueInNumber4 :- ${2 == 1}`);
 console.log(`valueInNumber5 :- ${2 != 1}`);

 console.log(`valueInString :- ${"2" > "1"}`);
 console.log(`valueInString1 :- ${"2" < "1"}`);
 console.log(`valueInString2 :- ${"2" >= "1"}`);
 console.log(`valueInString3 :- ${"2" <= "1"}`);
 console.log(`valueInString4 :- ${"2" == "1"}`);
 console.log(`valueInString5 :- ${"2" != "1"}`);

 console.log(`valueInBoolean :- ${true > false}`);
 console.log(`valueInBoolean1 :- ${true < false}`);
 console.log(`valueInBoolean2 :- ${true >= false}`);
 console.log(`valueInBoolean3 :- ${true <= false}`);
 console.log(`valueInBoolean4 :- ${true == false}`);
 console.log(`valueInBoolean5 :- ${true != false}`);
 
 
 

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
 console.log(`Result of boolean1 :- ${"2" > false}`);
 console.log(`Result of boolean2 :- ${"2" < true}`);
 console.log(`Result of boolean3 :- ${"2" < false}`);
 console.log(`Result of boolean4 :- ${"2" >= true}`);
 console.log(`Result of boolean5 :- ${"2" >= false}`);
 console.log(`Result of boolean6 :- ${"2" == true}`);
 console.log(`Result of boolean7 :- ${"2" == false}`);
 console.log(`Result of boolean8 :- ${"2" != true}`);
 console.log(`Result of boolean9 :- ${"2" != false}`);
 

 console.log(`Result of number :- ${ 2 > true}`);
 console.log(`Result of number1 :- ${ 2 > false}`);
 console.log(`Result of number2:- ${ 2 < true}`);
 console.log(`Result of number3:- ${ 2 < false}`);
 console.log(`Result of number4:- ${ 2 >= true}`);
 console.log(`Result of number5:- ${ 2 >= false}`);
 console.log(`Result of number6:- ${ 2 <= true}`);
 console.log(`Result of number7:- ${ 2 <= false}`);
 console.log(`Result of number8:- ${ 2 == true}`);
 console.log(`Result of number9:- ${ 2 == false}`);
 console.log(`Result of number10:- ${ 2 != true}`);
 console.log(`Result of number11 :- ${ 2 != false}`);

 
 // Some more comparison which creates problem

 console.log(`Result of null :- ${null > 0 }`);
 console.log(`Result of null1 :- ${null < 0 }`);
 console.log(`Result of null2:- ${null >= 0}`);
 console.log(`Result of null3:- ${null <= 0 }`);
 console.log(`Result of null4:- ${ null == 0 }`);
 console.log(`Result of null5:- ${null != 0 }`);
 
 // the value inside null it is converted, In null equal greater then and less then (>=, <=) has a conversion problem.
 // it's not like that value is actual grater, less or equal then but here predictable result is not available.
 // Javascript has diffrent way to work for comparison operators and equailty operator both.
 // null has converted into 0, just like this some conversion convert into NaN and some 0.
 // this operation should't happen like this.

 //// The reason is that an equality check == and comparisons > <>= <= work diifrently.
// Comparisons convert null to a number, treating it as 0.
// that'swhy (2, 3) null >= 0 is true and (1,0,4) null > 0 is false. 


// this same happens with undefined isme sare false aate hai

console.log(`Result of Undefined :- ${undefined > 0}`);
console.log(`Result of Undefined1 :- ${undefined < 0}`);
console.log(`Result of Undefined2 :- ${undefined >= 0}`);
console.log(`Result of Undefined3 :- ${undefined <= 0}`);
console.log(`Result of Undefined4:- ${undefined == 0}`);
console.log(`Result of Undefined5:- ${undefined != 0}`);


// In Javascript comparison oprators and equailty operators both are diffrent.
// double equailty (==) check has a special method and triple equailty check (===) has a bit diggrent syntax
// and less then equal to has a diffrent syntax.


// Strict check/Triple Equailty check/(===) => it simply means that we are checking with triple equal,  It not
// only checks the value but also check values strictly that is it checks datatypes too.

console.log(`Result of Double Euailty :- ${ "2" == 2 }`);
// Here double equ- check is true because it will convert.


console.log(`Result of triple equailty check :- ${ "2" === 2}`);
// doing with (===) it won't be convert now it will check datatype too. it check that one is in string and other one is in number so to convert or not, both are diffrent so Don't do conversion because it's (===) and both are not same and both datatypes are diffrent.

// Summary
// same datatype basic has no problem, problem is create in same datatype.
// where one value is in string datatype and other value is number or boolean then it creates problem on changing datatype.
// In null and undefined when we do the conversion then sometimes value is NaN, sometimes 0 and after that 
// when we do comparison it creates problem.  

// null and undefined codes are creates confusion but most of the cases we avoid this type of comparison.







 
 



 