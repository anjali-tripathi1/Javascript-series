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