# What covered in notes

- array iteration

## Why we learn Array iteration?

- For Iterate array in loop

## 1. Index-based `for` Loop (When INDEX matters)

**Use Case**

- When you need **index number**
- When you want **skip / break / reverse**
- When accessing **next or previous element**

#### Example: Print item with index

```js
console.log("Using index for loop:");
let fruits1 = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
for (let i = 0; i < fruits1.length; i++) {
  console.log(fruits1[i]);
  if (fruits1[i] === "Orange") {
    break;
  }
}

**Output**

```

Using index for loop:
Apple
Banana
Orange

---

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

## 2. `for..of` Loop (When VALUE matters)

**Use Case**

- When you only care about **values**
- Clean and readable code
- Best for **arrays and collections**

#### Example: Process values

```js
console.log("Using for..of loop:");
let fruits2 = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
for (let fruit of fruits2) {
  console.log(fruit);
  if (fruit === "Orange") {
    break;
  }
}
```

**Output**

```
Using for..of loop:
Apple
Banana
Orange
```

#### Example: Reverse order

```js
console.log("Using for..of loop:");
let fruits2 = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
for (let fruit of fruits2.reverse()) {
  //reverse order
  console.log(fruit);
}
```

**Output**

```
Using for..of loop:
Grapes
Mango
Orange
Banana
Apple
```

---

### 3. `forEach()` Loop (When APPLY action on all items)

**Use Case**

- When you want to **apply same logic to every element**
- No breaking required
- Best for logging, formatting

#### Example: Print formatted output

```js
let fruits3 = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
console.log("Using forEach() method:");
fruits3.forEach(function (fruit) {
  console.log(fruit);
});
```

**Output**

```
Using forEach() method:
Apple
Banana
Orange
Mango
Grapes
```

```js
//4. forEach() with arrow function
let fruits31 = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
console.log("Using forEach() with arrow function:");
fruits31.forEach((fruit) => console.log(fruit));
```

**Output**

```
Using forEach() with arrow function:
Apple
Banana
Orange
Mango
Grapes

```

#### ❌ Limitation Example (Cannot break)

```js

let fruits3 = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
console.log("Using forEach() method:");
fruits3.forEach(function (fruit) {
  if(fruit==="Banana"){
      console.log(fruit);
       break;
  }
});
```

**Output**

```
SyntaxError: Illegal break statement
```

---

### `for..in`

```js
let users = ["Admin", "Manager", "Tester"];
for (let i in f) {
  console.log(i, f[i]);
}
```

**Output**

```
0 Admin
1 Manager
2 Manager
```

### 🔍 Architect Summary (Very Important)

| Loop Type | When to Use           | Key Advantage          | Limitation                                                 |
| --------- | --------------------- | ---------------------- | ---------------------------------------------------------- |
| `for`     | Index-based logic     | Full control           | More code                                                  |
| `for..of` | Value-based iteration | Clean & readable       | No index by default                                        |
| `forEach` | Apply action to all   | Short syntax           | Cannot break                                               |
| `for..in` | Inspect index / keys  | Gives key/index easily | ❌ Not recommended for arrays.recommand for iterate object |

---
