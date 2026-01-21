//IIFE - Immedeatly Invoked function expression, no name - anonymous function

//1.
(function () {
  console.log("start server");
})(); //start function   - just like static block in java, before start test when i want to do something at that time

//2.
(function (name) {
  console.log("start server", name);
})("hitesh");

//3. - return something start in value

//Here  newEmployee is store value which function return, its not reference of object(function)

let newEmployee = (function (empName) {
  console.log("emp name is", empName);
  return empName.toUpperCase();
})("subodh");

console.log(newEmployee);
