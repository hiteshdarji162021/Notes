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

### `push()- add value at end`

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

### `Unshift() - add to the beginning`

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

### `pop()-remove from the end`

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

### `shift() -remove from the beginning`

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

## 5️⃣ Loops

### Index `for`

```js
let f = ["Apple", "Banana", "Orange"];
for (let i = 0; i < f.length; i++) {
  console.log(f[i]);
}
```

**Output**

```
Apple
Banana
Orange
```

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
