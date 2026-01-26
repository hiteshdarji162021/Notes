# TypeScript `type` & Error Handling (try / catch / finally)

# What covered in notes

- Type
- Error Handling (try / catch / finally)

## Why we learn?

- Type - Used to create reusable and flexible data definitions with strong type safety.
- Error Handling (try / catch / finally) - Used to handle runtime failures gracefully and keep the application or tests stable.

---

# PART 1️⃣ – THEORY: TypeScript `type`

## 1. What is `type` in TypeScript?

> `type` is used to **define a custom data shape or allowed values**.

It works at **compile time**, not runtime.

---

## 2. Primitive Type Declaration

```ts
let name1: string = "hitesh";
let age: number = 33;
```

### Why this matters

- Prevents assigning wrong values
- Errors caught **before execution**

---

## 3. Union Type (`|`)

```ts
type user = string | number;

// let udetail: user = true; // ❌ Error
```

### Explanation

- Value can be **string OR number**
- Any other type causes **compile-time error**

---

## 4. Literal Union Type (Fixed Values)

```ts
type status = "peding" | "inprogrsss" | "completed" | 100;

let orderstatus: status = "peding";
console.log(orderstatus); // peding

// let orderStatus: status = 'test'; // ❌ Error
```

### Practical Use

- Order status
- Test execution state
- API response state

---

## 5. Object Type with Optional Property

```ts
type user1 = {
  id: string | number;
  name: string;
  salary: number;
  isActive?: boolean; // optional
  createAt: Date;
};
```

### Rules

- Optional property marked with `?`
- Mandatory fields **must be present**
- Extra methods are **NOT allowed**

---

## 6. Object Creation – Example 1

```ts
let newUser: user1 = {
  id: 1,
  name: "John",
  salary: 50000,
  createAt: new Date(),
};
console.log(newUser);
```

### Notes

- `isActive` is optional → safe to omit

---

## 7. Object Creation – Example 2

```ts
let newUser2: user1 = {
  id: 2,
  name: "hitesh",
  salary: 60000,
  isActive: true,
  createAt: new Date(),
};
console.log(newUser2);
```

### Compile-time Protection

- Removing `createAt` ❌ error
- Adding new function ❌ error

---

## 8. Why TypeScript Types Matter in Frameworks

### Playwright Example

```ts
type TestStatus = "passed" | "failed" | "skipped";
```

- Prevents invalid status assignment
- Makes framework predictable

---

# PART 2️⃣ – THEORY: Runtime Errors & Exception Handling

## 9. Runtime Error Example

```ts
let number = 9 / 0;
console.log(number); // Infinity
```

### Explanation

- JavaScript allows this
- No exception thrown
- Logical error, not runtime crash

---

## 10. Call Stack Flow (Function Chain)

```ts
function m1() {
  console.log("m1 method");
  m2();
}

function m2() {
  console.log("m2 method");
  m3();
}

function m3() {
  console.log("m3 method");
  try {
    throw new Error("some error");
  } catch (error) {
    console.log("some error");
    console.log(error);
  } finally {
    console.log("finally");
  }
}

m1();
console.log("bye");
```

---

## 11. Output (Execution Order)

```text
m1 method
m2 method
m3 method
some error
Error: some error
finally
bye
```

### Key Learning

- Error handled → program continues
- `finally` always executes

---

## 12. try / catch / finally Explained

### try

- Wrap risky code

### catch

- Handles error
- Prevents crash

### finally

- Always runs
- Used for cleanup

---

## 13. throw Keyword

```ts
throw new Error("some error");
```

### Why use `throw`

- Custom error
- Force caller to handle issue

---

## 14. Real Project Scenario (IMPORTANT)

> Assume `m3()` is a **third-party library function**.

You **cannot change it**.

### Correct approach

- Handle error in **your own function (m2)**

```ts
function m2() {
  try {
    m3();
  } catch (e) {
    console.log("Handled at m2 level");
  }
}
```

---

# PART 3️⃣ – Practical Playwright Use-Cases

## 15. Handling Playwright Failures

```ts
try {
  await page.click("#submit");
} catch (e) {
  console.log("Element not found");
} finally {
  await page.screenshot();
}
```

### Why this matters

- Test does not crash suddenly
- Debug info captured

---

## 16. Best Practices (VERY IMPORTANT)

### TypeScript

- Use union types instead of `any`
- Use literal types for state
- Prefer `type` for objects

### Error Handling

- Never swallow errors silently
- Log meaningful message
- Handle third-party errors at your boundary
- Use `finally` for cleanup

---

## FINAL STUDENT NOTES

- `type` = compile-time safety
- `try/catch` = runtime safety
- Types prevent bugs **before run**
- try/catch handles bugs **during run**

### Golden Line

> TypeScript protects your code before execution, try/catch protects your app during execution.

---
