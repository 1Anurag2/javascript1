// function sum(name , ...args){
//     let total = 0;
//     console.log(arguments)
//     for(let i in args){
//         total += args[i]
//     }
//     console.log(`Name : ${name} , Total : ${total} `)
// }
// let arr = [1,4,5 , 7 , 8 , 9 , 10];
// sum("Anurag" , arr)
// sum("Anurag" , ...arr)  // Spread operator used to pass array as argument
// console.log(arr)       
// console.log(...arr)   // Spread operator used to unpack array elements
// console.log([...arr]) // Spread operator used to create a new array from existing array

// array = [1,2,3,4,5,8,9];
// array1 = array  
// array.push(50)
// console.log(array)
// console.log(array1)

array = [1,2,3,4,5,8,9];
array1 = [...array] // Spread operator used to create a new array from existing array
array.push(50)
console.log(array)
console.log(array1)

// array concatination
// arr = [1,4,5,6,7,8,9]
// arr1 = [10,11,12,13,14,15]
// arr2 = arr.concat(arr1)
// console.log(arr2)

arr = [1,4,5,6]
arr1 = [10,11,12]
arr2 = [...arr,...arr1]   // array concatination using spread opreator
arr3 = [25,...arr,89,...arr1,100]
console.log(arr2)
console.log(arr3)


// spread opreator also use to concatinate objects

let obj1 = {
    name : "Anurag"
}
let obj2 = {
    Age : 22
}

let obj3 = {...obj1 , ...obj2}
console.log(obj3)