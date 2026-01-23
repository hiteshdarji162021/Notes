import price, { p1 as test, p2, add, add1 } from "./18_export.js"; //default function sub import like this. we can use any name instead of sub
//if we use test instead of sub then we can use test(200,100) to call the function
console.log(test);  //here test is alias of p1.
let sum = add(100, 200);
console.log(sum);

console.log(p2);

let sum1 = add1(100, 200);
console.log(sum1);

//console.log(age);  //we can not use age variable because we have  not exported it from math.js

console.log("=====================================");
//1. print default function value
// let subtraction = sub(200,100);  //default function import
// console.log(subtraction);

console.log("=====================================");
//2. print default variable value
console.log(price);

//please note only one default value print either funciton or variable. not both.

console.log("=====================================");
