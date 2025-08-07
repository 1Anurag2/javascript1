// Rest operator make remaining value in array formate 

// function sum(){
//     let total = 0; 
//     console.log(arguments)    // [Arguments] { '0': 20, '1': 5, '2': 45, '3': 8 }
//     for(let i in arguments){
//         total += arguments[i];
//     }
//     return total;
// }
// console.log(sum(20,5))
// console.log(sum(20,5,3))
// console.log(sum(20,5,45,8))
// console.log(sum("anurag",5,45,8))

// let sum = function( ...args , firstname , lastname){ //Rest argument not use in first value
let sum = function(firstname , lastname , ...args){
    let total = 0;
    for(let i in args){
        total += args[i];
    }
    console.log(`Name: ${firstname} ${lastname}, Total: ${total}`);
}

sum("Anurag","Verma",2,3,4,5,6)