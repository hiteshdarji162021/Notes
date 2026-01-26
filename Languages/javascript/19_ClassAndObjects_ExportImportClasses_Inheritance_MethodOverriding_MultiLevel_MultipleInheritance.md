# What covered in notes

- Import and export class
- Inheritance (IS-A Relationship)
- function Overriding vs Variable vs Static

## Why we learn?

- Import and export class - for inheritance
- Inheritance - reuse class and method.
- function Overriding- use same function parent and child

---

## 1. Basic Theory (Very Simple Language)

### What is `export` / `import`?

- `export` → make variable / class / function available to other files
- `import` → use that exported code in another file

Each JS file is its **own scope**.

---

## 2. Exporting Variables & Classes

### Code (Export File: `19.exportclass.js`)

```js
let age = 33;

console.log("hello world"); // runs automatically when file is imported

class TestUtil {
  static counter = 1;

  // static blocks run once when class is loaded
  static {
    console.log("static block 1");
  }
  static {
    console.log("static block 2");
  }

  readData() {
    console.log("read data");
  }

  writeData() {
    this.readData(); // non-static → non-static (this)
    TestUtil.drive(); // non-static → static (class name)
    console.log("write data");
  }

  // private method
  #connectDB() {
    console.log("connect to database");
  }

  static print(tu) {
    console.log("static print method");
    TestUtil.drive(); // static → static
    tu.readData(); // static → non-static (object reference)
  }

  static drive() {
    console.log("static drive method");
  }
}

export { TestUtil, age };
```

### Important Notes (Rules)

```txt
static → static       : ClassName.method()
non-static → non-static : this.method()
non-static → static   : ClassName.method()
static → non-static   : object reference
```

---

## 3. Importing Class & Variable

### Code (Import File)

```js
import { TestUtil, age } from "./19.exportclass.js";

let tu = new TestUtil();

tu.readData();
tu.writeData();
console.log(age);

TestUtil.print(tu);
```

### Output (Order Matters)

```
hello world
static block 1
static block 2
read data
read data
static drive method
write data
33
static print method
static drive method
read data
```

### Real-Time Use Case

- Utility classes
- Common helpers
- Test framework utilities (Playwright, Selenium)

---

## 4. Inheritance (IS-A Relationship)

> **Inheritance = one class gets properties & methods of another class**

---

### Base Class

```js
class Vehicle {
  speed = 50;

  loading() {
    console.log("vehicle loading");
  }
}
```

---

### Child Class – `Car`

```js
class Car extends Vehicle {
  speed = 100;

  start() {
    console.log("car started");
  }

  stop() {
    console.log("car stopped");
  }

  refuel() {
    console.log("car refueled");
  }

  // method overriding
  loading() {
    console.log("car loading");
  }

  static billing() {
    console.log("car billing");
  }
}
```

---

### Child of Child – `BMW`

```js
class BMW extends Car {
  speed = 200;

  // method overriding
  start() {
    super.start(); // optional
    console.log("BMW started with keyless");
    console.log(this.speed);
  }

  autoPark() {
    console.log("BMW auto park feature");
  }

  static billing() {
    console.log("BMW billing");
  }
}

export { Car, BMW };
```

---

## 5. Using Inheritance & Overriding

### Code

```js
import { Car, BMW } from "./inheritance.js";

let myBMW = new BMW();
myBMW.start();
console.log(myBMW.speed);
myBMW.autoPark();
myBMW.refuel();
myBMW.stop();
BMW.billing();
myBMW.loading();
```

### Output

```
car started
BMW started with keyless
200
BMW auto park feature
car refueled
car stopped
BMW billing
car loading
```

---

## 6. Runtime Polymorphism (Very Important)

```js
let b1 = new BMW();
let c1 = new Car();

c1 = b1;

c1.start();
c1.stop();
c1.refuel();
c1.loading();
c1.autoPark();
```

### Output

```
car started
BMW started with keyless
car stopped
car refueled
car loading
BMW auto park feature
```

### Meaning (Simple)

> **Method call depends on object type at runtime, not reference type**

---

## 7. Overriding vs Variable vs Static (VERY IMPORTANT)

### Variable (NOT overridden – only hidden)

```js
// super.speed will NOT work
// variables are not overridden in JS
```

### Method (Overridden ✅)

```js
(start(), loading());
```

### Static Method (Hidden, not overridden)

```js
BMW.billing();
Car.billing();
```

---

## 8. Student Notes (Take Seriously)

```txt
1. Override happens ONLY for methods
2. Variables are NOT overridden (they are hidden)
3. Static methods belong to class, not object
4. super.variable does NOT work
5. super.method() works
6. Multiple inheritance NOT allowed with classes
```

---

## 9. Comparison Table

| Feature                | Java | JavaScript |
| ---------------------- | ---- | ---------- |
| Variable overriding    | ✅   | ❌         |
| Method overriding      | ✅   | ✅         |
| Constructor overriding | ✅   | ✅         |
| Static method override | ❌   | ❌         |
| Multiple inheritance   | ❌   | ❌         |

---

## 10. Real-Time Use Cases

### Automation Framework

- `BaseTest` → common setup
- `LoginTest`, `CheckoutTest` extend it
- Override `runTest()` method

### Business Apps

- `Vehicle` → base pricing logic
- `Car`, `Truck` → override billing

---

## 11. Best Practices

✔ Use inheritance only when IS-A relationship exists
✔ Prefer method overriding over variable hiding
✔ Use `super()` carefully
✔ Keep base classes generic
✔ Avoid deep inheritance chains

---

## Final One-Line Summary

> **JavaScript supports inheritance and method overriding, but NOT variable overriding. This is by design, not a bug.**

---
