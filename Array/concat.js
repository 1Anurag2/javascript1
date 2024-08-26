// concat() method

// let array1 = [4,6,7,8]
// let array2 = [5,7,8,4]

// let combine = array1.concat(array2)
// console.log(combine)

// spread oprator (...)

// let array1 = [4,6,7,8]
// let array2 = [5,7,8,4]

// const combinearray = [...array1,...array2]
// console.log(combinearray)


// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// array1.push(...array2);

// console.log(array1); // Output: [1, 2, 3, 4, 5, 6]


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

Array.prototype.push.apply(array1, array2);

console.log(array1); // Output: [1, 2, 3, 4, 5, 6]

