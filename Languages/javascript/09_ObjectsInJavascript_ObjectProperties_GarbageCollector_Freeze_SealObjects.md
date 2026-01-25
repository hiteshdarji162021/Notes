# What covered in notes

- About Object
- Object CRED operation (Read, Add, Update, Delete)
- Dot vs Bracket Notation (Dynamic & Special Keys)
- Iterating Object using for..in  and for..of loop
- Object.freeze() and Object.seal() and differance
- JSON.stringify() and JSON.parse() and differance
- diff  between Object Reference (`=`) vs Copy (`...`) 
- Object memory allocation

## Why we learn about Object?

-  We learn Objects to store and manage related data using meaningful key–value pairs, which makes complex data easy to read, update, and validate.

## Why Object required in javascript?
- Plese note even array exist Object required because Arrays store ordered lists of values, but they lack meaningful names for each value. Objects were introduced to store related data with descriptive keys, making code readable and maintainable.

## 1.  Detailed Explaination of Object

### Concept

> **Object represents one real-world entity with related data**.

Instead of multiple variables, we group related information.

---

### Code

```js
let user = {
  name: "hitesh",
  age: 30,
  status: "active",
};

console.log(user);
```

### Output

```
{ name: 'hitesh', age: 30, status: 'active' }
```

### Use Case

- User profile
- Employee record
- API response object

---

### Object CRUD (Read, Add, Update, Delete)

### Code

```js
let user = {
  name: "hitesh",
  age: 30,
  status: "active",
  isEmployed: true,
};

// Read
console.log(user.age); // 30
console.log(user["age"]); // 30

// Add
user.city = "Ahmedabad";

// Update
user.age = 31;

// Delete
delete user.isEmployed;

console.log(user);
```

### Output

```
{ name: 'hitesh', age: 31, status: 'active', city: 'Ahmedabad' }
```

### Use Case

- Modify API response data
- Update UI state
- Store runtime values

---

## 2.  Dot vs Bracket Notation (Dynamic & Special Keys)

### Code

```js
let user = {
  name: "hitesh",
  "city area": "SG Highway",
};

let key = "name";

console.log(user.name); // hitesh
console.log(user[key]); // hitesh
console.log(user["city area"]); // SG Highway
```

### Output

```
hitesh
hitesh
SG Highway
```

### Use Case

- Dynamic keys from forms
- API response with special keys

---

## 3.  Iterating Object (`for..in`)

### Concept

> Iterate object when keys are **not fixed**.

### Code

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



### Null Reference & Garbage Collection

### Code

```js
let person = { name: "tom" };

person = null;
console.log(person);
```

### Output

```
null
```

### Use Case

- Memory cleanup
- Release large objects

---

## 4.  `Object.freeze()` and `Object.seal()` 

### Concept

> `Object.freeze()` makes an object **completely immutable**. Full lock.

❌ Cannot add property  
❌ Cannot update property  
❌ Cannot delete property

---

### Example 1️⃣: Freeze existing object

```js
let user = {
  name: "hitesh",
  city: "Dehgam",
};

console.log(user);
// { name: 'hitesh', city: 'Dehgam' }

Object.freeze(user);

// update
user.city = "Ahmedabad"; // ❌ ignored

// add
user.age = 30; // ❌ ignored

// delete
delete user.name; // ❌ ignored

console.log(user);
// { name: 'hitesh', city: 'Dehgam' }
```

---

### Example 2️⃣: Freeze at creation (BEST PRACTICE)

```js
let user1 = Object.freeze({
  name: "hitesh",
  city: "Dehgam",
});

user1.city = "Ahmedabad"; // ❌ ignored
console.log(user1);
// { name: 'hitesh', city: 'Dehgam' }
```

---

### ✅ Real Use Cases of `freeze`

```js
// Application / automation config
export const config = Object.freeze({
  baseURL: "https://api.test.com",
  timeout: 30000,
  retries: 2,
});
```

**Why freeze?**

- Prevent accidental changes
- Safe for parallel tests
- Single source of truth

**Used in real projects**

- Config objects
- Constants & enums
- Automation selectors
- Environment values

---

## 9️⃣ `Object.seal()` – Fixed Shape, Mutable Values

### Concept

> `Object.seal()` locks the **object structure**, but allows **value updates**.

❌ Cannot add property  
❌ Cannot delete property  
✅ Can update existing values

---

### Example

```js
let emp = {
  name: "Dhruvesh",
  city: "Dehgam",
};

console.log(emp);
// { name: 'Dhruvesh', city: 'Dehgam' }

Object.seal(emp);

// update (allowed)
emp.city = "Nandol";
console.log(emp);
// { name: 'Dhruvesh', city: 'Nandol' }

// add (not allowed)
emp.salary = 2000;
console.log(emp);
// { name: 'Dhruvesh', city: 'Nandol' }

// delete (not allowed)
delete emp.city;
console.log(emp);
// { name: 'Dhruvesh', city: 'Nandol' }
```

---

### ✅ Real Use Cases of `seal`

```js
// API request payload (keys must stay same)
let orderPayload = Object.seal({
  productId: null,
  quantity: 1,
  coupon: null,
});

orderPayload.productId = 101; // ✅ allowed
orderPayload.quantity = 2; // ✅ allowed
```

**Why seal?**

- Backend expects fixed keys
- Only values change per request
- Prevents payload shape breaking

**Used in real projects**

- API request bodies
- Form data objects
- DTOs (Data Transfer Objects)

---

## 🔥 Final Decision Table

| Scenario                    | Use               |
| --------------------------- | ----------------- |
| App / framework config      | `Object.freeze()` |
| Automation selectors        | `Object.freeze()` |
| Constants / enums           | `Object.freeze()` |
| API payload template        | `Object.freeze()` |
| API request body (runtime)  | `Object.seal()`   |
| Form data                   | `Object.seal()`   |
| Config / constants          | `Object.freeze()` |
| Per-test data               | Copy object       |
| Fixed keys, changing values | `Object.seal()`   |
| Shared app state            | Reference         |

---

## 5. JSON.stringify() & JSON.parse() (Javascript Object ↔ JSON)

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

## 1️⃣1️⃣ Object.keys(), Object.values(), Object.entries()

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

## 1️⃣2️⃣ Handling Nested Objects (Safe Iteration)

### ❓ Problem (Why students get confused)

- `for..in` and `for..of` **work fine for flat objects**
- But for **nested objects**, they return:

```
[object Object]
```

Because:

- JavaScript prints **object reference**, not inner values
- We must **explicitly convert nested objects to readable form**

👉 Best and safest way: `JSON.stringify(value)`

---

### ❌ Incorrect Iteration (Nested object issue)

```js
let user = {
  name: "hitesh",
  age: 30,
  address: {
    city: "dehgam",
    zip: 382305,
  },
};

for (let key in user) {
  console.log(key + " -> " + user[key]);
}
```

### Output

```
name -> hitesh
age -> 30
address -> [object Object]
```

❌ Not useful for logs / reports

---

### ❌ for..of with Object.entries (Still problem)

```js
for (let [key, value] of Object.entries(user)) {
  console.log(key + " -> " + value);
}
```

### Output

```
name -> hitesh
age -> 30
address -> [object Object]
```

---

### ✅ Correct Way (Safe Iteration)

```js
for (let [key, value] of Object.entries(user)) {
  if (typeof value === "object" && value !== null) {
    console.log(key + " -> " + JSON.stringify(value));
  } else {
    console.log(key + " -> " + value);
  }
}
```

### Output

```
name -> hitesh
age -> 30
address -> {"city":"dehgam","zip":382305}
```

---

### ✅ Real-Time Use Cases

- API response logging
- Automation execution reports
- Debugging payload mismatch
- Console logs for nested JSON

---

## 6. Object Reference (`=`) vs Copy (`...`) – Deep Explanation

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

## 17. Heap vs Stack Memory (Must Know)

### Stack Memory

- Stores primitive values
- Stores object **references**
- Fast access

```js
let x = 10;
let y = x;
```

---

### Heap Memory

- Stores actual objects
- Large and dynamic

```js
let obj = { name: "tom" };
```

---

### Visual Explanation

```
Stack:            Heap:
user  -------->  { name: 'tom', age: 30 }
```

---

## 1️⃣5️⃣ Null Reference & Garbage Collection

### Code

```js
let person = {
  name: "tom",
  age: 30,
};

console.log(person);

person = null; // reference removed

console.log(person);
```

### Output

```
{ name: 'tom', age: 30 }
null
```

### What happens internally?

- Stack reference removed
- Heap object becomes unreachable
- Garbage Collector frees memory

---

### Real-Time Use Cases

✔ Release large objects
✔ Prevent memory leaks
✔ Cleanup test data

---

## 🧠 Final Golden Rules

> - **Objects live in Heap**
> - **Variables store references**
> - **`=` shares memory**
> - **`...` creates safety**
> - **GC cleans unreachable objects**

---

### Architect Rule

> **Share when you want global change. Copy when you want safety.**
