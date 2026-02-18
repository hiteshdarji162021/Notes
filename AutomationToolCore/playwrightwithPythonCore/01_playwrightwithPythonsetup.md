# Playwright with Pytest – Complete Guide

This document is created based on the attached files:
- Day18-Plawright+with+Pytest.pdf
- Day18-Notes.txt
- test_playwright.py
- test_playwright_async.py

It includes:
- Prerequisites
- Installation steps
- Sync & Async examples
- All CLI commands in one place
- Browser execution options
- Parallel execution
- Best practices
- Comparison (Sync vs Async)

------------------------------------------------------------

# 1️⃣ Introduction

Playwright is used for:
- Web Automation
- API Automation

Pytest is a testing framework written in Python.

Playwright works as a plugin on top of pytest.

------------------------------------------------------------

# 2️⃣ Prerequisites

Before starting Playwright with Pytest:

1) Install Python (3.x)
2) Install Pytest

```bash
pip install pytest
```

3) Install Playwright Pytest Plugin

```bash
pip install pytest-playwright
```

4) Install Playwright Browsers

```bash
playwright install
```

Update Playwright (optional)

```bash
pip install pytest-playwright playwright -U
```

------------------------------------------------------------

# 3️⃣ Supported Browsers

| Browser | Playwright Name |
|----------|-----------------|
| Chrome | chromium |
| Edge | chromium |
| Firefox | firefox |
| Safari | webkit |

------------------------------------------------------------

# 4️⃣ Execution Modes

| Mode | Description |
|------|-------------|
| Headless | Default mode (No UI) |
| Headed | Opens browser UI |

------------------------------------------------------------

# 5️⃣ Writing Sync Tests (Recommended)

Example from test_playwright.py

```python
from playwright.sync_api import Page, expect


def test_verifyPageUrl(page: Page):
    page.goto("http://www.automationpractice.pl/index.php")
    myurl = page.url
    print("Url of the application:", myurl)
    expect(page).to_have_url("http://www.automationpractice.pl/index.php")


def test_verifyTitle(page: Page):
    page.goto("http://www.automationpractice.pl/index.php")
    mytitle = page.title()
    print("Title of the page:", mytitle)
    expect(page).to_have_title("My Shop")
```

------------------------------------------------------------

# 6️⃣ Writing Async Tests

Pre-requisite:

```bash
pip install pytest-asyncio
```

Example from test_playwright_async.py

```python
from playwright.async_api import async_playwright, Page, expect
import pytest

@pytest.mark.asyncio
async def test_verifyPageUrl_async():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        mypage = await browser.new_page()
        await mypage.goto("http://www.automationpractice.pl/index.php")
        await expect(mypage).to_have_url("http://www.automationpractice.pl/index.php")
        await browser.close()
```

------------------------------------------------------------

# 7️⃣ Sync vs Async Comparison

| Feature | Sync API | Async API |
|----------|-----------|------------|
| Easy to Read | ✅ Yes | ❌ Slightly Complex |
| Requires pytest-asyncio | ❌ No | ✅ Yes |
| Best for Automation | ✅ Recommended | ⚠ Advanced Use |
| Debugging | Easy | Harder |
| Maintenance | Simple | Complex |

Recommendation:
Use Sync API for automation frameworks.
Use Async only when required.

------------------------------------------------------------

# 8️⃣ Running Tests (All Commands in One Place)

Run all tests (headless default)

```bash
pytest test_playwright.py -s -v
```

Run tests in headed mode

```bash
pytest test_playwright.py -s -v --headed
```

Run tests on specific browser

```bash
pytest test_playwright.py -s -v --headed --browser firefox
pytest test_playwright.py -s -v --headed --browser chromium
```

Run on multiple browsers

```bash
pytest test_playwright.py -s -v --headed --browser chromium --browser firefox
```

Run specific test

```bash
pytest test_playwright.py::test_verifyTitle -s -v
```

------------------------------------------------------------

# 9️⃣ Running Tests in Parallel

Pre-requisite:

```bash
pip install pytest-xdist
```

Run with 2 workers

```bash
pytest test_playwright.py -s -v --headed --browser chromium -n=2
pytest test_playwright.py -s -v --headed --browser chromium -n 2
pytest test_playwright.py -s -v --headed --browser chromium --numprocesses=2
```

------------------------------------------------------------

# 🔟 Important Keywords

async → declares async function
await → waits for async operation
headless → no UI
headed → visible browser
--browser → select browser
-n → number of parallel workers

------------------------------------------------------------

# 1️⃣1️⃣ Best Practices (Industry Standard)

1) Prefer Sync API for automation
2) Do not mix manual async_playwright with pytest-playwright page fixture
3) Keep tests independent
4) Use CLI for browser selection
5) Avoid hardcoding browser in test
6) Use parallel execution only for independent tests
7) Maintain clean folder structure
8) Separate Web & API tests logically

------------------------------------------------------------

# 1️⃣2️⃣ Final Summary

Playwright + Pytest provides:
- Cross-browser testing
- Parallel execution
- Simple assertions
- Clean test structure

For most automation frameworks:

Use:
- pytest-playwright
- Sync API
- pytest-xdist for parallel

Avoid unnecessary async complexity unless required.

------------------------------------------------------------


