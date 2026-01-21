//function without name

//test() - hoisting not possible throw error. call without declartion use
let test = function () {
  console.log("anonymous function");
};

test();

let sum = function (a, b) {
  return a + b;
};

console.log(sum(10, 20)); //30
console.log(sum.name); //sum - same name for anonymous function

console.log("===================================");

/**
 *
 * @param {string} browserName
 */
let isBrowserName = function (browserName) {
  console.log("browser name", browserName);
  switch (browserName.trim().toLowerCase()) {
    case "chrome":
      console.log("chrome browser lunched");
      return true;
    case "firefox":
      console.log("firefox browser luanched");
      return true;
    default:
      console.log("invalid browser", browserName);
      return false;
  }
};

if (isBrowserName("chrome")) {
  console.log("enter the app url");
}
