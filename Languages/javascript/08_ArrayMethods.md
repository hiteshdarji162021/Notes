# JavaScript – String & Array Methods (With Code & Output)

> **Goal**: Understand how common **string and array methods** work using real examples.
>
> Format used everywhere: **Code → Output → Explanation**

---

## 1️⃣ `split()` – Convert String to Array

### Example 1: Split by underscore `_`

```js
let language = "java_python_javascript_typescript_c#";
let splitlanguage = language.split("_");

console.log(splitlanguage[1]);
console.log(splitlanguage);
```

**Output**

```
python
[ 'java', 'python', 'javascript', 'typescript', 'c#' ]
```

**Explanation**

- `split("_")` breaks string wherever `_` is found
- Result is an array

---

### Example 2: Split by custom pattern

```js
let test = "aASeleniumaAaAPlaywrightaACypress";
let sp = test.split("aA");

console.log(sp[0]);
console.log(sp);
```

**Output**

```

[ '', 'Selenium', '', 'Playwright', 'Cypress' ]
```

**Explanation**

- String starts with `aA`, so first element is empty string

---

## 2️⃣ `indexOf()` – Find index from START

```js
let number = [1, 2, 3, 4, 5];
console.log(number.indexOf(2));

let msg = ["hi", "this", "is", "javascript", "code"];
console.log(msg.indexOf("is"));

if (msg.indexOf("javascript") === 3) {
  console.log("pass");
} else {
  console.log("fail");
}
```

**Output**

```
1
2
pass
```

**Explanation**

- `indexOf()` always returns the **first occurrence**
- Returns `-1` if value not found

---

## 3️⃣ `lastIndexOf()` – Find index from END

```js
let msg2 = ["hi", "is", "this", "javascript", "this", "code", "this", "gabbar"];
console.log(msg2.lastIndexOf("this"));
```

**Output**

```
6
```

---

## 4️⃣ `includes()` – Check value exists or not

```js
let msg1 = ["hi", "this", "is", "javascript", "code"];

console.log(msg1.includes("hitesh"));
console.log(msg1.includes("is"));
```

**Output**

```
false
true
```

---

## 5️⃣ Finding 1st, 2nd, 3rd Occurrence

```js
let message = [
  "hi",
  "is",
  "this",
  "javascript",
  "this",
  "code",
  "this",
  "gabbar",
];

let first = message.indexOf("this");
let second = message.indexOf("this", first + 1);

console.log(first);
console.log(second);
```

**Output**

```
2
4
```

---

### Generic Method: Find Nth Occurrence

```js
function findNthIndex(arr, value, n) {
  let index = -1;
  while (n > 0) {
    index = arr.indexOf(value, index + 1);
    if (index === -1) return -1;
    n--;
  }
  return index;
}

let message2 = [
  "hi",
  "is",
  "this",
  "javascript",
  "this",
  "code",
  "this",
  "gabbar",
];

console.log(findNthIndex(message2, "this", 1));
console.log(findNthIndex(message2, "this", 2));
console.log(findNthIndex(message2, "this", 3));
console.log(findNthIndex(message2, "this", 4));
```

**Output**

```
2
4
6
-1
```

---

## 6️⃣ `slice()` – Extract portion (Immutable)

```js
let number1 = [1, 2, 3, 4, 5, 6];
let n1 = number1.slice(2, 5);
console.log(n1);
console.log(number1);
```

**Output**

```
[ 3, 4, 5 ]
[ 1, 2, 3, 4, 5, 6 ]
```

---

### Get last 3 elements

```js
let name2 = [
  "Hitesh",
  "Ronak",
  "Dhruvesh",
  "sunil",
  "nisarg",
  "samir",
  "krunal",
  "ankur",
];
console.log(name2.slice(-3));
```

**Output**

```
[ 'samir', 'krunal', 'ankur' ]
```

---

## 7️⃣ `splice()` – Add / Remove / Replace (Mutable)

```js
let cart3 = ["apple", "banana", "orange", "grape", "kiwi"];
cart3.splice(3, 0, "mango");
console.log(cart3);
```

**Output**

```
[ 'apple', 'banana', 'orange', 'mango', 'grape', 'kiwi' ]
```

---

### Replace elements

```js
let days = ["monday", "tuesday", "wednesday", "thrusday", "friday"];
days.splice(2, 1, "partyday");
console.log(days);
```

**Output**

```
[ 'monday', 'tuesday', 'partyday', 'thrusday', 'friday' ]
```

---

## 8️⃣ String Utility Methods

### `startsWith()` / `endsWith()`

```js
let language1 = "java_python_javascript_typescript_c#";
console.log(language1.startsWith("java"));
console.log(language1.endsWith("c#"));
```

**Output**

```
true
true
```

---

### `padStart()` / `padEnd()`

```js
let id = "71";
console.log(id.padStart(5, "0"));

let id1 = "71";
console.log(id1.padEnd(5, "0"));
```

**Output**

```
00071
71000
```

---

### `repeat()`

```js
console.log("ha".repeat(3));
```

**Output**

```
hahaha
```

---

### 🔹 `substring()` – Extract part of a string

```js
let text = "JavaScript";
let result = text.substring(0, 4);
console.log(result);
```

**Output**

```
Java
```

**Explanation**

- `substring(start, end)` extracts characters from `start` index to `end - 1`
- End index is **NOT included**
- Does **not modify** the original string

---

### Example: Extract middle part

```js
let text2 = "JavaScript";
console.log(text2.substring(4, 10));
```

**Output**

```
Script
```

---

### Example: When start > end (Important behavior)

```js
let text3 = "JavaScript";
console.log(text3.substring(6, 2));
```

**Output**

```
vaSc
```

**Explanation**

- `substring()` automatically **swaps values** if `start > end`
- This behavior is unique to `substring()`

---

### Example: Negative index handling

```js
let text4 = "JavaScript";
console.log(text4.substring(-4, 4));
```

**Output**

```
Java
```

**Explanation**

- Negative values are treated as `0`
- This can be confusing for beginners

---

## 📊 Difference Between `slice()` and `substring()` (Very Important)

| Feature                | `slice()`             | `substring()`          |
| ---------------------- | --------------------- | ---------------------- |
| Type                   | String & Array method | String method only     |
| Negative index         | ✅ Supported          | ❌ Treated as 0        |
| start > end            | ❌ No swap            | ✅ Automatically swaps |
| End index included     | ❌ No                 | ❌ No                  |
| Mutability             | Immutable             | Immutable              |
| Preferred in modern JS | ✅ Yes                | ⚠️ Less preferred      |
| Common use             | Flexible extraction   | Simple extraction      |

---

### 🧠 Architect Recommendation

> **Use `slice()` for most cases.**
>
> Use `substring()` only when you want **safe handling without negative indexes** or when working with **legacy code**.

---

### One‑Line Interview Answer

> **“Both `slice()` and `substring()` extract parts of a string, but `slice()` supports negative indexes while `substring()` does not and swaps indexes automatically.”**

## ✅ Key Takeaways

✔ `slice()` is immutable
✔ `splice()` changes original array
✔ `indexOf()` finds first occurrence
✔ Use loop or helper function for Nth occurrence
✔ String padding works on **total length**, not count

---

## 📊 Summary Table – String & Array Methods (Very Important)

### 🔹 String Methods

| Method          | What it Does             | Common Use Case          | Mutable / Immutable |
| --------------- | ------------------------ | ------------------------ | ------------------- |
| `split()`       | Converts string to array | CSV parsing, tokenizing  | Immutable           |
| `includes()`    | Checks substring exists  | Search, validation       | Immutable           |
| `indexOf()`     | Finds first index        | Find position            | Immutable           |
| `lastIndexOf()` | Finds last index         | Reverse search           | Immutable           |
| `startsWith()`  | Checks prefix            | URL / file validation    | Immutable           |
| `endsWith()`    | Checks suffix            | File extension check     | Immutable           |
| `padStart()`    | Pads at beginning        | ID / number formatting   | Immutable           |
| `padEnd()`      | Pads at end              | Fixed-width output       | Immutable           |
| `repeat()`      | Repeats string           | Test data, UI patterns   | Immutable           |
| `toUpperCase()` | Converts to upper case   | Normalization            | Immutable           |
| `toLowerCase()` | Converts to lower case   | Case-insensitive compare | Immutable           |
| `trim()`        | Removes spaces           | Form validation          | Immutable           |

---

### 🔹 Array Methods

| Method          | What it Does           | Common Use Case   | Mutable / Immutable |
| --------------- | ---------------------- | ----------------- | ------------------- |
| `push()`        | Add at end             | Append data       | Mutable             |
| `pop()`         | Remove from end        | Stack operations  | Mutable             |
| `unshift()`     | Add at start           | Priority insert   | Mutable             |
| `shift()`       | Remove from start      | Queue processing  | Mutable             |
| `indexOf()`     | First occurrence index | Search element    | Immutable           |
| `lastIndexOf()` | Last occurrence index  | Reverse search    | Immutable           |
| `includes()`    | Check element exists   | Validation        | Immutable           |
| `slice()`       | Extract portion        | Sub-array copy    | Immutable           |
| `splice()`      | Add / remove / replace | In-place update   | Mutable             |
| `concat()`      | Merge arrays           | Combine data      | Immutable           |
| `join()`        | Array → string         | Display / reports | Immutable           |
| `map()`         | Transform each element | Calculations      | Immutable           |
| `filter()`      | Select elements        | Conditions        | Immutable           |
| `reduce()`      | Reduce to single value | Sum, aggregation  | Immutable           |
| Spread `...`    | Copy / merge arrays    | Safe copy         | Immutable           |

---

### 🧠 Architect Rule (Remember This)

> **Strings are always immutable. Arrays can be mutable or immutable depending on the method.**

✔ Prefer **immutable methods** in team & large projects
✔ Use **mutable methods** carefully for performance
