# What covered in notes

- Class & Object
- readonly Keyword
- Inheritance
- super Keyword
- Private Constructor
- Singleton Pattern
- Builder Pattern

## Why we learn?

- Class & Object → Used to structure code into reusable, real-world entities.
- readonly Keyword → Used to prevent accidental modification of important data.
- Inheritance → Used to reuse and extend existing functionality.
- super Keyword → Used to access parent class properties and methods.
- Private Constructor → Used to restrict object creation from outside a class and prevent inheritance.
- Singleton Pattern → Used to ensure only one instance of a class exists.
- Builder Pattern → Used to create complex objects step-by-step in a readable way.

---

# 1. Class & Object

## 🔹 Theory (Very Simple)

- **Class** = Blueprint / Design
- **Object** = Real thing created from the class

Example:

- Class = Car design
- Object = Your actual car

---

## 🔹 Code Example

```ts
export class User {
  public name: string;
  public age: number;
  public salary: number;
  readonly shares: number;

  constructor(name: string, age: number, salary: number, shares: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.shares = shares;
  }

  drive(): void {
    console.log("user is driving: " + this.name);
  }
}
```

### Creating Objects

```ts
let u1 = new User("Abhi", 30, 12.33, 800);
let u2 = new User("Manisha", 28, 15.5, 1500);

u1.drive();
console.log(u1.shares);
```

### Output

```
user is driving: Abhi
800
```

---

## 🔹 Use case

- User data
- Employee record
- Customer details

---

# 2. readonly Keyword

## 🔹 Theory

- `readonly` means value **cannot be changed after constructor**
- Similar to `final` in Java

Why needed?

- Prevent accidental modification
- Data safety

---

```ts
readonly shares: number;
```

❌ Not allowed:

```ts
u1.shares = 900; // Compile-time error
```

---

# 3. Inheritance (Parent → Child)

## 🔹 Theory

- Child class **inherits** properties and methods from parent
- Helps code reuse

---

## 🔹 Code Example

```ts
export class Car {
  constructor(
    public name: string,
    public color: string,
    public price: number,
  ) {}

  start(): void {
    console.log("car start");
  }

  stop(): void {
    console.log("car stop");
  }
}

export class BMW extends Car {
  constructor(name: string, color: string, price: number) {
    super(name, color, price);
  }

  override start(): void {
    console.log("BMW start");
  }

  autoParking(): void {
    console.log("BMW auto parking");
  }
}
```

### Usage

```ts
let bm = new BMW("RollsRoyce", "Blue", 1);
bm.start();
bm.stop();
bm.autoParking();
```

### Output

```
BMW start
car stop
BMW auto parking
```

---

## 🔹 Use case

- Vehicle hierarchy
- Base framework classes
- Page Object inheritance

---

# 4. super Keyword (Parent Access)

## 🔹 Theory (Very Simple)

The `super` keyword is used **inside a child class** to access:

1. Parent class **constructor**
2. Parent class **methods**
3. Parent class **variables**

Think like this:

- `this` → current (child) class
- `super` → parent class

---

## 4.1️⃣ super in Constructor (MOST IMPORTANT)

### 🔹 Theory

- If parent class has a constructor, **child MUST call `super()`**
- `super()` initializes parent properties
- It must be the **first line** in child constructor

---

### 🔹 Code Example (Using Your Previous Code)

```ts
export class Car {
  constructor(
    public name: string,
    public color: string,
    public price: number,
  ) {}
}

export class BMW extends Car {
  constructor(name: string, color: string, price: number) {
    super(name, color, price); // calling parent constructor
  }
}
```

### ❌ Without super (Compile-Time Error)

```ts
// Error: Constructors for derived classes must contain a 'super' call
```

---

## 4.2️⃣ super for Method Access

### 🔹 Theory

- Used when **child overrides parent method**
- You still want to call parent behavior

---

### 🔹 Code Example

```ts
class Vehicle {
  start(): void {
    console.log("Vehicle starting");
  }
}

class Bike extends Vehicle {
  override start(): void {
    super.start(); // parent method call
    console.log("Bike starting");
  }
}

let b = new Bike();
b.start();
```

### Output

```
Vehicle starting
Bike starting
```

---

## 4.3️⃣ super for Variable Access

### 🔹 Theory

- Access parent class properties
- Useful when child reuses or logs parent values

---

### 🔹 Code Example

```ts
class Employee {
  constructor(public company: string) {}
}

class Manager extends Employee {
  constructor(company: string) {
    super(company);
    console.log("Company is:", super.company);
  }
}

new Manager("TCS");
```

### Output

```
Company is: TCS
```

---

## 🔑 Key Rules (Interview Important)

1. `super()` must be called before `this`
2. Only usable inside child class
3. Required when parent has constructor
4. Commonly used in framework base classes

---

# 5. Private Constructor

## 🔹 Theory

- `private constructor` means:
  - ❌ Cannot create object using `new`
  - ❌ Cannot extend the class

Used for:

- Utility classes
- Singleton pattern

---

```ts
export class Util {
  private constructor() {}

  static readPDF(): void {
    console.log("read pdf");
  }

  static writeExcel(): void {
    console.log("write excel");
  }
}

Util.readPDF();
Util.writeExcel();
```

### Output

```
read pdf
write excel
```

---

## 🔹 Use case

- Common helpers
- File utilities
- Framework utilities

---

## 6. Singleton Pattern

## 🔹 Theory

- Only **ONE object** of class allowed
- Shared globally

When needed?

- Configuration
- DB connection
- One-user-at-a-time logic

---

```ts
export class Customer {
  private static customer: Customer;
  private constructor() {}

  static getInstance(): Customer {
    if (!Customer.customer) {
      Customer.customer = new Customer();
    }
    return Customer.customer;
  }

  getInfo(): void {
    console.log("getting customer info");
  }
}
```

### Usage

```ts
let c1 = Customer.getInstance();
let c2 = Customer.getInstance();

console.log(c1 === c2);
Customer.getInstance().getInfo();
```

### Output

```
true
getting customer info
```

---

## ⚠️ Limitation

- Not good for parallel execution
- Avoid in UI automation

---

## 7. Builder Pattern (Fluent / Chaining)

## 🔹 Theory

- Build object **step by step**
- Uses method chaining
- Improves readability

---

## 🔹 Builder Example – Shopping Flow

```ts
export class Shop {
  private constructor() {}

  static builder(): Shop {
    return new Shop();
  }

  login(): Shop {
    console.log("login done");
    return this;
  }

  search(): Shop {
    console.log("searched product");
    return this;
  }

  addToCart(): Shop {
    console.log("add to cart");
    return this;
  }

  payment(): Shop {
    console.log("payment done");
    return this;
  }

  logout(): Shop {
    console.log("logout");
    return this;
  }

  build(): void {
    console.log("email sent. shopping done");
  }
}
```

### Usage

```ts
Shop.builder().login().search().addToCart().payment().logout().build();
```

### Output

```
login done
searched product
add to cart
payment done
logout
email sent. shopping done
```

---

## 🔹 Builder Example – User Payload

```ts
class UserBuilder {
  private user: any = {};

  setName(name: string): UserBuilder {
    this.user.name = name;
    return this;
  }

  setEmail(email: string): UserBuilder {
    this.user.email = email;
    return this;
  }

  setRole(role: string): UserBuilder {
    this.user.role = role;
    return this;
  }

  build() {
    return this.user;
  }
}
```

### Usage

```ts
const payload = new UserBuilder()
  .setName("Hitesh")
  .setEmail("test@mail.com")
  .setRole("admin")
  .build();

console.log(payload);
```

### Output

```
{ name: 'Hitesh', email: 'test@mail.com', role: 'admin' }
```

---

## 🔹 Use case

- Test data creation
- API payloads
- UI workflows

---

# ⭐ Final Summary Table

| Topic               | Purpose           | Real Use          |
| ------------------- | ----------------- | ----------------- |
| Class               | Blueprint         | Domain models     |
| Object              | Real instance     | Runtime data      |
| readonly            | Safety            | Immutable values  |
| Inheritance         | Reuse             | Framework design  |
| Private constructor | Restrict creation | Utils / Singleton |
| Singleton           | One instance      | Config / API      |
| Builder             | Flexible creation | Test data         |
| Single-turn         | Atomic logic      | Validation        |

---

## 🧠 Final Thought

> **Strong fundamentals in OOP & patterns make Playwright frameworks scalable and interview-proof.**
