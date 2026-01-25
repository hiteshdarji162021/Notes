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
let age = 30;
console.log("number type of", typeof age); //number
let names = "Hitesh";
console.log("string type of", typeof names); //string
let isActive = true;
console.log("boolean type of", typeof isActive); //boolean
let x;
console.log("undined type of", typeof x); //undefined
let data = null;
console.log("null type of", typeof data); //object
let id = Symbol("id"); // Symbol
console.log("symbol type of", typeof id); //symbol
let bigNum = 123456789n; // BigInt
console.log("big integer type of", typeof bigNum); //bigint
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
let user = { name: "Hitesh", age: 30 };
console.log("object type of ", typeof user); //Object
let numbers = [1, 2, 3, 4]; // Array
console.log("array type is", typeof numbers); //Object
function greet() {
  console.log("Hello");
}
console.log("function type of ", typeof greet); //function
let today = new Date(); //Object
console.log("date type of ", typeof today); //Object
let userMap = new Map(); // Map
console.log("map type of", typeof userMap); //Object
let uniqueSet = new Set([1, 2, 3]);
console.log("set type of ", typeof uniqueSet); //Object
```

## 6. Size of Primitive Data Types (Approximate)

> ⚠️ JavaScript does NOT define fixed sizes.  
> Sizes depend on the JavaScript engine (Chrome/Edge = V8, Firefox = SpiderMonkey). that way size is not important in javascript.
> Values below are **approximate and interview-safe**.

| Primitive Data Type | Chrome (V8)          | Firefox (SpiderMonkey) | Edge (V8)            | Notes                     |
| ------------------- | -------------------- | ---------------------- | -------------------- | ------------------------- |
| Number              | ~8 bytes             | ~8 bytes               | ~8 bytes             | IEEE-754 double precision |
| Boolean             | ~4 bytes             | ~4 bytes               | ~4 bytes             | `true` / `false`          |
| String              | ~2 bytes / character | ~2 bytes / character   | ~2 bytes / character | UTF-16 encoding           |

---
