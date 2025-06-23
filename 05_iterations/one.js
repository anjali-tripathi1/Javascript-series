 
 // for loop 
 // this is first and basic loop

//  for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
    
//  }


 for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is the best number");
        
    }
    console.log(element);
    
 }

//  loop inside loop

 for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    
      for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and Inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j );
        
        
      }
 }

 for (let i = 1; i <= 10; i++) {
    console.log(`Outer value loop: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + ' = ' + i*j);
        
        
    }
    
 }

 const myArray = ["flash", "superman", "batman"]
 console.log(myArray.length);
 
 for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
 }


 // conditionally if we want to stop looping for particular data so we use break

 // break and continue


 for (let index = 1; index <= 20; index++) {
    if(index == 5){
          console.log(`Detected 5`);
          break
    }
    console.log(`value of i is: ${index}`);
    
    
 }

 // if we want to break any control flow so we use break.

 for (let index = 1; index <= 20; index++) {
    if(index == 5){
          console.log(`Detected 5`);
          continue
    }
    console.log(`value of i is: ${index}`);
    
    
 }