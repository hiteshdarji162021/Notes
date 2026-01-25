# What covered in notes

- Default Params
- Function Expressions
- Arrow Functions
- IIFE function

## Why we learn function?

- Default Params - To handle missing arguments safely and reduce extra condition checks in functions.
- Function Expressions - To assign functions to variables and pass them as values for flexible, modular code.
- Arrow Functions - To write shorter, cleaner functions and avoid common this-binding issues.
- IIFE function - To execute code immediately and avoid polluting the global scope.

---

## 1️⃣ Default Parameters

### Concept

> Default parameters provide **fallback values** when arguments are not passed.

---

### Code

```js
function print1(name = "hitesh") {
  console.log("hi", name);
}

print1();
print1("gabbar");
```

### Output

```
hi hitesh
hi gabbar
```

### Use Case

- Optional inputs
- Avoid `undefined` checks
- Cleaner APIs

---

### Example 2: Default Params in Calculation

```js
function sum(a = 0, b = 2) {
  console.log(a + b);
}

sum();
sum(5);
sum(5, 4);
```

### Output

```
2
7
9
```

### Use Case

- Safe math operations
- Config defaults

---

## 2️⃣ Default Params with Real Logic (Browser / Env)

### Browser Example

```js
function openBrowser(browserName = "chrome") {
  switch (browserName.trim().toLowerCase()) {
    case "chrome":
      console.log("chrome browser:->", browserName);
      break;
    default:
      console.log("incorrect browser so by default go with chrome browser");
  }
}

openBrowser("test");
openBrowser();
```

### Output

```
incorrect browser so by default go with chrome browser
chrome browser:->chrome
```

### Environment Example

```js
function runTest(envName = "qa") {
  switch (envName) {
    case "qa":
      console.log("run test in qa environment");
      break;
    default:
      console.log("heance runnin test on default environment: QA Env");
  }
}

runTest("stage");
```

### Output

```
heance runnin test on default environment: QA Env
```

### Use Case

- Automation environment handling
- Safe defaults in CI/CD

---

## 3️⃣ Function Expression (Anonymous Function)

### Concept

> Function stored in a variable. **Hoisting is NOT supported**.

---

### Code

```js
let test = function () {
  console.log("anonymous function");
};

test();

let sum = function (a, b) {
  return a + b;
};

console.log(sum(10, 20));
console.log(sum.name);
```

### Output

```
anonymous function
30
sum
```

### Use Case

- Callbacks
- Assign functions dynamically

---

## 4️⃣ Arrow Functions (Modern JavaScript)

### Concept

> Arrow functions are **shorter**, **cleaner**, and **do not have their own `this`**.

---

### Examples

```js
let print = () => {
  console.log("hello world!!");
};
print();

let say = () => console.log("hello playwright");
say();

let even = (num) => num % 2 === 0;
console.log(even(10));

let sub = (a, b) => a - b;
console.log(sub(10, 20));
```

### Output

```
hello world!!
hello playwright
true
-10
```

### Use Case

- Callbacks
- Array methods
- Cleaner utility functions

---

## 5️⃣ Arrow Function with Return & Decision Logic

```js
let openBrowser = (browserName) => {
  switch (browserName) {
    case "chrome":
      console.log("launch chrome");
      return true;
    default:
      console.log("invalid browser");
      return false;
  }
};

let flag = openBrowser("chrome");
console.log(flag);
```

### Output

```
launch chrome
true
```

### Use Case

- Feature toggles
- Automation flow control

---

## 6️⃣ IIFE – Immediately Invoked Function Expression

### Concept

> Runs **once immediately**. No external call needed.

---

### Code

```js
(function () {
  console.log("start server");
})();

(function (name) {
  console.log("start server", name);
})("hitesh");

let newEmployee = (function (empName) {
  return empName.toUpperCase();
})("subodh");

console.log(newEmployee);
```

### Output

```
start server
start server hitesh
SUBODH
```

### Use Case

- Initialization logic
- One-time setup (before tests)

---

## 🔥 Comparison Table (SAVE THIS)

| Feature          | Function Declaration | Function Expression | Arrow Function | IIFE |
| ---------------- | -------------------- | ------------------- | -------------- | ---- |
| Hoisting         | ✅                   | ❌                  | ❌             | ❌   |
| `this` binding   | Own                  | Own                 | Lexical        | Own  |
| Reusability      | High                 | Medium              | High           | No   |
| Use in callbacks | ⚠️                   | ✅                  | ✅             | ❌   |
| Industry usage   | ✅                   | ✅                  | ⭐⭐⭐         | ⚠️   |

- Lexical means we can use this keywrod inside arrow function. we can use object refrencename like. user.name like this instead of this.name.

---

## 🧠 Industry Best Practices

✅ Use **default parameters** instead of manual checks  
✅ Prefer **arrow functions** for callbacks  
✅ Use **named functions** for reusable logic  
✅ Avoid `arguments` object → use params/rest  
❌ Avoid IIFE unless initialization is needed  
❌ Avoid overloading hacks

---
