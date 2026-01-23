# TypeScript Data Types – Beginner Friendly Notes

---

## 1. Why Data Types in TypeScript?

TypeScript adds **data types** to JavaScript so that:

- Errors are caught **before running code**
- Code becomes **easy to read & maintain**
- IDE gives **auto-suggestions**

> JavaScript = flexible but risky  
> TypeScript = slightly strict but safe

---

## 2. Basic (Primitive) Data Types

### 2.1 String

#### Code

```ts
let username: string = "hitesh";
console.log(username);
```

#### Output

```
hitesh
```

#### Use case

- Names
- Emails
- Messages
- URLs

---

### 2.2 Number

#### Code

```ts
let age: number = 22;
console.log(age);
```

#### Output

```
22
```

#### Use case

- Age
- Price
- Quantity
- Score

---

### 2.3 Boolean

#### Code

```ts
let isActive: boolean = true;
console.log(isActive);
```

#### Output

```
true
```

#### Use case

- Login status
- Feature enable/disable
- Conditions

---

## 3. Array Types

### 3.1 Number Array (Homogeneous Array)

> Homogeneous = same type of data

#### Code

```ts
let num: number[] = [1, 2, 3, 4, 5];
num.push(6);
console.log(num);
```

#### Output

```
[1, 2, 3, 4, 5, 6]
```

#### Use case

- List of IDs
- Prices
- Scores

---

### 3.2 String Array – Method 1

#### Code

```ts
let browsers: string[] = ["chrome", "firefox", "safari"];
browsers.push("edge");
console.log(browsers);
```

#### Output

```
['chrome', 'firefox', 'safari', 'edge']
```

---

### 3.3 String Array – Method 2 (Generic Array)

#### Code

```ts
let fruits: Array<string> = ["apple", "banana", "mango"];
fruits.push("orange");
console.log(fruits);
```

#### Output

```
['apple', 'banana', 'mango', 'orange']
```

#### When to use

- Generic style is preferred in **advanced TypeScript**
- Useful with complex types

---

## 4. Tuple

> Tuple = fixed length + fixed order + fixed types

### 4.1 Old Tuple Approach

#### Code

```ts
let person: [string, number, boolean] = ["hitesh", 22, true];
console.log(person);

person.push("developer");
console.log(person);
```

#### Output

```
['hitesh', 22, true]
['hitesh', 22, true, 'developer']
```

⚠️ **Important Note**

- Tuple allows `push()`
- But this breaks the idea of fixed length

---

### 4.2 Named Tuple (Recommended – TS 4.0+)

#### Code

```ts
let employee: [name: string, id: number, isPermanent: boolean] = [
  "rahul",
  101,
  true,
];
console.log(employee);
```

#### Output

```
['rahul', 101, true]
```

#### Use case

- Returning multiple values from function
- Fixed structure data

---

## 5. Enum

> Enum = collection of related constant values

### Code

```ts
enum BROWSER {
  Chrome,
  Firefox = "mozila firefox",
  Safari = "Safari",
  Edge = "Microsoft Edge",
}

console.log(BROWSER.Chrome);
console.log(BROWSER.Firefox);
console.log(BROWSER);
```

### Output

```
0
mozila firefox
{ Chrome: 0, Firefox: 'mozila firefox', Safari: 'Safari', Edge: 'Microsoft Edge' }
```

### Use case

- Fixed options
- Avoid spelling mistakes
- Readable constants

---

## 6. any Type

> `any` disables TypeScript safety

### Code

```ts
let data: any = 25;
console.log(data);

data = "hello";
console.log(data);

data = true;
console.log(data);
```

### Output

```
25
hello
true
```

### Use case

- Migrating old JavaScript
- External data (not recommended)

⚠️ Avoid in real projects

---

## 7. unknown Type (Better than any)

### Code

```ts
let value: unknown = 30;
console.log(value);

value = "typescript";
value = false;
value = "hitesh";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

### Output

```
30
HITESH
```

### Why unknown is better

- Forces type checking
- Safer than `any`

---

## 8. Function with Type Annotations

### Code

```ts
function add1(a: number, b: number): number {
  return a + b;
}

let sum = add1(5, 10);
console.log(sum);
```

### Output

```
15
```

### Use case

- Prevent wrong arguments
- Clear return type

---

## 9. Tuple Example (Revision)

### Code

```ts
let p1: [string, number] = ["hitesh", 23];
console.log(p1);
```

### Output

```
['hitesh', 23]
```

---

## 10. Comparison Table (Very Important)

| Type    | Description       | Safe | Use in Project     |
| ------- | ----------------- | ---- | ------------------ |
| string  | Text data         | ✅   | Always             |
| number  | Numeric data      | ✅   | Always             |
| boolean | true/false        | ✅   | Always             |
| array   | List of same type | ✅   | Very common        |
| tuple   | Fixed structure   | ⚠️   | Limited            |
| enum    | Fixed constants   | ✅   | Recommended        |
| any     | Any type          | ❌   | Avoid              |
| unknown | Unknown data      | ✅   | Preferred over any |

---

## 11. Student Golden Rules

1. Always use **specific types**
2. Avoid `any`
3. Prefer `unknown` over `any`
4. Use enums for fixed values
5. TypeScript helps before runtime

---

### One-line memory trick

> **TypeScript = JavaScript + type safety**

---

(End of notes)
