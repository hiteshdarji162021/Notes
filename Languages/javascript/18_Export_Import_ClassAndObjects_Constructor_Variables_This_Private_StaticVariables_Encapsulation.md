# JavaScript Modules, Private Variables & Static Members – Complete Guide

---

## 1️⃣ JavaScript Modules: `export` & `import`

JavaScript modules help us **split code into multiple files**, making applications:

- Maintainable
- Reusable
- Scalable

Each file is treated as its **own scope**.

---

## 2️⃣ Named Export (Single Export)

### Code

```js
export let p1 = 3.14;

export function add(a, b) {
  return a + b;
}
```

### Use Case

- Exporting utilities
- Exporting constants or helper functions

---

## 3️⃣ Named Export (Multiple Export at Once)

### Code

```js
let p2 = 3.14;

function add1(a, b) {
  return a + b;
}

export { p2, add1 };
```

### Benefit

- Cleaner syntax
- Grouped exports

---

## 4️⃣ Default Export (Only One Per File)

### Code

```js
let price = 100;
export default price;
```

### Rules

- Only **one default export per file**
- Can export variable OR function OR class

---

## 5️⃣ Importing Modules (Named + Default + Alias)

### Code

```js
import price, { p1 as test, p2, add, add1 } from "./18_export.js";

console.log(test); // 3.14
console.log(add(100, 200)); // 300
console.log(p2); // 3.14
console.log(add1(100, 200)); // 300
console.log(price); // 100
```

### Output

```
3.14
300
3.14
300
100
```

---

## 6️⃣ Import Everything Using `* as`

### Code

```js
import * as mymath from "./18_export.js";

console.log(mymath.p1);
console.log(mymath.add(100, 200));
```

### Output

```
3.14
300
```

### Use Case

- Library-style imports
- Namespace safety

---

## 7️⃣ Private Variables & Methods (`#`) – Encapsulation

### Code

```js
class Car {
  #price;

  constructor(name, price) {
    this.name = name;
    this.#price = price;
  }

  #test1() {
    console.log("private method");
  }

  testDriver() {
    console.log(`Test driving the car ${this.name} priced at ${this.#price}`);
  }

  sum = function () {
    console.log("anonymous function");
  };
  sub = () => {
    console.log("arrow function");
  };

  setPrice(newPrice) {
    this.#price = newPrice;
  }

  getPrice() {
    return this.#price;
  }
}

let c1 = new Car("BMW", 50000);
console.log(c1.name);
c1.testDriver();
c1.sum();
c1.sub();
```

### Output

```
BMW
Test driving the car BMW priced at 50000
anonymous function
arrow function

```

### Key Rules

- `#` fields are **strictly private**
- Not accessible outside class
- Enforces encapsulation

---

## 8️⃣ Getter & Setter (Controlled Access)

### Code

```js
console.log(c1.getPrice()); // 50000
c1.setPrice(55000);
console.log(c1.getPrice()); // 55000
```

### Use Case

- Validation
- Security
- Controlled updates

---

## 9️⃣ Private Methods – Real-Time Example

### Code

```js
class Browser {
  launch() {
    console.log("launching browser");
    this.#checkRam();
    this.#checkVersion();
    this.#checkOSCompatibility();
    this.#checkNewUpdates();
    console.log("browser launched successfully");
  }

  #checkRam() {
    console.log("8GB RAM");
  }
  #checkVersion() {
    console.log("Version 1.1");
  }
  #checkOSCompatibility() {
    console.log("Windows & MacOS");
  }
  #checkNewUpdates() {
    console.log("No updates");
  }
}

let browser = new Browser();
browser.launch();
```

### Output

```
launching browser
8GB RAM
Version 1.1
Windows & MacOS
No updates
browser launched successfully
```

### Use Case

- Hide internal logic
- Security checks
- Framework internals

---

## 🔟 Static Variables & Static Methods

### Code

```js
class Employee {
  static timeOut = 10;

  static readExcelData() {
    console.log("read data from excel");
  }

  writeData() {
    console.log("write data in excel");
  }
}

let emp = new Employee();

console.log(Employee.timeOut);
Employee.readExcelData();
emp.writeData();
```

### Output

```
10
read data from excel
write data in excel
```

### Key Rules

- Static members belong to **class**, not instance
- Access using `ClassName.member`
- Shared across all objects

---

## 1️⃣1️⃣ Comparison Tables (IMPORTANT)

### Export Types

| Type           | Count    | Access   |
| -------------- | -------- | -------- |
| Named Export   | Multiple | `{ }`    |
| Default Export | One only | Any name |

---

### Private vs Public vs Static

| Feature           | Private | Public | Static |
| ----------------- | ------- | ------ | ------ |
| Access via object | ❌      | ✅     | ❌     |
| Access via class  | ❌      | ❌     | ✅     |
| Encapsulation     | ✅      | ❌     | ❌     |
| Shared            | ❌      | ❌     | ✅     |

---

## 1️⃣2️⃣ Best Practices

✔ Use named exports for utilities
✔ Use default export for main feature
✔ Use private fields for encapsulation
✔ Use getters/setters for control
✔ Use static members for common config
✔ Avoid global variables

---

## Final Summary

> Modules organize code, private fields protect data, and static members share behavior across objects — together they form clean, scalable JavaScript architecture.

---

✅ This document is **student-ready**, **interview-ready**, and **future-proof**.
