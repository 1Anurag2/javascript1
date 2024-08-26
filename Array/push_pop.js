let array = [4,6,8,9]
array.push(5)
console.log(array)

array.push(15)
console.log(array)

array.pop()
console.log(array)

// Add element at a certain position
//splice(index,always 0 at inserting ,element)
let num = [2,6,8,3,7]
num.splice(2,0,"Insert new element")
console.log(num)

//Delete element at a certain position
let num1 = [6,8,"Delete this position",0,2]
num1.splice(2,1)
console.log(num1)

// Replace the element by new element 
let num2 = [ 4,6,8,2,7]
num2.splice(3,1,"newelment")
console.log(num2)