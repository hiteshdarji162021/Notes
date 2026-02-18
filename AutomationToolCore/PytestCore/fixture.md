# Pytest Complete Guide – From Basics to Advanced

This document is created based on the attached training files and examples.
It includes:
- Concepts explained in detail
- All prerequisites
- All commands in one place
- Section-wise requirements
- Multiple approaches comparison
- Best practices (industry level)

---

# 1️⃣ What is Pytest?

Pytest is a Python testing framework used for:
- Unit testing
- Functional testing
- Automation frameworks

Key Features:
- Simple assert syntax
- Fixtures (setup/teardown)
- Test grouping
- Test skipping
- Test ordering (plugin)
- Parallel execution (plugin)

---

# 2️⃣ Prerequisites (Very Important)

Before starting Pytest, you need:

## Basic Requirements
- Python installed (3.x)
- pip installed
- Basic Python knowledge

## Install Pytest

```bash
pip install pytest
```

Verify installation:

```bash
pytest --version
```

---

# 3️⃣ Naming Conventions (Mandatory for Test Discovery)

## File Name
Must start with:
- test_  OR
- end with _test

Example:
- test_login.py
- login_test.py

## Class Name
Must start with:

```python
class TestLogin:
```

## Method Name
Must start with:

```python
def test_valid_login():
```

If naming rules are not followed → pytest will NOT detect tests.

---

# 4️⃣ Running Tests (All Commands in One Place)

## Run all tests in file

```bash
pytest test_demos.py
pytest test_demos.py -s
pytest test_demos.py -v
pytest test_demos.py -s -v
```

## Run specific test

```bash
pytest test_demos.py::test_one -s -v
```

## Run all tests in folder

```bash
pytest mypack -s -v
```

---

# 5️⃣ Fixtures (Setup & Teardown)

Fixtures are reusable setup functions.

## Basic Fixture

```python
@pytest.fixture
def setup():
    print("setup browser")
```

Runs before every test.

---

## Fixture Scope

| Scope | Runs When |
|--------|-----------|
| function | Before every test (default) |
| class | Once per class |
| module | Once per file |
| session | Once per execution |

Example:

```python
@pytest.fixture(scope="module")
def setup():
    print("setup once per module")
```

---

## Fixture Returning Value

```python
@pytest.fixture
def setup():
    return "chrome"
```

---

## Fixture with yield (Best Practice)

```python
@pytest.fixture
def setup():
    print("setup")
    yield
    print("teardown")
```

Recommended for browser handling.

---

## Common Fixture (conftest.py)

Used when fixture required in multiple files.

Structure:

```
project/
 ├── conftest.py
 ├── test_login.py
 ├── test_signup.py
```

conftest.py:

```python
@pytest.fixture
def setup():
    print("common setup")
    yield
    print("common teardown")
```

No import required.

---

# 6️⃣ Skipping Tests

From test_skipping.py

```python
@pytest.mark.skip
def test_loginbyfacebook():
    pass
```

Run file:

```bash
pytest test_skipping.py -v -s
```

---

# 7️⃣ Grouping Tests (Markers)

From test_grouping.py

Example:

```python
@pytest.mark.sanity
@pytest.mark.regression
def test_loginbyemail():
    assert True
```

## Define markers in pytest.ini

```ini
[pytest]
markers =
    sanity
    regression
```

## Commands

Run sanity:

```bash
pytest test_grouping.py -m "sanity" -v -s
```

Run regression:

```bash
pytest test_grouping.py -m "regression" -v -s
```

Run both:

```bash
pytest test_grouping.py -m "sanity and regression"
```

Run sanity not regression:

```bash
pytest test_grouping.py -m "sanity and not regression"
```

---

# 8️⃣ Ordering Tests

From test_ordering.py

## Pre-requisite

```bash
pip install pytest-order
```

---

## Approach 1: Numeric Order

```python
@pytest.mark.order(1)
def test_login(): pass
```

✔ Simple
❌ Hard to maintain in large projects

---

## Approach 2: Before / After

```python
@pytest.mark.order(after="test_add_item")
```

✔ More readable
✔ Better than numeric

---

## Approach 3: String Order

```python
@pytest.mark.order("first")
```

✔ Clean
✔ Simple
✔ Recommended for small flows

---

### Best Practice

Avoid ordering when possible.
Tests should be independent.

---

# 9️⃣ Parallel Execution

From test_parallel.py

## Pre-requisite

```bash
pip install pytest-xdist
```

## Run with 2 workers

```bash
pytest test_parallel.py -v -s -n 2
```

---

### When to Use Parallel?

✔ Large regression suite
✔ CI/CD pipeline
✔ Independent tests

❌ Not recommended if tests depend on each other

---

# 🔟 Complete Command Summary (One Place)

```bash
pip install pytest
pytest --version

# basic run
pytest file.py
pytest file.py -s -v
pytest folder -s -v

# run specific test
pytest file.py::test_name

# grouping
pytest file.py -m "sanity"
pytest file.py -m "regression"

# ordering plugin
pip install pytest-order

# parallel plugin
pip install pytest-xdist
pytest file.py -n 2
```

---

# 1️⃣1️⃣ Best Practices (Industry Standard)

1. Follow naming conventions strictly
2. Use fixtures with yield for cleanup
3. Keep tests independent
4. Use markers for grouping
5. Avoid unnecessary ordering
6. Use parallel execution in CI only
7. Use conftest.py for shared fixtures
8. Keep assertions meaningful
9. Do not mix business logic in tests
10. Maintain proper folder structure

---

# 1️⃣2️⃣ Comparison of Multiple Approaches

| Feature | Approach 1 | Approach 2 | Best Choice |
|----------|------------|------------|-------------|
| Ordering | Numeric | Before/After | Before/After |
| Setup | Inline | Fixture | Fixture |
| Shared Setup | Duplicate | conftest.py | conftest.py |
| Execution | Sequential | Parallel | Parallel for CI |

---

# Final Summary

Pytest provides:
- Clean structure
- Powerful fixture system
- Test grouping
- Ordering support
- Parallel execution

It is highly scalable and used in real-world automation frameworks.

---

This guide is suitable for:
✔ Students
✔ Interview preparation
✔ Framework design
✔ Automation engineers

