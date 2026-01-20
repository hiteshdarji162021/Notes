//Big int - required n at end of Number. Not work with point value for 10.5n its work only number like 10n
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324

console.log(10n + 10n); // all value should be big int then only we can perform operation.
console.log(10 + 10n); //error because both are not big int.

let val = 5n; // at end of number if we write n then its big int
console.log(val);

let n1 = 1111111111111111111111n;
let n2 = 2222222222222222222222n;
console.log(n1 + n2); //3333333333333333333333n

let p1 = 1111111111111111111111;
let p2 = 2222222222222222222222;
console.log(p1 + p2); //3.333333333333333e+21
