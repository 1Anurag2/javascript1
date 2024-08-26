let array = [3,5,6,7,8,9]
// let double = array.map(num => num *2)
console.log(array)
// console.log(double)

let double = array.map(function(num){
    return num*2
})
console.log(double)

let array1 = [1,2,3,4]
// let number = array1.map(function(element,index,array){
//     return element+index
// })
// console.log(number)

let number1 = array1.map((num,index,array)=>num+index)
console.log(number1)



let multipler = {
    factor : 2,
    multiply : function(numbers){
        return numbers.map((num)=>num*this.factor)
    },
};
let num = [1,2,3,4,5,6,7]
let result = multipler.multiply(num)
console.log(result)