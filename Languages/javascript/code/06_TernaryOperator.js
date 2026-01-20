//condition ? expression1 : expression2

let a = 10;
let b = 5;
let max;
//using if else
if (a > b) {
  max = a;
} else {
  max = b;
}
console.log(`Max value is: ${max}`);

//using ternary operator
let maxTernary = a > b ? a : b;
console.log(`Max value using ternary operator is: ${maxTernary}`);

let isloggedin = true;
isloggedin ? showDashboard() : showLoginPage();

function showDashboard() {
  console.log("User is logged in, showing dashboard");
}

function showLoginPage() {
  console.log("User is not logged in, showing login page");
}
