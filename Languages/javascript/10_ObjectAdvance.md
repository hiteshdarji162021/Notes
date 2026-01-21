## 🔟 JSON.stringify() & JSON.parse() (Object ↔ JSON)

### Concept
> JavaScript objects are used **inside code**, but JSON strings are used for **network, storage, and communication**.

---

### Example: Object ➜ JSON (`JSON.stringify`)

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

### Example: JSON ➜ Object (`JSON.parse`)

```js
let user4 = `{
  "userId": 2,
  "id": 18,
  "title": "test title",
  "body": "test body"
}`;

let u4 = JSON.parse(user4);

console.log(u4);
console.log(typeof u4);     // object
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

### Problem
`for..in` and `for..of` do NOT automatically handle nested objects.

---

### Correct Way
```js
let user = {
  name: "hitesh",
  age: 30,
  address: {
    city: "dehgam",
    zip: 382305,
  },
};

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

### Use Case
- Logging nested API responses
- Debugging payloads
- Automation reports

---

## 1️⃣3️⃣ Reference (`=`) vs Copy (`...`) – Real-Time Decision

### Concept
> `=` shares the SAME object, `...` creates a NEW object.

---

### Real-Time Comparison Table

| Scenario | Use `=` | Use `...` |
|--------|--------|-----------|
| Shared config | ✅ | ❌ |
| Global app state | ✅ | ❌ |
| API payload per test | ❌ | ✅ |
| Parallel execution | ❌ | ✅ |
| Avoid side effects | ❌ | ✅ |
| Performance critical | ⚠️ | ❌ |

---

### Architect Rule
> **Share when you want global change. Copy when you want safety.**
