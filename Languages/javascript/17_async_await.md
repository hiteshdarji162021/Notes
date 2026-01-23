# Async & Await – Complete Guide (Student + Future‑Proof Notes)

---

## 1️⃣ What is Async & Await?

`async` and `await` are **syntax built on top of Promises** that make asynchronous code:

- Easier to read
- Easier to write
- Easier to debug

They allow us to write async code that **looks synchronous**, but still runs **non‑blocking**.

> **Important:** Async/Await does NOT replace Promises. It is just a cleaner way to use them.

---

## 2️⃣ Why Async/Await is Required (Problem with `.then()`)

### Old Style (then/catch – harder to read)

```js
getUserData()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
```

Problems:

- Callback-like chaining
- Harder error handling
- Poor readability for complex flows

---

## 3️⃣ Basic Rule of Async/Await (MUST REMEMBER)

| Rule                                             | Explanation       |
| ------------------------------------------------ | ----------------- |
| `await` can be used only inside `async` function | Mandatory         |
| `async` function always returns a Promise        | Always            |
| `await` pauses function execution                | NOT the JS thread |

---

## 4️⃣ Example 1 – Basic Async/Await with Promise

```js
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("success");
      } else {
        reject("error");
      }
    }, 2000);
  });
}

async function showUsrData() {
  try {
    console.log("user data");
    let name = await getUserData();
    console.log(name);
  } catch (error) {
    console.log(error);
  }
}

showUsrData();
```

### Output

```
user data
success
```

### Use Case

- API calls
- DB calls
- Automation steps

---

## 5️⃣ Example 2 – Await with Array / Object Data

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Doe" },
      ]);
    }, 2000);
  });
}

let orders = await fetchData();
console.log(orders);
```

### Output

```
[
 { id: 1, name: 'John' },
 { id: 2, name: 'Jane' },
 { id: 3, name: 'Doe' }
]
```

---

## 6️⃣ Await Works with Any Promise Value

Promise can resolve:

- String
- Number
- Object
- Array

### Example

```js
let result = await getUserData(); // string
let users = await fetchData(); // array of objects
```

---

## 7️⃣ Parallel Execution using Promise.all + await (BEST PRACTICE)

### Functions

```js
let getuser = getUserData();
let showUser = fetchData();
```

### Parallel Execution (2 seconds)

```js
let [user, showuse] = await Promise.all([getuser, showUser]);
console.log(user);
console.log(showuse);
```

### Output

```
success
[ { id: 1, name: 'John' }, ... ]
```

### Why use this?

- Faster execution
- Independent async tasks

---

## 8️⃣ Sequential Execution (Slower – Avoid if possible)

```js
let get = await getUserData();
let show = await fetchData();
console.log(get, show);
```

⏱ Takes **2 + 2 = 4 seconds**

---

## 9️⃣ Fire & Forget (Do NOT use await)

### Use Case: Email / Logging

```js
sendEmail("hitesh@gmail.com");
console.log("checkout order");
```

### Output

```
checkout order
Email sent to hitesh@gmail.com
```

---

## 🔟 Await vs No Await

```js
let status1 = sendEmail1("hitesh@gmail.com");
console.log(status1); // Promise <pending>

let status2 = await sendEmail1("hitesh@gmail.com");
console.log("checkout order");
```

### Key Learning

- Without `await` → Promise object
- With `await` → resolved value

---

## 1️⃣1️⃣ Promise Helper Methods (Very Important)

---

### 🔹 Promise.all()

**What it does**  
Runs all promises in parallel and resolves **only when ALL succeed**. If **any one fails**, it goes to `catch`.

#### Code Example

```js
function p1() {
  return new Promise((resolve) => setTimeout(() => resolve("A"), 1000));
}
function p2() {
  return new Promise((resolve) => setTimeout(() => resolve("B"), 2000));
}

Promise.all([p1(), p2()])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
```

#### Output

```
['A', 'B']
```

#### Real-Time Use Cases

- Dashboard data loading
- Playwright multiple window handling
- Parallel API calls

---

### 🔹 Promise.race()

**What it does**  
Returns the **first settled promise** (success OR failure).

#### Code Example

```js
function fast() {
  return new Promise((resolve) => setTimeout(() => resolve("Fast"), 1000));
}
function slow() {
  return new Promise((resolve) => setTimeout(() => resolve("Slow"), 3000));
}

Promise.race([fast(), slow()])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
```

#### Output

```
Fast
```

#### Real-Time Use Cases

- API timeout handling
- Fastest server selection
- UI success vs error detection

---

### 🔹 Promise.allSettled() ⭐

**What it does**  
Waits for **all promises**, regardless of success or failure, and returns their status.

#### Code Example

```js
function successPromise() {
  return Promise.resolve("Success");
}
function failPromise() {
  return Promise.reject("Failed");
}

Promise.allSettled([successPromise(), failPromise()]).then((results) =>
  console.log(results),
);
```

#### Output

```
[
  { status: 'fulfilled', value: 'Success' },
  { status: 'rejected', reason: 'Failed' }
]
```

#### Real-Time Use Cases

- Optional widgets
- Analytics tracking
- Reporting systems

---

### 🔹 Promise.any()

**What it does**  
Returns the **first successful promise**. Ignores failures. Fails only if **ALL fail**.

#### Code Example

```js
function fail1() {
  return Promise.reject("Error 1");
}
function success1() {
  return Promise.resolve("Data loaded");
}

Promise.any([fail1(), success1()])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
```

#### Output

```
Data loaded
```

#### Real-Time Use Cases

- Fallback APIs
- A/B testing
- Old UI vs new UI detection

---

| Feature         | async/await  | Promise.all | Promise.race | allSettled | any      |
| --------------- | ------------ | ----------- | ------------ | ---------- | -------- |
| Readability     | ⭐⭐⭐⭐⭐   | ⭐⭐⭐      | ⭐⭐⭐       | ⭐⭐⭐     | ⭐⭐⭐   |
| Parallel        | ❌           | ✅          | ✅           | ✅         | ✅       |
| Fail fast       | ❌           | ✅          | ✅           | ❌         | ❌       |
| Partial success | ❌           | ❌          | ❌           | ✅         | ✅       |
| Best use        | Flow control | Setup       | Timeout      | Reporting  | Fallback |

---

## 1️⃣3️⃣ Best Practices (FINAL)

✔ Prefer async/await over then/catch
✔ Use Promise.all with await for parallel tasks
✔ Avoid sequential awaits when possible
✔ Always use try/catch with await
✔ Use allSettled for optional tasks
✔ Use race for timeout logic
✔ Fire-and-forget without await when result not required

---

## Final Summary (One Line)

> **Async/Await is the cleanest way to control Promises. Mastering it means mastering modern JavaScript.**

---

✅ This document gives **complete understanding** of Async/Await + Promises
