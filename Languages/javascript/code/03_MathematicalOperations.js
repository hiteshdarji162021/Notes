//MathematicalOperations

//+
console.log("Math Operation Module Loaded");

console.log(1 + 1); //2
console.log(1 + "1"); //11
console.log("1" + 1); //11
console.log("1" + "1"); //11

//-subtraction
console.log(5 - 2); //3
console.log("5" - 2); //3
console.log(5 - "2"); //3
console.log("5" - "2"); //3
console.log(5 - "Hello"); //NaN
console.log("5" - "Hello"); //NaN

//*multiplication
console.log(4 * 2); //8
console.log("4" * 2); //8
console.log(4 * "2"); //8
console.log("4" * "2"); //8
console.log(4 * "hello"); //NaN
console.log("4" * "hello"); //NaN

///division
console.log(8 / 2); //4
console.log("8" / 2); //4
console.log(8 / "2"); //4
console.log("8" / "2"); //4
console.log(9.0 / 2); //4.5
console.log(9 / 2); //4.5
console.log(9 / 2.0); //4.5
console.log(9 / 0); //Infinity
console.log(0 / 9); //0
console.log(0 / 0); //NaN
console.log(0.0 / 0.0); //NaN
console.log("8" / "Hello"); //NaN
console.log(8 / "Hello"); //NaN

//%modulus
console.log(5 % 2); //1
console.log("5" % 2); //1
console.log(5 % "2"); //1
console.log("5" % "2"); //1
console.log(5 % "Hello"); //NaN
console.log("5" % "Hello"); //NaN
console.log("200" + "300"); //200300

//Unary plus operator
console.log(+"200" + 5); // convert string to number so output is 205
console.log(+"200" + +"5"); // convert both string to number so output is 205

//Unary minus operator
console.log(-"200"); // -200
console.log(-200); // -200
console.log(-"200" + 1); //-199
console.log(-"hello"); //  NaN
console.log(-"200" + 5); //  -195
console.log(-"200" + -"5"); //  -205
