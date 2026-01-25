# What covered in notes

- Array Declaration

## Why we learn Array Declaration?

- To store and manage collections of test data efficiently.

---

## Why do Arrays exist?

- To store multiple related values together under one variable.
- To process data in loops easily.
- To avoid writing repetitive variables.
---

## 1. Different Ways to Declare Arrays in JavaScript

### A. Normal way (Recommanded way)

```js
let colors = ["Red", "Green", "Blue"];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]); 
console.log(colors[-1]); 
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

###  Using `new Array()` (❌ Old Way – Avoid)

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

###  Using `Array.of()` (⚠️ Rarely Used)

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

### Using `Array.from()` (Convert iterable to array)

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


