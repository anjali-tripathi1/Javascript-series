//  sometimes  we have any value and we have to check that with many conditions so in that case we get  a switch case statement.  

// switch syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}

// just like we see in else case if anyone condition in if or else not true then else is excuted. same happen with default if any condition is not match or excuted so it will default case.
// by default 

const months = "feb"

switch (months) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feb");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}
