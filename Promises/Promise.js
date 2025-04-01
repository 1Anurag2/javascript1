function prom(compelete){
    return new Promise(function(resolve , reject){
        console.log("Fetching Data ......")
        setTimeout(() => {
            if(compelete){
                resolve("Successfull logged In !");
            }else{
                reject("Something went wrong , Try Again !");
            }
        }, 3000);
    });
}

// console.log(prom(true))
// let onfulfilment = (result) => {
//     console.log(result)
// }
// let onRejection = function(error){
//     console.log(error)
// }

prom(true).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
});

