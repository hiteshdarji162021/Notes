# Playwright + TypeScript Interview Evaluation Framework (World Class Hiring Guide)

## Purpose
This document helps any interviewer consistently identify a high-quality Playwright + TypeScript Automation Engineer who is technically strong, a good human, and easy to lead in a team.

Total Score: 100  
Selection Benchmark: 80+

Maximum Interview Duration: **60 – 70 minutes**

---

# INTERVIEW TIMELINE (MAX 1 HR – 1 HR 10 MIN)

| Time | Section | Goal |
|---|---|---|
0 – 5 min | Introduction | Understand candidate clarity & communication |
5 – 20 min | Core Playwright Technical | Validate real Playwright knowledge |
20 – 35 min | Practical Coding | Validate real programming ability |
35 – 45 min | Framework Design | Check architecture thinking |
45 – 55 min | Team Player Evaluation | Check personality & collaboration |
55 – 65 min | Pressure Handling | Check ownership mindset |
65 – 70 min | Final Quick Deep Question | Detect real vs fake experience |

---

# SECTION 1 — INTRODUCTION (0 – 5 MIN) — 5 Marks

Questions:

- Tell me about yourself
- Education background
- Current project
- Long term career vision

Evaluate:

- Clarity of thinking
- Passion for automation
- Ownership in project

Score Guide:

0 = unclear

3 = average

5 = confident & structured

---

# SECTION 2 — CORE PLAYWRIGHT TECHNICAL (5 – 20 MIN) — 25 Marks

Ask only **high signal questions**.

Questions:

1. Playwright vs Selenium architecture difference

Expected topics:

- Auto waiting
- Parallel execution
- Browser context isolation
- Built in test runner
- Faster execution

---

2. Types of wait in Playwright

Expected:

- Auto wait
- waitForSelector
- waitForLoadState
- waitForTimeout (should avoid)

---

3. Purpose of Fixtures

Expected:

- reusable setup
- dependency injection
- test isolation

---

4. Browser Context Purpose

Expected:

- independent sessions
- multi user simulation
- parallel testing

---

5. page.on vs page.waitForEvent

Expected explanation:

- event listener vs one time wait

---

6. Playwright commands

Examples:

Run firefox

npx playwright test --project=firefox

Run 1 worker

npx playwright test --workers=1

Run tag

npx playwright test --grep @smoke

---

Score: **25**

---

# SECTION 3 — PRACTICAL CODING (20 – 35 MIN) — 25 Marks

Task 1: Reverse String in TypeScript

Expected code:

function reverseString(str: string): string {
 return str.split('').reverse().join('');
}

Evaluation:

- Typescript usage
- logic clarity
- thinking process

---

Task 2: Handle alert in Playwright

Expected:

page.on('dialog', async dialog => {
 await dialog.accept()
})

---

Task 3: Explain Shadow DOM handling

Expected:

locator('css=element >> shadow=child')

Score: **25**

---

# SECTION 4 — FRAMEWORK DESIGN (35 – 45 MIN) — 15 Marks

Ask candidate:

Explain your Playwright framework structure.

Expected structure:

project

 tests

 pages

 fixtures

 utils

 test-data

 playwright.config.ts

Evaluate:

- Scalability
- Maintainability
- Separation of concern

Red Flag:

Everything inside tests folder.

Score: **15**

---

# SECTION 5 — TEAM PLAYER (45 – 55 MIN) — 15 Marks

Questions:

1. Developer rejects bug. What will you do?

2. Junior team member struggling. How will you help?

3. Disagreement with developer or QA teammate.

Green Signals:

- collaboration mindset
- calm communication
- respect for others

Red Flags:

- blaming developers
- ego attitude

Score: **15**

---

# SECTION 6 — PRESSURE & OWNERSHIP (55 – 65 MIN) — 10 Marks

Questions:

1. Tight deadline approach

2. Weekend work request from manager

3. Senior writing poor quality code

Good candidate traits:

- solution oriented
- calm thinking
- ownership mindset

Score: **10**

---

# SECTION 7 — FINAL REALITY CHECK (65 – 70 MIN) — 5 Marks

Ask **one killer question**:

"If your Playwright test is flaky, how will you debug it?"

Expected strong answer:

- trace viewer
- screenshots
- video recording
- network debugging
- logs analysis

Weak answer:

"Add wait"

Score: **5**

---

# FINAL SCORE MATRIX

| Category | Marks |
|---|---|
Introduction | 5
Technical | 25
Coding | 25
Framework | 15
Team Player | 15
Pressure Handling | 10
Reality Check | 5

Total = **100**

---

# HIRING DECISION

| Score | Decision |
|---|---|
90+ | Hire Immediately (Top Engineer)
80 – 89 | Strong Hire
70 – 79 | Hire if needed
60 – 69 | Risky Hire
<60 | Reject

---

# PERFECT CANDIDATE SIGNALS

Technical:

- explains Playwright internals
- writes clean TypeScript

Team:

- humble
- collaborative

Ownership:

- takes responsibility
- thinks solution first

Such candidates become:

- Senior Automation Engineer
- Tech Lead
- QA Architect

---

This structured timeline ensures the interview finishes within **60–70 minutes while covering both technical depth and human behavior evaluation.**

