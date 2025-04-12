const array = [2,3,4,5,6,7,8];

const newarray = array.map((value) => {
    value += 2
    console.log(value)
})

console.log(typeof array)
console.log(typeof newarray)