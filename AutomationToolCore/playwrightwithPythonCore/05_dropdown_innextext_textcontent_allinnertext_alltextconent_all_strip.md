# 🎯 Playwright – Bootstrap Dropdown, Hidden Dropdown & Text Methods (Complete Guide)

This document includes:
- ✅ Bootstrap Dropdown
- ✅ Hidden Dropdown (Auto Suggest)
- ✅ inner_text(), text_content()
- ✅ all_inner_texts(), all_text_contents()
- ✅ all()
- ✅ strip()
- ✅ Code + Output + Use Case + Best Practices

---

# 1️⃣ TYPES OF DROPDOWNS

According to notes:

1) Select Dropdown → Uses select tag
2) Bootstrap Dropdown → Uses div/button tags
3) Hidden Dropdown → Options hidden dynamically (auto-suggest)

---

# 2️⃣ BOOTSTRAP DROPDOWN (OrangeHRM)

## ✅ Complete Code

```python
import pytest
from playwright.sync_api import Page, expect


def test_bootstrapdropdown(page: Page):
    page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    page.get_by_placeholder('Username').fill('Admin')
    page.get_by_placeholder('Password').fill('admin123')
    page.get_by_role('button', name='Login').click()

    page.get_by_role('link', name='PIM').click()

    page.locator("form i").nth(2).click()
    page.wait_for_timeout(3000)

    options = page.locator("div[role='listbox'] span")

    total_list_count = options.count()
    print("Total options:", total_list_count)

    employee_statuses = options.all_inner_texts()
    print("All Options:", employee_statuses)
    print("Length using len():", len(employee_statuses))

    for i in range(total_list_count):
        value = options.nth(i).inner_text().strip()
        if value == 'Finance Manager':
            options.nth(i).click()
            break

    page.wait_for_timeout(3000)
```

## 🖥 Expected Output
Total options: (example) 9
All Options: ['Account Assistant', 'Finance Manager', ...]
Length using len(): 9

## 🎯 Use Case
- Custom dropdown handling
- Selecting specific option dynamically
- Validating dropdown list items

## ⭐ Best Practices
- Use role='listbox' when possible
- Avoid long XPath
- Use strip() before comparison
- Prefer wait_for_selector instead of wait_for_timeout

---

# 3️⃣ HIDDEN DROPDOWN (Flipkart Auto Suggest)

## ✅ Complete Code

```python
import pytest
from playwright.sync_api import Page, expect


def test_autosuggest_dropdown(page: Page):
    page.goto("https://www.flipkart.com/")

    search_box = page.locator("input[name='q']")
    search_box.fill("smart")

    page.wait_for_timeout(5000)

    options = page.locator("ul > li")
    count = options.count()

    print("Number of suggested options:", count)

    expect(options).to_have_count(count)

    if count > 5:
        print("5th option:", options.nth(5).inner_text())

    for i in range(count):
        print(options.nth(i).text_content())

    for i in range(count):
        text = options.nth(i).inner_text()
        if text.strip().lower() == "smartphone":
            options.nth(i).click()
            break

    page.wait_for_timeout(3000)
```

## 🖥 Expected Output
Number of suggested options: 10
5th option: smart tv
All suggestions printed
"smartphone" clicked if available

## 🎯 Use Case
- Auto-suggest search validation
- Dynamic dropdown handling
- Partial text matching

---

# 4️⃣ TEXT METHODS COMPARISON

## 🔹 inner_text() vs text_content()

| Method | Returns | Cleans Whitespace | Includes Hidden | Best Use |
|---------|----------|------------------|----------------|----------|
| inner_text() | Single visible string | ✅ Yes | ❌ No | UI validation |
| text_content() | Raw string | ❌ No | ✅ Yes | Raw DOM validation |

Example:

```python
product = page.locator(".product-title").nth(1)
print(product.inner_text())
print(product.text_content())
```

---

## 🔹 all_inner_texts() vs all_text_contents()

| Method | Returns | Cleans | Hidden Included |
|----------|----------|--------|----------------|
| all_inner_texts() | List of visible strings | ✅ | ❌ |
| all_text_contents() | List of raw strings | ❌ | ✅ |

Example:

```python
products = page.locator(".product-title")
print(products.all_inner_texts())
print(products.all_text_contents())

trimmed = [text.strip() for text in products.all_text_contents()]
print(trimmed)
```

---

# 5️⃣ all() Method

## ✅ Converts Locator → List of Locators

```python
products = page.locator(".product-title")
product_locators = products.all()

for product in product_locators:
    print(product.inner_text())
```

## 🎯 Use Case
- Click each element one by one
- Perform different action per element
- Index-based selection

---

# 6️⃣ strip() Method

## 🔹 Removes leading/trailing whitespace

```python
value = options.nth(i).inner_text().strip()
```

Without strip():
"  Finance Manager  " != "Finance Manager"

With strip():
"Finance Manager" == "Finance Manager"

## 🎯 Best Practice
Always use strip() when doing string comparison.

---

# 🏆 FINAL COMPARISON SUMMARY

| Concept | Returns | Cleaned | Hidden | Best For |
|----------|----------|---------|--------|-----------|
| inner_text() | String | Yes | No | Visible validation |
| text_content() | String | No | Yes | Raw DOM |
| all_inner_texts() | List[str] | Yes | No | Multiple visible |
| all_text_contents() | List[str] | No | Yes | Raw multiple |
| all() | List[Locator] | N/A | N/A | Iteration actions |
| strip() | Clean string | Yes | N/A | Safe comparison |

---

# 🚀 COMPLETE LEARNING OUTCOME

After this document you understand:

✔ Bootstrap dropdown handling
✔ Hidden/Auto-suggest dropdown
✔ Difference between visible vs raw text
✔ Locator vs list difference
✔ Proper string comparison
✔ Best practices for stable automation

This is advanced practical Playwright knowledge.

