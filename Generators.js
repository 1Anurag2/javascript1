function* ItemGenerator() {
  yield "1 : Message", yield "2 : Message", yield "3 : Message";
}

let res = ItemGenerator();
// console.log(res.next().value)
// res.next()
// console.log(res.next().value)\

for (const i of res) {
  console.log(i);
}

function* generateit() {
    let result = [yield,yield,yield];

//   let result = (yield)*2;
  console.log(`Result : ${result}`);
}

let g = generateit();
g.next(); // next yeild ko target karta hai
g.next(5000);
g.next(6000);
g.next(7000);
g.next(456)
