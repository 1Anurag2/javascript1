const arr = [2,3,5,6,7,7,5,9];

// for Loop
let sum1 = 0;
for(let i = 0;i<arr.length ; i++ ){
    sum1 += arr[i]
    console.log(arr[i])
}
console.log(sum1)

//for of loop
let sum = 0;
for(const num of arr){
    sum += num;
}
console.log(sum)

//for in loop
let result  = 0;
for(const idx in arr){
    console.log(idx , arr[idx])
    result += arr[idx];
}
console.log(result)

//for each loop   it not return a new array 
let sum2 = 0
arr.forEach(element => {
    sum2 += element;
})
console.log(sum2)

// map loop it return a new array

let newarray = arr.map(element => {
    return element *= 2;
})

console.log(newarray)

// while loop
let sum3 = 0 ;
let i = 0;
while( i < arr.length){
    sum3 += arr[i];
    i++
}
console.log(sum3)

// do while loop
let sum4 = 0;
let j = 0;
do {
    sum4 += arr[j];
    j++
}while(j < arr.length)

console.log(sum4)
