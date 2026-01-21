let person = {
  name: "hitesh",
  age: 30,
  salary: 34.55,
  isActive: true,
  status: "pending",
};

//get all keys
let allKeys = Object.keys(person);
console.log(typeof allKeys); //object
console.log(allKeys); //[ 'name', 'age', 'salary', 'isActive', 'status' ]
console.log(allKeys.length); //5

let values = Object.values(person);
console.log(typeof values); //object
console.log(values); //[ 'hitesh', 30, 34.55, true, 'pending' ]
console.log(values.length); //5

console.log(Object.entries(person));
for (let [key, value] of Object.entries(person)) {
  console.log(`${key}->${value}`);
}
//Output of forloop
// [
//   [ 'name', 'hitesh' ],
//   [ 'age', 30 ],
//   [ 'salary', 34.55 ],
//   [ 'isActive', true ],
//   [ 'status', 'pending' ]
// ]

//print the keys basis of vlaue

//Based on value we get keys
for (let e in person) {
  if (e == "salary") console.log(person[e]); //34.55
}
