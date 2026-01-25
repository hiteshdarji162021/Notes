# What covered in notes

- Array Declaration
- Array loops

## Why we learn loop and ternary operator?

- To store and manage collections of test data efficiently.
- To iterate over test data and perform repetitive test actions automatically.

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

## 6️⃣ Array Creation

## Different Ways to Declare Arrays in JavaScript

```js
let colors = ["Red", "Green", "Blue"];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]); // undefined
console.log(colors[-1]); // undefined
console.log(`Colors array: ${colors}`);
console.log(`Number of colors: ${colors.length}`);
```

**Output**

```
Red
Green
Blue
undefined
undefined
Colors array: Red,Green,Blue
Number of colors: 3
```

**Explanation**

- Index starts from `0`
- Accessing non-existing index gives `undefined`
- Negative index is not supported in JavaScript arrays
- This is the **most recommended** way to create arrays

---

### Mixed Data Types in Array

```js
let mixedArray = [100, "Hello", true, null, undefined, 45.67];

console.log(`Mixed array: ${mixedArray}`);
console.log(`Number of elements in mixed array: ${mixedArray.length}`);
```

**Output**

```
Mixed array: 100,Hello,true,, ,45.67
Number of elements in mixed array: 6
```

**Explanation**

- JavaScript arrays can store **multiple data types**
- Very common in real-world programs (API responses, configs)

---

### 2️⃣ Using `new Array()` (❌ Old Way – Avoid)

```js
let cars = new Array("Toyota", "Honda", "Ford");

console.log(`Cars array: ${cars}`);
console.log(`Number of cars: ${cars.length}`);
```

**Output**

```
Cars array: Toyota,Honda,Ford
Number of cars: 3
```

**Explanation**

- Old JavaScript style
- Less readable
- Can cause confusion with numeric arguments
- ❌ Not recommended in modern code

---

### 3️⃣ Using `Array.of()` (⚠️ Rarely Used)

```js
let test = Array.of(1, 2, 3, 4, 5);

console.log(`Test array: ${test}`);
console.log(`Number of elements in test array: ${test.length}`);
```

**Output**

```
Test array: 1,2,3,4,5
Number of elements: 5
```

**Explanation**

- Creates an array from arguments
- Used only in specific edge cases

---

### 4️⃣ Using `Array.from()` (Convert iterable to array)

```js
let str = "Hello";
let charArray = Array.from(str);

console.log(`Character array from string: ${charArray}`);
console.log(`Number of characters: ${charArray.length}`);
```

**Output**

```
Character array from string: H,e,l,l,o
Number of characters: 5
```

**Explanation**

- Converts **string, map, set, or iterable** into array
- Very useful when working with collections

---

### ✅ Quick Comparison

| Method             | Recommended | Use Case                  |
| ------------------ | ----------- | ------------------------- |
| Array literal `[]` | ✅ Yes      | General usage             |
| `new Array()`      | ❌ No       | Legacy code               |
| `Array.of()`       | ⚠️ Rare     | Controlled creation       |
| `Array.from()`     | ✅ Yes      | Convert iterable to array |

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
