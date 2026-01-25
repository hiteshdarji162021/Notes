# What covered in notes

- switch case
- if–else vs switch case
- BigInt

## Why Are We Learning switch case, diff between if-else and switch case, Bigint?

- switch case - To handle multiple fixed conditions in a clean and readable way.
- diff between switch case and ifelse - ifelse is best for complex conditions, while switch case is best for matching one value against many options.
- BigInt - To safely work with very large numbers that exceed JavaScript’s normal number limit.

## 1. 🔹 Common Use Cases for `switch case`

`switch case` is best when we compare **one variable against multiple fixed values**.

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
