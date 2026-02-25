# COMPLETE AUTOMATION INTERVIEW GUIDE
## Playwright + TypeScript (Enterprise Level)

Version: 1.0  
Author: QA Automation Lead  
Prepared Date: [Insert Date]

---

# DOCUMENT UPDATE HISTORY

| Version | Date | Author | Summary |
|----------|------------|----------|----------|
| 1.0 | [Insert Date] | QA Lead | Consolidated automation interview guide |

---

# INDEX

1. Tracking 1000 Tests (500 Automated)  
2. Handling Dynamic Elements  
3. Framework Development Challenges  
4. Debugging Failed Tests in CI  
5. Handling Flaky Tests  
6. Shared Data – Read vs Write  
7. Automation Estimation Strategy  
8. Task Distribution in Automation Team  

---

# 1️⃣ TRACKING 1000 TESTS (500 AUTOMATED)

## Problem:
How to track which tests are automated and which are not?

## Solution:

### A. Maintain Automation Mapping Sheet

| Test Case ID | Module | Jira Story | Automation Status | Script Path |
|---------------|---------|------------|------------------|------------|

Automation Status:
- Planned
- In Progress
- Automated
- Blocked
- Deprecated

---

### B. Use Tags in Playwright

Examples:
@smoke  
@regression  
@order  
@payment  

Run by tag:
- Smoke only
- Order only
- Payment only

---

### C. Jira Integration

Each automation task in sprint:
- Linked to Test Case IDs
- Subtasks created for scenarios
- Updated when requirement changes

---

### D. Coverage Tracking

Track:
- Automation Coverage %
- High-Risk Coverage %
- Regression Automation %

---

# 2️⃣ HOW TO HANDLE DYNAMIC ELEMENTS (PLAYWRIGHT)

## Best Locator Strategy

Preferred:
- data-testid
- getByRole
- aria-label
- stable CSS selectors

Avoid:
- Dynamic IDs
- Index-based XPath

---

## Smart Wait Strategy

- Use Playwright auto-wait
- Wait for visible
- Wait for network idle
- Wait for API response

Never use hard sleep.

---

## Handle Spinners

- Wait until spinner hidden
- Wait for DOM update

---

## API Validation for Stability

Validate backend response instead of only UI confirmation.

---

# 3️⃣ CHALLENGES DURING FRAMEWORK DEVELOPMENT

## 1. Flaky tests in parallel execution
Solution:
- Dynamic data
- Independent tests
- Proper fixtures

## 2. Slow regression
Solution:
- Parallel execution
- Tag-based execution
- Risk-based regression

## 3. Locator instability
Solution:
- Request data-testid from developers
- Centralize locators (POM)

## 4. CI failing but local passing
Solution:
- Enable trace
- Capture screenshots
- Capture videos
- Match CI browser version locally

---

# 4️⃣ DEBUGGING FAILED TESTS IN CI

## Enable Trace

Trace on first retry.

## Enable Screenshot on Failure

Capture screenshot and video.

## Steps to Debug:
1. Download trace
2. Replay test
3. Check network calls
4. Check console logs
5. Reproduce locally using same config

---

# 5️⃣ HANDLING FLAKY TESTS

## Causes:
- Improper wait
- Shared data
- Environment instability
- Parallel conflicts

## Fix Strategy:

1. Improve synchronization
2. Use dynamic test data
3. Remove test dependency
4. Limit retry to 1
5. Track flaky tests weekly

Maintain Flaky Dashboard:

| Test | Fail Count | Root Cause | Status |

---

# 6️⃣ SHARED DATA – READ VS WRITE

## Shared Read-Only Data (Safe)

Examples:
- Static product list
- Config values
- URL

---

## Shared Write Data (Risky)

Examples:
- Same user account
- Same order ID
- Same Excel row updated

Problems:
- Data conflict
- Race condition
- Flaky behavior

Rule:
Shared mutable state causes instability.

Best Practice:
- Generate dynamic data
- Use API setup
- Isolate test data

---

# 7️⃣ AUTOMATION ESTIMATION STRATEGY

## Categorize Complexity

| Type | Estimated Time |
|-------|---------------|
| Simple | 1–2 hrs |
| Medium | 3–4 hrs |
| Complex | 6–10 hrs |

Formula:
Automation Effort =
(Script Development + Debugging + Review)
+ 20% buffer

Consider:
- CI setup
- Flaky stabilization
- Test data handling

---

# 8️⃣ TASK DISTRIBUTION IN AUTOMATION TEAM

## Step 1: Identify High-Risk Modules

Payment / Order → Senior Automation Engineer

---

## Step 2: Distribute Based on Skill

Senior → Complex API + DB flows  
Mid-Level → UI regression  
Junior → Smoke / Stable scenarios

---

## Step 3: Balance Workload

- Equal story points
- Clear ownership
- Clear deadline

---

# FINAL PRINCIPLES

1. Stability over quantity
2. High-risk modules automated first
3. Independent test design
4. Strong locator strategy
5. CI observability enabled
6. Flaky tests tracked and fixed
7. Automation is product, not script

---

END OF DOCUMENT

