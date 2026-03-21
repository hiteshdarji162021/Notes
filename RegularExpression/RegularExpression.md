# 📘 Mastering Regular Expressions (Regex)
### From Scratch to Advanced – Complete Teaching Guide

---

# 1️⃣ What is Regex?
Regular Expression (Regex) is a pattern used to match text.

It is used for:
- Validation (email, mobile, password)
- Searching text
- Replacing text
- Extracting data (OTP, IDs, logs)

---

# 2️⃣ Literal Matching (Exact Match)

Pattern:
```
hitesh
```
Matches only exact word "hitesh".

If text is different → no match.

---

# 3️⃣ Character Classes `[ ]`

## Match One Character from List
```
[hi]
```
Matches:
- h
- i

❗ Matches only ONE character.

Example:
```
[hi]tesh
```
Matches:
- htesh
- itesh

---

## NOT Operator `[^ ]`

```
[^ab]
```
Matches any character except a or b.

---

## Range
```
[a-h]
```
Matches characters between a to h.

```
[A-Z]
```
Uppercase letters.

```
[0-9]
```
Digits.

---

# 4️⃣ Quantifiers (Repetition)

## `+` → One or More
```
a+
```
Matches: a, aa, aaa

## `*` → Zero or More
```
a*
```
Matches: (empty), a, aa

## `?` → Optional (0 or 1)
```
hello?
```
Matches:
- hell
- hello

## `{n}` Exact Count
```
[a-z]{5}
```
Exactly 5 letters.

## `{n,m}` Range
```
[a-z]{5,8}
```
Between 5 to 8 characters.

## `{n,}` Minimum
```
[a-z]{5,}
```
Minimum 5 characters.

---

# 5️⃣ Special Characters (Metacharacters)

## `.` Dot
Matches any character except newline.

```
car.
```
Matches: card, care, cars

## Escaping Special Characters

To match special character literally:

```
abc\*
```
Matches: abc*

---

# 6️⃣ Predefined Character Classes

## `\d`
Digit (0-9)

## `\w`
Word character (a-z, A-Z, 0-9, _)

## `\s`
Whitespace (space, tab)

Example:
```
\d{3}\s\w{5}
```
3 digits + space + 5 word characters

---

# 7️⃣ Anchors

## `^` Start of String
## `$` End of String

```
^[a-z]{5}$
```
Exactly 5 lowercase letters only.

Without ^ and $ → partial match possible.

---

# 8️⃣ Alternation (OR) `|`

```
p|t
```
Matches p OR t

## Grouping
```
(p|t)yre
```
Matches:
- pyre
- tyre

## Multiple Options
```
(abc|def|ghi) rabbit
```

---

# 9️⃣ Real World Validations

## Mobile Number (10 digits)
```
^\d{10}$
```

## Username (5-12 letters)
```
^[a-zA-Z]{5,12}$
```

## Username with special characters
```
^[\w@-]{5,12}$
```

---

# 🔟 Greedy vs Lazy

By default regex is GREEDY.

## Greedy
```
<.*>
```
Matches maximum possible.

## Lazy
```
<.*?>
```
Matches minimum possible.

---

# 1️⃣1️⃣ Advanced Concepts

## Capturing Groups
```
(\d{3})-(\d{4})
```
Groups can be accessed separately.

## Non-Capturing Group
```
(?:abc|def)
```
Does not store group.

## Lookahead
```
\d+(?=₹)
```
Match digits only if followed by ₹.

## Negative Lookahead
```
^(?!.*admin).*$
```
Reject strings containing "admin".

---

# 1️⃣2️⃣ Common Interview Patterns

## Email (Professional)
```
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

## Strong Password
```
^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$
```

---

# 1️⃣3️⃣ Regex Learning Roadmap

Beginner:
- Literal match
- []
- Quantifiers
- Anchors

Intermediate:
- Grouping
- Alternation
- Escaping
- Validation patterns

Advanced:
- Lookahead
- Lookbehind
- Lazy vs Greedy
- Complex nested patterns

---

# 🎯 Final Advice

✔ Always test on regex tester.
✔ Count brackets carefully.
✔ Use anchors for full validation.
✔ Keep patterns readable.
✔ Don’t overcomplicate.

---

This is your complete structured Regex Guide from Basic to Advanced.
Practice daily with real-world examples to master it.


test