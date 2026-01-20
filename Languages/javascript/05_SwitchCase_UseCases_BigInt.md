# JavaScript – if–else vs switch case (Use Cases & Best Practices)

This document explains **when to use `if–else` and when to use `switch case`**, with **real-world use cases**, **code examples**, and **practical thoughts** for students and working professionals.

---

## 1. 🔹 Common Use Cases for `switch case`

`switch case` is best when we compare **one variable against multiple fixed values**.

### Typical Use Cases

1. **Cross-browser logic**  
   `chrome`, `firefox`, `safari`, `edge`

2. **Cross OS / Platforms**  
   `windows`, `linux`, `mac`

3. **Cross system**  
   `local`, `remote`

4. **Cross environment**  
   `dev`, `qa`, `stage`, `uat`, `prod`

5. **RBAC (Role-Based Access Control)**  
   `admin`, `customer`, `seller`, `partner`, `vendor`, `distributor`, `guest`

6. **Locator strategy (UI automation)**  
   `id`, `name`, `role`, `text`, `xpath`, `css`

7. **Testing type**  
   `smoke`, `sanity`, `regression`, `ui`, `api`, `mobile`

8. **Uber / booking type**  
   `mini`, `sedan`, `suv`, `bike`

9. **Payment methods**  
   `upi`, `paypal`, `credit card`, `debit card`, `wire`, `stripe`, `cash`

10. **Loan type**  
    `home`, `car`, `education`

👉 **Rule:** Fixed values = `switch case`

---

## 🔴 Bad Practice: Using `if–else` for Fixed Values

```js
let browser = "opera";

if (browser === "chrome") {
  console.log("You are using Chrome");
} else if (browser === "firefox") {
  console.log("You are using Firefox");
} else if (browser === "safari") {
  console.log("You are using Safari");
} else {
  console.log("Unknown Browser");
}
```

### Why this is not ideal

- Each condition is checked **one by one**
- Code becomes lengthy
- Less readable when values increase

---

## ✅ Best Practice: Use `switch case` for Fixed Values

```js
let browser1 = "safari";

switch (browser1.toLowerCase()) {
  case "chrome":
    console.log("You are using Chrome");
    break;
  case "firefox":
    console.log("You are using Firefox");
    break;
  case "safari":
    console.log("You are using Safari");
    break;
  default:
    console.log("Unknown Browser");
}
```

### Why `switch case` is better here

- Clean and readable
- Easy to extend
- Clear intent
- Best for fixed options

---

## 🎓 Scenario: Grading System (Marks Based)

### Requirement

| Marks Range | Grade |
| ----------- | ----- |
| 90–100      | A     |
| 80–89       | B     |
| 70–79       | C     |
| 60–69       | D     |
| < 60        | F     |

---

## 2. ✅ Recommended Approach: `if–else` (Ranges)

```js
let marks = 85;
let grade;

if (marks >= 90 && marks <= 100) {
  grade = "A";
} else if (marks >= 80 && marks < 90) {
  grade = "B";
} else if (marks >= 70 && marks < 80) {
  grade = "C";
} else if (marks >= 60 && marks < 70) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Grade:", grade);
```

### Why `if–else` is best here

- Handles **ranges naturally**
- Easy to understand
- Most used in real-world applications

---

## ⚠️ Not Recommended: `switch case` for Ranges

JavaScript `switch` does **not support ranges directly**.
To make it work, we use a trick: `switch(true)`.

```js
let marks1 = 85;
let grade1;

switch (true) {
  case marks1 >= 90 && marks1 <= 100:
    grade1 = "A";
    break;
  case marks1 >= 80 && marks1 < 90:
    grade1 = "B";
    break;
  case marks1 >= 70 && marks1 < 80:
    grade1 = "C";
    break;
  case marks1 >= 60 && marks1 < 70:
    grade1 = "D";
    break;
  default:
    grade1 = "F";
}

console.log("Grade:", grade1);
```

### Why this is not recommended

- Less readable
- Confusing for beginners
- Rarely used in production code

---

## 🆚 Quick Comparison Table

| Scenario         | if–else      | switch case              |
| ---------------- | ------------ | ------------------------ |
| Fixed values     | ❌ Not ideal | ✅ Best                  |
| Range conditions | ✅ Best      | ❌ Not ideal             |
| Readability      | High         | High (fixed values only) |
| Real-world usage | Very common  | Common (specific cases)  |

---

## 🧠 My Thoughts (Important)

- **Do not blindly use `if–else` everywhere**
- **Do not misuse `switch case` for ranges**
- Choose based on **problem type**, not preference

### Golden Rule

> **Ranges → if–else**  
> **Exact values → switch case**

---

## 🎯 Interview-Ready Answer

> Use `if–else` when conditions involve ranges or complex logic. Use `switch case` when comparing a single variable against multiple fixed values.

---

## 3. Why Do We Need BigInt?

JavaScript `Number` type has **limitations** when dealing with very large integers.

### Safe Integer Range in JavaScript

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
```

👉 Any integer **beyond this range cannot be trusted** using `Number`.

---

## 2️⃣ Other Important Number Limits

```js
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
```

- `MAX_VALUE` → Largest possible number JavaScript can represent
- `MIN_VALUE` → Smallest positive number JavaScript can represent

⚠️ These are **not safe integers**, they are floating-point limits.

---

## 3️⃣ What is BigInt?

> **BigInt is a data type that allows us to work with integers larger than `Number.MAX_SAFE_INTEGER`.**

### How to Create a BigInt

```js
let val = 5n; // `n` at the end makes it BigInt
console.log(val);
```

👉 Always add **`n` at the end** of the number.

---

## 4️⃣ Important Rules of BigInt

### ✅ Rule 1: Only Integers Allowed

```js
10n      // ✅ valid
10.5n    // ❌ invalid (BigInt does not support decimals)
```

---

### ✅ Rule 2: BigInt Operations Must Use BigInt Only

```js
console.log(10n + 10n); // ✅ Works
```

```js
console.log(10 + 10n); // ❌ TypeError
```

👉 **You cannot mix `Number` and `BigInt` in arithmetic operations**.

---

## 5️⃣ Working with Very Large Numbers

### Using BigInt (Correct Result)

```js
let n1 = 1111111111111111111111n;
let n2 = 2222222222222222222222n;

console.log(n1 + n2); // 3333333333333333333333n
```

✔️ Accurate result

---

### Using Number (Incorrect / Unsafe Result)

```js
let p1 = 1111111111111111111111;
let p2 = 2222222222222222222222;

console.log(p1 + p2); // 3.333333333333333e+21
```

❌ Result is shown in scientific notation and **precision is lost**.

---

## 6️⃣ BigInt vs Number (Comparison Table)

| Feature             | Number                 | BigInt    |
| ------------------- | ---------------------- | --------- |
| Max safe integer    | Limited                | Unlimited |
| Decimal support     | ✅ Yes                 | ❌ No     |
| Precision           | ❌ Lost for large ints | ✅ Exact  |
| `n` suffix required | ❌ No                  | ✅ Yes    |
| Mixing allowed      | ✅ Yes                 | ❌ No     |

---

## 7️⃣ When Should You Use BigInt?

✅ Use BigInt when:

- Working with **very large integers**
- Financial systems (IDs, counters)
- Cryptography
- Database-generated large IDs

❌ Do NOT use BigInt when:

- You need decimal values
- Performance is critical and numbers are small

---

## 🧠 Memory Hook (For Students)

> **Large integer + accuracy needed → BigInt**  
> **Decimal or normal range → Number**

---

## 🎯 Interview One-Liner

> BigInt is a JavaScript data type used to represent integers larger than `Number.MAX_SAFE_INTEGER` and requires `n` at the end of the value.

---

✅ **End of Notes**
