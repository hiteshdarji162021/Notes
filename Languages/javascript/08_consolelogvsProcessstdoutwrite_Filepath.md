# What covered in notes

- `console.log()` vs `process.stdout.write()`
- File Path Handling

## Why we learn loop and ternary operator?

- To control how output is printed during test execution and debugging.
- To reliably access test data, uploads, and config files across environments.

## 1. `console.log()` vs `process.stdout.write()`

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

## 2. File Path Handling

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
