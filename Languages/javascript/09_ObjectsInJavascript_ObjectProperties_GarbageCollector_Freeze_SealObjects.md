> **Goal**: Understand JavaScript Objects with **Concept → Code → Output → Real Use Case** so learning is useful **now and in future**.

---

## 1️⃣ What is an Object? (Concept + Use Case)

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

## 2️⃣ Object CRUD (Read, Add, Update, Delete)

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

## 3️⃣ Dot vs Bracket Notation (Dynamic & Special Keys)

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

## 4️⃣ Iterating Object (`for..in`)

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

## 5️⃣ Object Reference Assignment (IMPORTANT CONCEPT)

### Concept

> Objects are assigned by **reference**, not by value.

---

### Code

```js
let u1 = { name: "Hitesh" };
let u2 = { name: "Ronak" };

u1 = u2;

console.log(u1);
console.log(u2);
```

### Output

```
{ name: 'Ronak' }
{ name: 'Ronak' }
```

### Use Case

- Shared configuration
- Global app state

---

## 6️⃣ When NOT to Use Reference (Automation Warning)

### Code

```js
const payload = { role: "user" };

const p1 = payload;
p1.role = "admin";

console.log(payload);
```

### Output

```
{ role: 'admin' }
```

### Use Case

❌ Causes flaky tests  
✅ Always copy payloads in automation

---

## 7️⃣ Null Reference & Garbage Collection

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

## 8️⃣ `Object.freeze()` – Full Lock

### Code

```js
let config = Object.freeze({
  baseURL: "https://api.test.com",
  timeout: 30000,
});

config.timeout = 1000; // ignored

console.log(config);
```

### Output

```
{ baseURL: 'https://api.test.com', timeout: 30000 }
```

### Use Case

- Config
- Constants
- Selectors in automation

---

## 9️⃣ `Object.seal()` – Fixed Shape, Mutable Values

### Code

```js
let emp = { name: "Hitesh", city: "Dehgam" };

Object.seal(emp);

emp.city = "Ahmedabad"; // allowed
emp.salary = 2000; // ignored

delete emp.name; // ignored

console.log(emp);
```

### Output

```
{ name: 'Hitesh', city: 'Ahmedabad' }
```

### Use Case

- API payloads with fixed structure
- Forms where only values change

---

## 🔥 Final Decision Table

| Situation                   | Recommended       |
| --------------------------- | ----------------- |
| Config / constants          | `Object.freeze()` |
| API payload template        | `Object.freeze()` |
| Per-test data               | Copy object       |
| Fixed keys, changing values | `Object.seal()`   |
| Shared app state            | Reference         |

---

## 🧠 Golden Rule (Remember Forever)

> **Concept explains WHY, code shows HOW, output proves WHAT, and use case tells WHEN to use it.**
