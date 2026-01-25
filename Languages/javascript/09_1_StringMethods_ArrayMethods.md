# What covered in notes

- String Methods
- Array Methods

## Why we learn Array methods?

- String methods - it  help us clean, search, compare, and transform text data used in UI validations, logs, and test assertions.
- Array Methods - To store and manage collections of test data efficiently for iteration and reuse in automation.

## 1.  String Methods (All Immutable)

### `split()-Convert String to Array`

```js
let s = "Carrot, Broccoli, Spinach";
console.log(s.split(", "));
```

**Output**

```
[ 'Carrot', 'Broccoli', 'Spinach' ]
```

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

➡ Original string unchanged → **Immutable**



---


### `toUpperCase()` – Uppercase

```js
let v = "qa";
console.log(v.toUpperCase());
console.log(v);
```

**Output**

```
QA
qa
```

➡ **Immutable**

---

### `toLowerCase()` – Lowercase

```js
let v = "QA";
console.log(v.toLowerCase());
console.log(v);
```

**Output**

```
qa
QA
```

➡ **Immutable**

---

### `trim()` – Remove spaces

```js
let t = "  hi  ";
console.log(t.trim());
console.log(t);
```

**Output**

```
hi
  hi
```

➡ **Immutable**

---

### `includes()` – Check substring exists

```js
let text = "hello world";
console.log(text.includes("world"));
console.log(text);
```

**Output**

```
true
hello world
```

➡ **Immutable**

---

### `indexOf()` – First index

```js
let msg = "javascript";
console.log(msg.indexOf("a"));
console.log(msg);
```

**Output**

```
1
javascript
```

➡ **Immutable**

---

### `lastIndexOf()` – Last index

```js
let s = "banana";
console.log(s.lastIndexOf("a"));
console.log(s);
```

**Output**

```
5
banana
```

➡ **Immutable**

---

### `startsWith()` – Prefix check

```js
let url = "https://site.com";
console.log(url.startsWith("https"));
console.log(url);
```

**Output**

```
true
https://site.com
```

➡ **Immutable**

---

### `endsWith()` – Suffix check

```js
let file = "report.pdf";
console.log(file.endsWith(".pdf"));
console.log(file);
```

**Output**

```
true
report.pdf
```

➡ **Immutable**

---

### `padStart()` – Pad at beginning

```js
let id = "7";
console.log(id.padStart(3, "0"));
console.log(id);
```

**Output**

```
007
7
```

➡ **Immutable**

---

### `padEnd()` – Pad at end

```js
let id = "7";
console.log(id.padEnd(3, "0"));
console.log(id);
```

**Output**

```
700
7
```

➡ **Immutable**

---

### `repeat()` – Repeat string

```js
let laugh = "ha";
console.log(laugh.repeat(3));
console.log(laugh);
```

**Output**

```
hahaha
ha
```

➡ **Immutable**

---

## 🔹 IMPORTANT: Add This to Array Methods Section

> ⚠️ **String methods DO NOT modify original data**  
> ✅ They are always **IMMUTABLE**, unlike array methods

---

## 📊 FINAL SUMMARY TABLE – String & Array Methods

### 🔹 String Methods (100% Immutable)

| Method      | Mutable / Immutable |
| ----------- | ------------------- |
| split       | Immutable           |
| includes    | Immutable           |
| toUpperCase | Immutable           |
| toLowerCase | Immutable           |
| trim        | Immutable           |
| indexOf     | Immutable           |
| lastIndexOf | Immutable           |
| startsWith  | Immutable           |
| endsWith    | Immutable           |
| padStart    | Immutable           |
| padEnd      | Immutable           |
| repeat      | Immutable           |

---


## 2. Array Methods

### Example: `push() - add at end`

```js
let nums1 = [1, 2, 3];
nums1.push(4);
console.log(nums1);
```

**Output**

```
[ 1, 2, 3, 4 ]
```

➡ Original array is changed

---


### `unshift()- add to the beginning`

```js
let n2 = [1, 2, 3];
n2.unshift(0);
console.log(n2);
```

**Output**

```
[ 0, 1, 2, 3 ]
```

---

### `pop() -remove from the end`

```js
let n3 = [1, 2, 3];
let r = n3.pop();
console.log(r);
console.log(n3);
```

**Output**

```
3
[ 1, 2 ]
```

---

### `shift()-remove from the beginning`

```js
let n4 = [1, 2, 3];
let r1 = n4.shift();
console.log(r1);
console.log(n4);
```

**Output**

```
1
[ 2, 3 ]
```

---

### Update Value

```js
let n5 = [1, 2, 3];
n5[2] = 4;
console.log(n5);
```

**Output**

```
[ 1, 2, 4 ]
```

---

### `join()-convert Array to string`

```js
let veggies = ["Carrot", "Broccoli", "Spinach"];
console.log(veggies.join(" "));
```

**Output**

```
Carrot Broccoli Spinach
```

---



### Copy & Merge Arrays (All Ways)

#### 1️⃣ Copy Array using Spread Operator

```js
let originalArray = [1, 2, 3, 4, 5];
let spreadCopiedArray = [...originalArray];
console.log(`Spread copied array: ${spreadCopiedArray}`);
```

**Output**

```
Spread copied array: 1,2,3,4,5
```

**Explanation**

- Creates a new array
- Original array is not modified
- Most preferred modern approach

---

#### 2️⃣ Merge Arrays using Spread Operator

```js
let originalArray1 = [1, 2, 3, 4, 5];
let originalArray2 = [6, 7, 8];
let concatarray1 = [...originalArray1, ...originalArray2];
console.log(concatarray1);
```

**Output**

```
[ 1, 2, 3, 4, 5, 6, 7, 8 ]
```

**Explanation**

- Combines multiple arrays
- Clean and readable
- Commonly used in real programs

---

#### 3️⃣ Merge Arrays using `concat()`

```js
let concatCopiedArray = originalArray1.concat(originalArray2);
console.log(`Concat copied array: ${concatCopiedArray}`);
```

**Output**

```
Concat copied array: 1,2,3,4,5,6,7,8
```

**Explanation**

- Old but valid approach
- Does not modify original arrays
- Slightly less readable than spread

---

### index of-  Finding 1st, 2nd, 3rd Occurrence

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

### ⚠️ Dangerous Example (Mutation Bug)

```js
let original = [1, 2, 3];
let ref = original;
ref.push(4);
console.log(original);
```

**Output**

```
[ 1, 2, 3, 4 ]
```

➡ Both variables point to **same memory reference**

---


### 🧠 Architect Rule (Must Remember)

| Situation                 | Use                 |
| ------------------------- | ------------------- |
| Shared data               | Immutable methods   |
| Temporary local data      | Mutable methods     |
| Team / large codebase     | Immutable preferred |
| Performance-critical code | Mutable (with care) |

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
✔ `splice()` is mutable changes original array
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
