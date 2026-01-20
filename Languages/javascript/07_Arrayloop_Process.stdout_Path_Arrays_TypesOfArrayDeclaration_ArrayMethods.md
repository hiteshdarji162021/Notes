# JavaScript Core Concepts (Day-1 Notes)

> **Audience**: Students & Working Professionals
>
> **Purpose**: Understand how JavaScript core concepts are used in **real programs**, **system tools**, **automation scripts**, **backend services**, and **CLI applications**.
>
> Examples are written from a **Tech Architect perspective** – explaining _where and why_ you use each concept in real projects.

---

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

### ✅ Characteristics

- Automatically adds a **new line**
- Accepts **any data type** (number, object, array)
- Converts data to string internally
- Easy to read and debug

### 🧠 Generic Use Cases

- Debugging application logic
- Printing API responses
- Logging values during development
- Teaching / learning JavaScript basics

---

### 🔹 `process.stdout.write()`

```js
process.stdout.write("gabbar");
process.stdout.write("is");
process.stdout.write("back");
```

**Output**

```
gabbarisback
```

### ✅ Characteristics

- Does **not** add new line automatically
- Accepts **only strings**
- Low-level, faster output
- Full control over formatting

### 🧠 Generic Use Cases

- Custom logs without line breaks
- Streaming output

---

### 🔹 Creating New Line Manually

```js
process.stdout.write("gabbar \n");
process.stdout.write("is\n");
process.stdout.write("back\n");
```

---

### 🔹 Number to String Conversion

```js
process.stdout.write(10 + "");
process.stdout.write((10).toString());
process.stdout.write(String(10));
process.stdout.write("10");
```

⚠ `process.stdout.write(10)` → ❌ Error (number not allowed)

### 🧠 Generic Use Case

- Formatting output
- Logging counters
- Displaying numeric results in CLI

---

## 2️⃣ File Path Handling in JavaScript

### ❌ Risky Way (Escape Issue)

```js
let path4 = "d:\downloads\file.txt";
```

➡ `\d`, `\f` treated as escape characters

---

### ✅ Recommended Way (Cross-platform) - Best one use this one only

```js
let path1 = "c:/users/documents/file.txt";
```

### 🧠 Generic Use Cases

- Reading files
- Writing reports
- Saving logs
- Storing downloads

📌 Used in:

- File upload/download programs
- Report generators
- Automation scripts

---

### ✅ Using Double Backslash

```js
let path3 = "c:\\users\\documents\\file.txt";
```

---

### ✅ Best Practice – `String.raw`

```js
let path5 = String.raw`c:\users\documents\file.txt`;
```

### 🧠 Why Architects Prefer This

- Clean
- No escape bugs
- Readable
- Safe for Windows paths

---

## 3️⃣ Arrays in JavaScript

### 🔹 Array Declaration

```js
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
```

### 🧠 Generic Use Cases

- Store list of users
- Store test data
- Store API responses
- Store configuration values

---

### 🔹 Array Length

```js
let n = [];
console.log(n.length); // 0
```

📌 Used to check empty data, validations

---

## 4️⃣ Array Methods (Real-World Perspective)

### 1️⃣ `push()` – Add at End

```js
n1.push(5);
```

🧠 Used When:

- Adding new records
- Appending results
- Collecting dynamic data

---

### 2️⃣ `unshift()` – Add at Beginning

```js
n2.unshift(0);
```

🧠 Used When:

- Priority-based processing
- Prepending latest entry

---

### 3️⃣ `pop()` – Remove from End

```js
let removed = n3.pop();
```

🧠 Used When:

- Stack implementation
- Undo operations

---

### 4️⃣ `shift()` – Remove from Beginning

```js
n4.shift();
```

🧠 Used When:

- Queue implementation
- Task processing systems

---

### 5️⃣ Update Array Value

```js
n5[2] = 4;
```

🧠 Used When:

- Updating status
- Modifying records

---

### 6️⃣ `join()` – Array ➜ String

```js
veggies.join(" ");
```

🧠 Used When:

- Creating readable output
- Generating messages
- Formatting reports

---

### 7️⃣ `split()` – String ➜ Array

```js
strVeggies.split(": ");
```

🧠 Used When:

- Parsing input
- Reading CSV values
- Handling user input

---

### 8️⃣ Copy & Merge Arrays

#### Spread Operator

```js
let copy = [...originalArray];
```

🧠 Prevents mutation of original data

#### Merge

```js
let merged = [...arr1, ...arr2];
```

🧠 Used in:

- Combining datasets
- Merging configurations

---

## 5️⃣ Looping Techniques (Architect Guidance)

### 1️⃣ Index `for` Loop

```js
for (let i = 0; i < fruits.length; i++) {}
```

✔ Full control
✔ Supports break / continue
✔ Index-based logic

---

### 2️⃣ `for..of` (Recommended)

```js
for (let fruit of fruits) {
}
```

✔ Clean syntax
✔ Readable
✔ Best for arrays

---

### 3️⃣ `forEach()`

```js
fruits.forEach((fruit) => console.log(fruit));
```

❌ Cannot break

🧠 Used for:

- Logging
- Simple processing

---

### 4️⃣ `for..in` (Not for Arrays)

```js
for (let index in fruits) {
}
```

✔ Designed for objects

---

## 6️⃣ Different Ways to Create Arrays

### 1️⃣ Array Literal (Best Practice)

```js
let colors = ["Red", "Green", "Blue"];
```

---

### 2️⃣ Mixed Data Types

```js
let mixed = [100, "Hello", true, null];
```

🧠 Used for:

- API responses
- Dynamic data

---

### 3️⃣ `new Array()` ❌ (Avoid)

### 4️⃣ `Array.of()` ❌

➡ Legacy style, avoid in modern code

---

### 5️⃣ `Array.from()`

```js
Array.from("Hello");
```

🧠 Used to:

- Convert iterable to array
- Process characters
- Handle collection data

---
