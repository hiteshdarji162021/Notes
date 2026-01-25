# What covered in notes

- for loop
- while loop
- do while loop

## Why we learn loops?
- To repeat actions like test execution, data iteration, and retries without writing duplicate code.

---

## 1️⃣ `while` Loop

### What is a while loop?

- Executes code **as long as the condition is true**
- Condition is checked **before** execution
- Best when **number of iterations is NOT fixed**

---

### Example 1: Print 1 to 10

```js
let i = 1; // initialization
while (i <= 10) {
  // condition
  console.log(i); // statement
  i++; // increment
}
```

---

### Example 2: `break` inside while loop

```js
let j = 1;
while (j <= 10) {
  console.log(j);
  if (j === 5) {
    console.log("bye");
    break; // exit loop
  }
  j++;
}
```

---

### Example 3: Infinite loop with manual break

```js
while (true) {
  console.log("welcome to Naveen Automation Labs");
  break;
}
```

```js
while (1) {
  console.log("welcome to Naveen Automation Labs");
  break;
}
```

---

### Example 4: Conditional break

```js
let k = 1;
while (true) {
  console.log("welcome to hotel taj");
  if (k === 5) {
    console.log("bye!!");
    break;
  }
  k++;
}
```

---

### ✅ Use Cases of `while` Loop

- Waiting for web element (dynamic waits)
- Page loading / loaders
- Web table pagination
- Infinite scrolling
- Dynamic number of links/elements
- Calendar handling
- Carousel handling
- Reading DB records
- Progress bar (0–100%)
- File upload / download
- Waiting for alerts/popups
- EOF (end of file) reading

---

## 2️⃣ `for` Loop

### What is a for loop?

- Used when **number of iterations is fixed or known**
- Contains initialization, condition, and increment in one line

---

### Example 1: Print 1 to 10

```js
for (let m = 1; m <= 10; m++) {
  console.log(m);
}
```

---

### Example 2: Missing initialization inside `for`

```js
let n = 1;
for (; n <= 10; ) {
  console.log(n);
  n++;
}
```

---

### Example 3: Infinite `for` loop

```js
for (;;) {
  console.log("byEE!!!!");
  break;
}
```

---

### Example 4: Print 10 to 1

```js
for (let s = 10; s >= 1; s--) {
  console.log(s);
}
```

---

### Example 5: Even numbers (1–10)

```js
for (let num = 1; num <= 10; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}
```

---

### Example 6: Odd numbers (1–10)

```js
for (let num = 1; num <= 10; num++) {
  if (num % 2 === 1) {
    console.log(num);
  }
}
```

---

### ✅ Use Cases of `for` Loop

- Dropdowns with fixed values
- Excel / CSV rows
- Array or list traversal
- Seat selection (flight/movie/bus)
- Menu items
- Footer links
- Wrong login attempts (max tries)
- Retry logic for failed tests

---

## 3️⃣ `do...while` Loop

### What is a do-while loop?

- Executes **at least once**
- Condition is checked **after** execution

---

### Example 1: Print 1 to 10

```js
let p = 1;
do {
  console.log(p);
  p++;
} while (p <= 10);
```

---

### Example 2: Condition false, still runs once

```js
do {
  console.log("check the element");
} while (false);
```

---

### Example 3: False condition after first run

```js
let d = 1;
do {
  console.log(d);
  d++;
} while (d >= 10);
```

---

### ✅ Use Cases of `do-while` Loop

- Page landing validation
- Check element at least once
- Retry until success or timeout

---



## 🆚 Comparison Table (Very Important)

| Feature            | while         | for      | do-while       |
| ------------------ | ------------- | -------- | -------------- |
| Condition check    | Before        | Before   | After          |
| Runs at least once | ❌            | ❌       | ✅             |
| Fixed iterations   | ❌            | ✅       | ❌             |
| Unknown iterations | ✅            | ❌       | ✅             |
| Readability        | Medium        | High     | Medium         |
| Best use           | Dynamic waits | Counters | One-time check |

---

## 🧠 My Notes for Students

- Use **`for` loop** when count is known
- Use **`while` loop** for dynamic conditions
- Use **`do-while`** when at least one execution is required

---

## 🎯 Interview One-Liners

- `while` → unknown iterations
- `for` → fixed iterations
- `do-while` → must run once
---
