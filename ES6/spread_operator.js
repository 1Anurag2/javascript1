function sum(name , ...args){
    let total = 0;
    console.log(arguments)
    for(let i in args){
        total += args[i]
    }
    console.log(`Name : ${name} , Total : ${total} `)
}
let arr = [1,4,5 , 7 , 8 , 9 , 10];
sum("Anurag" , arr)
sum("Anurag" , ...arr)  // Spread operator used to pass array as argument
console.log(arr)       
console.log(...arr)   // Spread operator used to unpack array elements
console.log([...arr]) // Spread operator used to create a new array from existing array