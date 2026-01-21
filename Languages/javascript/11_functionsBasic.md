# JavaScript Functions – Types, Parameters, Return, JSDoc

> **Goal**: Understand JavaScript functions using the pattern  
> **Concept → Code → Output → Real Use Case**, so students and professionals can use functions correctly in real projects and automation.

---

## 1️⃣ Named Function (Reusable / Factory Code)

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

### Real Use Case

- Utility functions
- Common business logic
- Automation helpers (login, setup, cleanup)

---

## 2️⃣ Function Hoisting (Call Before Definition)

### Concept

> **Function declarations are hoisted** in JavaScript.

That means you can call them **before they are defined**.

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

### Important Note

❌ This is **not recommended** for clean code.  
✅ Always define function before calling in real projects.

---

## 3️⃣ Function with Parameters (Input, No Return)

### Concept

> Function can accept **inputs (parameters)** but may not return anything.

---

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

### Real Use Case

- Logging
- Validation
- Printing reports

---

## 4️⃣ JSDoc Comments (`/** */`) – VERY IMPORTANT

### Concept

> JSDoc comments tell **editors, tools, and developers** about parameter types and return values.

JavaScript is dynamic, but **JSDoc adds clarity**.

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

### Why JSDoc is useful

- VS Code autocomplete
- Type hints
- Better documentation
- Fewer runtime errors

---

## 5️⃣ Function with Parameters and Return Value

### Concept

> Function can **return a value**, which can be stored or reused.

---

### Code

```js
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addition(a, b) {
  console.log("sum of two numbers");
  let sum = a + b;
  return sum;
}

let sum1 = addition(10, 20);
console.log(sum1);
```

### Output

```
sum of two numbers
30
```

### Real Use Case

- Calculations
- API response processing
- Test result evaluation

---

## 6️⃣ Real Example: Decision-Based Function (Browser Launcher)

### Concept

> Function with **input + logic + return boolean** for decision making.

---

### Code

```js
/**
 * @param {string} browserName
 * @returns {boolean}
 */
function launchBrowser(browserName) {
  console.log("browser name is", browserName);

  switch (browserName.trim().toLowerCase()) {
    case "chrome":
      console.log("browser is chrome");
      return true;
    case "firefox":
      console.log("browser is firefox");
      return true;
    case "edge":
      console.log("browser is edge");
      return true;
    case "safari":
      console.log("browser is safari");
      return true;
    default:
      console.log("incorrect browser name");
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
browser name is safari
browser is safari
true
url open
```

### Real Use Case

- Automation browser selection
- Feature flags
- Conditional flows

---

## 🔥 Function Summary Table (SAVE THIS)

| Function Type        | Input | Return | Use Case                 |
| -------------------- | ----- | ------ | ------------------------ |
| Named function       | ❌    | ❌     | Reusable logic           |
| Function with params | ✅    | ❌     | Logging / validation     |
| Function with return | ✅    | ✅     | Calculations / decisions |
| Decision function    | ✅    | ✅     | Automation flow control  |

---

## 🧠 Golden Rules

> - Functions = reusable logic
> - Return makes function testable
> - JSDoc improves readability & tooling
> - Clean functions = clean automation

---
