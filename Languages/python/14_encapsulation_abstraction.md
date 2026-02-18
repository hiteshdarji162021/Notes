# Encapsulation & Abstraction – Complete Comparison Canvas

> **Goal**: Clearly understand **Encapsulation vs Abstraction**, access specifiers, and how they work in **Java, JavaScript, TypeScript, and Python** with **code + output + use cases**.

---

## 1. What is Encapsulation?

### Definition
**Encapsulation** means:
- Wrapping **data (variables)** and **methods** into a single unit (class)
- Restricting **direct access** to data
- Providing **controlled access** using methods

👉 Focus = **Data Protection**

---

## 2. Access Specifiers / Modifiers (Core Topic)

### 2.1 Meaning of Access Levels

| Access Level | Meaning |
|------------|--------|
| public | Accessible everywhere |
| protected | Accessible in same class & subclasses |
| private | Accessible only inside the class |
| default | Package-level access (Java only) |

---

## 3. Encapsulation in Python

### Access Specifiers in Python

| Type | Syntax | Real Meaning |
|----|------|-----------|
| Public | `self.name` | Accessible anywhere |
| Protected | `self._marks` | Convention only |
| Private | `self.__marks` | Name mangling |

---

### Python Encapsulation Example

```python
class Student:
    def __init__(self, name):
        self.name = name          # public
        self.__marks = 0          # private

    def get_marks(self):          # getter
        return self.__marks

    def set_marks(self, marks):   # setter
        if 0 <= marks <= 100:
            self.__marks = marks
        else:
            print("Invalid marks")

s = Student("John")
s.set_marks(90)
print(s.get_marks())
```

### Output
```
90
```

### Use Case
- Protect student marks
- Prevent invalid data entry

---

## 4. Encapsulation in Java

```java
class Student {
    private int marks;

    public int getMarks() {
        return marks;
    }

    public void setMarks(int marks) {
        if(marks <= 100)
            this.marks = marks;
    }
}
```

### Use Case
- Banking, validation-heavy systems

---

## 5. Encapsulation in JavaScript

```javascript
class Student {
  #marks = 0;   // private

  setMarks(m) {
    if (m <= 100) this.#marks = m;
  }

  getMarks() {
    return this.#marks;
  }
}

const s = new Student();
s.setMarks(90);
console.log(s.getMarks());
```

---

## 6. Encapsulation in TypeScript

```ts
class Student {
  private marks: number = 0;

  setMarks(m: number) {
    if (m <= 100) this.marks = m;
  }

  getMarks(): number {
    return this.marks;
  }
}
```

---

## 7. What is Abstraction?

### Definition
**Abstraction** means:
- Showing **what to do**
- Hiding **how it is done**

👉 Focus = **Design & Interface**

---

## 8. Abstraction in Python (ABC)

```python
from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start(self): pass

    @abstractmethod
    def stop(self): pass

class Car(Vehicle):
    def start(self):
        print("Car started")

    def stop(self):
        print("Car stopped")

c = Car()
c.start()
c.stop()
```

### Output
```
Car started
Car stopped
```

### Use Case
- Fix structure, allow flexibility

---

## 9. Abstraction in Java

```java
abstract class Vehicle {
    abstract void start();
}

class Car extends Vehicle {
    void start() {
        System.out.println("Car started");
    }
}
```

---

## 10. Abstraction in JavaScript

```javascript
class Vehicle {
  start() {
    throw "Not Implemented";
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car started");
  }
}
```

---

## 11. Abstraction in TypeScript

```ts
abstract class Vehicle {
  abstract start(): void;
}

class Car extends Vehicle {
  start() {
    console.log("Car started");
  }
}
```

---

## 12. Encapsulation vs Abstraction (BIG Interview Table)

| Feature | Encapsulation | Abstraction |
|------|-------------|------------|
| Focus | Data hiding | Implementation hiding |
| Achieved by | Access modifiers | Abstract class / interface |
| What is hidden | Variables | Logic |
| Example | Private data | Abstract methods |

---

## 13. Language-wise Comparison Table

| Language | Encapsulation | Abstraction |
|-------|--------------|------------|
| Java | Strong (private/protected) | Abstract class, interface |
| Python | Convention-based | ABC module |
| JavaScript | #private fields | Pattern-based |
| TypeScript | Strong (private) | Abstract class |

---

## 14. Real Automation / Playwright Use Case

### Encapsulation
- Page Object Model hides locators

### Abstraction
- BasePage defines common actions

---

## 1. Public Access

### Meaning
- Accessible **anywhere** (inside class, outside class, child class)
- This is the **default** in Python

### Example
```python
class Student:
    def __init__(self, name):
        self.name = name   # public variable

s = Student("John")
print(s.name)
```

### Output
```
John
```

### Use Case
- Names, IDs, read-only information

---

## 2. Protected Access (Convention Based)

### Meaning
- Written with **single underscore** `_`
- Can be accessed outside, but **should not be**
- Intended for **child classes**

### Example
```python
class Student:
    def __init__(self):
        self._marks = 90   # protected variable

class Result(Student):
    def show(self):
        print(self._marks)

r = Result()
r.show()
```

### Output
```
90
```

### Use Case
- Values meant for subclasses
- Framework internal data

---

## 3. Private Access (Name Mangling)

### Meaning
- Written with **double underscore** `__`
- Cannot be accessed directly outside the class
- Python changes the name internally (**name mangling**)

### Example
```python
class Student:
    def __init__(self):
        self.__marks = 85   # private variable

    def get_marks(self):
        return self.__marks

s = Student()
print(s.get_marks())
```

### Output
```
85
```

❌ Direct access will fail:
```python
print(s.__marks)  # AttributeError
```

---

## 4. Name Mangling Explained

Internally Python converts:
```
__marks  →  _Student__marks
```

That’s why this works (not recommended):
```python
print(s._Student__marks)
```

---

## 5. Scope Comparison Table (Interview Ready)

| Access Type | Syntax | Accessible Where | Real Enforcement |
|------------|-------|------------------|------------------|
| Public | `self.name` | Anywhere | None |
| Protected | `self._marks` | Class & child class | Convention only |
| Private | `self.__marks` | Same class only | Name mangling |

---

## 6. When to Use What (Best Practice)

- ✅ **Public** → General data
- ⚠️ **Protected** → Internal framework usage
- 🔐 **Private** → Sensitive data, validation-required values

---

## 7. One-Line Interview Answer

> "Python does not enforce access modifiers strictly; public is default, protected is by convention, and private is achieved using name mangling."

---

### ✅ This canvas is **student-friendly, interview-ready, and Pythonic**.

