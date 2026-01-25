# What covered in notes

- Primitive data type
- Non-Primitive
- Size of datatypes

## Why Are We Learning Primitive and Non-Primitive data type?

- To understand how JavaScript stores and handles data in memory.

## 1. Primitive Data Types (Immutable)

> **Primitive data types store a single value and are immutable**  
> Immutable means **value cannot be changed in place, only replaced**.

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
let age = 30;
console.log("number type of", typeof age); // number

let names = "Hitesh";
console.log("string type of", typeof names); // string

let isActive = true;
console.log("boolean type of", typeof isActive); // boolean

let x;
console.log("undefined type of", typeof x); // undefined

let data = null;
console.log("null type of", typeof data); // object (JS bug, remember)

let id = Symbol("id");
console.log("symbol type of", typeof id); // symbol

let bigNum = 123456789n;
console.log("bigint type of", typeof bigNum); // bigint
```

---

### 🔹 Immutable Proof Example (Very Important)

```js
let name1 = "Hitesh";
let name2 = name1;

name2 = "Rahul";

console.log(name1); // Hitesh
console.log(name2); // Rahul
```

---

## 2. Non-Primitive Data Types (Mutable)

> **Non-primitive data types store reference (memory address) and are mutable**  
> Mutable means **value can be changed without creating new object**.

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
let user = { name: "Hitesh", age: 30 };
console.log("object type of", typeof user); // object

let numbers = [1, 2, 3, 4];
console.log("array type of", typeof numbers); // object

function greet() {
  console.log("Hello");
}
console.log("function type of", typeof greet); // function

let today = new Date();
console.log("date type of", typeof today); // object

let userMap = new Map();
console.log("map type of", typeof userMap); // object

let uniqueSet = new Set([1, 2, 3]);
console.log("set type of", typeof uniqueSet); // object
```

---

### 🔹 Mutable Proof Example (Very Important)

```js
let user1 = { name: "Hitesh" };
let user2 = user1;

user2.name = "Rahul";

console.log(user1.name); // Rahul
console.log(user2.name); // Rahul
```

✅ Same reference, value changed → **Mutable**

```js
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1,2,3,4]
console.log(arr2); // [1,2,3,4]
```

---

## 🔥 Interview & QA Automation Summary

| Type          | Stored As | Mutable | Copy Behavior     |
| ------------- | --------- | ------- | ----------------- |
| Primitive     | Value     | ❌ No   | Copy by value     |
| Non-Primitive | Reference | ✅ Yes  | Copy by reference |

---

### 🧠 Memory Rule (Easy to Remember)

```
Primitive  → Stack → Immutable
Objects    → Heap  → Mutable
```

---

## 3. Size of Primitive Data Types (Approximate)

> ⚠️ JavaScript does NOT define fixed sizes.  
> Sizes depend on the JavaScript engine (Chrome/Edge = V8, Firefox = SpiderMonkey). that way size is not important in javascript.
> Values below are **approximate and interview-safe**.

| Primitive Data Type | Chrome (V8)          | Firefox (SpiderMonkey) | Edge (V8)            | Notes                     |
| ------------------- | -------------------- | ---------------------- | -------------------- | ------------------------- |
| Number              | ~8 bytes             | ~8 bytes               | ~8 bytes             | IEEE-754 double precision |
| Boolean             | ~4 bytes             | ~4 bytes               | ~4 bytes             | `true` / `false`          |
| String              | ~2 bytes / character | ~2 bytes / character   | ~2 bytes / character | UTF-16 encoding           |

---

# 4. Why Do We Need BigInt?

JavaScript `Number` type has **limitations** when dealing with very large integers.

---

## 1️⃣ Safe Integer Range in JavaScript

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
```

👉 Any integer **beyond this range cannot be trusted** when using `Number`.

---

## 2️⃣ Other Important Number Limits (Floating-Point)

```js
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
```

- `MAX_VALUE` → Largest possible number JavaScript can represent
- `MIN_VALUE` → Smallest positive number JavaScript can represent

⚠️ These are **floating‑point limits**, not safe integers.

---

## 3️⃣ What is BigInt?

> **BigInt is a data type that allows working with integers larger than `Number.MAX_SAFE_INTEGER` with exact precision.**

---

## 4️⃣ How to Create a BigInt

```js
let val = 5n; // `n` at the end makes it BigInt
console.log(val);
```

👉 Always add **`n` at the end** of the integer.

---

## 5️⃣ Important Rules of BigInt

### ✅ Rule 1: Only Integers Allowed

```js
10n   // ✅ valid
10.5n // ❌ invalid (BigInt does not support decimals)
```

---

### ✅ Rule 2: BigInt Operations Must Use BigInt Only

```js
console.log(10n + 10n); // ✅ Works
```

```js
console.log(10 + 10n); // ❌ TypeError
```

👉 **Number and BigInt cannot be mixed** in arithmetic operations.

---

## 6️⃣ Working with Very Large Numbers

### ✅ Using BigInt (Correct Result)

```js
let n1 = 1111111111111111111111n;
let n2 = 2222222222222222222222n;

console.log(n1 + n2); // 3333333333333333333333n
```

✔️ Exact and accurate result.

---

### ❌ Using Number (Unsafe Result)

```js
let p1 = 1111111111111111111111;
let p2 = 2222222222222222222222;

console.log(p1 + p2); // 3.333333333333333e+21
```

❌ Precision is lost and result is unreliable.

---

## 7️⃣ BigInt vs Number (Comparison)

| Feature                  | Number  | BigInt    |
| ------------------------ | ------- | --------- |
| Max safe integer         | Limited | Unlimited |
| Decimal support          | ✅ Yes  | ❌ No     |
| Precision for large ints | ❌ Lost | ✅ Exact  |
| `n` suffix required      | ❌ No   | ✅ Yes    |
| Mixing allowed           | ✅ Yes  | ❌ No     |

---

## 8️⃣ When Should You Use BigInt?

✅ Use BigInt when:

- Working with **very large integers**
- Financial systems (IDs, counters)
- Cryptography
- Database‑generated large IDs

❌ Do NOT use BigInt when:

- Decimal values are required
- Numbers are small and performance is critical

---

## 🧠 Memory Hook

> **Large integer + accuracy needed → BigInt**  
> **Decimal or normal range → Number**

---

## 🎯 Interview One‑Liner

> **BigInt is a JavaScript data type used to represent integers larger than `Number.MAX_SAFE_INTEGER` and requires an `n` suffix.**
