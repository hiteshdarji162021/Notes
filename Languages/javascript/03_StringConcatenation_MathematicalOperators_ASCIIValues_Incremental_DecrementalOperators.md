# JavaScript – String Concatenation & Operators

These notes explain **string concatenation, mathematical operations, type coercion, ASCII values, and increment/decrement operators** in JavaScript with **clear examples and comments**.

---

## 1️⃣ String Concatenation & Basic Arithmetic

```js
let a = 100;
let b = 200;

console.log(a + b); // 300
console.log(b - a); // 100
console.log(a * b); // 20000
console.log(b / a); // 2
```

---

## 2️⃣ String + Number Concatenation

```js
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

## 3️⃣ String with Text Messages

```js
console.log("The value of a is: " + a); // The value of a is: 100
console.log("The value of b is: " + b); // The value of b is: 200
console.log("The sum of a and b is: " + a + b); // 100200
console.log("The sum of a and b is: " + (a + b)); // 300
```

---

## 4️⃣ Boolean with Strings & Numbers

```js
console.log(true + "hello" + false); // truehellofalse
console.log(true + false); // 1
console.log(true + true); // 2
console.log(false + false); // 0
```

👉 `true = 1`, `false = 0`

---

## 5️⃣ String Conversion & NaN Cases

```js
console.log("Hitesh" + "Darji"); // HiteshDarji
console.log("Hitesh" + +"Darji"); // HiteshNaN
console.log("Hitesh" - "Darji"); // NaN
console.log("Hitesh" - +"Darji"); // NaN
console.log("Hitesh" * +"Darji"); // NaN
```

👉 `+"string"` tries to convert string to number

---

## 6️⃣ Mathematical Operations

### Addition (`+`)

```js
console.log(1 + 1); // 2
console.log(1 + "1"); // 11
console.log("1" + 1); // 11
console.log("1" + "1"); // 11
```

### Subtraction (`-`)

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

## 7️⃣ Unary Operators

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

## 8️⃣ ASCII Values in JavaScript

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

## 9️⃣ Increment & Decrement Operators

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

## 10️⃣ Important Rules (Must Remember)

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

👉 Increment / decrement works **only on variables**, not literals

---

## 🧠 Key Takeaways

- `+` with string → concatenation
- `- * / %` → numeric conversion
- `true = 1`, `false = 0`
- `NaN` means invalid number
- Pre vs Post operators change execution order

---

✅ **End of Notes**
