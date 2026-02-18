# Python OOPS with Functions – Complete Real‑Time Notes

---

## 1. What is OOPS in Python?
Python follows **Object Oriented Programming System (OOPS)** to organize code using **classes and objects**.

### Core OOPS Concepts
- Class
- Object
- Method
- Constructor
- Inheritance
- Polymorphism
- Encapsulation
- Abstraction

---

## 2. Class & Object

### Definition
- **Class** → Blueprint / template
- **Object** → Instance of class (real entity)

### Code Example
```python
class MyClass:
    def display(self, name):
        print(name)

obj1 = MyClass()
obj1.display("John")
```

**Output**
```
John
```

### Real‑Time Use Case
- User, Employee, Product models

### Playwright Use Case
- Page Object Model (LoginPage, HomePage)

### Best Practices
- One class = one responsibility
- Class names in PascalCase

---

## 3. Methods in Class

### 3.1 Instance Method
Uses `self` and needs object to call.

```python
class MyClass:
    def m1(self):
        print("Instance method")

obj = MyClass()
obj.m1()
```

**Use Case**
- Business logic
- Page actions in automation

**Playwright Example**
```python
class LoginPage:
    def login(self, user, pwd):
        self.page.fill("#user", user)
```

**Best Practices**
- Always use `self`
- Keep methods small

---

### 3.2 Static Method
Does NOT depend on object data.

```python
class MyClass:
    @staticmethod
    def add(x, y):
        print(x + y)

MyClass.add(10, 20)
```

**Output**
```
30
```

**Real‑Time Use Case**
- Utility functions

**Playwright Use Case**
- Date formatter, random data generator

**Best Practices**
- Use when no object data is required

---

## 4. Variables Scope (Global vs Class vs Local)

### Example: Same Variable Names at Different Levels (Very Important)
```python
a, b = 15, 20   # Global variables

class myclass:
    a, b = 10, 20   # Class variables

    def add(self, a, b):   # Local variables (method parameters)
        print(a + b)                  # 100 + 200 = 300
        print(self.a + self.b)        # 10 + 20 = 30
        print(globals()['a'] + globals()['b'])  # 15 + 20 = 35

m1 = myclass()
m1.add(100, 200)
```

**Output**
```
300
30
35
```

### Explanation (Scope Resolution – LEGB Rule)
- **Local** → method parameters `a, b`
- **Class/Object** → `self.a, self.b`
- **Global** → accessed explicitly using `globals()`

Local variables override class and global variables with the same name.

### Real-Time Programming Use Case
- Handling method inputs without disturbing global or class configuration
- Avoiding accidental overwrite of global values

### Playwright Automation Use Case
- Method parameters → test data
- Class variables → page-level constants
- Global variables → framework configuration (rare)

### Best Practices
- ❌ Avoid same variable names at multiple levels
- ❌ Avoid `globals()` in real projects
- ✅ Pass data explicitly to methods
- ✅ Use class variables only for constants

---

## 5. Constructor (`__init__`)

### Purpose
- Initialize object data
- Runs automatically

```python
class MyClass:
    def __init__(self):
        print("Constructor called")

obj = MyClass()
```

**Use Case**
- Setup initial state

**Playwright Use Case**
```python
class BasePage:
    def __init__(self, page):
        self.page = page
```

**Best Practices**
- Initialize only required data

---

## 6. Constructor with Parameters

```python
class Emp:
    def __init__(self, eid, ename, sal):
        self.eid = eid
        self.ename = ename
        self.sal = sal

    def display(self):
        print(self.eid, self.ename, self.sal)

emp = Emp(101, "John", 500000)
emp.display()
```

**Output**
```
101 John 500000
```

**Real‑Time Use Case**
- Employee, User, Order objects

---

## 7. `__str__()` Method (Important – Not in Code File)

```python
class Emp:
    def __str__(self):
        return self.ename

emp = Emp(101, "John", 500000)
print(emp)
```

**Use Case**
- Logging
- Debugging

---

## 8. OOPS Concepts Used with Functions

### Encapsulation
```python
class Account:
    def __init__(self, balance):
        self.__balance = balance
```

### Inheritance (Important – Added)
```python
class Animal:
    def sound(self):
        print("Animal sound")

class Dog(Animal):
    def bark(self):
        print("Bark")
```

### Polymorphism (Important – Added)
```python
class A:
    def show(self):
        print("A")

class B(A):
    def show(self):
        print("B")
```

---

## 9. Playwright Automation – OOPS Best Practices

✅ Page Object Model
✅ One page = one class
✅ No global variables
✅ Use constructor for page injection

---

## 10. Interview One‑Line Takeaways
- Class is blueprint, object is real entity
- `self` binds method to object
- Constructor initializes object
- Static methods are utility helpers
- Prefer instance variables over global

---

## 11. What Was Added (Not in File but Important)
- `__str__()` method
- Inheritance
- Polymorphism
- Playwright‑specific architecture
- Industry best practices

---

✅ **End of OOPS Notes**

