//non premitiver data type me data heap memory me store hota hai {array,obj,function}
let myobj = {
    name:"anuragverma",
    email:"anurag5055ver@gmail.com",
    age:21,
}

let anotherobj = myobj
console.log(myobj);
console.log(anotherobj);

myobj.email = "sahil555@gmail.com"
console.log(anotherobj)
anotherobj.email = "name58949@gmail.com"
console.log(myobj);

let myfunction = function(){
    let a = 5,b = 8
    return (a+b);
}
let anotherfunction = myfunction
anotherfunction.a = 10
console.log(myfunction);