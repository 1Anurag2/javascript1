let PromiseCall = function(data , message){
     return function(resolve,reject){
        setTimeout(() => {
            console.log(`This is the ${message} Promise`)
            resolve(data);
        }, data * 100);
    }
}

let p1 = new Promise(PromiseCall(10 , "first"));
let p2 = new Promise(PromiseCall(20 , "Second"));
let p3 = new Promise(PromiseCall(30 , "third"))
let p4 = new Promise(function(resolve,reject){
    reject("the fourth Promise has rejected !")
})


let total = 0;
Promise.all([p1,p2,p3,p4]).then((result) => {
    for(var i in result){
        total += result[i]
    }
    console.log(`Result : ${result}`)
    console.log(`Total : ${total}`)
}).catch((error)=>{
    console.log(`Error : ${error}`)
})