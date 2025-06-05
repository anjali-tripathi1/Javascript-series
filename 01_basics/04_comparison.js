 
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
 
 // the value inside it is converted, In null equal greater then and less then (>=, <=) has a conversion problem.
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





 
 



 