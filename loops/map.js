const array = [2,3,4,5,6,7,8];

// map return a new array it's not change the original array value 
const newarray = array.map((value) => {
    value += 2
    console.log(value)
})

console.log(typeof array)
console.log(typeof newarray)