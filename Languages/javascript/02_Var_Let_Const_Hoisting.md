# JavaScript: `var` vs `let` vs `const`

---

## 1️⃣ Why Are We Learning `var`, `let`, and `const`?

In JavaScript, we store data using **variables**. Over time, JavaScript evolved and introduced better ways to declare variables.

We learn `var`, `let`, and `const` to:

- Store values (numbers, text, objects)
- Control how and where variables can be used
- Avoid bugs caused by unexpected value changes
- Write clean, safe, and modern JavaScript code

Understanding these three is **mandatory** for:

- Web development
- Automation (Playwright, Cypress)
- Backend (Node.js)
- Interviews

---

## 1 Function Example Using `var`

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

Characteristics:

- Can be re-declared
- Can be re-assigned
- Function-scoped

## Hoisting Example Using `var`

```js
console.log(a); // undefined
var a = 10;
console.log(a); // 10
```

**Output:**

```
undefined
10
```

Explanation:

- `var a` is hoisted to the top
- Variable is initialized as `undefined`
- No error occurs

---

## 2 Function Example Using `let`,

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

Characteristics:

- Cannot be re-declared in the same scope
- Can be re-assigned
- Block-scoped

---

## Hoisting Example Using `let`

```js
console.log(a); // ❌ ReferenceError
let a = 10;
```

**Output:**

```
ReferenceError: Cannot access 'a' before initialization
```

Explanation:

- `let` is hoisted
- But kept in **Temporal Dead Zone (TDZ)**
- Access before declaration causes error

---

## 3. Function Example Using `const`

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

Characteristics:

- Cannot be re-declared
- Cannot be re-assigned
- Block-scoped

---

## Hoisting Example Using `const`

```js
console.log(a); // ❌ ReferenceError
const a = 10;
```

**Output:**

```
ReferenceError: Cannot access 'a' before initialization
```

Explanation:

- `const` is also hoisted
- Stays in **TDZ** until initialized
- Must be initialized at declaration

---

## 4 Comparison Table: `var` vs `let` vs `const`

| Feature         | `var`                            | `let`                 | `const`           |
| --------------- | -------------------------------- | --------------------- | ----------------- |
| Scope           | Function scope                   | Block scope           | Block scope       |
| Hoisting        | Yes (initialized as `undefined`) | Yes (error)           | Yes (error)       |
| Re-declaration  | ✅ Yes                           | ❌ No                 | ❌ No             |
| Re-assignment   | ✅ Yes                           | ✅ Yes                | ❌ No             |
| Recommended use | ❌ Avoid                         | ✅ When value changes | ✅ Default choice |

---

## 3️⃣ Real-Time Use Cases

### ✅ Using `var` (Legacy – avoid in new code)

```js
for (var i = 0; i < 3; i++) {}
console.log(i); // 3
```

❌ Causes bugs due to scope issues

---

### ✅ Using `let` (Values that change)

```js
let retryCount = 0;
retryCount++;
```

✔ Best for counters, loops, dynamic values

---

### ✅ Using `const` (Fixed references)

```js
const baseUrl = "https://api.example.com";
const user = { name: "Raj" };
user.name = "Ravi"; // Allowed
```

✔ Best for configs, locators, functions

---

## 4️⃣ Best Practices (Very Important)

✅ Always use `const` by default

✅ Use `let` only when value needs to change

❌ Avoid `var` in modern JavaScript

✅ One variable = one responsibility

✅ Keep variable scope as small as possible
