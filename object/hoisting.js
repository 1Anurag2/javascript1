const { log } = require("console")

addone(5)
function addone(num){
    return num+1
}


// addtwo(7)   Cannot access 'addtwo' before initialization
const addtwo = function addtwo(num){
    return num+2
}
const result = addtwo(8)     // we can access return value using storing object in variable 
console.log(result);
