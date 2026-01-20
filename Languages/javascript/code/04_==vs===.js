// == and === conditional statement. In real time we use only ===. Not using ==
// == check value only. === check type and value both.

console.log(10 == 10);

console.log(true == 1); //== lossly comparison.Only check value not type - true
console.log(true === 1); //strict comparison.Check value and type both -false

console.log(false == 0); //true
console.log(false === 0); //false

console.log(10 == "10"); //true
console.log(10 === "10"); //false

console.log("" == 0); //true
console.log("" === 0); //false

console.log([] == 0); //true
console.log([] === 0); //false

//special case -interview question
console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(typeof null); //object
console.log(typeof undefined); //undefined
