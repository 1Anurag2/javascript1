try {
    variable;
} catch (error) {
  console.log(error.message)  
  console.log(error.name)  
//   console.log(error.stack)  
    if(error instanceof ReferenceError){
        console.log("Reference Error Occurred")
    }
    else if(error instanceof TypeError){
        console.log("type Error Occurred")
    }else{
        console.log("Unknown Error")
    }
} 


try {
    let json = '{"name": "Anurag","Age":"22"}'
    let user = JSON.parse(json);
    if(!user.name){      // if name not found in json then errro occurred
        throw new Error("Incomplete data : No Name")
    }
} catch (error) {
    console.log(error)
}finally{
    console.log("Finally")
}