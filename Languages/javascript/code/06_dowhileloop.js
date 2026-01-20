//3. do-while:
//1 to 10:
let p = 1;
do {
  console.log(p);
  p++;
} while (p <= 10);

console.log("==========");

//let isElementDisplayed = false;
do {
  console.log("check the element");
} while (false);
console.log("==========");

let d = 1;
do {
  console.log(d); //1
  d++; //2
} while (d >= 10); //2>=10: false

//use cases for do-while loop:
//land on the page
//check the element in the beginning itself - at least once
//if the element not present: then you start the loop
//if the element is presnet : click and break the loop
