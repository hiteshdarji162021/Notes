# TypeScript Functions, Function Overloading & Access Modifiers

---

## 1️⃣ Theory (Easy for Students)

### 1.1 What is a Function Return Type?

A **return type** tells TypeScript what kind of value a function will return.

Why it is important:

- Prevents wrong return values
- Helps IDE auto-suggestions
- Makes code readable and safe

Common return types:

- `number` → returns a number
- `string` → returns text
- `boolean` → true / false
- `void` → returns nothing
- `never` → never finishes (error or infinite loop)
- `array` → `string[]`, `number[]`
- `object` → `{}` or typed object

---

### 1.2 What is Function Overloading?

Function overloading means:

> **Same function name, different parameter types or count**

Rules in TypeScript:

1. Multiple method signatures (no body)
2. Only **one implementation** with logic
3. Used for better type safety

Why needed:

- Real-world APIs behave differently based on inputs
- Cleaner and readable code
- Avoids multiple function names

---

### 1.3 Access Specifiers (OOP)

Access specifiers control **where variables and methods can be accessed**.

| Modifier    | Accessible Where         |
| ----------- | ------------------------ |
| `public`    | Everywhere               |
| `protected` | Same class + child class |
| `private`   | Same class only          |

Default in TypeScript = `public`

---

## 2️⃣ Function Return Types – Code Examples

### 2.1 Return number

```ts
function add(x: number, y: number): number {
  return x + y;
}

console.log(add(10, 20));
```

**Output**

```
30
```

---

### 2.2 void function

```ts
function print(): void {
  console.log("some info....");
}
print();
```

**Output**

```
some info....
```

Use case: logging, clicking, navigation

---

### 2.3 boolean return

```ts
function isElementDisplayed(element: string, timeout: number): boolean {
  console.log(`ele is present on the page : ${element}`);
  return true;
}
```

Use case: Playwright / Selenium validations

---

### 2.4 Array return

```ts
function getData(): string[] {
  return ["macbook", "imac", "canon"];
}
```

---

### 2.5 never return type

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

Use case:

- Fatal application errors
- Test stop conditions

---

## 3️⃣ Class & Access Specifiers

### Employee Class

```ts
export class Employee {
  public name: string;
  protected age: number;
  private salary: number;
  public isActive: boolean;

  constructor(name: string, age: number, salary: number, isActive: boolean) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.isActive = isActive;
  }

  public getSalary(): number {
    return this.salary;
  }

  protected getUserData(): void {
    console.log("Protected user data");
  }
}
```

---

### Child Class Access

```ts
class User extends Employee {
  static start(): void {
    let u1 = new User("tom", 20, 3000, true);
    console.log(u1.name); // public
    console.log(u1.getSalary());
    u1.getUserData(); // protected
    // u1.salary ❌ private
  }
}
User.start();
```

---

## 4️⃣ Function Overloading Examples

### 4.1 Calculator Example

```ts
class Calc {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: number, b: boolean): string;

  add(a: any, b: any): any {
    return a + b;
  }
}
```

**Output**

```ts
c1.add(10, 20); // 30
c1.add("hi", "js"); // hijs
```

---

### 4.2 E-Commerce Search (Real Project Style)

```ts
class EComm {
  search(name: string, color: string): string[];
  search(name: string, price: number): string[];

  search(name: string, value: string | number): string[] {
    console.log("searching...");
    return ["macbook", "imac"];
  }
}
```

Use case:

- Search filters
- APIs
- Backend services

---

### 4.3 Login Overloading (Best Example)

```ts
function login(username: string, password: string): boolean;
function login(username: string, password: string, role: string): boolean;
function login(username: string, otp: number): boolean;

function login(
  username: string,
  otpOrPassword: string | number,
  role?: string,
): boolean {
  if (typeof otpOrPassword === "number") {
    return true;
  }
  return true;
}
```

Use case:

- OTP login
- Role-based login
- Enterprise authentication

---

## 5️⃣ Best Practices (Industry)

✅ Always define return types

✅ Use `void` for actions

✅ Use `never` for fatal errors

✅ Prefer function overloading instead of `any`

✅ Keep variables `private` by default

✅ Expose behavior using `public methods`

---

## 6️⃣ Final Comparison Table

| Feature     | Purpose       | Real Use               |
| ----------- | ------------- | ---------------------- |
| Return Type | Output safety | Automation, APIs       |
| void        | Actions only  | Click, log             |
| never       | App stop      | Crash handling         |
| Overloading | Flexible APIs | Login, search          |
| public      | Open access   | Services               |
| protected   | Inheritance   | Framework base classes |
| private     | Encapsulation | Secur                  |
