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

## 2. `for..of` Loop (When VALUE matters)

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

### 3. `forEach()` Loop (When APPLY action on all items)

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

| Loop Type | When to Use           | Key Advantage          | Limitation                                           |
| --------- | --------------------- | ---------------------- | ---------------------------------------------------- |
| `for`     | Index-based logic     | Full control           | More code                                            |
| `for..of` | Value-based iteration | Clean & readable       | No index by default                                  |
| `forEach` | Apply action to all   | Short syntax           | Cannot break                                         |
| `for..in` | Inspect index / keys  | Gives key/index easily | ❌ Not recommended for arrays.its for iterate object |

---
