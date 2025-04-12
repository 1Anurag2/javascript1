// Used to loop over object properties (keys).

const user = { name: "Amit", age: 25 };
for (const key in user) {
  console.log(key, user[key]);
}


// 🤔 Can for...in be used on arrays?
// Technically, yes, but it’s not recommended for arrays.

const arr = [10, 20, 30];

for (const index in arr) {
  console.log(index, arr[index]);
}
// Output:
// 0 10
// 1 20
// 2 30
