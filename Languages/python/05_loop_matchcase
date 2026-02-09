# Python – Day 4
## Match Statement, range() Function & Looping Statements

---

## 1. match Statement (Similar to switch-case)
The `match` statement is used to select **one block of code** from multiple options.
It is cleaner than writing many `if...elif...else` statements.

### Syntax
```
match variable:
    case value1:
        statements
    case value2:
        statements
    case _:
        default statements
```

### Example
```
day = 3

match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case _:
        print("Invalid day")
```

### Output
```
Wednesday
```

### Key Points
- Expression is checked **only once**
- `_` acts as **default case**
- Available from **Python 3.10+**

---

## 2. Looping / Iteration Statements
Loops are used to **repeat a block of code**.

### Why loops?
Instead of writing:
```
print(1)
print(2)
print(3)
```
We use loops.

---

## 3. while Loop
Runs **as long as condition is True**.

### Syntax
```
while condition:
    statements
    increment / decrement
```

### Example – Print 1 to 5
```
i = 1
while i <= 5:
    print(i)
    i += 1
```

### Output
```
1
2
3
4
5
```

---

## 4. range() Function
`range()` generates a **sequence of numbers**.

### Syntax
```
range(start, stop, step)
```

### Notes
- `start` → starting number (default 0)
- `stop` → ending number (excluded)
- `step` → increment/decrement (default 1)

### Examples
```
range(5)        → 0 1 2 3 4
range(1, 6)     → 1 2 3 4 5
range(1, 10, 2) → 1 3 5 7 9
```

---

## 5. for Loop
Used when number of iterations is **known**.

### Syntax
```
for variable in range(start, stop, step):
    statements
```

### Example – Print 1 to 5
```
for i in range(1, 6):
    print(i)
```

---

## 6. Jumping Statements
Used to control loop execution.

### break Statement
Stops the loop **immediately**.

#### Example
```
while True:
    num = int(input("Enter number between 1 and 10: "))
    if 1 <= num <= 10:
        print("Valid number")
        break
```

---

### continue Statement
Skips current iteration and moves to next.

#### Example – Skip multiples of 3
```
for i in range(1, 21):
    if i % 3 == 0:
        continue
    print(i)
```

---

## 7. Practice Programs (Lab Assignments)

### 1. Positive / Negative / Zero
```
num = float(input("Enter a number: "))
if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")
```

### 2. Vowel or Consonant
```
ch = input("Enter a letter: ").lower()
if ch in 'aeiou':
    print("Vowel")
else:
    print("Consonant")
```

### 3. Grading System
```
score = int(input("Enter score: "))
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
elif score >= 60:
    print("D")
else:
    print("F")
```

### 4. Sum of Digits (while loop)
```
num = int(input("Enter number: "))
total = 0
while num > 0:
    total += num % 10
    num //= 10
print(total)
```

### 5. Reverse a Number
```
num = int(input("Enter number: "))
rev = 0
while num > 0:
    rev = rev * 10 + num % 10
    num //= 10
print(rev)
```

---

## 8. Key Learning for Students
- Use `match` instead of long if-else
- Use `while` when condition-based looping is needed
- Use `for + range()` for fixed iterations
- `break` → stop loop
- `continue` → skip iteration

---

✅ **Day 4 Completed: Match, Range & Loops**

