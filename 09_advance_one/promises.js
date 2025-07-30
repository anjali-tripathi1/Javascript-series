 const promiseOne = new Promise( function (resolve, reject) {
       // Do an async task
        // DB calls, cryptography, network
        setTimeout(function () {
              console.log("async task is completed")
              resolve()
        }, 1000)

        
    })

    promiseOne.then(function () {
         console.log("promise consumed")
    })


    new Promise( function (resolve, reject) {
         setTimeout(function () {
             console.log("Async 2 is called")
             resolve()
         }, 1000)
    }).then(function () {
       console.log("Async 2 resolved");
       
    })

    const promiseThree = new Promise(function (resolve, reject) {
         setTimeout(function () {
          resolve({username : "chai", email : "chai@example.com"})
         }, 1000)
    })

    promiseThree.then(function (user) {
        console.log(user)
    })

    const promiseFour = new Promise( (resolve, reject)  => {
         setTimeout( () => {
            let error = true
            if(!error){
                resolve({username : 'Saroj', password : 123})
            } else {
                reject('ERROR: something went wrong.')
            }
         }, 1000)
    })

    promiseFour.then( (user) => {
        console.log(user);
        return user.username
    }).then( (username) => {
         console.log(username);
     }).catch( (error) => {
           console.log(error)
     }).finally( () => {console.log("The promise is either resolved or rejected.");
     })


     const promiseFive = new Promise ( (resolve, reject) => {
          setTimeout( () => {
                let error = true
                if(!error){
                   resolve({coursename: 'Javascript', password: 531})
                } else {
                    reject("Error : Js went wrong")
                }
          }, 1000)
 })

 async function consumepromiseFive () {
      try {
          const response = await promiseFive
          console.log(response);
          
      } catch (error) {
           console.log(error);
           
      }
 }

 consumepromiseFive()

 async function getAllUsers () {
     try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
     // console.log(response);
     const data = await response.json()
     console.log(data);
     } catch (error) {
         console.log("E :", error);
         
     }
    
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
   return response.json()
})
.then((data) => {
     console.log(data)
})
.catch((error) => console.log(error))



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
}) 
.then( (data) => {
   console.log(data);
   
}) 
.catch( (error) => {
   console.log("E :,", error );
   
})