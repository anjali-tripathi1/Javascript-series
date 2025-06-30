
function addTwoNumber (num1, num2){
    //   console.log(num1 + num2);
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumber(5, 9)
console.log(result);

// addTwoNumber(4, 7)

const user = {
    coursename : "Anjali",
    Price : 599,

    welcomeMessage : function () {
        console.log(`${this.coursename}, welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage()
user.coursename = "Saroj"
user.welcomeMessage()

console.log(this);

function chai () {
    console.log(this);
    let username = "Anjali"
    console.log(this.username);
    
}

chai()

const chai1 = function () {
    console.log(this);
    let username = "Anjali"
    console.log(this.username);
    
}

chai1()

const chai2 = () => {
    console.log(this);
    
}

chai2()













































