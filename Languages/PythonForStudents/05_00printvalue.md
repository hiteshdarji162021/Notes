# 🧠 Python Print Statement – Name and Age

Hello students 👨‍🏫,
Let’s learn how to **print name and age in one line**.

---

## 🎯 Goal
👉 Print output like:
```
My name is Hitesh and my age is 25
```

---

## ✅ 1. Using comma (Best for beginners)

```python
name = "Hitesh"
age = 25

print("My name is", name, "and my age is", age)
```

👉 Python automatically adds space
👉 Very easy to understand

---

## ✅ 2. Using + operator

```python
name = "Hitesh"
age = 25

print("My name is " + name + " and my age is " + str(age))
```

👉 Important: convert age using `str()`

---

## ✅ 3. Using f-string (Modern Python)

```python
name = "Hitesh"
age = 25

print(f"My name is {name} and my age is {age}")
```

👉 Clean and professional
👉 Most recommended in real projects

---

## 📊 Comparison

| Method | Easy | Modern | Rating |
|--------|------|--------|--------|
| Comma | ✅ Yes | ❌ No | ⭐⭐⭐⭐ |
| f-string | ✅ Yes | ✅ Yes | ⭐⭐⭐⭐⭐ |
| + operator | ❌ Medium | ❌ Old style | ⭐⭐⭐ |

---

## 🎯 Practice Questions

1. Print your own name and age
2. Take input from user and print same format
3. Change sentence like: "I am Hitesh and I am 25 years old"

---

# 🏁 Final Tip
👉 Learn comma method first
👉 Use f-string for clean codi