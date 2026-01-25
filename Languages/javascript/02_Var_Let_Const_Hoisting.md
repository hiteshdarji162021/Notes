# What covered in notes
# `var` 
# `let` 
# `const`

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
  var a = 20;
  console.log(a); // 20

  if (true) {
    var a = 30;
    console.log(a); // 30
  }

  console.log(a); // 30  - its print 30 due to functional scope
}

test();
console.log(a); // 10
```

**Output:**

```
20
30
30
10
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
  let a = 20; 
  console.log(a); 

  if (true) {
    let a = 30; 
    console.log(a); 
  }

  console.log(a); //20
}

test();
console.log(a); 
```
**Output:**

```
20
30
20
10
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
  const a = 20; 
  console.log(a); 

  if (true) {
    const a = 30; 
    console.log(a); 
  }

  console.log(a); // 20 -its because of block scope
}

test();
console.log(a); 

```

**Output:**

```
20
30
20
10
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
