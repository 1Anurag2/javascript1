function setvalue(username){
    this.username = username
    console.log("called");
    
}
function information(username,email,password){
    setvalue.call(this,username)                // .call used to pass reference to another function 
    this.email = email
    this.password = password
    
}
const value = new information("Anurag",'anura5055ver@gmail.com','Anurag@123')
console.log(value);
