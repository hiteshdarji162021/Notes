# JavaScript – Increment/Decrement, Template Literals, Equality & Conditions

These notes explain **increment/decrement operators, template literals, == vs ===, truthy/falsy values, type coercion, and if–else conditions** with **step-by-step explanations** so students clearly understand _why_ each output happens.

---

## 1️⃣ Increment Operators – Step-by-Step Understanding

### Example 1

```js
let p = 11;
let j = p++ + ++p; // 11 + 13
console.log(p); // 13
console.log(j); // 24
```

**Explanation:**

- `p++` → use value **11**, then increment `p` → `p = 12`
- `++p` → increment first → `p = 13`, then use value **13**
- `j = 11 + 13 = 24`

---

### Example 2 (Complex Expression)

```js
let a = 11;
let b = 22;
let c;

c = a + b + a++ + b++ + ++a + ++b; // 11 + 22 + 11 + 22 + 13 + 24

console.log(a); // 13
console.log(b); // 24
console.log(c); // 103
```

**Explanation (Left to Right):**

1. `a` → 11
2. `b` → 22
3. `a++` → 11 (then a = 12)
4. `b++` → 22 (then b = 23)
5. `++a` → 13
6. `++b` → 24

Sum = **103**

---

### Example 3

```js
let i = 10;
let w = i++ + --i + ++i + i--;

console.log(i); // 10
console.log(w); // 42
```

**Explanation:**

- `i++` → 10 → i = 11
- `--i` → 10
- `++i` → 11
- `i--` → 11 → i = 10

---

### Example 4 (Tricky – Interview Level)

```js
let m1 = 0;
let n1 = 0;
let p1 = --m1 * --n1 * n1-- * m1--;

console.log(m1); // -2
console.log(n1); // -2
console.log(p1); // 1
```

**Key Point:**

- All operations are evaluated **left to right**
- Pre operators change value first
- Post operators change value after usage

---

## 2️⃣ Template Literals (Backticks ``)

```js
let msg = `Hello Hitesh Darji
welcome to Playwright training`;
console.log(msg);
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

---

## 3️⃣ Quotes Comparison

```js
let m1 = "it's my code";
let m2 = 'it"s my code';
let m3 = `it's my code`;
```

👉 Backticks are most flexible

---

## 4️⃣ == vs === (VERY IMPORTANT)

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

## 5️⃣ Truthy & Falsy Values (IMPORTANT TABLE)

### ❌ Falsy Values

| Value             |
| ----------------- |
| false             |
| 0                 |
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

---

## 6️⃣ Boolean Arithmetic & Type Coercion

```js
console.log(true + false); // 1
console.log(true + true); // 2
console.log(false + false); // 0

console.log(1 + true); // 2
console.log("1" + false); // 1false

console.log(1 - true); // 0
console.log("1" - false); // 1

console.log("true" + true); // truetrue
console.log("true" - true); // NaN
```

---

## 7️⃣ if–else Conditions

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

✅ **End of Notes**
