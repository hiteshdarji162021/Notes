# TypeScript Functions, Function Overloading & Access Modifiers

# What covered in notes

- TypeScript Functions
- Function Overloading
- Access Modifiers

## Why we learn?

---

## 1 What is a Function Return Type?

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

### 2.6 Object return type

```ts
function getUser(): { name: string; age: number } {
  return {
    name: "Hitesh",
    age: 30,
  };
}
```

✔ Function must return both `name` and `age`
✔ Wrong type or missing key → compile-time error

---

### Why Use Object Return Types

- Enforces return structure
- Improves readability
- Prevents runtime bugs
- Helps IDE auto-complete

---

### Better Approach: Using Interface (Recommended)

```ts
interface User {
  name: string;
  age: number;
}

function fetchUser(): User {
  return {
    name: "Hitesh",
    age: 30,
  };
}

const user1 = fetchUser();

console.log(user1);
```

### Output

```ts
{ name: 'Hitesh', age: 30 }
```

✔ Cleaner
✔ Reusable
✔ Scalable

---

### Object Return Type in Automation (Playwright)

```ts
function getTestResult(): { status: string; duration: number } {
  return {
    status: "PASSED",
    duration: 1200,
  };
}
```

Useful for:

- Test summaries
- Custom reporters
- Result aggregation

---

### Common Mistake

```ts
function getData(): { id: number } {
  return { id: 1, name: "test" }; // ❌ Extra property error
}
```

TypeScript prevents incorrect return shapes.

---

### Interview Tip

> Use object return types when a function returns **structured data** instead of a single value.

---

### Summary

- Object return types define **exact return shape**
- Prefer `interface` or `type` for real projects
- Very common in APIs and automation frameworks

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

- We can implment method only once so use any keyword if use function overloading.

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
  search(name: string, price: number, seller: string): string[];
  search(name: string, price: number, seller: string, zip: number): string[];
  search(name: string, color: string, seller: string, zip: number): string[];

  search(
    name: string,
    colorOrPrice: string | number,
    seller?: string,
    zip?: number,
  ): string[] {
    console.log("searhing the product.....");
    console.log(`${name} - ${colorOrPrice}, - ${seller} - ${zip}`);
    return ["macbook pro", "imac", "ipad"];
  }
}

let ec = new EComm();
ec.search("macbook pro", "white");
ec.search("apple", 1000);
ec.search("imac", 400, "amazon");
ec.search("canon", 500, "amazon", 90900);
ec.search("Apple", "black", "flipkart", 989898);
```

### Output

```ts
searhing the product.....
macbook pro - white, - undefined - undefined
searhing the product.....
apple - 1000, - undefined - undefined
searhing the product.....
imac - 400, - amazon - undefined
searhing the product.....
canon - 500, - amazon - 90900
searhing the product.....
Apple - black, - flipkart - 989898
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
  if (username && otpOrPassword) {
    if (typeof otpOrPassword === "number") {
      console.log(`login with username: ${username} and otp: ${otpOrPassword}`);
      return true;
    } else if (role) {
      console.log(
        `login with username: ${username} and password: ${otpOrPassword} and role: ${role}`,
      );
      return true;
    } else {
      console.log(
        `login with username: ${username} and password: ${otpOrPassword}`,
      );
      return true;
    }
  } else {
    console.log("invalid credentails..");
    return false;
  }
}

console.log(login("admin", "admin"));
console.log(login("admin", 9090));
console.log(login("naveen", "naveen123", "administrator"));
//console.log(login('admin', 9090, 'seller'));//CT error
//console.log(login('admin')); //CT error
```

### Output

```ts
login with username: admin and password: admin
true
login with username: admin and otp: 9090
true
login with username: naveen and password: naveen123 and role: administrator
true
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
