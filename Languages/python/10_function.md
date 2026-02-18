# Python Functions – Complete Notes

---

## 1. What is a Function?
A **function** is a reusable block of code that runs only when it is called.

### Key Points
- Defined using `def` keyword
- Can take **parameters** (inputs)
- Can **return** values (outputs)

### Syntax
```python
def function_name(parameters):
    # function body
    return value
```

---

## 2. Function Parameters vs Arguments
- **Parameter** → Variable in function definition
- **Argument** → Actual value passed during function call

---

## 3. Types of Functions

### 3.1 No Parameters & No Return Value
```python
def myfun():
    print("Hello")

myfun()
```
**Output:**
```
Hello
```
**Use case:** Simple tasks like logging, printing messages

---

### 3.2 Function with Parameters but No Return Value
```python
def myfun(name):
    print("Hello", name)

myfun("John")
```
**Output:**
```
Hello John
```
**Use case:** Displaying or processing data without returning

---

### 3.3 Function with Parameters and Return Value
```python
def cal(a, b):
    return a + b

print(cal(10, 20))
```
**Output:**
```
30
```
**Use case:** Calculations, business logic

---

### 3.4 Function Returning `None`
```python
def myfun():
    return

print(myfun())
```
**Output:**
```
None
```
**Important:** If no return value → Python returns `None`

---

## 4. Types of Function Arguments

### 4.1 Arbitrary / Variable-Length Arguments (`*args`)
Used when number of arguments is unknown.

```python
def sum_function(*numbers):
    total = 0
    for i in numbers:
        total += i
    return total

print(sum_function(10, 20))
print(sum_function(10, 20, 30))
print(sum_function())
```
**Output:**
```
30
60
0
```
**Use case:** Sum, logging, flexible inputs

---

### 4.2 Positional (Required) Arguments
Arguments are passed in order.

```python
def myfun(i, j):
    print(i, j)

myfun(10, 20)
```
**Output:**
```
10 20
```

---

### 4.3 Keyword Arguments
Arguments passed using parameter names.

```python
myfun(i=10, j=20)
myfun(j=20, i=10)
```
**Output:**
```
10 20
```
**Advantage:** Order does not matter

---

### 4.4 Default Arguments
Default values assigned to parameters.

```python
def myfun(i=10, j=20):
    print(i, j)

myfun(100)
myfun()
```
**Output:**
```
100 20
10 20
```

---

### 4.5 Mixing Positional & Keyword Arguments
```python
def myfun(a, b, c):
    print(a, b, c)

myfun(10, 20, 30)
myfun(10, 20, c=30)
```
**Rule:** Positional arguments must come **before** keyword arguments

❌ Invalid:
```python
myfun(10, b=20, 30)
```

---

## 5. Function Returning Multiple Values
Python returns multiple values as a **tuple**.

```python
def largest(a, b):
    if a > b:
        return a, b
    else:
        return b, a

res = largest(100, 200)
print(res)
print(type(res))
```
**Output:**
```
(200, 100)
<class 'tuple'>
```

---

## 6. Scope of Variables

### 6.1 Global vs Local Variables
- **Global variable** → Declared outside function
- **Local variable** → Declared inside function

```python
x = 20  # global

def myfun():
    y = 10  # local
    print(x)
    print(y)

myfun()
print(x)
```
❌ `print(y)` outside function → Error

---

### 6.2 Same Name for Global & Local Variable
```python
x = 100

def myfun():
    x = 200
    print(x)

myfun()
print(x)
```
**Output:**
```
200
100
```

---

### 6.3 Updating Global Variable Using `global`
```python
x = 100

def myfun():
    global x
    x = 200
    print(x)

myfun()
print(x)
```
**Output:**
```
200
200
```

---

### 6.4 Declaring Global Variable Inside Function
```python
def myfun():
    global x
    x = 100
    print(x)

myfun()
print(x)
```
**Output:**
```
100
100
```

---

## 7. Best Practices
- Prefer **local variables** over global
- Use `*args` carefully
- Keep functions **small & reusable**
- One function → one responsibility

---

## 8. Interview & Automation Use Cases
- Test utilities
- Data-driven testing
- Framework reusable methods
- API helpers

---

## 9. Key Takeaways
- Use `def` to define functions
- Functions can return single or multiple values
- Understand argument types clearly
- Avoid excessive use of `global`

---

✅ **End of Notes**

