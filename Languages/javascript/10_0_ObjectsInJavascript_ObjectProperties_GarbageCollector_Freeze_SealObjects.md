# What covered in notes

- Object
- Object CRED operation (Read, Add, Update, Delete)
- get Object value using dot
- get Object value using Bracket Notation
- Null Reference & Garbage Collection
- Object Heap Memory
- Object.freeze()
- Object.seal()

## Why we learn about Object?

- Object - We learn Objects to store and manage related data using meaningful key–value pairs, which makes complex data easy to read, update, and validate.
- Dot and Bracket - retrive value based on dot and bracket of object.
- Object.freeze() - for prevent add/update/delete Object data
- Object.seal() - for prvent add/delete object data but allow update object data.
-

## Why Object required in javascript?

- Plese note even array exist, Object required because Arrays store ordered lists of values, but they lack meaningful names for each value. Objects were introduced to store related data with descriptive keys, making code readable and maintainable.

## 1. Detailed Explaination of Object

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

## 2. Object CRUD (Read, Add, Update, Delete)

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

## Dot Notation (`.`)

### When to use dot notation

- Key name is **fixed and known**
- Key is a **valid identifier** (no space, no special character)
- Most common case in real projects

### Example

```js
let user = {
  name: "hitesh",
  age: 30,
  address: {
    city: "dehgam",
  },
};

console.log(user.name);
console.log(user.address.city);
```

**Output**

```
hitesh
dehgam
```

### Why dot is preferred

- Clean and readable
- Easy to understand
- Best for static object structure

---

## 4. Bracket Notation (`[]`)

### When to use bracket notation

- Key is **dynamic (comes from variable)**
- Key contains **spaces or special characters**
- Key is not a valid identifier

### Example – Dynamic key

```js
let key = "name";
console.log(user[key]);
```

**Output**

```
hitesh
```

### Example – Special key

```js
let config = {
  "api-url": "https://test.com",
  "retry count": 3,
};

console.log(config["api-url"]);
console.log(config["retry count"]);
```

---

### 🧠 Dot vs Bracket – Rule

```
Static / known key   → Dot notation
Dynamic / loop key  → Bracket notation
```

---

## 5. Null Reference & Garbage Collection

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

## 6. Object Heap Memory

- Stores actual objects
- Large and dynamic

```js
let user = { name: "tom", age: 30 };
```

---

### Visual Explanation

```
Stack:            Heap:
user  -------->  { name: 'tom', age: 30 }
```

---

## 🧠 Final Golden Rules

> - **Objects live in Heap**
> - **Variables store references**
> - **`=` shares memory**
> - **`...` creates safety**
> - **GC cleans unreachable objects**

---

## 7. `Object.freeze()`

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

## 8. `Object.seal()` – Fixed Shape, Mutable Values

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

### Architect Rule

> **Share when you want global change. Copy when you want safety.**
