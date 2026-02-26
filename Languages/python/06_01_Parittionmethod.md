# Python String partition() – Complete Guide (Simple + Practical)

---

# 1️⃣ Simple Definition

`partition()` is a string method that:

✔ Splits the string at the **first occurrence** of a separator  
✔ Returns exactly **3 parts**  
✔ Always returns a **tuple**

Structure of output:

(before_separator, separator, after_separator)

---

# 2️⃣ Basic Example

```python
name = "Hitesh iS back"
print(name.partition(" "))
```

Output:
```
('Hitesh', ' ', 'iS back')
```

Explanation:
- First space found after "Hitesh"
- Split only at first space
- Returns 3 values

---

# 3️⃣ If Separator Not Found

```python
print(name.partition("Z"))
```

Output:
```
('Hitesh iS back', '', '')
```

Explanation:
- If separator not found
- First value = full string
- Remaining values = empty

---

# 4️⃣ 🏢 Automation Use Cases

✔ Extract first word from UI label  
✔ Parse HTTP header  
✔ Extract key-value from string  
✔ Parse API response headers  
✔ Split only first occurrence safely

---

# 5️⃣ Real Automation Example – HTTP Header Parsing

```python
header = "Content-Type: application/json"

key, sep, value = header.partition(":")

print(key)
print(value.strip())
```

Output:
```
Content-Type
application/json
```

Explanation:
- Split only at first ":"
- key → Header name
- value → Header value (after cleaning spaces)

Very useful in API automation testing.

---

# 6️⃣ Extract First Word Example

```python
label = "Login Successful"
first_word, sep, rest = label.partition(" ")

print(first_word)
```

Output:
```
Login
```

Used in UI validation automation.

---

# 7️⃣ Extract Key-Value from Custom String

```python
data = "status=PASS"
key, sep, value = data.partition("=")

print(key)
print(value)
```

Output:
```
status
PASS
```

Used in log parsing and test result extraction.

---

# 8️⃣ AI Use Case

Example: Extract command + query

```python
query = "summarize document"
command, sep, text = query.partition(" ")

print(command)
print(text)
```

Output:
```
summarize
document
```

Useful in AI Agents to separate instruction from content.

---

# 9️⃣ Difference Between split() and partition()

| Feature | split() | partition() |
|----------|----------|-------------|
| Splits all occurrences | ✅ | ❌ (only first) |
| Returns list | ✅ | ❌ (returns tuple) |
| Always 3 parts | ❌ | ✅ |

---

# 🔟 Final Summary

partition():

✔ Splits only first occurrence  
✔ Always returns 3 values  
✔ Keeps separator  
✔ Safe for key-value parsing  
✔ Very useful in Automation & AI systems

---

This document provides:

✔ Simple definition  
✔ Code examples  
✔ Output  
✔ Automation use cases  
✔ AI use case  
✔ Comparison with split()  

Complete understanding of partition().

