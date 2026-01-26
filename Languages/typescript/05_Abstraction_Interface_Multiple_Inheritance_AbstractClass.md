# OOP Concepts in TypeScript – Inheritance, Interface, Abstraction (Complete Guide)

# What covered in notes

- Inheritance
- Interface
- INTERFACE AS TYPE
- Interface intersection (`&`)
- Abstraction
- Encapsulation

## Why we learn?

- Inheritance → Used to reuse and extend existing class behavior.
- Interface → Used to define a strict contract that classes must follow.
- Interface as Type → Used to describe the shape of data and enforce type safety.
- Abstraction → Used to hide implementation details and expose only what is necessary.
- Encapsulation → Used to protect internal state by controlling access through methods.

---

## 1. Inheritance

This diagram visually explains **how inheritance and interfaces flow together** in the Medical example.

![alt text](images/inheritanceinterfaceflow.png)

### Image theory

1. **Top boxes (WHO, UNSC)**
   - who interface also extends class (only possible in javascript that interface extends class. Normally class extends interface)
   - These are **interfaces**
   - They define _capabilities / rules_ (no implementation)

2. **Middle boxes (USMedical, UKMedical, IndianMedical)**
   - These are also **interfaces**
   - They **extend multiple interfaces** (multiple inheritance allowed)

3. **Medical class**
   - This is a **normal class**
   - Only **single inheritance** is allowed using `extends`

4. **MaxHospital (final class)**
   - `extends Medical` → reuse behavior
   - `implements USMedical, UKMedical, IndianMedical` → promise to implement all methods

5. **Emergency method (common method)**
   - Declared in multiple interfaces
   - Implemented **only once** in `MaxHospital`

This diagram answers the most common student confusion:

> "Why TypeScript allows multiple inheritance using interface but not class?"

---

### PART 1: INTERFACE + INHERITANCE (Medical Example)

## 1. `admin` class (Concrete class)

```ts
export class admin {
  billing(): void {
    console.log("billing admin");
  }
}
```

---

### 2. `who` interface (Interface extending a class)

```ts
import { admin } from "./admin";

// Interface extending a class (allowed in TypeScript)
export interface who extends admin {
  covid(): void;
}
```

### Notes for students

- Practically **rare**, but **allowed in TypeScript**
- Interface inherits **method signatures only**

---

### 3. `UNSC` interface

```ts
export interface UNSC {
  publicMediaNews(): void;
}
```

---

### 4. `USmedical` interface (Multiple inheritance)

```ts
import { UNSC } from "./UNSC";
import { who } from "./who";

export interface USmedical extends who, UNSC {
  min_free: number;
  physio(): void;
  cardio(): void;
  emergency(): void;
}
```

### Key learning

- **Multiple interface inheritance is allowed** in TypeScript
- **100% abstraction**

---

### 5. `UKMedical` interface

```ts
export interface UKMedical {
  oncology(): void;
  pedia(): void;
  dental(): void;
  emergency(): void;
}
```

---

### 6. `Indiamedical` interface

```ts
export interface Indiamedical {
  gastro(): void;
  ent(): void;
  emergency(): void;
}
```

---

### 7. `Medical` base class (Single inheritance)

```ts
export class Medical {
  research(): void {
    console.log("medical research");
  }
}
```

---

### 8. `MaxHospital` class (REAL implementation)

```ts
import { Indiamedical } from "./Indiamedical";
import { UKMedical } from "./UKMedical";
import { USmedical } from "./USmedical";
import { Medical } from "./Medical";

export class MaxHospital
  extends Medical
  implements USmedical, UKMedical, Indiamedical
{
  min_free: number = 10;

  billing(): void {
    console.log("billing");
  }

  publicMediaNews(): void {
    console.log("publicMediaNews");
  }

  covid(): void {
    console.log("covid who");
  }

  emergency(): void {
    console.log("emergency"); // implemented once only
  }

  gastro(): void {
    console.log("MaxHospital: Providing gastroenterology services");
  }

  ent(): void {
    console.log("MaxHospital: Providing ENT services");
  }

  oncology(): void {
    console.log("MaxHospital: Providing oncology services");
  }

  pedia(): void {
    console.log("MaxHospital: Providing pediatric services");
  }

  dental(): void {
    console.log("MaxHospital: Providing dental services");
  }

  physio(): void {
    console.log("MaxHospital: Providing physiotherapy services");
  }

  cardio(): void {
    console.log("MaxHospital: Providing cardiology services");
  }

  opd(): void {
    console.log("max hospital opd services");
  }

  override research(): void {
    console.log("max research");
  }
}
```

---

### 9. Execution Code + Output

```ts
import { MaxHospital } from "./MaxHospital";

let mx = new MaxHospital();

mx.cardio();
mx.dental();
mx.emergency();
mx.ent();
mx.gastro();
mx.oncology();
mx.opd();
mx.pedia();
mx.physio();
mx.research();
mx.publicMediaNews();
console.log(mx.min_free);
```

---

## 2. ABSTRACT CLASS (Page Object Model Example)

## 10. Abstract `Page` class

```ts
export abstract class Page {
  name: string;
  timer: number;

  constructor(name: string, timer: number) {
    this.name = name;
    this.timer = timer;
  }

  abstract title(): void;
  abstract url(): void;

  loadingTime(): void {
    console.log("page -- loading...10 secs");
  }
}
```

### Why abstract class?

- Base template for all pages
- Shared logic + enforced methods

---

### `LoginPage` implementation

```ts
export class LoginPage extends Page {
  constructor(name: string, timer: number) {
    super(name, timer);
  }

  override title(): void {
    console.log("login page title");
  }

  override url(): void {
    console.log("login page url -- http://abc.com");
  }

  override loadingTime(): void {
    console.log("login page -- loading...2 secs");
  }

  login(username: string, password: string): void {
    console.log("login with :" + username, password);
  }
}
```

---

### Execution

```ts
let lp = new LoginPage("amazon", 40);

console.log(lp.name, lp.timer);

lp.title();
lp.url();
lp.loadingTime();
lp.login("admin", "admin");
```

---

## 3. INTERFACE AS TYPE (Composition)

```ts
export interface User {
  name: string;
  age: number;
  drive(): void;
}

export interface Customer {
  salary: number;
  login(): boolean;
}
```

---

## 4. Interface intersection (`&`)

```ts
let user: User & Customer = {
  name: "Tom",
  age: 30,
  salary: 12.33,

  login(): boolean {
    console.log("user is logged", user.name, user.age);
    return true;
  },

  drive(): void {
    console.log("user is driving", user.name, user.age);
  },
};

console.log(user.name);
user.drive();
user.login();
console.log(user.salary);
```

### Why use this?

- API response modeling
- DTOs
- Dynamic object composition

---

# FINAL SUMMARY (Framework Rule)

| Situation           | Use                   |
| ------------------- | --------------------- |
| Common capability   | Interface             |
| Shared behavior     | Abstract class        |
| Tool specific logic | Class                 |
| Multiple capability | Interface inheritance |
| Driver setup reuse  | `super()`             |
| Safe method change  | `override`            |
| Data modeling       | Interface as type     |

---

### ONE LINE TO REMEMBER

> **Interfaces define WHAT, abstract classes define HOW partially, and classes define the final implementation.**

### Notes

## 5. Abstraction

> **Abstraction means showing only what is needed and hiding unnecessary details.**

⚠️ Important correction for students:

- Abstraction **does NOT mean no implementation**
- It means **controlled visibility of behavior**

---

## 2. Levels of Abstraction (0% → 100%)

| Level               | Description                        | Example                     |
| ------------------- | ---------------------------------- | --------------------------- |
| 0% abstraction      | Normal class (full implementation) | `class LoginPage {}`        |
| Partial abstraction | Abstract class                     | `abstract class Page {}`    |
| 100% abstraction    | Interface                          | `interface Login {}`        |
| 0–100%              | Abstract class can vary            | Abstract + concrete methods |

---

### Abstract Class

### Definition

> An abstract class is a **partially abstract blueprint** for child classes.

### Key rules

- Can have **abstract + non-abstract methods**
- Can have **variables**
- Can have **constructor**
- ❌ Cannot create object of abstract class

```ts
abstract class Page {
  abstract title(): void;

  loading(): void {
    console.log("page loading");
  }
}

// ❌ Not allowed
// const p = new Page();
```

---

## 4. Interface (100% Abstraction)

### Definition

> Interface defines **WHAT a class must do**, not HOW.

### TypeScript Interface Rules

- 100% abstraction
- Only method declarations
- No method body
- No constructor
- No static method
- No default method
- No object creation

```ts
interface LoginActions {
  login(): void;
}
```

---

### Multiple Interface Inheritance (TypeScript Feature)

⚠️ **Important difference**

- TypeScript ✅ allows **multiple interface inheritance**
- Java ❌ does NOT allow this

### Example

```ts
import { UNSC } from "./UNSC";
import { who } from "./who";

export interface USmedical extends who, UNSC {
  min_free: number;
  physio(): void;
  cardio(): void;
  emergency(): void;
}
```

### Key learning

- Interface can extend **multiple interfaces**
- This enables **multiple inheritance safely**

---

## 6. BIG Interview Question

### ❓ Why not use abstract class instead of interface if abstract class can also give 100% abstraction?

### ✅ Correct Answer

Because:

### 🔴 Multiple inheritance of classes is NOT allowed

```ts
class A {}
class B {}

// ❌ Not allowed
class C extends A, B {}
```

### ✅ But multiple interface implementation IS allowed

```ts
class C implements I1, I2, I3 {}
```

### Conclusion

| Reason               | Abstract Class | Interface  |
| -------------------- | -------------- | ---------- |
| Multiple inheritance | ❌ Not allowed | ✅ Allowed |
| Contract enforcement | ⚠️ Partial     | ✅ Strong  |
| Capability modeling  | ❌ Weak        | ✅ Best    |

👉 **That is why interfaces exist.**

---

## 7. Encapsulation (Different from Abstraction)

### Definition

> **Encapsulation means hiding internal data and implementation details.**

### Focus

- Security
- Data protection
- Controlled access

```ts
class ATM {
  private pin: number = 1234;

  public withdraw(): void {
    this.validatePin();
    console.log("cash withdrawn");
  }

  private validatePin(): void {
    console.log("pin validated");
  }
}
```

### Real-life example

- ATM machine
- User sees buttons
- User does NOT see internal logic

---

## 8. Abstraction vs Encapsulation vs Interface (Final Comparison)

| Feature              | Abstraction                | Encapsulation      | Interface       |
| -------------------- | -------------------------- | ------------------ | --------------- |
| Purpose              | Hide complexity            | Protect data       | Define contract |
| Focus                | Design                     | Security           | Capability      |
| Achieved using       | Abstract class / Interface | private, protected | Interface       |
| Implementation       | Partial / None             | Yes                | None            |
| Object creation      | ❌ (abstract)              | ✅                 | ❌              |
| Multiple inheritance | ❌                         | N/A                | ✅              |

---

### . Practical Playwright Framework Use‑Cases

### Interface – Tool Independence

```ts
interface BrowserActions {
  click(): void;
  type(): void;
}
```

- SeleniumActions implements BrowserActions
- PlaywrightActions implements BrowserActions

👉 Same tests, different tools

---

### Abstract Class – Shared Logic

```ts
abstract class BasePage {
  constructor(protected page) {}

  waitForLoad(): void {
    console.log("waiting for page");
  }
}
```

👉 Shared behavior across all pages

---

### Encapsulation – Safety

```ts
class DriverManager {
  private browser;

  public getPage() {
    return this.browser;
  }
}
```

👉 Internal driver logic hidden

---

## 10. When to Use WHAT (Golden Rule)

| Situation              | Use            |
| ---------------------- | -------------- |
| Define framework rules | Interface      |
| Share base behavior    | Abstract class |
| Hide sensitive logic   | Encapsulation  |
| Support multiple tools | Interface      |
| Base Page Object       | Abstract class |

---

## FINAL STUDENT NOTES (MEMORIZE)

- **Interface = WHAT**
- **Abstract class = WHAT + partial HOW**
- **Encapsulation = HIDE internal details**
