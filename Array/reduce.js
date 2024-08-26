let array = [[3,4,5],[6,7],[7,8,3]]
let Reduce = array.reduce((accumulator,currentvalue) => accumulator.concat(currentvalue),[])  
// ,[] is accumulator value and currentvalue is current value of the array 
console.log(Reduce)

// sum of array using reduce() method
let array1 = [4,5,6,7,8,2,3]

let sum = array1.reduce(function(acc,cur){
    return acc+cur
},0)
console.log(sum)