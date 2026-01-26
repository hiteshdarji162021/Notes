# What covered in notes

- Typescript Setup
- Diff Javascript and Typescript

## Why we learn?

- Typescript - We use TypeScript instead of JavaScript in projects to catch errors at compile time, improve code maintainability, and make large applications safer and easier to scale.”

---

## 1. What is TypeScript? (Very Simple)

- TypeScript is **JavaScript with rules**
- It helps you catch mistakes **before running code**
- Browser and Node.js **cannot run TypeScript directly**
- TypeScript is converted into JavaScript

Flow:

```
TypeScript (.ts) → Compiler (tsc) → JavaScript (.js) → Run
```

---

## 2. What you need before starting

Make sure you have:

- Node.js installed
- npm available

Check:

```
node -v
npm -v
```

---

## 3. Create a new TypeScript project (FIRST TIME SETUP)

### Step 1: Create project folder

```
mkdir my-typescript-project
cd my-typescript-project
```

---

### Step 2: Initialize Node.js project

This creates `package.json`

```
npm init -y
```

---

### Step 3: Install TypeScript (IMPORTANT)

```
npm install --save-dev typescript
```

or

```
npm install -D typescript
```

Why `--save-dev`?

- TypeScript is used only during development
- It is not needed at runtime

---

### Step 4: Create TypeScript configuration

```
npx tsc --init
```

This creates:

```
tsconfig.json
```

---

## 4. Important files explained

### package.json

- Project details
- Dependencies

### tsconfig.json

- Rules for TypeScript
- How strict your code is
- How TS converts code to JS

### node_modules

- All installed packages

---

## 5. Write your first TypeScript file

Create file:

```
index.ts
```

Code:

```ts
let message: string = "Hello TypeScript";
console.log(message);
```

---

## 6. Compile TypeScript to JavaScript

```
npx tsc index.ts
```

This creates:

```
index.js
```

---

## 7. Run JavaScript file

```
node index.js
```

Output:

```
Hello TypeScript
```

---

## 8. Common beginner mistakes

❌ Forgetting to install TypeScript
❌ Trying to run `.ts` directly using Node
❌ Editing `tsconfig.json` without understanding
❌ Mixing JavaScript and TypeScript randomly

---

## 9. When project grows (Important advice)

As project grows:

- Add folders like `src` and `dist`
- Enable strict rules
- Keep TypeScript version fixed

Example structure:

```
my-typescript-project
├── src
│   └── index.ts
├── dist
├── tsconfig.json
├── package.json
└── node_modules
```

---

## 10. What you should remember (EXAM + INTERVIEW)

- TypeScript is a superset of JavaScript
- TypeScript needs compilation
- `typescript` package provides `tsc`
- `tsconfig.json` controls behavior
- Node runs JavaScript, not TypeScript

---

## 11. One-line student rule

> **Write TypeScript → Compile → Run JavaScript**

---

## 12. Difference between JavaScript and TypeScript (Must-know for students)

This comparison helps you understand **why TypeScript exists**.

| Feature               | JavaScript                             | TypeScript                                                           |
| --------------------- | -------------------------------------- | -------------------------------------------------------------------- |
| Type System           | Dynamically typed (checked at runtime) | Statically typed with optional annotations (checked at compile time) |
| Compilation           | Runs directly in browser or Node.js    | Must be compiled/transpiled to JavaScript (`.ts → .js`)              |
| Syntax                | Standard ECMAScript syntax             | Superset of JavaScript with type syntax                              |
| Error Detection       | Errors found at runtime                | Errors caught at compile time (before execution)                     |
| Tooling Support       | Basic IDE support                      | Advanced IDE support (auto-complete, refactor, type hints)           |
| Interfaces & Types    | Not supported                          | Interfaces, types, enums, tuples, generics supported                 |
| Classes & OOP         | ES6 classes supported                  | ES6 classes + access modifiers (`public`, `private`, `protected`)    |
| Modules               | ES6 modules                            | ES6 modules + namespaces                                             |
| Refactoring Safety    | Risky (runtime errors possible)        | Safe refactoring due to static typing                                |
| Code Maintainability  | Harder for large projects              | Much better for large and long-term projects                         |
| Learning Curve        | Easy for beginners                     | Slightly steep due to types and config                               |
| Coding Speed          | Faster initially                       | Slightly slower initially, faster long-term                          |
| Scalability           | Not ideal for very large apps          | Designed for large-scale applications                                |
| Community & Ecosystem | Very large and mature                  | Very large and growing rapidly                                       |
| Testing & Automation  | Good, but less safe                    | Excellent for automation frameworks                                  |
| Framework Preference  | Used in simple scripts                 | Preferred in Angular, Playwright, NestJS                             |
| Real-world Usage      | Small apps, scripts, quick POCs        | Enterprise apps, automation frameworks                               |

---

## 13 add tsconfig.json file

```js
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "es2015",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "types": ["node", "@playwright/test"]
  },
  "include": ["tests/**/*.ts", "playwright.config.ts"]
}
```

### Core Difference (in one line)

> **JavaScript finds errors at runtime**  
> **TypeScript finds errors before running the code**

---

## Additional Practical Differences (Important)

- TypeScript **reduces runtime bugs** significantly
- TypeScript improves **team collaboration**
- JavaScript is good for **quick demos and learning**
- TypeScript is best for **production and automation frameworks**
- Playwright + TypeScript is **industry standard**

### Example: JavaScript problem

```js
let age = 25;
age = "twenty five"; // No error now
```

❌ Error appears **only when program runs**

---

### Same example in TypeScript

```ts
let age: number = 25;
age = "twenty five"; // Error before run
```

✅ Error caught **while writing code**

---

### Learning curve

- JavaScript: Easy to start
- TypeScript: Slightly harder at start
- But TypeScript becomes **easier in long run**

---

### Performance

- Both run as JavaScript finally
- No runtime performance difference
- TypeScript helps only during development

---

### My practical thoughts (important)

- JavaScript is great for:
  - Beginners
  - Small scripts
  - Quick testing

- TypeScript is best for:
  - Real projects
  - Automation frameworks
  - Team work
  - Long-term maintenance

---

### Student confusion cleared

❓ _Does TypeScript replace JavaScript?_  
➡️ No. TypeScript **becomes JavaScript**.

❓ _Should I skip JavaScript and start TypeScript?_  
➡️ Learn JavaScript basics first, then TypeScript.

---

### Final exam-ready summary

- JavaScript runs directly
- TypeScript needs compilation
- TypeScript catches errors early
- Both end up running JavaScript

---

### One-line rule to remember

> **TypeScript is JavaScript + safety rules**

---
