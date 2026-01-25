# What covered in notes

- String methods

## Why we learn String methods

- to manuplate string

👉 ALL String methods in JavaScript are IMMUTABLE. That means original string is never changed. Every method returns a new string.

## String Methods (All Immutable)

### `split()` – Convert string to array

```js
let data = "a,b,c";
console.log(data.split(","));
console.log(data);
```

**Output**

```
[ 'a', 'b', 'c' ]
a,b,c
```

➡ Original string unchanged → **Immutable**

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
| indexOf     | Immutable           |
| lastIndexOf | Immutable           |
| startsWith  | Immutable           |
| endsWith    | Immutable           |
| padStart    | Immutable           |
| padEnd      | Immutable           |
| repeat      | Immutable           |
| toUpperCase | Immutable           |
| toLowerCase | Immutable           |
| trim        | Immutable           |

---
