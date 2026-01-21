//callback - passing the function name to another function as parameters.
// call a function by passing the function
console.log("===========1. callback with arrow function==============");
//1. callback with arrow function
let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;


//calculator function
//callbackfunction - wecan give any name
function calculator(callbackfunction, a, b) {   //callbackfunction value is 'sum'
    return callbackfunction(a, b);
}


//calling function
let val = calculator(sum, 20, 10); //sum functin passed here.
console.log(val); //30


console.log("===========2. allback with anonymous function==============");
//2. callback with anonymous function


let addition = function (a, b) {
    return a + b;
}


let subtraction = function (a, b) {
    return a - b;
}
let multipication = function (a, b) {
   return a * b;
}
let division = function (a, b) {
    return a / b;
}




function cal(a,b,callbackfun){
    return callbackfun(a,b);
}


let mulvalue = cal(10,20,multipication);
console.log(mulvalue);  //200


//3. Normal function
function summing(a,b) {
    return a+b;
}


function calculationfun(funname,a,b) {
    return funname(a,b);
}


let sumv= calculationfun(summing,10,20)
console.log(sumv); //30


console.log("=======================");


//4. without create normal function or annonymous function use the call back. pass funciton body instead of function name while calling


function doSomething(funName,url){  
    console.log('enter the url',url);  //enter the url https://www.google.com
    funName();
}


//doSomething(()=>{},url)  // here we directly pass function body instead of pass function name syntax.




doSomething(()=>{   // same syntax adding example of code.
    console.log('hello app');
},'https://www.google.com')  //hello app




console.log("======================pass two call back================");
//5. pass two callback function


let addition1 = function (a, b) {
    return a + b;
}


let subtraction1 = function (a, b) {
    return a - b;
}
function cal1(a,b,fun1,fun2){
    console.log(fun1(a,b));  
    console.log(fun2(a,b));
}


cal1(10,20,addition1,subtraction1);  //30 //-10