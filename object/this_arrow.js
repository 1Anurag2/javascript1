const user = {
    username: "Anurag",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Anurag"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Anurag"
//     console.log(this.username);
// }

const chai =  () => {        // declaration of arrow function 
    let username = "Anurag"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {      // explicit return with parameter declare arrow function
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2     //implicit return to arrow function all statement write in a single line

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Anurag"})   // return object using arrow function


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()