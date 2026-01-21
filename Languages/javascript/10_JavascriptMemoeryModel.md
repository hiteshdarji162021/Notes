# JavaScript Memory Model – Stack vs Heap vs Garbage Collection

> **Goal**: Understand **where data is stored**, **how memory is allocated**, and **how garbage collection works** using simple language and clear examples.
> This is one of the **most misunderstood but most important concepts** in JavaScript.

---

## 1 What is Stack Memory?

### Concept

> **Stack memory** is used for **static, short‑lived data** and **function execution**.

### Stored in Stack

- Primitive values
  - `number`
  - `string`
  - `boolean`
  - `undefined`
  - `null`
  - `symbol`
- Variable references to objects
- Function calls (call stack)
- Loop counters (`for`, `while`)

---

### Example – Primitives in Stack

```js
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20
```

### Explanation

- `a` and `b` store **actual values**
- Copy is created
- Stack memory is **fast & isolated**

---

## 2 What is Heap Memory?

### Concept

> **Heap memory** is used for **dynamic, large, complex data**.

### Stored in Heap

- Objects `{}`
- Arrays `[]`
- Functions
- Nested structures

---

### Example – Object in Heap

```js
let user = {
  name: "hitesh",
  age: 30,
};
```

### What actually happens

```
Stack                 Heap
-----                 -----
user  ───────────▶  { name: 'hitesh', age: 30 }
```

- Object stored in **heap**
- Variable `user` stores **reference** in stack

---

## 3 Where are Arrays Stored?

### Concept

> Arrays are **objects**, so they are stored in **heap**.

```js
let arr = [1, 2, 3];
```

```
Stack                 Heap
-----                 -----
arr   ───────────▶  [1, 2, 3]
```

---

## 4 Where are Loops Stored? (`for`, `while`)

### Important Clarification

> **Loops are not stored in heap**.

### What is stored?

- Loop variables (`i`, `j`) → **stack**
- Loop execution → **call stack**

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

- `i` lives in stack
- Each iteration executes in call stack

---

## 5 Object Reference Assignment (Why bugs happen)

```js
let emp = { name: "tom" };
let newEmp = emp;

newEmp.name = "john";
console.log(emp.name); // john
```

### Why?

```
Stack                 Heap
-----                 -----
emp    ─────┐
newEmp ───┐ │──▶ { name: 'john' }
          └─┘
```

Both variables point to **same heap object**.

---

## 6 How Garbage Collection (GC) Works

### Concept

> Garbage Collector frees **unused heap memory** automatically.

---

### When does GC run?

- Object becomes **unreachable**
- No variable references it

```js
let person = { name: "tom" };
person = null; // reference removed
```

```
Stack                 Heap
-----                 -----
person = null        { name: 'tom' }  ❌ unreachable
```

GC removes this object from heap.

---

## 7 Does GC clear Stack or Heap?

### Very Important Answer

| Memory | How cleared                      |
| ------ | -------------------------------- |
| Stack  | Automatically when function ends |
| Heap   | By Garbage Collector             |

---

## 8️⃣ How Stack Memory is Cleared

```js
function test() {
  let x = 10;
  let y = 20;
}

test();
```

### What happens

- Function finishes
- Stack frame removed
- `x` and `y` destroyed automatically

No GC needed for stack.

---

## 8 How Heap Memory is Cleared

```js
let obj = { data: 123 };
obj = null;
```

- Reference removed from stack
- Object unreachable
- GC frees heap memory

---

## 9 For Which Data GC Occurs?

### GC occurs ONLY for:

- Objects
- Arrays
- Functions
- Closures

### GC does NOT occur for:

- Primitive stack values

---

## 🔥 Quick Comparison Table (SAVE THIS)

| Data Type               | Stored In | Cleared By          |
| ----------------------- | --------- | ------------------- |
| number, string, boolean | Stack     | Auto (function end) |
| Object `{}`             | Heap      | Garbage Collector   |
| Array `[]`              | Heap      | Garbage Collector   |
| Object reference        | Stack     | Auto                |
| Loop variables          | Stack     | Auto                |

---

## 🧠 Golden Rules (Interview Ready)

> - Primitives live in stack
> - Objects & arrays live in heap
> - References live in stack
> - Stack is fast & auto-cleaned
> - Heap is GC-managed

## 10 What is Static Memory?

### Concept

> **Static memory** means memory that is allocated **once** and shared across all instances.

- In JavaScript, `static` exists inside **classes**
- Static members belong to **class itself**, not object

```js
class Config {
  static timeout = 5000;
}

console.log(Config.timeout); // 5000
```

### Memory Location

| Item                | Stored In | Lifetime            |
| ------------------- | --------- | ------------------- |
| Static property     | Heap      | Entire app lifetime |
| Reference to static | Stack     | Scope-based         |

---

## 11 Constructor Memory (Where does constructor data go?)

```js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let u1 = new User("hitesh", 30);
```

### Memory Breakdown

| Item                 | Stored In            |
| -------------------- | -------------------- |
| `u1` reference       | Stack                |
| `User` object        | Heap                 |
| `name`, `age`        | Heap (inside object) |
| constructor function | Heap                 |

---

## 12 Primitive vs Non-Primitive (Life Cycle Table)

| Feature       | Primitive               | Non-Primitive           |
| ------------- | ----------------------- | ----------------------- |
| Examples      | number, string, boolean | object, array, function |
| Stored in     | Stack                   | Heap                    |
| Copy behavior | By value                | By reference            |
| GC involved   | ❌ No                   | ✅ Yes                  |
| Lifetime      | Scope-based             | Until unreachable       |

---

## 13 Classes, Interfaces, Abstract (JS Perspective)

> JavaScript does **NOT** have interfaces & abstract classes like Java, but behavior is similar.

```js
class Animal {
  speak() {
    console.log("sound");
  }
}
```

### Memory Placement

| Item               | Stored In |
| ------------------ | --------- |
| Class definition   | Heap      |
| Methods            | Heap      |
| Instance           | Heap      |
| Instance reference | Stack     |

---

## 14 Inheritance Memory Flow

```js
class A {
  a() {}
}

class B extends A {
  b() {}
}

let obj = new B();
```

### Memory Explanation

- Parent methods stored once (Heap)
- Child methods stored once (Heap)
- Object links prototype chain

| Item             | Stored In |
| ---------------- | --------- |
| Prototype chain  | Heap      |
| Object reference | Stack     |

---

## 15 Async / Await Memory Model (VERY IMPORTANT)

```js
async function fetchData() {
  let result = await fetch("/api");
  return result;
}
```

### What happens internally

| Phase         | Memory             |
| ------------- | ------------------ |
| Function call | Stack              |
| Promise       | Heap               |
| Await pause   | Call stack cleared |
| Resume        | New stack frame    |

✔ Prevents stack blocking
✔ Enables concurrency

---

## 16 Event Loop & Memory (Short but Critical)

| Component       | Stored In |
| --------------- | --------- |
| Call Stack      | Stack     |
| Microtask Queue | Heap      |
| Macrotask Queue | Heap      |
| Promises        | Heap      |

---

## 17 One MASTER Table (Save Forever)

| Item             | Stack | Heap | Lifetime       |
| ---------------- | ----- | ---- | -------------- |
| number/string    | ✅    | ❌   | Scope          |
| object/array     | ❌    | ✅   | Until GC       |
| object reference | ✅    | ❌   | Scope          |
| function         | ❌    | ✅   | App lifetime   |
| class            | ❌    | ✅   | App lifetime   |
| static member    | ❌    | ✅   | App lifetime   |
| constructor      | ❌    | ✅   | App lifetime   |
| async promise    | ❌    | ✅   | Until resolved |
| loop variable    | ✅    | ❌   | Loop scope     |

---

## 🧠 Final Interview Golden Rules

> - Stack = execution + primitives + references
> - Heap = objects + functions + promises
> - GC cleans heap, not stack
> - Async clears stack temporarily
> - Static lives forever

## 1️⃣ Stack Memory – Lifetime & Behavior

### Concept

> **Stack memory lives from function execution start to function execution end.**

- Stack is used for:
  - Primitive values
  - Object references
  - Function call frames
  - Loop variables

### Example

```js
function test() {
  let a = 10;
  let b = 20;
}

test();
```

### What happens

- Stack frame is created when `test()` starts
- Variables `a` and `b` live in stack
- When function ends → **entire stack frame is removed automatically**

✅ **No Garbage Collector is involved for stack**

---

## 18 Heap Memory – Allocation Timing

### Correct Concept

> **Heap memory is allocated DURING execution, not after execution.**

### Example

```js
let obj = { name: "tom" };
```

### Memory layout

```
Stack                 Heap
-----                 -----
obj   ───────────▶  { name: 'tom' }
```

- Object created immediately at runtime
- Heap stores object
- Stack stores reference

---

## 19 What Actually Triggers Garbage Collection?

### ❌ Common Myth

> “GC runs when it finds `null`.” ❌

### ✅ Correct Rule

> **GC runs when an object becomes UNREACHABLE.**

### Example

```js
let person = { name: "tom" };
person = null;
```

What happens internally:

- Stack reference removed
- Heap object becomes **unreachable**
- Object is now **eligible for GC**

⚠️ GC may run **later**, not immediately

---

## 20 Can GC Run During Program Execution?

### ✅ YES – Very Important

GC can run:

- During normal execution
- Between event‑loop cycles
- Between async tasks
- When memory pressure increases

### Example Timeline

```
Program Start
   |
   |-- Stack frame created
   |-- Heap object created
   |-- Reference removed (obj = null)
   |-- Object unreachable
   |-- GC MAY run here (or later)
   |
Program End
```

👉 **Heap can be cleared BEFORE program ends**

---

## 5️⃣ Does GC Clear Stack Memory?

### ❌ NO

| Memory | How it is cleared                |
| ------ | -------------------------------- |
| Stack  | Automatically when function ends |
| Heap   | By Garbage Collector             |

GC **never touches stack memory**.

---

## 21 Why GC Timing Is NOT Predictable

- Depends on:
  - JavaScript engine (V8, SpiderMonkey)
  - Memory pressure
  - Execution state
  - Optimization strategies

❌ You cannot force GC
❌ You cannot predict GC timing

---

## 22 Correct Final Statement (Use This Everywhere)

> **“Stack memory is automatically cleared at function end. Heap memory is allocated during execution and may be garbage‑collected at any time after objects become unreachable, depending on GC scheduling.”**

---

## 🔥 Quick Truth Table (Save Forever)

| Statement                           | Correct |
| ----------------------------------- | ------- |
| Stack cleared by GC                 | ❌ No   |
| Stack cleared automatically         | ✅ Yes  |
| Heap allocated after execution      | ❌ No   |
| Heap allocated during execution     | ✅ Yes  |
| Heap cleared only at program end    | ❌ No   |
| Heap can be cleared mid‑execution   | ✅ Yes  |
| `null` triggers GC immediately      | ❌ No   |
| Unreachable objects eligible for GC | ✅ Yes  |

---

## 🧠 Interview‑Ready Golden Rules

> - Stack = execution lifetime
> - Heap = dynamic lifetime
> - GC works on heap only
> - GC timing is unpredictable
> - `null` removes reference, not memory

---
