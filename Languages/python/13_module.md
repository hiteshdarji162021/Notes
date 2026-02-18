# Python Modules & Packages – Complete Canvas (Day 13)

> **Goal**: Understand modules & packages with clear examples, outputs, use cases, and best practices (same style as previous canvas).

---

## 1. What is a Module?

### Definition
A **module** is a **single Python file (.py)** that contains:
- functions
- classes
- variables

Modules help us **organize and reuse code**.

---

## 2. Creating and Using a Module

### Example 1: Functions inside a Module

#### File: `operations.py`
```python
def add(num1, num2):
    print(num1 + num2)

def mul(num1, num2):
    print(num1 * num2)
```

---

### File: `client.py`

#### Approach 1: Import full module
```python
import operations
operations.add(10, 20)
operations.mul(10, 20)
```

**Output**
```
30
200
```

---

#### Approach 2: Import specific functions
```python
from operations import add, mul
add(10, 20)
mul(10, 20)
```

---

#### Approach 3: Import everything (NOT recommended)
```python
from operations import *
add(10, 20)
mul(10, 20)
```

---

### Best Practices (Modules)
- Prefer `import module_name`
- Avoid `from module import *`
- Use direct imports for readability

---

## 3. Importing Variables from a Module

#### File: `operations.py`
```python
person1 = {
    "name": "John",
    "age": 36,
    "country": "Norway"
}
```

#### File: `client.py`
```python
import operations
print(operations.person1["age"])
```

**Output**
```
36
```

---

## 4. Same Function Name in Multiple Modules (Important)

### Files

#### `animal.py`
```python
def fly():
    print("Animal can't fly")

def color():
    print("Animal is Black")
```

#### `bird.py`
```python
def fly():
    print("Bird can fly")

def color():
    print("Bird is Green")
```

---

### Correct Approach (Recommended)
```python
import animal
import bird

animal.fly()
bird.fly()
```

**Output**
```
Animal can't fly
Bird can fly
```

---

### Wrong Approach (`import *` problem)
```python
from animal import *
from bird import *
fly()
```

❌ Last imported function overrides previous one.

---

## 5. Classes inside Modules

### Files

#### `a.py`
```python
class Animal:
    def display(self):
        print("I like Cow")
```

#### `b.py`
```python
class Bird:
    def display(self):
        print("I like Parrot")
```

---

### Using Classes

```python
import a
import b

a.Animal().display()
b.Bird().display()
```

**Output**
```
I like Cow
I like Parrot
```

---

## 6. What is a Package?

### Definition
A **package** is a **folder containing multiple modules**.

- Module → `.py` file
- Package → folder of modules
- Usually contains `__init__.py`

---

## 7. Single Package Example

### Structure
```
pack1/
 ├── module1.py
 └── module2.py
```

#### `module1.py`
```python
def display():
    print("This is display function from module1")
```

#### `module2.py`
```python
def show():
    print("This is show function from module2")
```

---

### `client.py`
```python
import sys
sys.path.append("C:/Automation/PWPython/pack1")

import module1
import module2

module1.display()
module2.show()
```

---

## 8. Nested Package (Package inside Package)

### Structure
```
pack1/
 ├── module1.py
 └── pack2/
     └── module2.py
```

```python
sys.path.append("C:/Automation/PWPython/pack1")
from module1 import *

sys.path.append("C:/Automation/PWPython/pack1/pack2")
from module2 import *

display()
show()
```

---

## 9. Importing Classes from Different Packages

### Structure
```
pack1/emp.py
pack2/stu.py
client.py
```

#### `emp.py`
```python
class Employee:
    def __init__(self, eid, ename, sal):
        self.eid = eid
        self.ename = ename
        self.sal = sal

    def displayemp(self):
        print(f"empid:{self.eid} empname:{self.ename} empsal:{self.sal}")
```

#### `stu.py`
```python
class Student:
    def __init__(self, sid, sname, sgrad):
        self.sid = sid
        self.sname = sname
        self.sgrad = sgrad

    def displaystu(self):
        print(f"stuid:{self.sid} stuname:{self.sname} stusal:{self.sgrad}")
```

---

#### `client.py`
```python
import sys
sys.path.append("C:/Automation/PWPython/pack1")
from emp import Employee

sys.path.append("C:/Automation/PWPython/pack2")
from stu import Student

Employee(101, "Scott", 40000).displayemp()
Student(141, "David", "A").displaystu()
```

---

## 10. Module vs Package (Interview Table)

| Feature | Module | Package |
|------|------|------|
| Definition | Single .py file | Folder of modules |
| Reusability | Yes | Yes (large projects) |
| Used in frameworks | Limited | Mandatory |

---

## 11. Comparison Tables & Best Practices (Playwright / Automation Ready)

---

## 11.1 Module Import Approaches – Comparison Table

| Approach | Syntax | Pros | Cons | Recommendation |
|------|------|------|------|------|
| Full module import | `import operations` | Clear, no conflict | Slightly verbose | ⭐ **BEST** |
| Specific import | `from operations import add` | Clean, readable | Name conflict possible | ✅ Good |
| Import everything | `from operations import *` | Short code | Conflicts, unreadable | ❌ Avoid |

✅ **Best approach for Playwright / frameworks** → `import module_name`

---

## 11.2 Module vs Package – Comparison Table

| Aspect | Module | Package | Playwright Usage |
|------|------|------|------|
| What it is | Single `.py` file | Folder of modules | Both used |
| Size | Small | Large | Packages dominate |
| Scalability | Low | High | Package required |
| Framework fit | ❌ | ✅ | Mandatory |

---

## 11.3 Import Style – Framework Recommendation

| Import Style | Example | Framework Verdict |
|------|------|------|
| Absolute import | `from pages.login_page import LoginPage` | ⭐ BEST |
| Relative import | `from .login_page import LoginPage` | ⚠ Limited use |
| sys.path.append | `sys.path.append(...)` | ❌ Avoid |

---

## 12. Playwright Framework – Best Practices

### 12.1 Recommended Folder Structure
```
playwright-framework/
 ├── pages/           # Page Object Models
 │    ├── login_page.py
 │    └── dashboard_page.py
 ├── tests/           # Test cases
 │    └── test_login.py
 ├── utils/           # Helpers, configs
 │    └── config.py
 ├── data/            # Test data
 └── conftest.py
```

✅ Each folder is a **PACKAGE** (contains `__init__.py`)

---

### 12.2 Correct Import Usage (Playwright)

#### Page Object
```python
from playwright.sync_api import Page

class LoginPage:
    def __init__(self, page: Page):
        self.page = page
```

#### Test File
```python
from pages.login_page import LoginPage

def test_login(page):
    login = LoginPage(page)
```

---

### 12.3 What NOT to Do in Playwright

❌ `from pages.login_page import *`
❌ `sys.path.append()`
❌ Mixing relative & absolute imports
❌ Writing logic directly inside tests

---

## 13. Final Best Practices (Industry Level)

- Always use **packages**, never plain folders
- Use **absolute imports**
- One class per file (Page Object rule)
- Avoid `import *` completely
- Keep reusable logic in `utils`
- Tests should be **thin**, pages should be **fat**

---

### ⭐ Interview Line (You can say confidently)
> "In Playwright frameworks, we use package-based architecture with absolute imports and page-object separation for scalability and maintainability."

---

### ✅ This canvas is now **Playwright‑ready, interview‑ready, and company‑standard**.


- Use **packages** for real projects
- Avoid `sys.path.append()` in production
- Prefer **absolute imports**
- Never use `import *` in large codebases
- Follow clean folder structure

---

### ✅ This canvas is **student-ready, interview-ready, and framework-ready**.

