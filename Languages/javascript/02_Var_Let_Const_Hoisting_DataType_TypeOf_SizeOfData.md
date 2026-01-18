# JavaScript: `var` vs `let` vs `const` (Complete Guide)

This document gives a **clear, end-to-end understanding** of `var`, `let`, and `const` with:

- A **comparison table**
- **Function examples** for each
- **Output explanations**
- **Key rules & interview notes**

---

## 1️⃣ Comparison Table: `var` vs `let` vs `const`

## 1️⃣ Comparison Table: `var` vs `let` vs `const`

| Feature         | `var`                            | `let`                 | `const`           |
| --------------- | -------------------------------- | --------------------- | ----------------- |
| Scope           | Function scope                   | Block scope           | Block scope       |
| Hoisting        | Yes (initialized as `undefined`) | Yes (TDZ → error)     | Yes (TDZ → error) |
| Re-declaration  | ✅ Yes                           | ❌ No                 | ❌ No             |
| Re-assignment   | ✅ Yes                           | ✅ Yes                | ❌ No             |
| Recommended use | ❌ Avoid                         | ✅ When value changes | ✅ Default choice |

---

## 2️⃣ Function Example Using `var`

```js
var a = 10;

function test() {
  var a = 20; // re-declaration allowed (function scoped)
  console.log(a); // 20

  if (true) {
    var a = 30; // same variable (function scoped)
    console.log(a); // 30
  }

  console.log(a); // 30
}

test();
console.log(a); // 10
```

---

## 3️⃣ Function Example Using `let`,

```js
let a = 10;

function test() {
  let a = 20; // block-scoped variable
  console.log(a); // 20

  if (true) {
    let a = 30; // new variable (block scope)
    console.log(a); // 30
  }

  console.log(a); // 20
}

test();
console.log(a); // 10
```

---

## 4. Function Example Using `const`

```js
const a = 10;

function test() {
  const a = 20; // block-scoped constant
  console.log(a); // 20

  if (true) {
    const a = 30; // new constant (block scope)
    console.log(a); // 30
  }

  console.log(a); // 20
}

test();
console.log(a); // 10
```

---

## 5. JavaScript Data Types (Primitive & Non-Primitive)

JavaScript data types are divided into **two main categories**:

- **Primitive Data Types**
- **Non-Primitive (Reference) Data Types**

This classification is **same for JavaScript and TypeScript at runtime**.

---

## 1️⃣ Primitive Data Types

> **Primitive data types store a single value and are immutable**  
> (Value cannot be changed, only replaced, its mutable)

### ✅ List of Primitive Data Types (7)

- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt

---

### 🔹 Examples (Primitive)

```js
let age = 30; // Number
let name = "Hitesh"; // String
let isActive = true; // Boolean
let x; // Undefined
let data = null; // Null
let id = Symbol("id"); // Symbol
let bigNum = 123456789n; // BigInt
```

## NonPrimitive

## 2️⃣ Non-Primitive (Reference) Data Types

> **Non-primitive data types store references (memory address) and are mutable**  
> (Value can be changed without changing the reference)

### ✅ List of Non-Primitive Data Types

- Object
- Array
- Function
- Date
- Map
- Set

---

### 🔹 Examples (Non-Primitive)

```js
let user = { name: "Hitesh", age: 30 }; // Object
let numbers = [1, 2, 3, 4]; // Array

function greet() {
  // Function
  console.log("Hello");
}

let today = new Date(); // Date
let userMap = new Map(); // Map
let uniqueSet = new Set([1, 2, 3]); // Set
```

## 3️⃣ Mutable vs Immutable Summary

### Immutable (Primitive) - Can not change value

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

### Mutable (Non-Primitive) - Change value

- Object
- Array
- Function
- Map
- Set
- Date

## 4. Data type

## Size of Primitive Data Types (Approximate)

> ⚠️ JavaScript does NOT define fixed sizes.  
> Sizes depend on the JavaScript engine (Chrome/Edge = V8, Firefox = SpiderMonkey). that way size is not important in javascript.
> Values below are **approximate and interview-safe**.

| Primitive Data Type | Chrome (V8)          | Firefox (SpiderMonkey) | Edge (V8)            | Notes                     |
| ------------------- | -------------------- | ---------------------- | -------------------- | ------------------------- |
| Number              | ~8 bytes             | ~8 bytes               | ~8 bytes             | IEEE-754 double precision |
| Boolean             | ~4 bytes             | ~4 bytes               | ~4 bytes             | `true` / `false`          |
| String              | ~2 bytes / character | ~2 bytes / character   | ~2 bytes / character | UTF-16 encoding           |

---
