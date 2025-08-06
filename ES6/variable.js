var x = 10;       // In var daclaration, variable can be redeclared and updated
console.log(x);
var x = 5;
console.log(x);
x = 12;
console.log(x);

let y = "Hello"; // In let declaration, variable can be updated but not redeclared
console.log(y)
y = "World";
console.log(y);
//let y = "New"; // This will throw an error: Identifier 'y' has already been declared

const z = 100; // In const declaration, variable cannot be updated or redeclared
console.log(z);
//z = 200; // This will throw an error: Assignment to constant variable
//const z = 150; 


if(true){
    var x = "Anurag"     // var is a gloable variable 
}
console.log(x)

if(true){
    let name = "Anurag"       // let and const not a gloable variable it is a block 
    const name2 = "Anurag"     
}
console.log(name)
console.log(name2)