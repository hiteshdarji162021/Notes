# 📘 Complete Guide: CSS & XPath in Playwright with Python

(For Students Learning CSS & XPath for the First Time)

---

# 🔹 PART 1 – DOM Basics (Very Important)

Before learning CSS or XPath, you must understand:

DOM = Document Object Model  
It is the tree structure of the webpage.

Example:
```
<html>
  <body>
    <div>
      <input id="username" name="user" />
    </div>
  </body>
</html>
```

CSS and XPath both work on DOM structure.

---

# 🔹 PART 2 – CSS Selectors (Complete Guide)

Reference from your class notes and PDF (Day20-CSS+Selectors.pdf) fileciteturn0file3

CSS = Cascading Style Sheets  
CSS works based on DOM structure.

CSS is:
✔ Faster than XPath  
✔ Shorter  
✔ Mostly preferred in automation

---

# ✅ 1. Basic CSS Syntax

| Type | Syntax | Example |
|------|--------|----------|
| Tag | tagname | input |
| ID | #id | #username |
| Class | .class | .login-btn |
| Attribute | tag[attribute='value'] | input[name='user'] |

---

# ✅ 2. Tag + ID

```
input#username
```

Playwright:
```
page.locator("input#username")
```

---

# ✅ 3. Tag + Class

```
button.login-btn
```

---

# ✅ 4. Attribute Selector

```
input[name='q']
[name='q']
```

---

# ✅ 5. Multiple Attributes

```
input[type='text'][name='username']
```

---

# ✅ 6. Starts With ( ^ )

Equivalent to XPath starts-with()

```
button[name^='st']
```

---

# ✅ 7. Ends With ( $ )

```
input[id$='name']
```

---

# ✅ 8. Contains ( * )

Equivalent to XPath contains()

```
button[name*='st']
```

---

# ✅ 9. Child Selector ( > )

Direct child only

```
div > p
```

---

# ✅ 10. Descendant (space)

Any level inside

```
div p
```

---

# ✅ 11. First Child

```
div > *:first-child
```

---

# ✅ 12. Last Child

```
div > *:last-child
```

---

# ✅ 13. Nth Child

```
div > *:nth-child(3)
```

---

# ✅ 14. NOT Selector

```
p:not([id='para1'])
```

---

# ✅ 15. Adjacent Sibling ( + )

Next immediate sibling

```
p#para1 + p
```

---

# ✅ 16. General Sibling ( ~ )

All siblings after

```
h2 ~ p
```

---

# ❌ What CSS Cannot Do

❌ Cannot move upward (no parent/ancestor navigation)
❌ No text() direct matching
❌ No contains(text())
❌ No preceding axis

---

# 🔹 PART 3 – XPath (Complete Advanced Guide)

Reference from:
- XPath-Reference.pdf fileciteturn0file0
- Day21-XPath.pdf fileciteturn0file1
- Class notes fileciteturn0file2

XPath = XML Path Language

XPath is powerful but slower than CSS.

---

# ✅ 1. Absolute XPath (Not Recommended)

```
/html/body/div[1]/form/input[1]
```

---

# ✅ 2. Relative XPath (Recommended)

```
//input[@id='username']
```

---

# ✅ 3. Single Attribute

```
//input[@name='user']
```

---

# ✅ 4. Multiple Attributes

```
//input[@type='text' and @name='username']
```

---

# ✅ 5. OR Condition

```
//button[@name='start' or @name='stop']
```

---

# ✅ 6. contains()

```
//div[contains(@class,'header')]
```

---

# ✅ 7. starts-with()

```
//input[starts-with(@id,'user')]
```

---

# ✅ 8. text()

```
//button[text()='Submit']
```

---

# ✅ 9. contains(text())

```
//a[contains(text(),'Register')]
```

---

# ✅ 10. last()

```
(//div[@class='item'])[last()]
```

---

# ✅ 11. position()

```
(//tr/td)[position()=3]
```

---

# ✅ 12. not()

```
//input[not(@type='hidden')]
```

---

# ✅ 13. normalize-space()

```
//button[normalize-space(text())='Login']
```

---

# 🔥 AXES (VERY IMPORTANT FOR INTERVIEW)

---

# ✅ 14. parent::

```
//span[@id='child']/parent::div
```

---

# ✅ 15. ancestor::

```
//span[@id='child']/ancestor::div
```

---

# ✅ 16. child::

```
//ul[@id='menu']/child::li
```

---

# ✅ 17. descendant::

```
//div[@id='main']/descendant::a
```

---

# ✅ 18. following::

```
//label[text()='Email']/following::input[1]
```

---

# ✅ 19. preceding::

```
//input[@id='password']/preceding::label[1]
```

---

# ✅ 20. following-sibling::

```
//h2[text()='Section']/following-sibling::p
```

---

# ✅ 21. preceding-sibling::

```
//p[text()='Second']/preceding-sibling::p
```

---

# ✅ 22. self::

```
//div[@class='container']/self::div
```

---

# ✅ 23. Wildcard *

```
//*[@id='loginBtn']
```

---

# ✅ 24. XPath 2.0 Regex (Limited browser support)

```
//input[matches(@id,'user.*')]
```

---

# 🔹 PART 4 – Playwright Python Examples

Example 1: CSS

```
def test_css(page):
    page.goto("https://demowebshop.tricentis.com/")
    page.locator("input#small-searchterms").fill("T-Shirts")
```

Example 2: XPath

```
def test_xpath(page):
    page.goto("https://demowebshop.tricentis.com/")
    page.locator("//img[@alt='Tricentis Demo Web Shop']").is_visible()
```

Example 3: Dynamic Button

```
page.locator("//button[contains(@name,'st')]")
page.locator("button[name^='st']")
```

Example 4: Using Playwright get_by_role (Best Practice)

```
page.get_by_role("button", name="Register")
```

---

# 🔹 PART 5 – Best Practice for Students

✔ Prefer Playwright built-in locators first (get_by_role, get_by_text)  
✔ Then CSS  
✔ Use XPath only when needed  
✔ Avoid Absolute XPath  
✔ Avoid index-based locators if possible  
✔ Use contains() for dynamic elements  
✔ Use normalize-space() for text matching issues  

---

# 🔹 FINAL INTERVIEW REVISION LIST

You must know:

✔ Absolute vs Relative XPath  
✔ contains() vs starts-with()  
✔ AND vs OR  
✔ last() vs position()  
✔ ancestor vs parent  
✔ following vs following-sibling  
✔ CSS ^ $ * difference  
✔ CSS cannot move upward  
✔ XPath can move upward  

---

# 🎯 Conclusion

CSS = Faster, simple  
XPath = Powerful, flexible  
Playwright get_by_role() = Most stable  

---

END OF COMPLETE GUIDE 🚀

