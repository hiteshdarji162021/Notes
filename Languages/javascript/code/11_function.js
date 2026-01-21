//1. named function ; reusalbe code/factory

function test() {
  console.log("test");
}
test();

function sum() {
  console.log("sum function"); //sum function
  let a = 10 + 20;
  console.log(a); //30
}
sum();

//bad way to wrrign code call funciton before call. but yes get response same.
great();
function great() {
  console.log("i am great"); //i am great
}

//2. function : someinput but no return
function add(a, b) {
  console.log(a + b); //30
}

add(10, 20);

console.log("--------------------------------");

/**
 *
 * @param {string} name
 */

//due to above written param things on comment we get methods with name after . else how javscript
//know that name is string on any other type
function getTrainerName(name) {
  console.log("my trainer name", name.toLowerCase()); //my trainer name hitesh
}
getTrainerName("hitesh");
/**
 *
 * @param {number} a
 * @param {number} b
 * @returns
 */

//3. function :some input and some return
function addition(a, b) {
  console.log("some of two number");
  let sum = a + b;
  return sum;
}

let sum1 = addition(10, 20);
console.log(sum1);

//param browser if browser match then response else said no browser fouund

/**
 *
 * @param {string} browserName
 */
function launchBrowser(browserName) {
  console.log("browser name is", browserName);
  switch (browserName.trim().toLowerCase()) {
    case "chrome":
      console.log("browser is chrome", browserName);
      return true;
    case "firefox":
      console.log("browser is ff", browserName);
      return true;
    case "edge":
      console.log("browser is edge", browserName);
      return true;
    case "safari":
      console.log("browser is safari", browserName);
      return true;
    default:
      console.log("incorrect browser name");
      return false;
  }
}

let browserLaunched = launchBrowser("safari");
console.log(browserLaunched);

if (browserLaunched) {
  console.log("url open");
}
