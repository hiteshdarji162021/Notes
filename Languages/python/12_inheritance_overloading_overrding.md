# Python – Inheritance, Method Overloading & Method Overriding (Complete Canvas)

> **Purpose**: Easy-to-understand, exam + interview ready notes with **definition → code → output → use case → best practices**.

---

## 1. What is Inheritance?
Inheritance allows a **child class** to reuse variables and methods of a **parent class**.

### Why we use it
- Code reusability
- Less duplication
- Easy maintenance
- Logical hierarchy

---

## 2. Types of Inheritance in Python

### 2.1 Single Inheritance
One child inherits from one parent.

#### Code
```python
class A:
    def m1(self):
        print("This is m1 from class A")

class B(A):
    def m2(self):
        print("This is m2 from class B")

b = B()
b.m1()
b.m2()
```

#### Output
```
This is m1 from class A
This is m2 from class B
```

#### Use case
- Base utility class → child feature class

#### Best practices
- Use single inheritance when logic is clearly hierarchical

---

### 2.2 Multilevel Inheritance
Parent → Child → Grandchild

#### Code
```python
class A:
    def m1(self):
        print("A method")

class B(A):
    def m2(self):
        print("B method")

class C(B):
    def m3(self):
        print("C method")

c = C()
c.m1()
c.m2()
c.m3()
```

#### Output
```
A method
B method
C method
```

#### Use case
- Framework → BaseTest → LoginTest

#### Best practices
- Keep inheritance depth small (2–3 levels max)

---

### 2.3 Hierarchical Inheritance
Multiple children share the same parent.

#### Code
```python
class A:
    def m1(self):
        print("Common logic")

class B(A):
    def m2(self):
        print("B specific")

class C(A):
    def m3(self):
        print("C specific")
```

#### Output
```
Common logic
B specific
Common logic
C specific
```

#### Use case
- One base API client, multiple feature modules

---

### 2.4 Multiple Inheritance
Child inherits from more than one parent.

#### Code
```python
class A:
    def m1(self):
        print("From A")

class B:
    def m2(self):
        print("From B")

class C(A, B):
    def m3(self):
        print("From C")

c = C()
c.m1()
c.m2()
c.m3()
```

#### Output
```
From A
From B
From C
```

#### Use case
- Mixins (logging + reporting + base test)

#### Best practices
- Avoid complex multiple inheritance
- Understand **MRO (Method Resolution Order)**

---

## 3. super() Keyword
Used to call **parent class method or variable**.

#### Code
```python
class A:
    def m1(self):
        print("Parent method")

class B(A):
    def m1(self):
        print("Child method")
        super().m1()

b = B()
b.m1()
```

#### Output
```
Child method
Parent method
```

#### Best practices
- Always use `super()` instead of parent class name

---

## 4. Variable Access in Inheritance

#### Code
```python
class A:
    a, b = 10, 20

class B(A):
    i, j = 100, 200
    def m(self, x, y):
        print(x + y)
        print(self.i + self.j)
        print(self.a + self.b)

b = B()
b.m(1000, 2000)
```

#### Output
```
3000
300
30
```

---

## 5. What is Polymorphism?
Same method name, **different behavior**.

---

## 6. Method Overriding
Child class **redefines** parent method.

#### Code
```python
class Bank:
    def rateOfInterest(self):
        return 0

class SBI(Bank):
    def rateOfInterest(self):
        return 7.5

class HDFC(Bank):
    def rateOfInterest(self):
        return 8.5

print(SBI().rateOfInterest())
print(HDFC().rateOfInterest())
```

#### Output
```
7.5
8.5
```

#### Use case
- Different business rules for same method

#### Best practices
- Method signature must be same
- Use `@override` (conceptually)

---

## 7. Variable Overriding

#### Code
```python
class Parent:
    name = "Scott"

class Child(Parent):
    name = "John"

print(Child().name)
```

#### Output
```
John
```

---

## 8. Method Overloading (Simulated)
Python does **NOT** support true overloading.

### Using Default Arguments

#### Code
```python
class Human:
    def sayHello(self, name=None):
        if name:
            print("Hello", name)
        else:
            print("Hello")

h = Human()
h.sayHello()
h.sayHello("David")
```

#### Output
```
Hello
Hello David
```

---

### Another Overloading Example

#### Code
```python
class Calculation:
    def add(self, a=0, b=0, c=0):
        print(a + b + c)

c = Calculation()
c.add()
c.add(10, 20)
c.add(10, 20, 30)
```

#### Output
```
0
30
60
```

#### Best practices
- Prefer keyword arguments
- Keep logic readable

---

## 9. Missing / Advanced Examples

### Multiple Inheritance with Same Method Name (MRO – Method Resolution Order)

This is a **very important interview + real-world concept**.

When **two parent classes have the same method name**, Python decides **which method to call** using **MRO (Method Resolution Order)**.

---

### Example: Same Method Name in Multiple Parents

#### Code
```python
class A:
    def show(self):
        print("show() from class A")

class B:
    def show(self):
        print("show() from class B")

class C(A, B):
    pass

obj = C()
obj.show()
```

#### Output
```
show() from class A
```

---

### Why did class A method run?
Because **A is written first** in the inheritance list:

```python
class C(A, B):
```

Python follows **MRO (left to right)**.

---

### Checking MRO

#### Code
```python
print(C.mro())
```

#### Output
```
[<class '__main__.C'>, <class '__main__.A'>, <class '__main__.B'>, <class 'object'>]
```

This means:
1. Python looks in **C**
2. Then **A**
3. Then **B**
4. Then **object**

---

### Changing Order Changes Output

#### Code
```python
class C(B, A):
    pass

obj = C()
obj.show()
```

#### Output
```
show() from class B
```

---

### Using super() with Multiple Inheritance

#### Code
```python
class A:
    def show(self):
        print("A")
        super().show()

class B:
    def show(self):
        print("B")
        super().show()

class C(A, B):
    def show(self):
        print("C")
        super().show()

class D:
    def show(self):
        print("End")

class E(C, D):
    pass

e = E()
e.show()
```

#### Output
```
C
A
B
End
```

---

### How super() really works here
- `super()` does **NOT** mean parent
- It means **next class in MRO**

MRO of `E`:
```
E → C → A → B → D → object
```

---

### Real-world Use Case
- Logging mixin
- Reporting mixin
- Base test class

Example:
```python
class Logger:
    def run(self):
        print("Logging")

class Reporter:
    def run(self):
        print("Reporting")

class Test(Logger, Reporter):
    pass
```

---

### Best Practices for Same Method Multiple Inheritance
- Always know your **MRO**
- Use `super()` consistently in all classes
- Prefer **mixins** (small focused classes)
- Avoid diamond problem unless required
- If logic is complex → prefer **composition**

---



### Runtime Polymorphism via Parent Reference
```python
class Animal:
    def sound(self):
        print("Animal sound")

class Dog(Animal):
    def sound(self):
        print("Bark")

obj: Animal = Dog()
obj.sound()
```

#### Output
```
Bark
```

---

## 10. Interview Summary Table

| Concept | Python Support |
|------|------|
| Inheritance | Yes |
| Multiple Inheritance | Yes |
| Method Overriding | Yes |
| Method Overloading | No (Simulated) |
| super() | Yes |

---

## 11. Final Best Practices
- Prefer **composition over inheritance**
- Avoid deep inheritance chains
- Use `super()` correctly
- Follow **single responsibility principle**
- Write clean, readable code

---

### ✅ This canvas is **interview-ready, beginner-friendly, and industry-aligned**.

