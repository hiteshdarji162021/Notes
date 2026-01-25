# What covered in notes

- promises
- Promise status - resolve, reject and pending
- Promise.all(), Promise.race(), Promise.any(),Promise.allSettle()

## Why we learn Promises?

- Promises- A **Promise** in JavaScript represents a value that is **not available now**, but **will be available in the future**.

Think of Promise like a **real-life promise**:

- Someone promises to do work
- It may be **completed (fulfilled)** or **failed (rejected)**
- You wait for the result

---

## 1. Why Promise is Required?

Before Promise, JavaScript used **callbacks**, which caused:

- Callback hell
- Difficult error handling
- Poor readability

Promise solves this by:

- Handling async code cleanly
- Supporting chaining (`then`)
- Centralized error handling (`catch`)
- Final cleanup (`finally`)

---

## 2. Promise States

A Promise has **3 states**:

| State     | Meaning              |
| --------- | -------------------- |
| pending   | Initial state        |
| fulfilled | Operation successful |
| rejected  | Operation failed     |

Once fulfilled or rejected → state **cannot change**.

---

## Promise Syntax

```js
new Promise((resolve, reject) => {
  // async work
});
```

- `resolve(value)` → success
- `reject(error)` → failure

---

## Example 1: Basic Promise (Success / Failure)

```js
let result = new Promise((resolve, reject) => {
  console.log("start the promise");
  let success = true;
  if (success) {
    resolve("training is done");
  } else {
    reject("failed");
  }
});

result
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("its done"));
```

### Output (success = true)

```
start the promise
training is done
its done
```

### Key Points

- Executor runs immediately
- `then` runs on resolve
- `catch` runs on reject
- `finally` always runs

---

## Example 2: Promise Rejection Only

```js
let errorPromise = new Promise((resolve, reject) => {
  reject("something got failed");
});

errorPromise.catch((error) => console.log(error));
```

### Output

```
something got failed
```

---

## Example 3: Promise Resolve with Value

```js
let resultPromise = new Promise((resolve, reject) => {
  resolve(100);
});

resultPromise.then((result) => console.log(result));
```

### Output

```
100
```

---

## Example 4: Reject is Optional

```js
let resultPromise1 = new Promise((resolve) => {
  resolve(100);
});

resultPromise1.then((result) => console.log(result));
```

### Output

```
100
```

---

## Example 5: Best Practice – Use return with resolve/reject

```js
let cakePromise = new Promise((resolve, reject) => {
  console.log("lets making cake");
  let status = true;
  if (status) {
    return resolve("cake is ready");
  } else {
    return reject("health issue cake not done");
  }
});

cakePromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("lets party"));
```

### Output

```
lets making cake
cake is ready
lets party
```

### Best Practice

- Always use `return resolve()` / `return reject()`
- Prevents further execution

---

## Example 6: Promise Chaining

```js
function doubleAmountAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

doubleAmountAfter2Seconds(5)
  .then((result) => {
    console.log(result); // 10
    return doubleAmountAfter2Seconds(result);
  })
  .then((result) => {
    console.log(result); // 20
    return doubleAmountAfter2Seconds(result);
  })
  .then((result) => console.log(result)); // 40
```

### Output

```
10
20
40
```

---

## 3. `Promise.all()`

> Runs multiple promises **in parallel** and waits until **ALL succeed**.

### Rules

- ✅ All promises must resolve
- ❌ If any promise rejects → immediately goes to `catch`

---

### Example

```js
const promise1 = Promise.resolve("page loaded");
const promise2 = Promise.resolve("api success");
const promise3 = Promise.resolve("user logged in");

Promise.all([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

**Output**

```
[ 'page loaded', 'api success', 'user logged in' ]
```

---

### ❌ Failure Case

```js
const p1 = Promise.resolve("step1");
const p2 = Promise.reject("promise 2 fail");
const p3 = Promise.resolve("step3");

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

**Output**

```
promise 2 fail
```

---

### ✅ Playwright Web Use Case

```js
await Promise.all([
  page.goto(baseURL),
  page.waitForResponse(
    (res) => res.url().includes("/login") && res.status() === 200,
  ),
  page.waitForSelector("#dashboard"),
]);
```

➡ Use when **ALL conditions must pass** before proceeding.

---

## 4. `Promise.race()`

> Resolves or rejects as soon as the **FIRST promise settles**.

### Rules

- First **resolved OR rejected** promise wins

---

### Example

```js
const promise11 = new Promise((res) =>
  setTimeout(() => res("promise 11 pass"), 100),
);
const promise12 = new Promise((res) =>
  setTimeout(() => res("promise 12 pass"), 300),
);

Promise.race([promise11, promise12])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

**Output**

```
promise 11 pass
```

---

#### Real-Time Use Cases

- API timeout handling
- Fastest server selection
- UI success vs error detection

---

### ✅ Playwright Web Use Case (Timeout or Success)

```js
await Promise.race([
  page.waitForSelector("#success"),
  page.waitForTimeout(5000).then(() => {
    throw new Error("Timeout waiting for success message");
  }),
]);
```

➡ Use when **first event decides the flow**.

---

## 5. `Promise.allSettled()` (Very Important in Automation)

> Waits for **ALL promises to finish**, regardless of pass or fail.

### Rules

- Never goes to `catch`
- Returns **status + value/reason** for each promise

---

### Example

```js
const p1 = Promise.resolve("login success");
const p2 = Promise.reject("profile api failed");
const p3 = Promise.resolve("logout success");

Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));
```

**Output**

```
[
  { status: 'fulfilled', value: 'login success' },
  { status: 'rejected', reason: 'profile api failed' },
  { status: 'fulfilled', value: 'logout success' }
]
```

#### Real-Time Use Cases

- Optional widgets
- Analytics tracking
- Reporting systems

---

## 6. Promise.any() –

`Promise.any()` is a **powerful but often ignored** Promise method. It is extremely useful in **real automation scenarios** where **any one success is enough**.

> **`Promise.any()` resolves as soon as ANY one promise resolves.**  
> It ignores rejected promises **unless ALL promises fail**.

---

## 2️⃣ Basic Example

```js
Promise.any([
  Promise.reject("API 1 failed"),
  Promise.resolve("API 2 success"),
  Promise.reject("API 3 failed"),
])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

### Output

```
API 2 success
```

---

## 3️⃣ Failure Case (All Promises Fail)

```js
Promise.any([Promise.reject("error 1"), Promise.reject("error 2")])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

### Output

```
AggregateError: All promises were rejected
```

---

## 4️⃣ Playwright Web Automation – Real Use Case

### Scenario

> Application may open from **multiple environments** (prod / staging / backup).  
> Test should continue if **any one URL works**.

### Code

```js
await Promise.any([
  page.goto("https://prod.app.com"),
  page.goto("https://staging.app.com"),
  page.goto("https://backup.app.com"),
]);

await page.waitForSelector("#login");
```

### Why `Promise.any()` here?

- Only **one environment** needs to respond
- Faster execution
- Avoid unnecessary failures

---

## 5️⃣ Playwright Web – Login via Multiple Methods

```js
await Promise.any([page.click("#loginWithEmail"), page.click("#loginWithSSO")]);
```

➡ Test proceeds if **any login option is available**

---

## 6️⃣ Playwright API Testing – Real Use Case

### Scenario

> Fetch user data from **multiple mirror APIs**.  
> Any one valid response is acceptable.

### Code

```js
const response = await Promise.any([
  request.get("/api/v1/user"),
  request.get("/api/v2/user"),
  request.get("/api/backup/user"),
]);

console.log(response.status());
```

### Output

```
200
```

---

## 7️⃣ When NOT to Use `Promise.any()`

❌ When **all steps must pass** → use `Promise.all()`  
❌ When you need **full result report** → use `Promise.allSettled()`

---

### ✅ Playwright API Use Case (Best Real Scenario)

```js
const results = await Promise.allSettled([
  request.get("/login"),
  request.get("/profile"),
  request.get("/orders"),
]);

results.forEach((res, index) => {
  if (res.status === "fulfilled") {
    console.log(`API ${index} passed`);
  } else {
    console.log(`API ${index} failed:`, res.reason);
  }
});
```

➡ Use when **you want full report instead of stopping on first failure**.

---

# 📊 Comparison Table (Automation Perspective)

| Method               | Stops on Failure | Waits for All | Best Use Case          |
| -------------------- | ---------------- | ------------- | ---------------------- |
| `Promise.all`        | ✅ Yes           | ❌ No         | All steps must pass    |
| `Promise.race`       | ❌               | ❌            | First event wins       |
| `Promise.allSettled` | ❌               | ✅ Yes        | Reporting & monitoring |
| `Promise.any`        | ❌               | ❌            | Fallback logic         |

| Feature         | async/await  | Promise.all | Promise.race | allSettled | any      |
| --------------- | ------------ | ----------- | ------------ | ---------- | -------- |
| Readability     | ⭐⭐⭐⭐⭐   | ⭐⭐⭐      | ⭐⭐⭐       | ⭐⭐⭐     | ⭐⭐⭐   |
| Parallel        | ❌           | ✅          | ✅           | ✅         | ✅       |
| Fail fast       | ❌           | ✅          | ✅           | ❌         | ❌       |
| Partial success | ❌           | ❌          | ❌           | ✅         | ✅       |
| Best use        | Flow control | Setup       | Timeout      | Reporting  | Fallback |

---

## 🧠 Playwright Architect Rules

- Use **Promise.all** when **all actions are mandatory**
- Use **Promise.race** for **timeouts / first-response logic**
- Use **Promise.allSettled** for **API health checks & reports**

---

## 🎯 Interview One-Liner

> **`Promise.all` fails fast, `Promise.race` finishes first, and `Promise.allSettled` reports everything.**

---

## Example 9: Real-Life Example – Coffee Making (Promise Chain)

### Real-Time Async Functions (Each step takes time)

```js
function startMachin() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1. machin started");
      resolve();
    }, 5000);
  });
}

function bilWater() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2. boil water");
      resolve();
    }, 4000);
  });
}

function addCoffeePowder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3. cofee powder added");
      resolve();
    }, 3000);
  });
}

function popInCup() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("4 pop in cup");
      resolve();
    }, 2000);
  });
}

function serveCoffee() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("5. cofee served");
      resolve();
    }, 1000);
  });
}
```

### Calling Using Promise Chaining

```js
startMachin()
  .then(bilWater)
  .then(addCoffeePowder)
  .then(popInCup)
  .then(serveCoffee)
  .then(() => console.log("Coffee is ready to serve!"));
```

### Output (Sequential Execution)

```
1. machin started
2. boil water
3. cofee powder added
4 pop in cup
5. cofee served
Coffee is ready to serve!
```

---

## Async / Await Version (BEST PRACTICE)

```js
async function makeCoffee() {
  await startMachin();
  await bilWater();
  await addCoffeePowder();
  await popInCup();
  await serveCoffee();
  console.log("Coffee is ready to serve!");
}
makeCoffee();
```

### Why async/await is better

- Cleaner code
- Looks synchronous
- Easier error handling

---

## Example: Fetch API with async/await

```js
async function fetchUserData() {
  console.log("fetch the data");
  let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let data = await response.json();
  console.log(data.name);
}
fetchUserData();
```

---

## Best Practices Summary

✔ Always return Promise in functions
✔ Use `return resolve()` / `return reject()`
✔ Prefer async/await for readability
✔ Use Promise.all for parallel tasks
✔ Use Promise.race for timeout/first-result logic
✔ Never pass function calls inside `.then()`

---

## Final One-Line Summary

> **Promise is the foundation of async JavaScript, and async/await is its cleaner syntax on top.**

---
