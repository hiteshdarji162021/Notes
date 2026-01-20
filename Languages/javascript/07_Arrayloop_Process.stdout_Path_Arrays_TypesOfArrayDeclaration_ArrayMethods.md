## 1️⃣ `console.log()` vs `process.stdout.write()`

### 🔹 `console.log()`

```js
console.log("hitesh");
console.log("darji");
```

**Output**

```
hitesh
darji
```

**Explanation**

- Automatically adds a new line
- Best for debugging and learning

---

### 🔹 `process.stdout.write()` (No New Line)

```js
process.stdout.write("gabbar");
process.stdout.write("is");
process.stdout.write("back");
```

**Output**

```
gabbarisback
```

**Explanation**

- No automatic new line
- Accepts only strings

---

### Creating New Line Manually

```js
process.stdout.write("gabbar \n");
process.stdout.write("is\n");
process.stdout.write("back\n");
```

**Output**

```
gabbar
is
back
```

---

### Number to String Conversion

```js
process.stdout.write(10 + "");
process.stdout.write((10).toString());
process.stdout.write(String(10));
process.stdout.write("10");
```

**Output**

```
10101010
```

---

## 2️⃣ File Path Handling

### Preferred Way

```js
let path1 = "c:/users/documents/file.txt";
console.log(path1);
```

**Output**

```
c:/users/documents/file.txt
```

---

### Double Backslash

```js
let path3 = "c:\\users\\documents\\file.txt";
console.log(path3);
```

**Output**

```
c:\users\documents\file.txt
```

---

### ❌ Wrong Way (Escape Issue)

```js
let path4 = "d:\downloads\file.txt";
console.log(path4);
```

**Output**

```
d:downloadsile.txt
```

---

### Best Practice – `String.raw`

```js
let path5 = String.raw`c:\users\documents\file.txt`;
console.log(path5);
```

**Output**

```
c:\users\documents\file.txt
```

---

## 3️⃣ Arrays Basics

### Array Declaration

```js
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
console.log(fruits);
```

**Output**

```
[ 'Apple', 'Banana', 'Orange', 'Mango', 'Grapes' ]
```

---

### Empty Array

```js
let n = [];
console.log(n.length);
```

**Output**

```
0
```

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

### 🔍 Architect Summary (Very Important)

| Loop Type | When to Use           | Key Advantage    | Limitation          |
| --------- | --------------------- | ---------------- | ------------------- |
| `for`     | Index-based logic     | Full control     | More code           |
| `for..of` | Value-based iteration | Clean & readable | No index by default |
| `forEach` | Apply action to all   | Short syntax     | Cannot break        |

---

### `for..of`

```js
for (let fruit of f) {
  console.log(fruit);
}
```

**Output**

```
Apple
Banana
Orange
```

---

### `forEach()`

```js
f.forEach((x) => console.log(x));
```

**Output**

```
Apple
Banana
Orange
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

---

## 6️⃣ Array Creation

### Literal

```js
let colors = ["Red", "Green", "Blue"];
console.log(colors);
```

**Output**

```
[ 'Red', 'Green', 'Blue' ]
```

---

### `Array.from()`

```js
console.log(Array.from("Hello"));
```

**Output**

```
[ 'H', 'e', 'l', 'l', 'o' ]
```

---

## 7️⃣ Mutable vs Immutable Array Methods (Very Important Concept)

This section helps students **visually understand** which array methods **change the original array** and which ones **do not**.

---

### 🔴 Mutable Methods (They MODIFY original array)

> Mutable = original array data **changes in memory**

#### Example: `push()` (Mutable)

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

#### Example: `slice()` (Immutable)

```js
let data = [10, 20, 30, 40];
let part = data.slice(1, 3);
console.log(data);
console.log(part);
```

**Output**

```
[ 10, 20, 30, 40 ]
[ 20, 30 ]
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

## ✅ Final Notes

✔ Code + Output = Clear understanding
✔ Always verify output while learning
✔ Practice by modifying values

📘 **Next**: Objects & Functions
