let number = [100,200,300];
console.log(typeof number)
let iter = number[Symbol.iterator]();

// console.log(iter.next())
// console.log(iter.next())
// console.log("hello")
// console.log(iter.next().value)
// console.log(iter.next())

result = iter.next()
while(!result.done){
    console.log(result.value)
    result = iter.next()
}