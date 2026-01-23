//1.
let sum = (a, b) => {
  console.log(a + b);
};
let sub = (a, b) => {
  console.log(a - b);
};

function cal(callback, a, b) {
  console.log("cal function calling");
  callback(a, b);
}

cal(sum, 10, 20);

//2.
function test(callback, a, b) {
  callback(10, 20);
}

test(
  (a, b) => {
    console.log(a + b);
  },
  10,
  20,
);

//3.
function user(callback, a, b) {
  let sum = callback(a, b);
  console.log(sum);
  return true;
}

let status1 = user(
  (a, b) => {
    let c = a + b;
    return c;
  },
  10,
  20,
);

console.log(status1);

//callback : passing the function name to another function as a parameter
//call a function by passing the function name

let sum1 = (a, b) => a + b;
let sub1 = (a, b) => a - b;
let div = (a, b) => b / a;
let mul = (a, b) => a * b;

//actual calculator function
function calculator(funcName, a, b) {
  console.log("using two numbers ");
  return funcName(a, b);
}

//user is calling this function: calculator
let result = calculator(sum1, 10, 20);
console.log(result);

result = calculator(sub1, 10, 20);
console.log(result);

result = calculator(div, 10, 20);
console.log(result);

result = calculator(mul, 10, 20);
console.log(result);

console.log("------------");

//5.

let addition = function (a, b) {
  return a + b;
};

let substraction = function (a, b) {
  return a - b;
};

let division = function (a, b) {
  return b / a;
};

let multiplication = function (a, b) {
  return a * b;
};

function performCalc(a, b, funcName1, funcName2) {
  console.log(funcName1(a, b));
  console.log(funcName2(a, b));
}

//user is calling:

performCalc(10, 20, addition, division);

console.log("bye!!!!!!");

//6.
function summing(a, b) {
  return a + b;
}

function calc(funcName, a, b) {
  return funcName(a, b);
}

let t1 = calc(summing, 10, 30);
console.log(t1);

console.log("===========");

//7.

//design a function: never create any arrow/anonymous function body while desiging the function
function doSomething(funcName, url) {
  console.log("entering the url..." + url);
  funcName();
}

//caller: call this function now:
//call by passing callback function body and url value
doSomething(() => {
  console.log("hello appp");
}, "http://www.google.com");

//8.
// Function defined using arrow function
const performOperation = (a, b, operation) => {
  return operation(a, b);
};

// Call it with an arrow function as parameter
const result1 = performOperation(4, 2, (x, y) => x * y);
console.log(result1);

//4.
//1. Start Machin  -- 5 sec
//2.bilwater --3 sec
//3. addCoffeePowder --4sec
//4. pop in Cup --3sec
//5. serve cofee -- 1 sec

function startMachin(callback) {
  setTimeout(() => {
    console.log("1. Start Machin");
    callback();
  }, 5000);
}

function bilwater(callback) {
  setTimeout(() => {
    console.log("2. bil water");
    callback();
  }, 3000);
}

function addCoffeePowder(callback) {
  setTimeout(() => {
    console.log("3. add Coffee Powder");
    callback();
  }, 4000);
}

function popinCup(callback) {
  setTimeout(() => {
    console.log("4. pop in Cup");
    callback();
  }, 3000);
}

function servecofee(callback) {
  setTimeout(() => {
    console.log("5. serve cofee");
    callback();
  }, 1000);
}

//not work
startMachin(() => {});
bilwater(() => {});
addCoffeePowder(() => {});
popinCup(() => {});
servecofee(() => {});

startMachin(() => {
  bilwater(() => {
    addCoffeePowder(() => {
      popinCup(() => {
        servecofee(() => {
          console.log("done");
        });
      });
    });
  });
});
