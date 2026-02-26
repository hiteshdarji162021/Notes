# PYTHON STRING – MASTER DOCUMENT (Automation + AI Ready)

---

# Base Example Used

```python
name = "Hitesh iS back"
item = "Shampoo"
price = "500"
```

---

# 1️⃣ upper()
```python
print(name.upper())
```
Output:
```
HITESH IS BACK
```
Automation: Case-insensitive UI validation  
AI: Normalize text before embedding

---

# 2️⃣ lower()
```python
print(name.lower())
```
Output:
```
hitesh is back
```
Automation: Compare API response ignoring case  
AI: Text preprocessing

---

# 3️⃣ title()
```python
print(name.title())
```
Output:
```
Hitesh Is Back
```
Automation: Format report headings  
AI: Clean display output

---

# 4️⃣ capitalize()
```python
print(name.capitalize())
```
Output:
```
Hitesh is back
```
Automation: Normalize first letter fields  
AI: Sentence formatting

---

# 5️⃣ swapcase()
```python
print(name.swapcase())
```
Output:
```
hITESH Is BACK
```
Automation: Negative test case  
AI: Text transformation experiments

---

# 6️⃣ count()
```python
print(name.count("H"))
```
Output:
```
1
```
Automation: Validate repeated keyword  
AI: Keyword frequency check

---

# 7️⃣ find()
```python
print(name.find("H"))
```
Output:
```
0
```
Automation: Locate substring position  
AI: Intent keyword detection

---

# 8️⃣ replace()
```python
print(name.replace("H","*"))
```
Output:
```
*itesh iS back
```
Automation: Mask sensitive data  
AI: Prompt refinement

---

# 9️⃣ strip()
```python
s = "  hello  "
print(s.strip())
```
Output:
```
hello
```
Automation: Clean user input  
AI: Clean scraped data

---

# 🔟 split()
```python
print(name.split(" "))
```
Output:
```
['Hitesh', 'iS', 'back']
```
Automation: Parse sentence into tokens  
AI: Tokenization step

---

# 1️⃣1️⃣ rsplit()
```python
print(name.rsplit(" ",1))
```
Output:
```
['Hitesh iS', 'back']
```
Automation: Extract last word  
AI: Extract command suffix

---

# 1️⃣2️⃣ splitlines()
```python
text = "Line1
Line2"
print(text.splitlines())
```
Output:
```
['Line1', 'Line2']
```
Automation: Log file parsing  
AI: Multi-line response handling

---

# 1️⃣3️⃣ join()
```python
words = ["Hitesh","is","back"]
print(" ".join(words))
```
Output:
```
Hitesh is back
```
Automation: Build CSV row  
AI: Build prompt dynamically

---

# 1️⃣4️⃣ center()
```python
print(name.center(25,"*"))
```
Output:
```
****Hitesh iS back*****
```
Automation: Report heading  
AI: Structured chat formatting

---

# 1️⃣5️⃣ ljust() & rjust()
```python
print(item.ljust(20) + price.rjust(10))
```
Output:
```
Shampoo                 500
```
Automation: Invoice formatting  
AI: Structured output tables

---

# 1️⃣6️⃣ startswith() / endswith()
```python
print(name.startswith("Hit"))
print(name.endswith("back"))
```
Output:
```
True
True
```
Automation: File extension validation  
AI: Intent prefix detection

---

# 1️⃣7️⃣ isalpha() / isdigit() / isalnum()
```python
print("abc".isalpha())
print("123".isdigit())
print("abc123".isalnum())
```
Output:
```
True
True
True
```
Automation: Form validation  
AI: Structured input check

---

# 1️⃣8️⃣ isdecimal() / isnumeric()
```python
print("500".isdecimal())
```
Output:
```
True
```
Automation: OTP verification  
AI: Validate numeric-only response

---

# 1️⃣9️⃣ partition()
```python
print(name.partition(" "))
```
Output:
```
('Hitesh', ' ', 'iS back')
```
Automation: Split first occurrence only  
AI: Separate command + message

---

# 2️⃣0️⃣ encode() / decode()
```python
b = name.encode("utf-8")
print(b)
```
Output:
```
b'Hitesh iS back'
```
Automation: Handle API byte response  
AI: Multilingual processing

---


# 🚀 FINAL SUMMARY

These string methods are heavily used in:

Automation:
✔ UI validation  
✔ API response parsing  
✔ Log analysis  
✔ Report generation  
✔ Data cleaning  

AI Systems:
✔ Prompt engineering  
✔ Text preprocessing  
✔ Output formatting  
✔ Token handling  
✔ RAG context building  

This document now contains:
✔ Code  
✔ Output  
✔ Automation use case  
✔ AI use case  

Complete reference for mastering Python Strings.

