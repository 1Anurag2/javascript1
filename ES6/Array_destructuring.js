let arr = ["Anurag" , 22 , ["Delhi" , "India"]]
let name = arr[0];
let age = arr[1];

let [name2 , ...args] = arr;
console.log(args)
console.log(name, age);

//ES6 Destructuring Assignment
let [name1, age1 = 20 , [state,country]] = arr; // Destructuring assignment
console.log(name1, age1 , state, country);

function user(){
    return ["Anurag", 22, ["Delhi", "India"]];
}
let [name3, age3, [state3, country3]] = user(); // Destructuring assignment from function return value
console.log(name3, age3, state3, country3);