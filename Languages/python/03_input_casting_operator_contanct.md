# Python User Input, Type Casting & Operators

## Code + Output + Use Cases + Differences + Best Practices

---

## What Covered in This Canvas

- User input behavior in Python
- Why input() always returns string
- String vs numeric addition
- Type casting (int, float)
- Data types overview
- Operators & concatenation
- Deleting variables
- Real-world use cases
- Common mistakes & best practices

---

## 1. User Input in Python (MOST IMPORTANT CONCEPT)

### Key Rule

> **input() always returns data as STRING**

### Example Code

```python
num1 = input("Enter first number: ")
num2 = input("Enter second number: ")

print(type(num1))
print(type(num2))
print(num1 + num2)
```

### Input

```
100
200
```

### Output

```
<class 'str'>
<class 'str'>
100200
```

### Explanation

- input() reads keyboard input as text
- `+` performs **string concatenation**, not addition

---

## 2. Approach 1 – Type Casting During Input (RECOMMENDED)

### Code

```python
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

print(type(num1))
print(type(num2))
print(num1 + num2)
```

### Input

```
100
200
```

### Output

```
<class 'int'>
<class 'int'>
300
```

### Use Case

- Numeric calculations
- Automation logic
- API data validation

---

## 3. Approach 2 – Convert After Input

### Code

```python
num1 = input("Enter first number: ")
num2 = input("Enter second number: ")

print(int(num1) + int(num2))
```

### Output

```
300
```

### Difference from Approach 1

- Conversion happens later
- Less safe for large programs

---

## 4. Float Input Example (Decimal Numbers)

### Code

```python
num1 = input("Enter first decimal number: ")
num2 = input("Enter second decimal number: ")

print(num1 + num2)
print(float(num1) + float(num2))
```

### Input

```
10.5
20.0
```

### Output

```
10.520.0
30.5
```

### Explanation

- First output = string concatenation
- Second output = numeric addition

---

## 5. Data Types in Python

| Type  | Description     | Example      |
| ----- | --------------- | ------------ |
| int   | Whole numbers   | 10, -5       |
| float | Decimal numbers | 3.14         |
| str   | Text            | "Python"     |
| bool  | Boolean         | True / False |

### Example

```python
x = 100
y = 10.5
s = "Python"
b = True

print(type(x))
```

---

## 6. Operators in Python (DETAILED)

Operators are used to **perform operations on values and variables**.

Python mainly uses:

- Arithmetic Operators
- Comparison Operators
- Logical Operators

---

### 6.1 Arithmetic Operators

Used to perform mathematical calculations.

| Operator | Name           | Example  | Output |
| -------- | -------------- | -------- | ------ |
| +        | Addition       | 10 + 5   | 15     |
| -        | Subtraction    | 10 - 5   | 5      |
| \*       | Multiplication | 10 \* 5  | 50     |
| /        | Division       | 10 / 5   | 2.0    |
| %        | Modulus        | 10 % 3   | 1      |
| \*\*     | Power          | 2 \*\* 3 | 8      |
| //       | Floor Division | 10 // 3  | 3      |

#### Example Code

```python
a = 10
b = 3

print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.333...
print(a % b)   # 1
print(a ** b)  # 1000
print(a // b)  # 3
```

#### Use Cases

- Calculations
- Pricing logic
- Test data manipulation

---

### 6.2 Comparison Operators

Used to **compare two values**. Returns **True or False**.

| Operator | Meaning          | Example | Result |
| -------- | ---------------- | ------- | ------ |
| ==       | Equal to         | 5 == 5  | True   |
| !=       | Not equal        | 5 != 3  | True   |
| >        | Greater than     | 10 > 5  | True   |
| <        | Less than        | 10 < 5  | False  |
| >=       | Greater or equal | 5 >= 5  | True   |
| <=       | Less or equal    | 4 <= 5  | True   |

#### Example Code

```python
x = 10
y = 5

print(x == y)   # False
print(x != y)   # True
print(x > y)    # True
print(x < y)    # False
print(x >= y)   # True
print(x <= y)   # False
```

#### Use Cases

- Conditions (if statements)
- Validation logic
- Automation assertions

---

### 6.3 Logical Operators

Used to **combine conditional statements**.

| Operator | Meaning        | Example        | Result |
| -------- | -------------- | -------------- | ------ |
| and      | Both true      | True and False | False  |
| or       | Any one true   | True or False  | True   |
| not      | Reverse result | not True       | False  |

#### Example Code

```python
age = 25
has_id = True

print(age > 18 and has_id)   # True
print(age < 18 or has_id)    # True
print(not has_id)            # False
```

#### Use Cases

- Decision making
- Access control
- Complex conditions

---

## 7. Concatenation Rules (Correct vs Incorrect)

Concatenation means **joining values using **``.

⚠️ Important Rule:

> **Python allows concatenation only between SAME compatible data types**.

---

### 7.1 Correct Concatenation Examples

#### String + String

```python
print("Hello" + "Python")
```

Output:

```
HelloPython
```

#### Number + Number

```python
print(10 + 20)
```

Output:

```
30
```

#### Boolean + Number

```python
print(True + 5)
print(False + 10)
```

Output:

```
6
10
```

Explanation:

- True → 1
- False → 0

---

### 7.2 Incorrect Concatenation Examples (IMPORTANT)

#### String + Number ❌

```python
print("Age is: " + 25)
```

Reason:

- String and number are **different data types**
- Python does not auto-convert

---

#### String + Float ❌

```python
print("Price: " + 10.5)
```

Reason:

- String and float cannot be joined directly

---

#### String + Boolean ❌

```python
print("Status: " + True)
```

Reason:

- Boolean is not a string

---

### 7.3 Correct Way to Fix Incorrect Concatenation

#### Use Explicit Conversion

```python
print("Age is: " + str(25))
print("Price: " + str(10.5))
print("Status: " + str(True))
```

Output:

```
Age is: 25
Price: 10.5
Status: True
```

---

### 7.4 Best Practice for Concatenation

✔ Convert non-string values using `str()` ✔ Use formatted strings (recommended)

```python
age = 25
price = 10.5
print(f"Age is {age}, Price is {price}")
```

---

## 8. Deleting Variables

### Code

```python
a = 100
b = 200

del a
print(b)
```

### Output

```
200
```

### Important

- Deleted variable cannot be used again

---

## 9. Common Mistakes (VERY IMPORTANT)

❌ Assuming input() returns number ❌ Forgetting type conversion ❌ Mixing string & numbers blindly ❌ Not validating user input

---

## 10. Best Practices (REAL-WORLD)

### ✔ Always Convert Input

```python
age = int(input("Enter age: "))
```

### ✔ Validate Input

```python
if age < 0:
    print("Invalid age")
```

### ✔ Use Meaningful Variable Names

```python
total_price = float(input("Enter price: "))
```

### ✔ Convert Early, Not Late

- Convert input immediately
- Avoid carrying string values

---

## 11. Real-World Use Cases

- Automation scripts
- CLI tools
- Test data input
- Configuration reading
- AI pipeline parameter input

---

## 12. Key Difference Summary

| Scenario          | Result               |
| ----------------- | -------------------- |
| input() + input() | String concatenation |
| int(input())      | Numeric addition     |
| float(input())    | Decimal calculation  |

---

## 13. Memory Hook

> **Input = String → Convert → Operate**

---

## 14. Final One-Line Summary

> "Python input always returns strings, so explicit type conversion is required to perform numeric operations safely and correctly in real-world programs."

