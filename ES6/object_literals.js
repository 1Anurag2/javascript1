let name = "Anurag";

let obj = {
    //name : name,  //Property shorthand syntax
    name,   //ES6 version when the property name is the same as the variable name, you can omit the key
};

console.log(obj)

let n = "Student"
let obj1 = {
    [n + "name"]: "Anurag", 
    age: 22,
    city: "Delhi",
    greet() {  // Method shorthand syntax
        console.log(`Hello, my name is ${this[n + "name"]}`);
    },  
}
console.log(obj1.greet()); // Calling the method
console.log(obj1[`greet`]()); // Calling the method  ES6 version using template literals

let name1 = "Sahil"
let age = 22

function show(name , age){
    return {name , age}
}
let s = show(name1 , age);
console.log(s);
console.log(s.name)