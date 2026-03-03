# 🧠 Python Regular Expressions (Regex) – Complete Practical Guide (With Examples & Outputs)

---

# 1️⃣ What is Regex?

Regex (Regular Expression) is a pattern matching language used to:

- Find text
- Extract text
- Validate format
- Replace text
- Clean text

It works only on **strings (text)**.

Example:
Text: "Your OTP is 458921"
Pattern: `\d{6}` → exactly 6 digits

---

# 2️⃣ Importing Regex

```python
import re
```

---

# 3️⃣ Core Regex Methods (Each With 3 Examples + Output + Use Case)

---

# ✅ 1️⃣ re.search()
Finds FIRST match anywhere in string.

---
Example 1 – Extract first number

```python
import re
text = "Order 123 shipped"
match = re.search(r"\d+", text)
print(match.group())
```
Output:
123
Use case: Extract order ID

---
Example 2 – Find email pattern

```python
text = "Contact: test@gmail.com"
match = re.search(r"\w+@\w+\.\w+", text)
print(match.group())
```
Output:
test@gmail.com
Use case: Extract email from response

---
Example 3 – Find error word

```python
text = "Status: ERROR 500"
match = re.search(r"ERROR", text)
print(match.group())
```
Output:
ERROR
Use case: Log validation

---

# ✅ 2️⃣ re.findall()
Finds ALL matches and returns list.

---
Example 1 – Extract all numbers

```python
text = "a1 b22 c333"
print(re.findall(r"\d+", text))
```
Output:
['1', '22', '333']
Use case: Extract multiple IDs

---
Example 2 – Extract all words starting with a

```python
text = "apple ant ball axe"
print(re.findall(r"a\w+", text))
```
Output:
['apple', 'ant', 'axe']
Use case: Filter specific words

---
Example 3 – Extract all dates

```python
text = "2026-01-01 2025-12-31"
print(re.findall(r"\d{4}-\d{2}-\d{2}", text))
```
Output:
['2026-01-01', '2025-12-31']
Use case: Date parsing

---

# ✅ 3️⃣ re.match()
Matches only from beginning.

---
Example 1

```python
text = "123abc"
print(re.match(r"\d+", text).group())
```
Output:
123

---
Example 2

```python
text = "abc123"
print(re.match(r"\d+", text))
```
Output:
None

---
Example 3 – Validate starts with capital letter

```python
text = "Hello world"
print(bool(re.match(r"[A-Z]", text)))
```
Output:
True
Use case: Input format validation

---

# ✅ 4️⃣ re.fullmatch()
Entire string must match.

---
Example 1 – OTP validation

```python
print(bool(re.fullmatch(r"\d{6}", "123456")))
```
Output:
True

---
Example 2 – Invalid OTP

```python
print(bool(re.fullmatch(r"\d{6}", "12345")))
```
Output:
False

---
Example 3 – Mobile validation

```python
print(bool(re.fullmatch(r"[6-9]\d{9}", "9876543210")))
```
Output:
True
Use case: Strict format validation

---

# ✅ 5️⃣ re.sub()
Replace pattern.

---
Example 1 – Mask numbers

```python
text = "Card 1234"
print(re.sub(r"\d+", "XXXX", text))
```
Output:
Card XXXX

---
Example 2 – Remove extra spaces

```python
text = "Hello   World"
print(re.sub(r"\s+", " ", text))
```
Output:
Hello World

---
Example 3 – Replace emails

```python
text = "Mail me at test@gmail.com"
print(re.sub(r"\w+@\w+\.\w+", "hidden@email.com", text))
```
Output:
Mail me at hidden@email.com
Use case: Data masking

---

# ✅ 6️⃣ re.split()
Split using regex.

---
Example 1 – Split by digits

```python
text = "one1two2three"
print(re.split(r"\d", text))
```
Output:
['one', 'two', 'three']

---
Example 2 – Split by comma or semicolon

```python
text = "a,b;c"
print(re.split(r"[,;]", text))
```
Output:
['a', 'b', 'c']

---
Example 3 – Split by multiple spaces

```python
text = "a   b    c"
print(re.split(r"\s+", text))
```
Output:
['a', 'b', 'c']
Use case: Cleaning messy input

---

# ✅ 7️⃣ re.compile()
Precompile pattern for reuse.

---
Example 1 – Reuse OTP pattern

```python
pattern = re.compile(r"\d{6}")
print(pattern.search("OTP 456789").group())
```
Output:
456789

---
Example 2 – Reuse email pattern

```python
pattern = re.compile(r"\w+@\w+\.\w+")
print(pattern.findall("a@test.com b@test.com"))
```
Output:
['a@test.com', 'b@test.com']

---
Example 3 – Reuse date pattern

```python
pattern = re.compile(r"\d{4}-\d{2}-\d{2}")
print(pattern.search("Date 2026-02-26").group())
```
Output:
2026-02-26
Use case: Framework-level reuse

---

# 4️⃣ Important Pattern Symbols

Symbol | Meaning | Example
---|---|---
`.` | Any 1 character | c.t
`+` | One or more | a+
`*` | Zero or more | ab*
`?` | Optional | ab?
`\d` | Digit | \d+
`\w` | Word char | \w+
`\s` | Space | \s+
`{}` | Exact count | \d{4}
`^` | Start | ^Hello
`$` | End | world$

---

# 5️⃣ Best Practice in Automation

Use Regex When:
- Format matters
- Value changes but structure same
- Extracting OTP, ID, date
- Validating API response
- Parsing logs

Avoid Regex When:
- Exact match works
- Simple contains works
- Pattern becomes unreadable

---

# 🎓 Final Summary

Regex is:
- Pattern matching tool
- Powerful for extraction & validation
- Must-know for automation engineers

Master these:
search(), findall(), fullmatch(), sub(), compile()

This covers 90% real-world usage.

