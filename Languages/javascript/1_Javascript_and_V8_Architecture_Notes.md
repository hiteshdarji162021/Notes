# Day 1 – JavaScript & V8 Engine (Playwright Training)

> **Audience:** Students & Working Professionals
> **Purpose:** Strong JavaScript foundation before Playwright

---

## 1. What is JavaScript and Why Is It Popular?

**JavaScript** is a high-level, interpreted programming language mainly used to build interactive web applications.

### Why JavaScript Was Created?

- To add **interactivity** to web pages
- To handle **events** (click, hover, submit)
- To manipulate **HTML & CSS dynamically**

### Why JavaScript Is So Popular?

- Runs in **every browser**
- Easy to learn, powerful to use
- Works on **Frontend + Backend (Node.js)**
- Huge ecosystem (npm)
- Backbone of modern frameworks (React, Angular, Vue)

---

## 2. Why Big & Complex Projects Use TypeScript?

### Problem with JavaScript in Large Projects

- No strict type checking
- Errors found at runtime
- Hard to maintain large codebases

### Why TypeScript?

- Adds **static typing** on top of JavaScript
- Errors caught at **compile time**
- Better **code readability & maintainability**
- Excellent **IDE support & auto-suggestions**

👉 **Conclusion:**
Small scripts → JavaScript
Large & enterprise apps → **TypeScript**

---

## 3. Installing & Running JavaScript

### Step 1: Initialize Project

```bash
npm init -y
```

👉 This creates `package.json`

### Step 2: Run JavaScript File

```bash
node index.js
```

> Here `index.js` is the file name

✅ **No extra installation required for JavaScript**

---

## 4. JavaScript Engines & Execution Flow

### JavaScript Engines in Browsers

| Browser       | JavaScript Engine | Developed By |
| ------------- | ----------------- | ------------ |
| Chrome / Edge | V8                | Google       |
| Firefox       | SpiderMonkey      | Mozilla      |
| Safari        | JavaScriptCore    | Apple        |

---

## 5. JavaScript Outside Browser – Node.js

**Node.js** allows JavaScript to run outside the browser.

### Important Points

- Node.js is a **runtime**, not a framework
- Built on **V8 engine**
- Provides **system APIs** (file system, network, process)

✅ **Why V8 Is Fast?**

- Uses **JIT (Just-In-Time) compilation**
- Advanced optimizations

---

## 6. Popular IDEs and Their Focus

| IDE                | Optimized For               |
| ------------------ | --------------------------- |
| Eclipse            | Java, C, C++                |
| IntelliJ IDEA      | Java, JVM Languages         |
| Visual Studio Code | JavaScript, TypeScript, Web |
| PyCharm            | Python                      |
| Visual Studio      | C#, .NET, C++               |

---

## 7. JavaScript Architecture (V8 Engine)

### AST (Abstract Syntax Tree)

You can visualize AST here:
👉 [https://astexplorer.net/](https://astexplorer.net/)

Write any JavaScript code and see how it converts into a tree structure.

---

## 8. One-Line Interview Answer (Perfect)

> **“JIT does not optimize JavaScript source code. It optimizes execution by compiling hot bytecode into optimized machine code.”**

---

## 9. JavaScript Architecture – V8 Engine Workflow

### 1️⃣ Parsing → AST Generation

- JavaScript source code enters V8
- **Lexer** breaks code into tokens
- **Parser** validates syntax

👉 Output: **AST (Abstract Syntax Tree)**

Why AST?

- Represents code in tree format
- Helps engine understand:
  - variables
  - functions
  - loops
  - conditions

---

### 2️⃣ Bytecode Generation – Ignition (Interpreter)

- AST is passed to **Ignition**
- Ignition converts AST → **Bytecode**

⚠️ Important:

- Ignition does **NOT** execute JavaScript directly
- It executes **bytecode**

Why Bytecode?

- Faster than raw JS
- Less memory usage
- Easy to optimize

👉 All JavaScript first runs in **Ignition**

---

### 3️⃣ Execution & Profiling

Ignition continuously profiles code:

- Function call frequency
- Loop repetition
- Execution paths

| Code Type | Meaning             |
| --------- | ------------------- |
| 🧊 Cold   | Rarely executed     |
| 🌡️ Warm   | Sometimes executed  |
| 🔥 Hot    | Executed many times |

👉 Profiling is done by **Ignition**, not TurboFan

---

### 4️⃣ JIT Compilation – TurboFan

When 🔥 hot code detected:

- Bytecode sent to **TurboFan**
- TurboFan converts bytecode → **Machine Code**

Optimizations include:

- Function inlining
- Loop optimization
- Removing unnecessary checks

---

### 5️⃣ Optimized Execution

- CPU runs optimized machine code
- Hot code runs very fast
- Cold code stays in Ignition

👉 Interpreter + Compiler work **together**

---

## 10. Complete Execution Flow (Diagram)

```
JavaScript Source Code
        ↓
      Lexer
        ↓
      Parser
        ↓
       AST
        ↓
 Ignition (Interpreter)
        ↓
     Bytecode
        ↓
   Profiling
        ↓
  Hot Code Detected
        ↓
 TurboFan (JIT Compiler)
        ↓
 Optimized Machine Code
        ↓
     Execution
```

---

## 11. Key Insight

> **V8 does NOT understand JavaScript directly.**
> It understands **AST → Bytecode → Machine Code**

### JVM Comparison

- JVM does not understand `.java`
- It understands `.class` (bytecode)

Same concept applies to V8.

---

## 12. What Is Node.js? (Interview Ready)

> **“Node.js is a JavaScript runtime environment built on the V8 engine. It provides core libraries and system APIs to build applications. It is not a programming language or just a library.”**

### What Node.js REALLY Is

✅ JavaScript runtime
✅ Built on V8 engine
✅ Provides system-level APIs
✅ Includes standard libraries

❌ Not a programming language
❌ Not just a library

---

✅ **Day 1 Completed – Strong Foundation for Playwright**
