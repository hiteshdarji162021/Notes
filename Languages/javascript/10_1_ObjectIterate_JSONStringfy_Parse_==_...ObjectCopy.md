# What covered in notes

- Iterating Object using for..in and for..of loop
- JSON.stringify() and JSON.parse()
- Object.keys(), Object.values(), Object.entries()
- Object Reference (`=`) and Object Copy (`...`)

## Why we learn about Object?

- for..in and for..of loop - To safely read and process object data such as API responses, configs, and test data structures.
- JSON.stringify() and JSON.parse() - To convert Javascript objects to JSON for send data using api and back to javascript objects for validation and usage.
- Object.keys() - retrive all keys of Object
- Object.values() - retrive all values of Object
- Object.entries() - retrive key and value both from Object.
- To avoid accidental data mutation bugs when sharing or reusing objects in automation frameworks.

## 1. Iterating Object using loops

### `for..in`

```js
let car = {
  name: "bmw",
  price: 40,
  model: "x1",
};

for (let key in car) {
  console.log(key + " => " + car[key]);
}
```

### Output

```
name => bmw
price => 40
model => x1
```

### Use Case

- API response validation
- Logging unknown objects
- Form validation

---

### Limitations

- Works only at **top level**
- Does NOT automatically iterate nested objects

---

## ❌ What to Avoid

- Deep `for..in` loops
- Printing objects directly
- Using bracket notation everywhere

---

### `for..of`

```js
let car = {
  name: "bmw",
  price: 40,
  model: "x1",
};
for (let [key, value] of Object.entries(car)) {
  console.log(key + " -> " + value);
}
```

### Output

```
name -> bmw
price -> 40
model -> x1
```

---

### Limitations

- Works only at **top level**
- Does NOT automatically iterate nested objects

---

## 2. JSON.stringify() & JSON.parse() (Javascript Object ↔ JSON)

### Concept

> JavaScript objects are used **inside code**, but JSON strings are used for **network, storage, and communication**.

---

### Example: JavaScript Object ➜ JSON (`JSON.stringify`)

```js
let user3 = {
  name: "ronak",
  age: 30,
  address: {
    city: "dehgam",
    zip: 382305,
  },
};

console.log(user3);
console.log(typeof user3); // object

let u3 = JSON.stringify(user3);
console.log(u3);
console.log(typeof u3); // string
```

### Output

```
{"name":"ronak","age":30,"address":{"city":"dehgam","zip":382305}}
string
```

### Real Use Cases of `JSON.stringify()`

- Send request body to API
- Store object in localStorage
- Log objects clearly

---

### Example: JSON ➜ JavaScript Object (`JSON.parse`)

```js
let user4 = `{
  "userId": 2,
  "id": 18,
  "title": "test title",
  "body": "test body"
}`;

let u4 = JSON.parse(user4);

console.log(u4);
console.log(typeof u4); // object
console.log(typeof user4); // string
```

### Output

```
{ userId: 2, id: 18, title: 'test title', body: 'test body' }
object
string
```

### Real Use Cases of `JSON.parse()`

- Read API response
- Read data from storage
- API / automation assertions

---

## 3. Object.keys(), Object.values(), Object.entries()

### Concept

> Used when you want to **inspect, validate, or iterate** object data dynamically.

---

### Code

```js
let person = {
  name: "hitesh",
  age: 30,
  salary: 34.55,
  isActive: true,
  status: "pending",
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
```

### Output

```
[ 'name', 'age', 'salary', 'isActive', 'status' ]
[ 'hitesh', 30, 34.55, true, 'pending' ]
[
  [ 'name', 'hitesh' ],
  [ 'age', 30 ],
  [ 'salary', 34.55 ],
  [ 'isActive', true ],
  [ 'status', 'pending' ]
]
```

### Real Use Cases

- API response validation
- Dynamic form rendering
- Generic logging utilities

---

## 4. iterate nested Object

### Nested Object with `for..in` - NOT WORKING CORRECTLY

```js
let user = {
  name: "hitesh",
  address: {
    city: "dehgam",
    zip: 382305,
  },
};

for (let key in user) {
  console.log(key + " -> " + user[key]);
}
```

**Output**

```
name -> hitesh
address -> [object Object]
```

👉 This is **expected behavior**, not a bug

---

### `for..of` with `Object.entries()` - NOT WORKING CORRECTLY

```js
for (let [key, value] of Object.entries(user)) {
  console.log(key + " -> " + value);
}
```

**Output**

```
name -> hitesh
address -> [object Object]
```

Still prints `[object Object]` for nested data

---

### `for..of` with `Object.entries()` + `JSON.stringify()`

Objects cannot be printed directly in string concatenation.

---

## ✅ Correct Way (Nested Object Handling)

```js
for (let [key, value] of Object.entries(user)) {
  if (typeof value === "object" && value !== null) {
    console.log(key + " -> " + JSON.stringify(value));
  } else {
    console.log(key + " -> " + value);
  }
}
```

**Output**

```
name -> hitesh
address -> {"city":"dehgam","zip":382305}
```

### Why this works

- Converts object into readable string
- Required for logs, reports, assertions

---

### Best Practices in Playwright Frameworks

### ✅ What to Use

### Static access (most common)

```js
testData.login.username;
config.baseURL;
user.address.city;
```

---

### 🔹 Loop Comparison

| Loop                                      | Works on Object | Nested Auto | Usage                  |
| ----------------------------------------- | --------------- | ----------- | ---------------------- |
| `for..in`                                 | ✅              | ❌          | Simple objects         |
| `for..of`                                 | ❌              | ❌          | Arrays only            |
| `Object.entries + for..of`                | ✅              | ❌          | Best practice          |
| `for of +Object .entiries +JSON.stringfy` | ✅              | ✅          | Best for Nested Object |

---

## 5. Object Reference (`=`) vs Copy (`...`) – Deep Explanation

### 🔹 Core Concept

> Objects are stored in **Heap memory** and variables store only **references**.

- `=` → same memory reference
- `...` → new object, new memory

---

## Reference Assignment (`=`)

### Code

```js
let emp = {
  name: "hitesh",
  address: "dehgam",
  salary: 50,
};

let newemp = emp; // reference

newemp.address = "naroda";

console.log(newemp);
console.log(emp);
```

### Output

```
{ name: 'hitesh', address: 'naroda', salary: 50 }
{ name: 'hitesh', address: 'naroda', salary: 50 }
```

### Why?

- Both variables point to **same heap object**

---

### Real-Time Use Cases of `=`

✔ Shared configuration
✔ Global application state
✔ Performance-critical code

```js
const config = { timeout: 5000 };
const apiConfig = config;
```

---

### ❌ Dangerous Use Case (Automation)

```js
const payload = { role: "user" };
const test1 = payload;
test1.role = "admin";
```

❌ Test pollution

---

## Copy using Spread Operator (`...`)

### Code

```js
let user = {
  name: "hitesh",
  age: 30,
};

let person = { ...user };

person.age = 45;

console.log(person);
console.log(user);
```

### Output

```
{ name: 'hitesh', age: 45 }
{ name: 'hitesh', age: 30 }
```

### Why?

- New object created
- Independent memory

---

### Real-Time Use Cases of `...`

✔ API payload per test
✔ Parallel execution safety
✔ UI state updates
✔ Avoid side effects

---

## 🔥 Decision Table (SAVE THIS)

| Scenario             | Use `=` | Use `...` |
| -------------------- | ------- | --------- |
| Shared config        | ✅      | ❌        |
| Global app state     | ✅      | ❌        |
| Test payload         | ❌      | ✅        |
| Parallel tests       | ❌      | ✅        |
| Performance-critical | ⚠️      | ❌        |
| API payload per test | ❌      | ✅        |
| Avoid side effects   | ❌      | ✅        |

---
