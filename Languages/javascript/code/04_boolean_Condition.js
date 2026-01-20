// In javascript true =1 and false=0

if (true) {
  console.log("pass");
}
if (false) {
  console.log("fail");
}
if (1) {
  console.log("pass");
}
if (0) {
  console.log("fail");
}
if (555) {
  console.log("pass");
}

console.log(true + false); //1+ 0 =1
console.log(true + true); //1 +1 =2
console.log(false + false); //0 +0 =0

console.log(1 + true); //1 +1 = 2
console.log("1" + false); //1false  concate happen

console.log(1 - true); //1-1 =0
console.log("1" - false); //1-0 =1

console.log("true" + true); //truetrue
console.log("true" - true); //NaN
