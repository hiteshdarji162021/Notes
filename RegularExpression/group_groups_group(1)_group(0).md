# 📘 Complete Guide: group() vs group(1) vs group(2) vs groups()

---

# 1️⃣ Basic Concept

When you use parentheses `()` in regex, you create **capturing groups**.

Group numbers are decided by the order of parentheses in the PATTERN — not by how many matches exist in the string.

---

# 2️⃣ group()  → Full Match

`group()` is same as `group(0)`

It returns the entire matched text.

### Example

```python
import re

text = "ID-123"
m = re.search(r"ID-(\d+)", text)

print(m.group())
```

### Output
```
ID-123
```

It returns the full matched string.

---

# 3️⃣ group(1), group(2), group(n)

These return specific captured groups based on pattern parentheses order.

### Example with 3 Groups

```python
import re

text = "2026-02-27"
m = re.search(r"(\d{4})-(\d{2})-(\d{2})", text)

print(m.group(1))
print(m.group(2))
print(m.group(3))
```

### Output
```
2026
02
27
```

Group numbers depend on pattern structure:

- First () → group(1)
- Second () → group(2)
- Third () → group(3)

---

# 4️⃣ groups()

`groups()` returns ALL captured groups as a tuple.

### Example

```python
print(m.groups())
```

### Output
```
('2026', '02', '27')
```

So:

| Method | Returns |
|---------|----------|
| group() | Full match |
| group(1) | First captured group |
| group(2) | Second captured group |
| groups() | Tuple of all groups |

---

# 5️⃣ Your Previous Example (Brackets Case)

## Original String

```python
name2 = "gabbar (is) back (my) friend"
```

## Pattern

```python
r"\((.*?)\)"
```

Pattern breakdown:

- `\(` → Match opening bracket
- `(.*?)` → Group 1
- `\)` → Match closing bracket

There is ONLY ONE capturing group: `(.*?)`

---

# 6️⃣ Case 1: Using group()

```python
result2 = re.sub(
    r"\((.*?)\)",
    lambda p: "(" + p.group()[::-1] + ")",
    name2
)
```

### What happens internally?

For first match:

```
p.group() → "(is)"
```

Reverse:

```
")si("
```

Add brackets:

```
"(" + ")si(" + ")"
→ "()si()"
```

Final output:

```
gabbar ()si() back ()ym() friend
```

Problem: Full match including brackets was reversed.

---

# 7️⃣ Case 2: Using group(1)

```python
result2 = re.sub(
    r"\((.*?)\)",
    lambda p: "(" + p.group(1)[::-1] + ")",
    name2
)
```

Now:

```
p.group(1) → "is"
```

Reverse:

```
"si"
```

Add brackets:

```
"(si)"
```

Final output:

```
gabbar (si) back (ym) friend
```

Correct output.

---

# 8️⃣ Important Rule

Group numbering is based on pattern parentheses — NOT number of matches in string.

Even if string has 10 matches, group(1) still refers to first capturing group in pattern.

---

# 9️⃣ Ultra Simple Memory Trick

- `()` in pattern = Save this part
- `group()` = Full match
- `group(1)` = First saved part
- `group(2)` = Second saved part
- `groups()` = All saved parts as tuple

---

# 🔟 Final Understanding

If you need the entire matched text → use `group()`.

If you need a specific inner portion → use `group(n)`.

If you need all captured parts together → use `groups()`.

---

You now fully understand capturing groups like an advanced developer.

