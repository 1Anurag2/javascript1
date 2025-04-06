let x  = Symbol("Hello")     // Symbol define a unique values 
let y  = Symbol("Hello")     // symbol not use in for loop
console.log(typeof x)
console.log(x == y)
console.log(x)
// alert(x.toString());
// alert(x.description);

let str1  = "Hello"
let str2  = "Hello"
console.log(str1 == str2)

let age = Symbol();
let user = {
    name : "Anurag",
    class : 'Btech',
    [age] : 22
}
console.log(user)  