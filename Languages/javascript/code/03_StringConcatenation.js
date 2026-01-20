
//String concatenations

let a = 100;
let b = 200;
console.log(a + b); //300
console.log(b - a); //100
console.log(a * b); //20000
console.log(b / a); //2

let x = "Hello";
let y = "Playwright";
console.log(x + y); //HelloPlaywright
console.log(a + b + x + y); //300HelloPlaywright
console.log(x + y + a + b); //HelloPlaywright100200
console.log(x + y + (a + b)); //HelloPlaywright300
console.log(a + b + x + y + a + b); //300HelloPlaywright100200

console.log("The value of a is: " + a); //The value of a is: 100
console.log("The value of b is: " + b); //The value of b is: 200
console.log("The sum of a and b is: " + a + b); //The sum of a and b is: 100200
console.log("The sum of a and b is: " + (a + b)); //The sum of a and b is: 300

console.log(true + "hello" + false); //truehellofalse
console.log(true + false); //1
console.log(true + true); //2
console.log(false + false); //0

console.log("Hitesh" + "Darji"); //HiteshDarji
console.log("Hitesh" + +"Darji"); //HiteshNaN  - Here +'Darji' converts string to number but it is not possible so NaN
console.log("Hitesh" - "Darji"); //NaN - Here - operator tries to convert both strings to number but it is not possible so NaN
console.log("Hitesh" - +"Darji"); //NaN - Here +'Darji' converts string to number but it is not possible so NaN
console.log("Hitesh" * +"Darji"); //NaN - Here * operator tries to convert both strings to number but it is not possible so NaN
