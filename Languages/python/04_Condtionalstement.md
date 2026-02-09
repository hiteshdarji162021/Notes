# Python Conditional Statements (Day 3)

## 1. What are Conditional Statements?
Conditional statements are used to **make decisions** in a program.
They help the program decide **which block of code to run** based on a condition that is either **True** or **False**.

**Real-life example:**
- If it is raining → take umbrella
- Else → no umbrella

---

## 2. Important Rule: Indentation
Python uses **indentation (spaces)** to define blocks of code.
- Usually **4 spaces** are used
- Indentation is **mandatory**

❌ Wrong:
```
if age > 18:
print("Adult")
```

✅ Correct:
```
if age > 18:
    print("Adult")
```

---

## 3. if Statement
The `if` statement runs code **only when the condition is True**.

### Syntax
```
if condition:
    statement
```

### Example
```
age = 18
if age >= 18:
    print("You are eligible to vote")
```

### Output
```
You are eligible to vote
```

---

## 4. if...else Statement
Used when you want **two possible paths**.

### Syntax
```
if condition:
    statement_if_true
else:
    statement_if_false
```

### Example
```
age = 16
if age >= 18:
    print("Eligible")
else:
    print("Not Eligible")
```

### Output
```
Not Eligible
```

---

## 5. if...elif...else Statement
Used when you have **multiple conditions**.

### Syntax
```
if condition1:
    statement
elif condition2:
    statement
else:
    statement
```

### Example
```
marks = 60
if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 50:
    print("C")
else:
    print("Fail")
```

### Output
```
C
```

---

## 6. Logical Operators
Used to combine conditions.

### and (Both conditions must be True)
```
if a > b and c > a:
    print("Both True")
```

### or (At least one condition True)
```
if a > b or a > c:
    print("One condition True")
```

### not (Reverse condition)
```
if not a > b:
    print("Condition reversed")
```

---

## 7. Short-hand if (One Line if)
Used when there is **only one statement**.

```
if a > b: print("a is greater")
```

### Short-hand if...else (Ternary Operator)
```
print("A") if a > b else print("B")
```

Multiple conditions:
```
print("A") if a > b else print("=") if a == b else print("B")
```

---

## 8. Nested if Statement
An `if` inside another `if`.

### Example
```
x = 15
if x > 10:
    print("Above 10")
    if x > 20:
        print("Above 20")
    else:
        print("Not above 20")
```

### Output
```
Above 10
Not above 20
```

---

## 9. pass Statement
Used when a block is **empty** (do nothing but avoid error).

```
if a > b:
    pass
```

---

## 10. Key Points for Students
- Python uses **indentation, not brackets**
- Conditions return **True / False**
- `elif` can be used multiple times
- `else` is optional
- Short-hand if is only for **single-line logic**

---

## 11. Practice Tip
Before automation testing, **master conditional statements**, because:
- They are used in validations
- Used in loops
- Used in decision making in frameworks

---

✅ This completes **Day 3 – Conditional Statements**

