## 1️⃣ What is a Promise?

A **Promise** in JavaScript represents a value that is **not available now**, but **will be available in the future**.

Think of Promise like a **real-life promise**:

- Someone promises to do work
- It may be **completed (fulfilled)** or **failed (rejected)**
- You wait for the result

---

## Why Promise is Required?

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

## Promise States

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

## Example 7: Promise.all()

```js
Promise.all([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

### Rule

- All promises must resolve
- If any promise rejects → immediately goes to catch

### Output

```
promise 2 fail
```

---

## Example 8: Promise.race()

```js
Promise.race([promise11, promise12, promise13])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

### Rule

- First settled promise (resolve or reject) wins

### Output

```
promise 11 pass
working as expected
```

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
