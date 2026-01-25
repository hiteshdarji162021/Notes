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