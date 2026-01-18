# Day 1 – JavaScript & V8 Engine

> **Audience:** Students & Working Professionals
> **Purpose:** Strong JavaScript foundation

---

## 1. What is JavaScript and Why Is It Popular?

![alt text](image-3.png)

**JavaScript** is a high-level, interpreted programming language mainly used to build interactive web applications.

### Why JavaScript Was Created?

- To add **Logic** to web pages.HTML and CSS can not do this things.
- To handle **events** (click, hover, submit)
- To manipulate **HTML & CSS dynamically**

### Why JavaScript Is So Popular?

- Runs in **every browser**
- Easy to learn, powerful to use
- Works on **Frontend + Backend (Node.js)**
- Huge ecosystem (npm)
- Backbone of modern frameworks (React, Next, Angular, Vue)

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

## 3. JavaScript Engines & Execution Flow

### JavaScript Engines in Browsers

| Browser       | JavaScript Engine | Developed By |
| ------------- | ----------------- | ------------ |
| Chrome / Edge | V8                | Google       |
| Firefox       | SpiderMonkey      | Mozilla      |
| Safari        | JavaScriptCore    | Apple        |

---

## 4. JavaScript Outside Browser – Node.js

**Node.js** allows JavaScript to run outside the browser.

### Important Points

- Node.js is a **runtime**, not a framework
- Built on **V8 engine**
- Provides **system APIs** (file system, network, process)

✅ **Why V8 Is Fast?**

- Uses **JIT (Just-In-Time) compilation**
- Advanced optimizations

---

## 5. Popular IDEs and Their Focus

| IDE                | Optimized For               |
| ------------------ | --------------------------- |
| Eclipse            | Java, C, C++                |
| IntelliJ IDEA      | Java, JVM Languages         |
| Visual Studio Code | JavaScript, TypeScript, Web |
| PyCharm            | Python                      |
| Visual Studio      | C#, .NET, C++               |

---

## 6. JavaScript Architecture (V8 Engine)

![alt text](<Javascript engine.png>)

---

# JavaScript V8 Optimization – Teacher Notes (Clear & Correct)

This document explains **how V8 optimizes JavaScript code** using  
**Ignition, Maglev, and TurboFan**, with **correct rules** and **real cases**.

---

## 2️⃣ Key Rule (MOST IMPORTANT – FINAL)

> **V8 optimizes FUNCTIONS, not files and not plain loops.**  
> Optimization depends on:
>
> - Function call frequency
> - Runtime behavior (hot, stable, heavy)
> - **Cost vs benefit**

⚠️ Call count alone is **NOT enough** for TurboFan.

---

## 3️⃣ Ignition, Maglev, TurboFan – What They Do

| Stage    | Type               | Role                                               |
| -------- | ------------------ | -------------------------------------------------- |
| Ignition | Interpreter        | Runs all code first, collects feedback             |
| Maglev   | Fast JIT Compiler  | Optimizes hot & stable functions                   |
| TurboFan | Heavy JIT Compiler | Maximum performance for very hot & heavy functions |

✅ Ignition is **not JIT**  
✅ Maglev + TurboFan = **JIT compilers**

---

## 4️⃣ Optimization Call Count Rule (Approximate)

> ⚠️ This table shows **likelihood**, not guarantee.

| Function Call Count | Likely V8 Decision        |
| ------------------- | ------------------------- |
| 1–10                | Ignition                  |
| 100–1,000           | Maglev (maybe)            |
| 10,000+             | Maglev (very likely)      |
| 100,000+            | TurboFan (possible, rare) |

📌 **Teacher Note:**  
TurboFan also requires the function to be **heavy and long-running**.

---

## 5️⃣ Case Study: Real Optimization Cases

### ✅ Corrected Table (NO CONFUSION)

| Case       | Function Name     | Who Wrote It | Approx Call Count | Optimizer Used          | Which Code Optimized  |
| ---------- | ----------------- | ------------ | ----------------- | ----------------------- | --------------------- |
| Case-1     | `isPathSeparator` | Node.js      | 1000+ (internal)  | Maglev                  | Node.js internal code |
| Case-2     | Your function     | You          | 10K–100K          | Maglev                  | ✅ Your code          |
| Case-3     | `afterWrite`      | Node.js      | 100K–Millions     | Maglev → TurboFan (OSR) | Node.js internal code |
| Small loop | Top-level loop    | You          | < 10              | Ignition                | ❌ None               |

---

## 6️⃣ Why Case-1 Shows Maglev Even with Small Loop

- Your loop is small → stays in **Ignition**
- Node.js internally calls helper functions
- Those helper functions:
  - Are functions
  - Are called thousands of times
- V8 optimizes **those functions**, not your loop

> **Optimization is per function, not per program**

---

## 7️⃣ Case-1 vs Case-2 (Classroom Explanation)

### Case-1

- Optimization happened
- But for **Node.js internal function**
- Your written code stayed in Ignition

👉 Runtime improved, **your code did not**

---

### Case-2

- You wrote the function
- Function was called many times
- Types were stable
- Maglev optimized **your function**

👉 **Your code got faster**

---

## 8️⃣ What Happens When Code Gets Optimized

When V8 optimizes a function, it:

- Converts bytecode → machine code
- Removes repeated type checks
- Inlines small functions
- Optimizes loops inside the function
- Uses CPU registers efficiently

❌ Output does NOT change  
❌ Logic does NOT change  
❌ JavaScript behavior does NOT change

---

## 9️⃣ De-Optimization (VERY IMPORTANT)

### Example

````js
function add(a, b) {
  return a + b;
}

add(1, 2);     // number + number
add("1", "2"); // string + string


## 7. What Is Node.js?

> **“Node.js is a JavaScript runtime environment built on the V8 engine. It allows JavaScript to run outside the browser by providing core libraries and system-level APIs. It is not a programming language and not just a library.”**

### What Node.js REALLY Is

✅ JavaScript runtime environment
✅ Built on Google’s V8 engine
✅ Executes JavaScript outside the browser
✅ Provides system-level APIs (file system, network, OS)
✅ Includes standard libraries and event-driven architecture

### What Node.js Is NOT

❌ Not a programming language
❌ Not a framework
❌ Not just a library

---

Notes:

- Errors mostly discovered at runtime
- Slower execution compared to JVM/V8
- High developer productivity

---

## 8. Error Detection Comparison (100 LOC Example)

| Language   | When errors are found |
| ---------- | --------------------- |
| JavaScript | runtime               |
| TypeScript | compile-time          |
| Python     | Runtime               |

---

## 9. Runtime & JIT Summary

| Language   | AOT        | JIT         | Runtime |
| ---------- | ---------- | ----------- | ------- |
| JavaScript | ❌         | ✅          | V8      |
| TypeScript | ✅ (to JS) | ✅ (via JS) | V8      |

---

## 10. Performance (General)

| Language   | Runtime Speed          |
| ---------- | ---------------------- |
| Java       | Fast                   |
| JavaScript | slower then Java       |
| TypeScript | slower then JavaScript |
| Python     | Slowest                |

---

## 11. Development Speed

| Language   | Dev Speed | Why                |
| ---------- | --------- | ------------------ |
| Python     | Fastest   | Simple syntax      |
| TypeScript | Fast      | Safety + tooling   |
| JavaScript | Medium    | Flexible but risky |

---

## 12. Installing & Running JavaScript

### Step 1: Initialize Project

```bash

npm init  -> ask input and create Package.json   OR
npm init -y  -> Create Package.json

````

👉 This creates `package.json`

### Step 2: Run JavaScript File

```bash
node index.js
```

> Here `index.js` is the file name

✅ **No extra installation required for JavaScript**

---

## 13. Commands to view Bytecode

```bash
For print bytecode
node --print-bytecode yourfile.js

For see which code hotcode assign turbo

See JIT Optimization
node --trace-opt yourfile.jst
```
