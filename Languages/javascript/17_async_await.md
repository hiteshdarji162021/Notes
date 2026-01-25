# What covered in notes

- Async & Await
- Parallel Execution using Promise.all + await
- Sequential Execution

## Why we learn Promises?

- async and await - modern way for perform sync operation and wait for some operation.
- Parallel Execution using Promise.all + await - For fast execution.
- Sequential Execution - When sequnace is important for execution

---

## 1. What is Async & Await?

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

getUserData()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
```

### Output

```
success
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

## 4️⃣ Modern way to use Promise

```js
async function getUserData() {
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

async function showUserData() {
  try {
    console.log("user data");
    let name = await getUserData();
    console.log(name);
  } catch (error) {
    console.log(error);
  }
}

showUserData();
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

## 2. Parallel Execution using Promise.all + await (BEST PRACTICE)

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

## 3. Sequential Execution (Slower – Avoid if possible)

```js
let get = await getUserData();
let show = await fetchData();
console.log(get, show);
```

⏱ Takes **2 + 2 = 4 seconds**

---

## 9️⃣ Incorrect sequnace if not use await

### Use Case: Email / Logging

```js
async function sendEmail(emailid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Email sent to ${emailid}`);
      resolve();
    }, 2000);
  });
}

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
function sendEmail1(emailid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Email sent to ${emailid}`);
      resolve();
      return true;
    }, 2000);
  });
}

let status1 = sendEmail1("hitesh@gmail.com"); //not using await even its written promise
console.log(status1);
```

### Output

```
Promise { <pending> }
checkout order
Email sent to hitesh@gmail.com
```

---

```js
let status2 = await sendEmail1("hitesh@gmail.com");
console.log("checkout order");
```

### Output

```
Email sent to hitesh@gmail.com
checkout order
```

---

### Key Learning

- Without `await` → Promise object
- With `await` → resolved value

---

## Final Summary (One Line)

> **Async/Await is the cleanest way to control Promises. Mastering it means mastering modern JavaScript.**

---
