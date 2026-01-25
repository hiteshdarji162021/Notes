//1. index for loop
console.log("Using index for loop:");
let fruits1 = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
// for (let i = 0; i < fruits1.length; i++) {
//   console.log(fruits1[i]);
//   if (fruits1[i] === "Orange") {
//     break;
//   }
// }

for (let i = fruits1.length - 1; i >= 0; i--) {
  //reverse order
  console.log(fruits1[i]);
}

//2. for..of loop  // Recommanded for array iteration
console.log("Using for..of loop:");
let fruits2 = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
// for (let fruit of fruits2) {
//   console.log(fruit);
//   if (fruit === "Orange") {
//     break;
//   }
// }
for (let fruit of fruits2.reverse()) {
  //reverse order
  console.log(fruit);
}

//3. forEach() method
let fruits3 = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
console.log("Using forEach() method:");
fruits3.forEach(function (fruit) {
  console.log(fruit);
});

//4. forEach() with arrow function
let fruits31 = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
console.log("Using forEach() with arrow function:");
fruits31.forEach((fruit) => console.log(fruit));

//5. for..in loop (not recommended for arrays. its for object (key and value pair))
console.log("Using for..in loop:");
for (let index in fruits1) {
  console.log(index); //its print index
  console.log(fruits1[index]); //its print value
}



