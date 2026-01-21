//=> arrow function -- no function name --> also called the anonymous function
//no need to write function() keyword

let print = () => {
  console.log("hello world!!");
};

print();

console.log("=======");

let say = () => console.log("hello playwright");
say();

console.log("=======");

//arrow function with one param: can use ()
let even = (num) => num % 2 === 0;
let e1 = even(10);
console.log(e1);

console.log("=======");

//arrow function with one param: no need to use ()
let pop = (number) => number * 2;
let r1 = pop(100);
console.log(r1);

console.log("=======");
//arrow function with two params

let sub = (a, b) => a - b;
let sb = sub(10, 20);
console.log(sb);

console.log("=======");

let bye = (e) => console.log(e);
bye("naveen");
console.log(bye.name);

console.log("=======");

//external name: openBrowser
//internal name: no name --> anonymous
//param - 1 param -> browserName
//return : boolean: true/false

/**
 *
 * @param {string} browserName
 * @returns
 */
let openBrowser = (browserName) => {
  switch (browserName) {
    case "chrome":
      console.log("launch chrme");
      return true;

    default:
      console.log("invalid browser");
      return false;
  }
};

let flag = openBrowser("chrome");
console.log(flag);

console.log("==========");

let checkEnv = (envName, browserVersion) => {
  console.log(envName);
  console.log(browserVersion);
  return 0;
};

let n = checkEnv("QA", 125.11);
console.log(n);
