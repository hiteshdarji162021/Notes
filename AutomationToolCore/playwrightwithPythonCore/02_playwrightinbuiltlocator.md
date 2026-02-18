# Playwright Locators – Detailed Guide with ARIA Roles & Real Use Cases

This document is created based on:
- HTML elements and corresponding ARIA roles PDF
- Day19 Playwright Locators PDF
- Day19 Notes
- test_pwlocatorsdemo.py
- test_pwlocators1.py
- test_pwlocators2.py

It includes:
✔ Detailed explanation of locators
✔ ARIA role mapping
✔ Real-time practical examples
✔ Proper use cases
✔ Comparison with CSS/XPath
✔ Best practices (Industry level)
✔ Assignment practice guidance

------------------------------------------------------------

# 1️⃣ What Are Locators?

Locators are used to:
1) Identify web elements
2) Perform actions
3) Validate elements (Assertions)

As mentioned in notes:
Locating elements can be done using:
- Built-in Playwright locators
- XPath
- CSS

Recommended: Built-in Playwright locators (Most Stable)

------------------------------------------------------------

# 2️⃣ Why Playwright Built-in Locators Are Powerful?

From the Day19 PDF:

✔ Auto-wait for elements
✔ Automatic retry
✔ Less flaky than CSS/XPath
✔ Based on accessibility tree

This makes them ideal for enterprise automation.

------------------------------------------------------------

# 3️⃣ ARIA Roles & HTML Mapping (Very Important Concept)

Based on ARIA PDF:

Example mappings:

| HTML Element | ARIA Role |
|--------------|-----------|
| <button> | button |
| <input type="checkbox"> | checkbox |
| <input type="text"> | textbox |
| <h1>-<h6> | heading |
| <a href> | link |
| <select> | listbox / combobox |
| <img alt> | img |
| <textarea> | textbox |
| <table> | table |
| <tr> | row |
| <td> | cell |

This mapping helps us use:

page.get_by_role("button")
page.get_by_role("textbox")
page.get_by_role("heading")

Instead of fragile CSS selectors.

------------------------------------------------------------

# 4️⃣ Built-in Playwright Locators (Detailed + Use Cases)

------------------------------------------------------------

## 4.1 get_by_role()

⭐ Most Powerful and Recommended Locator in Playwright

get_by_role() works based on the Accessibility Tree (ARIA roles).
It does NOT depend on DOM structure like CSS/XPath.
It understands the semantic meaning of elements.

Syntax:

page.get_by_role("role_name", name="visible_text")

Example:

page.get_by_role("button", name="Login").click()

--------------------------------------------

### 🔎 How It Works Internally

Playwright reads:
- HTML tag
- ARIA attributes
- Accessible name (visible label/text)

Example HTML:

<button>Login</button>

Playwright understands:
Role = button
Accessible Name = Login

--------------------------------------------

### 🔥 Common Roles You Will Use in Real Projects

| Role | Used For | Example |
|------|----------|---------|
| button | Buttons | page.get_by_role("button", name="Submit") |
| link | Anchor tags | page.get_by_role("link", name="Home") |
| textbox | Input fields | page.get_by_role("textbox", name="Username") |
| checkbox | Checkbox | page.get_by_role("checkbox", name="Remember me") |
| radio | Radio button | page.get_by_role("radio", name="Male") |
| heading | h1–h6 | page.get_by_role("heading", name="Dashboard") |
| combobox | Dropdown | page.get_by_role("combobox", name="Country") |
| table | Table | page.get_by_role("table") |
| row | Table rows | page.get_by_role("row") |

--------------------------------------------

### 🧪 Detailed Real Use Case Examples

✔ Login Form

page.get_by_role("textbox", name="Username").fill("Admin")
page.get_by_role("textbox", name="Password").fill("admin123")
page.get_by_role("button", name="Login").click()

✔ Validate Page Heading

expect(page.get_by_role("heading", name="Dashboard")).to_be_visible()

✔ Click Navigation Link

page.get_by_role("link", name="Admin").click()

✔ Select Checkbox

page.get_by_role("checkbox", name="Accept Terms").check()

✔ Work with Tables

rows = page.get_by_role("row")
expect(rows).to_have_count(6)

--------------------------------------------

### 🎯 Advanced Filtering Examples

Exact match:

page.get_by_role("button", name="Login", exact=True)

Using regex:

import re
page.get_by_role("button", name=re.compile("Log.*"))

Chaining:

page.get_by_role("form").get_by_role("button", name="Submit")

--------------------------------------------

### ✅ Why get_by_role() is Best

✔ Not dependent on div structure
✔ Survives UI refactoring
✔ Encourages accessibility
✔ Less flaky
✔ Readable for non-technical stakeholders

--------------------------------------------

------------------------------------------------------------

## 4.2 get_by_text()


Locates element by visible text.

Examples:

page.get_by_text("Welcome to our store")
page.get_by_text("Welcome")  # Partial
page.get_by_text(re.compile(".*Welcome.*"))

Use Case:
✔ Non-interactive elements
✔ Static messages
✔ Labels without form control

Avoid using for buttons (prefer role).

------------------------------------------------------------

## 4.3 get_by_label()

Best for forms.

Example DOM:
<label>Password <input type="password" /></label>

Test:

page.get_by_label("Password").fill("secret123")

Use Case:
✔ Login forms
✔ Registration forms
✔ Radio buttons
✔ Checkboxes

Advantage:
- Works even if input id changes
- Uses label association

------------------------------------------------------------

## 4.4 get_by_placeholder()

Example:

page.get_by_placeholder("Username").fill("Admin")

Use Case:
✔ Quick form testing
✔ Search boxes

Limitation:
- If placeholder removed → test fails

------------------------------------------------------------

## 4.5 get_by_alt_text()

Example:

page.get_by_alt_text("company-branding")

Use Case:
✔ Verify logos
✔ Validate images
✔ Accessibility testing

------------------------------------------------------------

## 4.6 get_by_title()

Example:

page.get_by_title("Home page link")

Use Case:
✔ Tooltip validation
✔ Title-based icons

------------------------------------------------------------

## 4.7 get_by_test_id()

Example:

page.get_by_test_id("profile-name")

Requires attribute:

data-testid="profile-name"

Use Case:
✔ When text not stable
✔ When role not reliable
✔ Recommended for test automation teams

Best practice in real projects:
Ask developers to add data-testid attributes.

------------------------------------------------------------

# 5️⃣ Comparison: Built-in vs CSS vs XPath

| Feature | Built-in | CSS | XPath |
|----------|-----------|------|--------|
| Stability | High | Medium | Low |
| Readability | High | Medium | Low |
| Auto-wait | Yes | No | No |
| Retry | Yes | No | No |
| Recommended | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐ |

Conclusion:
Use Built-in first.
Fallback to CSS/XPath only if needed.

------------------------------------------------------------

# 6️⃣ Practical Real-World Use Case Example

Scenario: User Login + Dashboard Validation

1) Go to Login page
2) Verify logo
3) Enter credentials
4) Click Login
5) Validate Dashboard

Implementation:

logo = page.get_by_alt_text("company-branding")
expect(logo).to_be_visible()

page.get_by_placeholder("Username").fill("Admin")
page.get_by_placeholder("Password").fill("admin123")
page.get_by_role("button", name="Login").click()

expect(page.get_by_role("heading", name="Dashboard")).to_be_visible()

------------------------------------------------------------

# 7️⃣ Assignment Practice Sites

1) https://testautomationpractice.blogspot.com/p/playwrightpractice.html
2) https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

Practice:
✔ Locate all elements using built-in locators
✔ Avoid XPath
✔ Validate UI behavior

------------------------------------------------------------

# 8️⃣ Best Practices (Important)

1) Prefer get_by_role()
2) Prefer get_by_label() for forms
3) Use get_by_test_id() for stable automation
4) Avoid hardcoded wait_for_timeout
5) Avoid CSS if role exists
6) Keep locators readable
7) Do not chain long XPath expressions
8) Follow accessibility principles

------------------------------------------------------------

# 9️⃣ Interview Important Points

- What is ARIA role?
- Difference between get_by_role and get_by_text
- Why Playwright locators are less flaky?
- How auto-wait works?
- Why built-in locators are better than XPath?

------------------------------------------------------------

# 🔟 Final Summary

Playwright locators are:
✔ Stable
✔ Accessible
✔ Auto-wait enabled
✔ Retry enabled
✔ Enterprise ready

Recommended Order of Preference:

1) get_by_role
2) get_by_label
3) get_by_test_id
4) get_by_text
5) CSS
6) XPath

------------------------------------------------------------

This document is suitable for:
✔ Students
✔ Automation Engineers
✔ Framework Designers
✔ Interview Preparation
✔ Real-world enterprise projects

