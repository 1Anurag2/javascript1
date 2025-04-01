let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("This is the first Promise");
    resolve(10);
  }, 1 * 1000);
});

let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("This is the second Promise");
    // resolve(20);
    reject("Failed...")
  }, 2 * 1000);
});

let p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("This is the third Promise");
    resolve(30);
  }, 3 * 1000);
});

let total = 0;
Promise.all([p1, p2, p3])
  .then((result) => {
    for (var i in result) {
      total += result[i];
    }
    console.log(`Result  : ${result}`);
    console.log(`Total : ${total}`)
  })
  .catch((error) => {
    console.log(`Error : ${error}`);
  });
