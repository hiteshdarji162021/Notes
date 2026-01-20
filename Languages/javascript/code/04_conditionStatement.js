//if else condition

let a = 30;
let b = 20;
if (a > b) {
  console.log("pass");
} else if (a < b) {
  console.log("fail");
} else {
  console.log("nothing");
}
//dead code, unreachable code
if (false) {
  console.log("bye!!");
} else {
  console.log("hello!!");
}

let isElementDisplayed = false;

if (isElementDisplayed) {
  console.log("click on the element");
} else {
  console.log("wait for the element");
}
