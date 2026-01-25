# What covered in notes

- String Concatenation
- Operators
- ASCII values
- increment/decrement operators

## Why learn String Concatenation, Operators(+ - \* /) , ASCII, Increment / Decrement Operators

- String Concatenation- To create dynamic messages, logs, and readable test assertions.
- Operators - To perform basic calculations correctly in test logic and validations.
- ASCII- To understand and debug character comparison, sorting, and case-sensitive behavior.
- Increment / Decrement Operators- To control counters, loops, and retry logic accurately in automation scripts.

## 1. String Concatenation & Basic Arithmetic

```js
let a = 100;
let b = 200;

console.log(a + b); // 300
console.log(b - a); // 100
console.log(a * b); // 20000
console.log(b / a); // 2
```

---

## String + Number Concatenation

```js
let a = 100;
let b = 200;
let x = "Hello";
let y = "Playwright";

console.log(x + y); // HelloPlaywright
console.log(a + b + x + y); // 300HelloPlaywright
console.log(x + y + a + b); // HelloPlaywright100200
console.log(x + y + (a + b)); // HelloPlaywright300
console.log(a + b + x + y + a + b); // 300HelloPlaywright100200
```

👉 **Rule:** `+` operator concatenates when a string is involved.

---

## String with Text Messages

```js
console.log("The value of a is: " + a); // The value of a is: 100
console.log("The value of b is: " + b); // The value of b is: 200
console.log("The sum of a and b is: " + a + b); // 100200
console.log("The sum of a and b is: " + (a + b)); // 300
```

---

## Boolean with Strings & Numbers

```js
console.log(true + "hello" + false); // truehellofalse
console.log(true + false); // 1
console.log(true + true); // 2
console.log(false + false); // 0
```

👉 `true = 1`, `false = 0`

---

## String Conversion & NaN Cases

```js
console.log("Hitesh" + "Darji"); // HiteshDarji
console.log("Hitesh" + +"Darji"); // HiteshNaN
console.log("Hitesh" - "Darji"); // NaN
console.log("Hitesh" - +"Darji"); // NaN
console.log("Hitesh" * +"Darji"); // NaN
```

👉 `+"string"` tries to convert string to number

---

## Usecase for String concate

```js
let user = "Hitesh";
let status = "Login Success";

let message = "User " + user + " status is " + status;
console.log(message);
```

**Output**

```
User Hitesh status is Login Success
```

## 2. Mathematical Operations

### Addition (`+`)

```js
//for + its try to concant
console.log(1 + 1); // 2
console.log(1 + "1"); // 11
console.log("1" + 1); // 11
console.log("1" + "1"); // 11
```

### Subtraction (`-`)

- apart from + for all other operation - or \* or / its automatically convert string to number and do arathmatic opeartion

```js
console.log(5 - 2); // 3
console.log("5" - 2); // 3
console.log(5 - "2"); // 3
console.log("5" - "2"); // 3
console.log(5 - "Hello"); // NaN
```

### Multiplication (`*`)

```js
console.log(4 * 2); // 8
console.log("4" * 2); // 8
console.log(4 * "2"); // 8
console.log("4" * "2"); // 8
console.log(4 * "hello"); // NaN
```

### Division (`/`)

```js
console.log(8 / 2); // 4
console.log("8" / 2); // 4
console.log(9 / 2); // 4.5
console.log(9 / 0); // Infinity
console.log(0 / 0); // NaN
console.log("8" / "Hello"); // NaN
```

### Modulus (`%`)

```js
console.log(5 % 2); // 1
console.log("5" % 2); // 1
console.log(5 % "2"); // 1
console.log("5" % "Hello"); // NaN
```

---

## Unary Operators

### Unary Plus (`+`)

```js
console.log(+"200" + 5); // 205
console.log(+"200" + +"5"); // 205
```

### Unary Minus (`-`)

```js
console.log(-"200"); // -200
console.log(-"200" + 1); // -199
console.log(-"hello"); // NaN
```

---

## Usecase

- for calculation sum, sub, div, mul and modulo

## 3. ASCII Values in JavaScript

ASCII values represent the **numeric codes** assigned to characters. JavaScript provides built-in methods to **convert characters to ASCII values** and **ASCII values back to characters**.

---

### 📌 ASCII Ranges (Important to Remember)

- `0 – 9` → **48 – 57**
- `A – Z` → **65 – 90**
- `a – z` → **97 – 122**

---

### 🔹 Getting ASCII Value of a Character (`charCodeAt()`)

```js
let a = "A";
console.log(a.charCodeAt(0)); // 65
// if we not set charCodeAt(0) => then by default it take 0 index so  a.charCodeAt() is also fine

console.log(a.charCodeAt(0) + "B".charCodeAt(0)); // 65 + 66 = 131

console.log("AB".charCodeAt(0)); // 65 (A)
console.log("AB".charCodeAt(1)); // 66 (B)
```

👉 `charCodeAt(index)` returns the ASCII value of the **character at the given index**.

---

### 🔹 More Examples

```js
a = "Z";
console.log(a.charCodeAt(0)); // 90

a = "a";
console.log(a.charCodeAt(0)); // 97

a = "z";
console.log(a.charCodeAt(0)); // 122

a = "0";
console.log(a.charCodeAt(0)); // 48

a = "9";
console.log(a.charCodeAt(0)); // 57
```

👉 Only **one character’s ASCII value** is returned at a time.

---

### 🔹 ASCII Value → Character (`String.fromCharCode()`)

If you want to get a **character from an ASCII value**, use `String.fromCharCode()`.

```js
console.log(String.fromCharCode(65)); // A
console.log(String.fromCharCode(90)); // Z
console.log(String.fromCharCode(97)); // a
console.log(String.fromCharCode(122)); // z
console.log(String.fromCharCode(48)); // 0
console.log(String.fromCharCode(57)); // 9

console.log(String.fromCharCode(65, 66, 67, 68, 69)); // ABCDE
```

---

### 🧠 Key Points (For Students & Interviews)

- `charCodeAt()` → Character ➜ ASCII value
- `String.fromCharCode()` → ASCII value ➜ Character
- ASCII works on **individual characters**, not whole strings

---

### ✅ Quick Memory Hook

> **Character → Number = `charCodeAt()`**  
> **Number → Character = `fromCharCode()`**

---

## Usecase of ASCII

- To understand and debug character comparison, sorting, and case-sensitive behavior.

```JS
let uiText = "Login";
let expected = "login";

console.log(uiText === expected);
```

**Output**

```
false
```

## 4. Increment & Decrement Operators

### Post Increment (`a++`)

```js
let a = 1;
let b = a++;
console.log(a); // 2
console.log(b); // 1
```

### Pre Increment (`++a`)

```js
let c = 1;
let d = ++c;
console.log(c); // 2
console.log(d); // 2
```

### Post Decrement (`a--`)

```js
let e = 10;
let f = e--;
console.log(e); // 9
console.log(f); // 10
```

### Pre Decrement (`--a`)

```js
let g = 10;
let h = --g;
console.log(g); // 9
console.log(h); // 9
```

---

## 10 Advance increment and decrement operation

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

## 11. Important Rules (Must Remember)

```js
let total = 100;
console.log(total++); // 100
console.log(total); // 101

let num = 200;
console.log(++num); // 201
```

❌ Invalid:

```js
'1'++;
'1'--;
```

## Usecase of increment and decrement operator

```js
let retry = 0;

while (retry < 3) {
  console.log("Retry attempt:", retry);
  retry++;
}
```

**Output**

```
Retry attempt: 0
Retry attempt: 1
Retry attempt: 2
```

👉 Increment / decrement works **only on variables**, not values

-variable

```js
let a = 10;
a++; //working fine.
```

- values

```js
10++;      // ❌ Error
"abc"++;   // ❌ Error
true++;    // ❌ Error
```

---

## 🧠 Key Takeaways

- `+` with string → concatenation
- `- * / %` → numeric conversion
- `true = 1`, `false = 0`
- `NaN` means invalid number
- Pre vs Post operators change execution order

---
