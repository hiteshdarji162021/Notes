# 🎯 Playwright Automation – COMPLETE FORM ELEMENTS (CODE + OUTPUT + USE CASE)

All commented code is now UNCOMMENTED and included.
Each section contains:
- ✅ Complete Code
- 🖥 Expected Output
- 🎯 Real-Time Use Case

---

# 1️⃣ PRODUCT SORT & PRINT PRICES

## ✅ Complete Code

```python
from playwright.sync_api import sync_playwright, expect

def test_product_sort_and_print_prices(page):
    page.goto("https://www.bstackdemo.com/")

    order_by_dropdown = page.locator("div.sort>select")
    expect(order_by_dropdown).to_be_visible()
    expect(order_by_dropdown).to_be_enabled()

    order_by_dropdown.select_option(label="Lowest to highest")

    page.wait_for_timeout(3000)

    price_elements = page.locator("div.val")
    name_elements = page.locator("p.shelf-item__title")

    prices = price_elements.all_text_contents()
    names = name_elements.all_text_contents()

    print("Printing Product Names along with their Prices.......")
    for i in range(len(names)):
        print(f"{names[i]} : {prices[i]}")

    print(f"Lowest Priced Product: {names[0]} : {prices[0]}")
    print(f"Highest Priced Product: {names[-1]} : {prices[-1]}")
```

## 🖥 Expected Output
- All products printed in ascending order
- First product = lowest price
- Last product = highest price

## 🎯 Use Case
- E-commerce product sorting validation
- Price order verification
- Business rule validation

---

# 2️⃣ INPUT BOX

## ✅ Complete Code

```python
import pytest
from playwright.sync_api import Page, expect

def test_inputbox(page: Page):

    page.goto("https://testautomationpractice.blogspot.com/")
    text_box=page.locator("#name")

    expect(text_box).to_be_visible()
    expect(text_box).to_be_enabled()

    expect(text_box).to_have_attribute("maxlength","15")

    maxlength=text_box.get_attribute("maxlength")
    print("Maximum lenght of inputbox:",maxlength )

    text_box.fill("John Kenedy")

    enteredvalue=text_box.input_value()
    print("Value entered is:", enteredvalue)

    page.wait_for_timeout(5000)
```

## 🖥 Expected Output
Maximum length of inputbox: 15  
Value entered is: John Kenedy

## 🎯 Use Case
- Form validation testing
- Max length validation
- User data entry validation

---

# 3️⃣ CHECKBOX

## ✅ Complete Code (All Options Included)

```python
import pytest
from playwright.sync_api import Page, expect

def test_checkbox(page:Page):
    page.goto("https://testautomationpractice.blogspot.com/")

    sunday_checkbox=page.get_by_label("Sunday")
    sunday_checkbox.check()
    expect(sunday_checkbox).to_be_checked()

    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    checkboxes=[]
    for day in days:
        checkbox=page.get_by_label(day)
        checkboxes.append(checkbox)

    print("total number of checkboxes:", len(checkboxes))

    for checkbox in checkboxes:
        checkbox.check()
        expect(checkbox).to_be_checked()

    for checkbox in checkboxes[-3:]:
        checkbox.uncheck()
        expect(checkbox).not_to_be_checked()

    for checkbox in checkboxes:
        if checkbox.is_checked():
            checkbox.uncheck()
            expect(checkbox).not_to_be_checked()
        else:
            checkbox.check()
            expect(checkbox).to_be_checked()

    indexes=[1,3,6]
    for i in indexes:
        checkboxes[i].check()
        expect(checkboxes[i]).to_be_checked()

    weekday="Friday"
    for label in days:
        if label==weekday:
            checkbox=page.get_by_label(label)
            checkbox.check()
            expect(checkbox).to_be_checked()

    page.wait_for_timeout(5000)
```

## 🖥 Expected Output
Total number of checkboxes: 7

## 🎯 Use Case
- Multi selection validation
- Dynamic selection using data
- Index-based selection testing
- Toggle behavior validation

---

# 4️⃣ SINGLE SELECT DROPDOWN

## ✅ Complete Code

```python
import pytest
from playwright.sync_api import sync_playwright, expect, Page

def test_single_select_dropdown(page: Page):
    page.goto("https://testautomationpractice.blogspot.com/")

    page.locator("#country").select_option("India")
    page.locator("#country").select_option(label="India")
    page.locator("#country").select_option(value="germany")
    page.locator("#country").select_option(index=3)

    selected_value = page.locator("#country").input_value()
    print("Selected Value:", selected_value)

    dropdown_options=page.locator("#country>option")
    expect(dropdown_options).to_have_count(10)

    options_text=[text.strip() for text in dropdown_options.all_text_contents()]
    print(options_text)

    for option in options_text:
        print(option)

    page.wait_for_timeout(5000)
```

## 🖥 Expected Output
Selected Value: <last selected option>
All country names printed

## 🎯 Use Case
- Country selection forms
- Selection by label/value/index
- Dropdown data validation

---

# 5️⃣ MULTI SELECT DROPDOWN

## ✅ Complete Code

```python
import pytest
from playwright.sync_api import sync_playwright, expect, Page

def test_multi_select_dropdown(page: Page):
    page.goto("https://testautomationpractice.blogspot.com/")

    page.locator("#colors").select_option(["Red","Blue","Green"])
    page.locator("#colors").select_option(label=["Red", "Blue", "Green"])
    page.locator("#colors").select_option(value=["red","white","green"])
    page.locator("#colors").select_option(index=[4,2])

    drowpdown_options=page.locator("#colors>option")
    expect(drowpdown_options).to_have_count(7)

    page.wait_for_timeout(5000)
```

## 🖥 Expected Output
Multiple options selected successfully
Total options: 7

## 🎯 Use Case
- Product filter selection
- Tag/category multi selection
- Bulk selection validation

---

# 6️⃣ SORTED DROPDOWN VALIDATION

## ✅ Complete Code

```python
import pytest
from playwright.sync_api import sync_playwright, expect, Page

def test_single_select_dropdown(page: Page):
    page.goto("https://testautomationpractice.blogspot.com/")

    dropdown_options=page.locator("#animals>option")
    dropdown_options=page.locator("#colors>option")

    options_text=[text.strip() for text in dropdown_options.all_text_contents()]

    original_list=options_text.copy()
    sorted_list= sorted(options_text)

    print("Original list:",original_list)
    print("Sorted list:",sorted_list)

    if original_list==sorted_list:
        print("dropdown options are sorted order...")
    else:
        print("dropdown options are Not sorted order.")

    page.wait_for_timeout(5000)
```

## 🖥 Expected Output
Original list printed  
Sorted list printed  
Validation message displayed

## 🎯 Use Case
- Alphabetical dropdown validation
- UI consistency testing

---

# 7️⃣ RADIO BUTTON

## ✅ Complete Code

```python
import pytest
from playwright.sync_api import Page, expect

def test_radio_buttons(page:Page):
    page.goto("https://testautomationpractice.blogspot.com/")

    male_radio=page.locator("#male")

    expect(male_radio).to_be_visible()
    expect(male_radio).to_be_enabled()
    expect(male_radio).not_to_be_checked()

    male_radio.check()
    expect(male_radio).to_be_checked()

    page.wait_for_timeout(5000)
```

## 🖥 Expected Output
Radio button initially unchecked  
Radio button selected successfully

## 🎯 Use Case
- Gender selection validation
- Default state testing
- Single-choice enforcement

---

# 🏆 FINAL SUMMARY

✔ All original code included  
✔ All commented code uncommented  
✔ Output clearly separated  
✔ Use case clearly explained