# Python Strings – Complete Guide (Canvas)

---

## 1. What is a String?
A **string** in Python is a sequence of characters enclosed in quotes.

✔ Strings are **immutable** (cannot be changed after creation)
✔ Data type: `str`

---

## 2. Creating Strings (All Ways)

### Code
```python
s1 = "Hello"          # double quotes
s2 = 'World'          # single quotes
s3 = str("Python")    # str constructor
s4 = str()            # empty string

print(s1, type(s1))
print(s2, type(s2))
print(s3, type(s3))
print(s4, type(s4))
```

### Output
```
Hello <class 'str'>
World <class 'str'>
Python <class 'str'>
 <class 'str'>
```

### Use Case
✔ User input
✔ Text processing
✔ Messages, logs, UI labels

---

## 3. String Immutability (IMPORTANT)

### Code
```python
s = "hello"
print(s)
print(id(s))

s = s + " world"
print(s)
print(id(s))
```

### Output
```
hello
14023...
hello world
14056...
```

### Explanation
• Original string is NOT modified
• New string object is created
• ID changes

### Use Case
✔ Memory safety
✔ Thread-safe operations

---

## 4. String Concatenation & Repetition

### Code
```python
s1 = "Python"
s2 = "Rocks"

print(s1 + " " + s2)
print(s1 * 3)
```

### Output
```
Python Rocks
PythonPythonPython
```

### Use Case
✔ Build messages
✔ Repeat patterns

---

## 5. String Indexing

### Code
```python
s = "Python"
print(s[0])
print(s[-1])
```

### Output
```
P
n
```

### Rule
• Index starts from 0
• Negative index from end

---

## 6. String Slicing

### Code
```python
s = "welcome"
print(s[1:4])
print(s[:5])
print(s[-3:])
print(s[2:5])
```

### Output
```
elc
welco
ome
lco
```

### Use Case
✔ Extract substring
✔ Data cleaning

---

## 7. Reverse a String

### Code
```python
s = "Python"
print(s[::-1])
```

### Output
```
nohtyP
```

---

## 8. Membership Operators

### Code
```python
s = "welcome"
print("come" in s)
print("java" not in s)
```

### Output
```
True
True
```

### Use Case
✔ Keyword search
✔ Validation

---

## 9. String Formatting (BEST PRACTICE)

### Code (f-string)
```python
name = "Hitesh"
age = 30
print(f"My name is {name} and I am {age} years old")
```

### Output
```
My name is Hitesh and I am 30 years old
```

✔ Recommended in Python 3.6+

---

## 10. Case Conversion Methods

### Code
```python
s = "welcome to python"
print(s.capitalize())
print(s.title())
print(s.upper())
print(s.lower())
print(s.swapcase())
```

### Output
```
Welcome to python
Welcome To Python
WELCOME TO PYTHON
welcome to python
WELCOME TO PYTHON
```

---

## 11. Search & Find

### Code
```python
s = "hello"
print(s.find("l"))
print(s.find("x"))
```

### Output
```
2
-1
```

✔ `find()` returns -1
✔ `index()` raises error if not found

---

## 12. Count & Replace

### Code
```python
s = "banana"
print(s.count("a"))

text = "I like banana"
print(text.replace("banana", "orange"))
```

### Output
```
3
I like orange
```

---

## 13. Validation Methods

### Code
```python
s = "abc123"
print(s.isalpha())
print(s.isdigit())
print(s.isalnum())
```

### Output
```
False
False
True
```

---

## 14. isdecimal vs isdigit vs isnumeric

| Method | 0–9 | Superscript | Fractions | Roman |
|------|-----|------------|-----------|-------|
| isdecimal | ✅ | ❌ | ❌ | ❌ |
| isdigit | ✅ | ✅ | ❌ | ❌ |
| isnumeric | ✅ | ✅ | ✅ | ✅ |

---

## 15. Split & Strip

### Code
```python
s = "  apple,banana,grape  "
s = s.strip()
print(s.split(","))
```

### Output
```
['apple', 'banana', 'grape']
```

---

## 16. startswith & endswith

### Code
```python
print("hello.py".endswith(".py"))
print("hello".startswith("he"))
```

### Output
```
True
True
```

---

## 17. Common String Programs (Practice)

1. Reverse a string
2. Count vowels
3. Palindrome check
4. Remove spaces
5. Find duplicate characters
6. Word count
7. Replace substring
8. Validate email / mobile number
9. Capitalize first letter of each word
10. Check anagram

---

## 18. Best Practices

✔ Use **f-strings** for formatting
✔ Do not try to modify strings in-place
✔ Use slicing instead of loops when possible
✔ Use built-in methods (fast & readable)
✔ Prefer `in` over manual search
✔ Avoid `+` in loops → use `join()`

---

## FINAL SUMMARY

• String → immutable
• Fast, safe, memory-efficient
• Rich built-in methods
• Core for automation, AI, testing, backend

---

✅ This canvas covers **all examples from your attached files** with
✔ Code
✔ Output
✔ Explanation
✔ Use cases
✔ Interview points

You can now directly use this for **students, notes, revision, and intervie