// let name = "anurag"
// age = 21
// console.log(`Hello My name is ${name} and my age is ${age}`);
// console.log(name);

// const anothername = new String("ANURAG")
// console.log(anothername);
// console.log(anothername.__proto__);

// console.log("A" + 2);
// console.log("2" + 2 - "2");

// const a = {}
// const b = {
//     name:'tikal'
// }
// const c = {
//     name: "ram"
// }
// a[b] = {
//     name:"ankit"
// }
// a[c] = {
//     name : "rahul"
// }

// console.log(a[b])

// console.log(0/0)

// const y = 0
// const z = false
// console.log(y==z)
// console.log(y===z)


// console.log(NaN == NaN)
// console.log(NaN === NaN)

const arr = [1,2,3,4]
const result = arr.map((e)=>{
    return e>2
})
console.log(result)


const value = arr.filter(e => e>2)
console.log(value)