# 📘 Python Regex (re Module) – Full Practical Canvas for Automation & AI Agents

All examples include:
- Real-time use case
- Code
- Output
- Alternative without regex
- Best practice recommendation

---

# 1️⃣ re.search() ⭐⭐⭐⭐⭐

## ✅ Use Case: Extract OTP from SMS

```python
import re

text = "Your OTP is 784512 valid for 10 minutes"
match = re.search(r"\d{6}", text)

if match:
    print(match.group())
```

### ✅ Output
```
784512
```

### 🚫 Without Regex
```
text.split("OTP is ")[1][:6]
```
❌ Breaks if message format changes.

### ⭐ Best Practice
Use re.search() for dynamic extraction.

---

# 2️⃣ re.findall() ⭐⭐⭐⭐⭐

## ✅ Use Case: Extract All Prices

```python
import re

text = "Prices: 500 600 700"
prices = re.findall(r"\d+", text)
print(prices)
```

### ✅ Output
```
['500', '600', '700']
```

### 🚫 Without Regex
Manual loop required.

### ⭐ Best Practice
Use when multiple dynamic values exist.

---

# 3️⃣ re.sub() ⭐⭐⭐⭐⭐

## ✅ Use Case: Mask Sensitive Data

```python
import re

text = "Card: 1234-5678-9876-5432"
masked = re.sub(r"\d{4}-\d{4}-\d{4}-", "XXXX-XXXX-XXXX-", text)
print(masked)
```

### ✅ Output
```
Card: XXXX-XXXX-XXXX-5432
```

### 🚫 Without Regex
Multiple replace() calls needed.

### ⭐ Best Practice
Use for masking, cleaning, preprocessing LLM input.

---

# 4️⃣ re.finditer() ⭐⭐⭐⭐

## ✅ Use Case: Find Error Positions in Log

```python
import re

log = "INFO Start ERROR Failed ERROR Timeout"
for m in re.finditer(r"ERROR", log):
    print(m.group(), m.start())
```

### ✅ Output
```
ERROR 11
ERROR 24
```

### ⭐ Best Practice
Use when position tracking required.

---

# 5️⃣ re.fullmatch() ⭐⭐⭐

## ✅ Use Case: Validate Exact OTP

```python
import re

result = re.fullmatch(r"\d{6}", "123456")
print(bool(result))
```

### ✅ Output
```
True
```

### ⭐ Best Practice
Use for strict validation.

---

# 6️⃣ re.split()

## ✅ Use Case: Clean Multiple Spaces

```python
import re

text = "Hello    World   Python"
parts = re.split(r"\s+", text)
print(parts)
```

### ✅ Output
```
['Hello', 'World', 'Python']
```

---

# 7️⃣ re.compile() ⭐⭐⭐⭐⭐

## ✅ Use Case: Reusable Pattern in Framework

```python
import re

otp_pattern = re.compile(r"\d{6}")

text1 = "OTP: 111111"
text2 = "OTP: 222222"

print(otp_pattern.search(text1).group())
print(otp_pattern.search(text2).group())
```

### ✅ Output
```
111111
222222
```

### ⭐ Best Practice
Always use compile() in automation frameworks.

---

# 8️⃣ re.escape()

## ✅ Use Case: Search Literal Special Characters

```python
import re

user_input = "10.50"
pattern = re.escape(user_input)
print(pattern)
```

### ✅ Output
```
10\.50
```

---

# 9️⃣ Flags Example

```python
import re

text = "hello"
match = re.search(r"HELLO", text, re.IGNORECASE)
print(bool(match))
```

### ✅ Output
```
True
```

---

# 🔟 Match Object Methods

```python
import re

text = "Order ID: ORD-12345"
m = re.search(r"ORD-(\d+)", text)

print(m.group())
print(m.group(1))
print(m.start())
print(m.end())
print(m.span())
```

### ✅ Output
```
ORD-12345
12345
10
19
(10, 19)
```

---

# 🏆 Most Important for Automation & AI Agents

Priority order:
1. re.search()
2. re.findall()
3. re.sub()
4. re.compile()
5. re.finditer()

Master these 5 → 90% real-world automation problems solved.

---

# 🚫 If Regex Is NOT Used – What Are the Alternatives?

Below is an expert comparison for Automation Engineers.

---

## 1️⃣ OTP / ID Extraction

Without Regex:
- str.split()
- str.find()
- string slicing

Example:
text.split("OTP is ")[1][:6]

❌ Problem:
- Breaks if format changes
- Hardcoded positions
- Not scalable

✅ Best Option: Regex (re.search)
Reason: Pattern-based, format independent.

---

## 2️⃣ Multiple Value Extraction (Prices, IDs)

Without Regex:
- Manual loops
- isdigit() checks
- Complex conditional logic

❌ Problem:
- More code
- Less readable
- Error-prone

✅ Best Option: Regex (re.findall)
Reason: One line extraction, clean and scalable.

---

## 3️⃣ Masking Sensitive Data

Without Regex:
- Multiple replace() calls
- Manual substring operations

❌ Problem:
- Cannot handle dynamic length
- Fails for variable formats

✅ Best Option: Regex (re.sub)
Reason: Flexible masking based on pattern.

---

## 4️⃣ HTML Parsing

Alternative Tool:
- BeautifulSoup

❌ Regex Problem:
- HTML is nested structure
- Regex becomes messy and unsafe

✅ Best Option: BeautifulSoup (NOT Regex)
Reason: Structured parser better for nested tags.

---

## 5️⃣ JSON Parsing

Alternative Tool:
- json.loads()

❌ Regex Problem:
- JSON is structured
- Edge cases break easily

✅ Best Option: json module
Reason: Always parse structured data with proper parser.

---

## 6️⃣ CSV Parsing

Alternative Tool:
- csv module

❌ Regex Problem:
- Commas inside quotes break logic

✅ Best Option: csv module
Reason: Built-in handling of edge cases.

---

# 🏆 Expert Recommendation – When Regex Is BEST

As QA Automation Engineer, use Regex when:

✅ Extracting dynamic data (OTP, Order ID, Invoice No)
✅ Validating user input (email, phone, password)
✅ Log analysis (ERROR, timestamps, codes)
✅ Masking sensitive information
✅ Cleaning AI / LLM input
✅ Flexible assertion in UI/API automation

Regex is BEST when:
- Data is semi-structured text
- Pattern-based matching required
- Format may change slightly
- You need dynamic validation

---

# ⚠️ When NOT To Use Regex

Avoid Regex when:

❌ Parsing JSON → Use json.loads()
❌ Parsing HTML/XML → Use BeautifulSoup or lxml
❌ Working with structured API responses → Use dict access
❌ Complex nested hierarchical data
❌ Business logic validation

Rule of Thumb:

"If data has structure → use parser.
If data has pattern → use regex."

---

# 🚀 Final Best Practices for QA Automation Engineers

1️⃣ Always use re.compile() in frameworks.
2️⃣ Keep patterns readable (avoid overcomplicated regex).
3️⃣ Validate match before accessing group().
4️⃣ Use non-greedy quantifiers when needed.
5️⃣ Write unit tests for important regex patterns.
6️⃣ Avoid using regex where structured parsers exist.
7️⃣ Comment complex patterns clearly.
8️⃣ Prefer clarity over clever one-liners.

---

# 🥇 Strategic Advice for Tame (Automation + AI Agent Builder)

Master these methods deeply:
- re.search()
- re.findall()
- re.sub()
- re.compile()
- re.finditer()

These 5 methods solve 90% of real-world automation problems.

Think like this:

Pattern-based problem → Use Regex.
Structure-based problem → Use Parser.

---

End of Updated Expert Canvas.

