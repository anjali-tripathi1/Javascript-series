//  const buttons = document.querySelectorAll('.button')
// //  console.log(buttons);
// const body = document.querySelector('body')
// buttons.forEach( function (button) {
//      console.log(button)
//      button.addEventListener('click', function (e) {
//          console.log(e)
//          console.log(e.target)
//          if(e.target.id == 'grey'){
//             body.style.backgroundColor = e.target.id
//          }

//          if(e.target.id == 'white'){
//             body.style.backgroundColor = e.target.id
//          }

//          if(e.target.id == 'blue'){
//             body.style.backgroundColor = e.target.id
//          }

//          if(e.target.id == 'yellow'){
//             body.style.backgroundColor = e.target.id
//          }

//          if(e.target.id == 'purple'){
//             body.style.backgroundColor = e.target.id
//          }

//          switch (e.target.id) {
//             case "grey":
//                 body.style.backgroundColor = e.target.id
//                break;
         
//             case "white":
//                 body.style.backgroundColor = e.target.id
//                break;

//             case "blue":
//                 body.style.backgroundColor = e.target.id
//                break;   

//             case "yellow":
//                 body.style.backgroundColor = e.target.id
//                break; 
               
//             case "purple":
//                 body.style.backgroundColor = e.target.id
//                break;   
//             default:
//                break;
//          }
//      })
// })

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target)
        if(e.target.id == 'grey'){
             body.style.backgroundColor = e.target.id
        }

        if(e.target.id == 'purple'){
             body.style.backgroundColor = e.target.id
        }

        if(e.target.id == 'white'){
             body.style.backgroundColor = e.target.id
        }

        if(e.target.id == 'yellow'){
             body.style.backgroundColor = e.target.id
        }

        if(e.target.id == 'blue'){
             body.style.backgroundColor = e.target.id
        }
    })
})


