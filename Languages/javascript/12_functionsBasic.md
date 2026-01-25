# What covered in notes

- function
- Function Hoisting (Call Before Definition)
- function with parameters and return
- JSDoc (`/** */`) 


## Why we learn function?

- We learn functions to reuse logic, organize code, and avoid duplication while keeping automation scripts clean and maintainable.
- Javascript doc(`/** */`)- add comment above fuction to get more idea on parametes and return type

---

## 1.  Named Function (Reusable / Factory Code)

### Concept

> A **named function** is reusable logic that can be called multiple times.

---

### Code

```js
function test() {
  console.log("test");
}

test();

function sum() {
  console.log("sum function");
  let a = 10 + 20;
  console.log(a);
}

sum();
```

### Output

```
test
sum function
30
```

### Use Case

- Utility methods
- Reusable business logic
- Automation helpers (setup, teardown)

---

## 2.  Function Hoisting (Call Before Definition)

### Concept

> **Function declarations are hoisted**, so they can be called before definition.

---

### Code

```js
great();

function great() {
  console.log("i am great");
}
```

### Output

```
i am great
```

### Use Case

- Understanding legacy code
- Avoid in real projects for readability

---

## 3. Function with Parameters (No Return)

### Code

```js
function add(a, b) {
  console.log(a + b);
}

add(10, 20);
```

### Output

```
30
```

### Use Case

- Logging
- Validation
- Side-effect operations

---

## 4. JSDoc (`/** */`) – Type Hinting in JavaScript

### Concept

> JavaScript is dynamic, but **JSDoc helps editors and developers** understand expected types.

---

### Code

```js
/**
 * @param {string} name
 */
function getTrainerName(name) {
  console.log("my trainer name", name.toLowerCase());
}

getTrainerName("hitesh");
```

### Output

```
my trainer name hitesh
```

### Use Case

- VS Code IntelliSense
- Safer function usage
- Better documentation

---

## 5.  Function with Return Value

### Code

```js
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addition(a, b) {
  console.log("sum of two number");
  return a + b;
}

let sum1 = addition(10, 20);
console.log(sum1);
```

### Output

```
sum of two number
30
```

### Use Case

- Calculations
- Decision making
- Test validations

---

## 6️⃣ Real Example – Decision-Based Function

### Code

```js
/**
 * @param {string} browserName
 */
function launchBrowser(browserName) {
  switch (browserName.trim().toLowerCase()) {
    case "chrome":
    case "firefox":
    case "edge":
    case "safari":
      return true;
    default:
      return false;
  }
}

let browserLaunched = launchBrowser("safari");
console.log(browserLaunched);

if (browserLaunched) {
  console.log("url open");
}
```

### Output

```
true
url open
```

### Use Case

- Automation browser selection
- Feature toggles

---

## 6. Function Expression & Function Name Property

### Code

```js
let testing = function getTrainerName() {
  console.log("get the trainer name");
};

testing();
console.log(testing.name);
```

### Output

```
get the trainer name
getTrainerName
```

### Concept

- Function name is available via `.name`
- Function expression is called using variable, not function name

---

## 7.  Function Overloading (NOT Supported in JavaScript)

### Concept

> JavaScript does **NOT** support true function overloading.

---

### Problem Example

```js
function login() {
  console.log("1st login");
}

function login(a) {
  console.log("2nd login", a);
}
```

➡ error in modern java. Both function should not same. But yes if you select type="common" in package.json then call last function name.

---

## 8. Correct Alternatives to Function Overloading

### Option 1️⃣ – Different Function Names (BEST)

```js
function login() {
  console.log("login without param");
}

function loginWithUserPwd(uname, pwd) {
  console.log(uname, pwd);
}

function loginWithOTP(uname, pwd, otp) {
  console.log(uname, pwd, otp);
}
```

### Option 2️⃣ – Using `arguments` (NOT Recommended)

```js
function login() {
  if (arguments.length === 0) console.log("no param");
  else if (arguments.length === 2) console.log("user + pwd");
  else if (arguments.length === 3) console.log("user + pwd + otp");
}
```

### Option 3️⃣ – Multiple Function Expressions

```js
let l1 = function () {
  console.log("no param");
};
let l2 = function (u, p) {
  console.log(u, p);
};
let l3 = function (u, p, o) {
  console.log(u, p, o);
};
```

---

## 9.  Function Returning Array (Real Business Logic)

### Code

```js
//1 way
function employee(name) {
  let device = [];
  switch (name) {
    case "hitesh":
      return ["A", "B", "C"];
    case "ronak":
      return ["D", "E"];
    case "dhruvesh":
      return ["F", "G"];
    default:
      return [];
  }
}

-OR;
//2 way
function employee(name) {
  let device = [];
  switch (name) {
    case "hitesh":
      device.push("A");
      device.push("B");
      device.push("C");
      break;
    case "ronak":
      device.push("D");
      device.push("E");
      break;
    case "dhruvesh":
      device.push("F");
      device.push("G");
      break;
    default:
      console.log("enter valid employee name");
      break;
  }
  return device;
}

let devicelist = employee("hitesh");
console.log(devicelist); //its return array value

console.log(employee("hitesh"));
```

### Output

```
[ 'A', 'B', 'C' ]
```

### Use Case

- Role-based access
- Data mapping

---

## 10. Function with Object Parameter (Call by Reference)

### Code

```js
function getProductDetails(productData) {
  productData.price = 2000;
}

let product = {
  name: "macbook pro",
  brand: "sample",
  stock: "in-stock",
  price: 1000,
};

getProductDetails(product);
console.log(product.price);
```

### Output

```
2000
```

### Concept

> Objects are passed by **reference**, not value.

### Use Case

- API payload modification
- Shared configuration update

---

## 🔥 Final Comparison Table

| Topic                | Supported | Best Practice |
| -------------------- | --------- | ------------- |
| Named function       | ✅        | Yes           |
| Hoisting             | ✅        | Avoid         |
| JSDoc typing         | ✅        | Use           |
| Function overloading | ❌        | Avoid         |
| arguments object     | ✅        | Avoid         |
| Object parameter     | ✅        | Be careful    |

---

## 🧠 Golden Rules

> - Functions = reusable logic
> - Prefer return over console.log
> - Avoid overloading hacks
> - Use JSDoc for clarity
> - Be careful with object references

---
