# JavaScript – Template Literals, Equality, Conditions

# What covered in notes

- Template Literals
- Equality (== and ===)
- Conditions
- Truthy & Falsy Values

## Why we learn Template Literals,Equality, Conditions

- Template Literals- To build clean, readable dynamic strings for logs, errors, and assertions.
- Equality (== and ===)- To avoid false test results by comparing values and types correctly.
- Conditions(ifelse)- To control test flow based on application behavior and validations.
- Truthy & Falsy Values- To prevent unexpected condition failures in automation scripts.

---

## 1. Template Literals (Backticks ``)

```js
let msg = `Hello Hitesh Darji
welcome to Playwright training`;
console.log(msg);
```

**Output**

```
Hello Hitesh Darji
            welcome to Playwright training
```

### Why Template Literals?

- Multi-line strings
- Variable interpolation
- No escape issues

```js
let empname = "Hitesh Darji";
let age = 33;
console.log(`hey ${empname} and your age is ${age}`);
```

**Output**

```
hey Hitesh Darji and your age is 33
```

---

## 3️⃣ Quotes Comparison

```js
let m1 = "it's my code";
let m2 = 'it"s my code';
let m3 = `it's my code`;
```

👉 Backticks are most flexible

---

## 2. == vs === (VERY IMPORTANT)

```js
console.log(true == 1); // true
console.log(true === 1); // false

console.log(10 == "10"); // true
console.log(10 === "10"); // false
```

### Rule

- `==` → checks **value only** (loose comparison)
- `===` → checks **value + type** (strict comparison)

👉 **Always use `===` in real projects**

---

### Special Interview Case

```js
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(typeof null); // object (JS bug)
console.log(typeof undefined); // undefined
```

---

## 3. Truthy & Falsy Values (IMPORTANT TABLE)

### ❌ Falsy Values

| Value             |
| ----------------- |
| false             |
| 0                 |
| -0                |
| 0n (big int)      |
| "" (empty string) |
| null              |
| undefined         |
| NaN               |

### ✅ Truthy Values

| Value        |
| ------------ |
| true         |
| 1, -1, 100   |
| "hello"      |
| " " (space)  |
| []           |
| {}           |
| function(){} |

### ❌ Falsy Values – Execution Check

### JavaScript Code

```js
console.log("---- FALSY VALUES CHECK ----");

if (false) console.log("false → EXECUTED");
else console.log("false → NOT executed");

if (0) console.log("0 → EXECUTED");
else console.log("0 → NOT executed");

if (-0) console.log("-0 → EXECUTED");
else console.log("-0 → NOT executed");

if (0n) console.log("0n → EXECUTED");
else console.log("0n → NOT executed");

if ("") console.log('"" → EXECUTED');
else console.log('"" → NOT executed');

if (null) console.log("null → EXECUTED");
else console.log("null → NOT executed");

if (undefined) console.log("undefined → EXECUTED");
else console.log("undefined → NOT executed");

if (NaN) console.log("NaN → EXECUTED");
else console.log("NaN → NOT executed");
```

### Output

```txt
---- FALSY VALUES CHECK ----
false → NOT executed
0 → NOT executed
-0 → NOT executed
0n → NOT executed
"" → NOT executed
null → NOT executed
undefined → NOT executed
NaN → NOT executed
```

---

### 🧠 Explanation

All the above values are **falsy** in JavaScript. When used inside `if(condition)`, the condition evaluates to **false**, so the `if` block is skipped and the `else` block runs.

---

### ✅ Truthy Values – Execution Check

### JavaScript Code

```js
console.log("---- TRUTHY VALUES CHECK ----");

if (true) console.log("true → EXECUTED");

if (1) console.log("1 → EXECUTED");
if (-1) console.log("-1 → EXECUTED");
if (100) console.log("100 → EXECUTED");

if ("hello") console.log('"hello" → EXECUTED');
if (" ") console.log('" " (space) → EXECUTED');

if ([]) console.log("[] → EXECUTED");
if ({}) console.log("{} → EXECUTED");

if (function () {}) console.log("function(){} → EXECUTED");
```

### Output

```txt
---- TRUTHY VALUES CHECK ----
true → EXECUTED
1 → EXECUTED
-1 → EXECUTED
100 → EXECUTED
"hello" → EXECUTED
" " (space) → EXECUTED
[] → EXECUTED
{} → EXECUTED
function(){} → EXECUTED
```

---

### 📌 Final Rule (Very Important)

> **Only 8 values are falsy in JavaScript:**  
> `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

👉 **Everything else is truthy** and will execute inside an `if` condition.

---

### 🎯 Interview / Exam One-Liner

> In JavaScript, `if` statements execute only for truthy values. Falsy values always skip the `if` block.

---

## 4. if–else Conditions

```js
let a = 30;
let b = 20;

if (a > b) {
  console.log("pass");
} else if (a < b) {
  console.log("fail");
} else {
  console.log("nothing");
}
```

---

### Dead / Unreachable Code

```js
if (false) {
  console.log("bye!!");
} else {
  console.log("hello!!");
}
```

👉 `if(false)` block never executes

---

### Real-Time Example

```js
let isElementDisplayed = false;

if (isElementDisplayed) {
  console.log("click on the element");
} else {
  console.log("wait for the element");
}
```

---

## 🧠 Final Key Takeaways

- Expressions are evaluated **left to right**
- Pre vs Post operators change timing
- Use `===` always
- Understand truthy/falsy clearly
- JavaScript does **type coercion** automatically

---
