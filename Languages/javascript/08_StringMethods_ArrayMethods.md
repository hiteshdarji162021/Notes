# What covered in notes

- String methods
- Array Methods

## Why we learn Array methods?

- To store and manage collections of test data efficiently for iteration and reuse in automation.

## Array Methods

### Example: `push()` (Mutable)

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

## 4️⃣ Array Methods

### `push()-add value at end`

```js
let n1 = [1, 2, 3];
n1.push(4);
console.log(n1);
```

**Output**

```
[ 1, 2, 3, 4 ]
```

---

### `unshift() add to the beginning`

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

### `split()-convert String to Array`

```js
let s = "Carrot, Broccoli, Spinach";
console.log(s.split(", "));
```

**Output**

```
[ 'Carrot', 'Broccoli', 'Spinach' ]
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

## 5️⃣ Loops (When to Use Which Loop)

This section explains **WHY a loop is used**, with **different examples, code, and output** for each loop type.

---

### 1️⃣ Index-based `for` Loop (When INDEX matters)

**Use Case**

- When you need **index number**
- When you want **skip / break / reverse**
- When accessing **next or previous element**

#### Example: Print item with index

```js
let users = ["Admin", "Manager", "Tester"];

for (let i = 0; i < users.length; i++) {
  console.log(i + " => " + users[i]);
}
```

**Output**

```
0 => Admin
1 => Manager
2 => Tester
```

#### Example: Reverse order

```js
for (let i = users.length - 1; i >= 0; i--) {
  console.log(users[i]);
}
```

**Output**

```
Tester
Manager
Admin
```

---

### 2️⃣ `for..of` Loop (When VALUE matters)

**Use Case**

- When you only care about **values**
- Clean and readable code
- Best for **arrays and collections**

#### Example: Process values

```js
let prices = [100, 200, 300];

for (let price of prices) {
  console.log(price * 2);
}
```

**Output**

```
200
400
600
```

#### Example: Stop when condition met

```js
for (let price of prices) {
  if (price === 200) break;
  console.log(price);
}
```

**Output**

```
100
```

---

### 3️⃣ `forEach()` Loop (When APPLY action on all items)

**Use Case**

- When you want to **apply same logic to every element**
- No breaking required
- Best for logging, formatting

#### Example: Print formatted output

```js
let files = ["a.txt", "b.txt", "c.txt"];

files.forEach((file, index) => {
  console.log(index + 1 + ": " + file);
});
```

**Output**

```
1: a.txt
2: b.txt
3: c.txt
```

#### ❌ Limitation Example (Cannot break)

```js
files.forEach((file) => {
  if (file === "b.txt") return;
  console.log(file);
});
```

**Output**

```
a.txt
c.txt
```

---

### `for..in`

```js
for (let i in f) {
  console.log(i, f[i]);
}
```

**Output**

```
0 Apple
1 Banana
2 Orange
```

### 🔍 Architect Summary (Very Important)

| Loop Type | When to Use           | Key Advantage      | Limitation                    |
| --------- | --------------------- | ------------------ | ----------------------------- |
| `for`     | Index-based logic     | Full control       | More code                     |
| `for..of` | Value-based iteration | Clean & readable   | No index by default           |
| `forEach` | Apply action to all   | Short syntax       | Cannot break                  |
| `for..in` | Inspect index / keys  | Gives index easily | ❌ Not recommended for arrays |

---



#### Example: `pop()` (Mutable)

```js
let nums2 = [1, 2, 3];
nums2.pop();
console.log(nums2);
```

**Output**

```
[ 1, 2 ]
```

---

#### Example: `shift()` (Mutable)

```js
let nums3 = [1, 2, 3];
nums3.shift();
console.log(nums3);
```

**Output**

```
[ 2, 3 ]
```

---

#### Example: `unshift()` (Mutable)

```js
let nums4 = [1, 2, 3];
nums4.unshift(0);
console.log(nums4);
```

**Output**

```
[ 0, 1, 2, 3 ]
```

---

### 🟢 Immutable Methods (They DO NOT modify original array)

> Immutable = original array remains **unchanged**

#### Example: Spread Copy (Immutable)

```js
let a = [1, 2, 3];
let b = [...a];
console.log(a);
console.log(b);
```

**Output**

```
[ 1, 2, 3 ]
[ 1, 2, 3 ]
```

➡ `a` remains unchanged

---

#### Example: `concat()` (Immutable)

```js
let x = [1, 2];
let y = [3, 4];
let z = x.concat(y);
console.log(x);
console.log(z);
```

**Output**

```
[ 1, 2 ]
[ 1, 2, 3, 4 ]
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
