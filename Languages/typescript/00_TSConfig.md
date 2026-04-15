# 📘 tsconfig.json — ULTRA DETAILED + CODE EXAMPLES (Playwright + TypeScript)

Each option below includes:
- ✅ Meaning
- 🔁 TRUE vs FALSE (or options)
- 💥 Real impact
- 💻 Code examples (what changes in your TS code)

---

# 🧾 compilerOptions

---

## 🎯 target: "ES2022"

### ✅ Meaning
Controls JS version output

### 🔁 Options Impact
- ES5 → older JS
- ES2022 → modern JS (recommended)

### 💻 Example
```ts
// TS code
class User {
  name = "Hitesh";
}
```

ES2022 output:
```js
class User {
  name = "Hitesh";
}
```

ES5 output:
```js
function User() {
  this.name = "Hitesh";
}
```

👉 ES5 = bigger + slower
👉 ES2022 = clean + fast

---

## 📦 module: "commonjs"

### 💻 Example
```ts
import fs from 'fs';
```

CommonJS output:
```js
const fs = require('fs');
```

ESNext output:
```js
import fs from 'fs';
```

👉 If mismatch → runtime error in Node

---

## 📚 lib: ["ES2022", "DOM"]

### 💻 Example
```ts
const title = document.title;
```

If DOM = ❌
👉 ERROR: cannot find 'document'

---

## 🚫 noEmit: true

### 💻 Example
```ts
const a: number = 10;
```

TRUE → no JS file generated
FALSE → generates `.js` file

👉 FALSE creates duplicate files

---

## 🔍 moduleResolution: "node"

### 💻 Example
```ts
import data from './data';
```

node → finds data.ts / data.js
classic → may fail ❌

---

## 🔄 esModuleInterop: true

### 💻 Example

TRUE:
```ts
import express from 'express';
```

FALSE:
```ts
import * as express from 'express';
```

👉 TRUE = clean code

---

## 📄 resolveJsonModule: true

### 💻 Example
```ts
import data from './data.json';
console.log(data.name);
```

FALSE → ERROR ❌

---

## 🔄 allowSyntheticDefaultImports: true

### 💻 Example

TRUE:
```ts
import lodash from 'lodash';
```

FALSE:
```ts
import * as lodash from 'lodash';
```

---

# 🧭 PATH ALIASES

## 💻 Example

With paths:
```ts
import Login from '@pages/Login';
```

Without:
```ts
import Login from '../../../pages/Login';
```

👉 Cleaner + scalable

---

# 🔐 STRICT TYPE CHECKING

## strict: true

### 💻 Example
```ts
let name;
name = 10;
```

TRUE → ERROR ❌
FALSE → Allowed (danger)

---

## noImplicitAny: true

```ts
function test(a) {
  return a;
}
```

TRUE → ERROR: a has no type
FALSE → allowed

---

## strictNullChecks: true

```ts
let name: string = null;
```

TRUE → ERROR ❌
FALSE → allowed (runtime crash risk)

---

## noUncheckedIndexedAccess: true

```ts
const arr = [1,2,3];
const val = arr[5];
```

TRUE → val = number | undefined
FALSE → val = number (unsafe)

---

## exactOptionalPropertyTypes: true

```ts
type User = { name?: string };

const u: User = { name: undefined };
```

TRUE → stricter behavior
FALSE → loose typing

---

# 🧹 CODE QUALITY

## noImplicitReturns: true

```ts
function test(x: number) {
  if (x > 0) return 1;
}
```

TRUE → ERROR (missing return)
FALSE → allowed

---

## noImplicitOverride: true

```ts
class A { test() {} }
class B extends A { test() {} }
```

TRUE → must write:
```ts
override test() {}
```

---

## noUnusedLocals: true

```ts
const x = 10;
```

TRUE → ERROR if unused

---

## noUnusedParameters: true

```ts
function test(a: number) {}
```

TRUE → ERROR if unused

---

## noFallthroughCasesInSwitch: true

```ts
switch(x) {
  case 1:
    console.log('one');
  case 2:
    console.log('two');
}
```

TRUE → ERROR ❌

---

# 🎭 DECORATORS

## 💻 Example
```ts
function Log(target: any) {}

@Log
class Test {}
```

FALSE → decorators not allowed ❌

---

# 🗺 SOURCE MAPS

## sourceMap: true

### 💻 Example
- Debug TS line instead of JS line

FALSE → debugging difficult

---

# ⚙️ MISC

## skipLibCheck: true

TRUE → faster
FALSE → checks node_modules (slow)

---

## forceConsistentCasingInFileNames: true

```ts
import Test from './Login';
```

File = login.ts

TRUE → ERROR ❌
FALSE → may break in Linux

---

# 📂 include / exclude

### Example

include:
- tests/**/* → compiled

exclude:
- node_modules → ignored

---

# 🚀 FINAL IMPACT

With these settings:

✅ Clean code
✅ Strong typing
✅ Fewer bugs
✅ Scalable architecture
✅ Production-ready framework

---

# 🧠 FINAL NOTE

This config is already **top 5% industry level**.

Next step (if you want):
👉 Add AI to auto-fix TypeScript errors 🚀

