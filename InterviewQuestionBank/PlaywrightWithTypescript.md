# QA Interview Question Bank

---

## Introduction & Candidate Overview
1. Tell me about yourself (brief explanation).
2. Based on your projects and past experience, follow-up questions will be asked.

---

# TypeScript

## Basic
1. What is TypeScript and why is it used instead of JavaScript in large automation frameworks?
2. Difference between var , let , and const with real execution examples.
3. Difference between == and === , and where it can cause bugs in tests.
4. Difference between for...of and for...in with real use cases.
5. Difference between slice() and splice() .
6. What is the difference between a normal function and an arrow function? (Important: this
behavior)
7. What is a callback function and where is it used?
8. What is a Promise and what are its states?
9. Difference between JSON.stringify() and JSON.parse() .
10. What is async/await and why is it preferred over promises?

## Medium
1. Explain Promise.all vs Promise.allSettled with a real automation example.
2. What is callback hell and how do you avoid it?
3. What is the type keyword in TypeScript?
4. What is tsconfig.json and which configurations are important for automation projects?
5. How do you define types for variables and function return values?
6. What is function overloading in TypeScript? Where would you use it?
7. Difference between Object.freeze() and Object.seal() .

## Advanced
1. Which TypeScript OOP concepts have you used in your framework?
2. How do you handle errors? Provide a code example.
3. Can you write code for inheritance?
4. Explain the difference between type and interface in TypeScript. When would you choose
one over the other in a real automation framework? Provide practical examples.
5. What are Union ( | ) and Intersection ( & ) types in TypeScript? How are they used in real-world
scenarios like API response handling or test data modeling? Provide examples.

---

# Playwright

## Basic
1. What is Playwright architecture? How is it different from Selenium?
2. Difference between npm and npx .
3. What is the purpose of package.json ?
4. Command to run tests in Chrome only.
5. How do you run a specific test/tag (e.g., smoke)?
6. How do you handle HTTP authentication popups?
7. Which browsers are supported in Playwright? Bundled vs system?
8. What is browserContext and why is it important?
9. Types of locators. Which is best and why?
10. How do you perform right-click, double-click, and drag-and-drop in Playwright?
11. How do you get a value from an input field?
12. Difference between .check() vs .click() .
13. Types of waits in Playwright.
14. Types of assertions. Levels of assertions (page level, locator level, value level).
15. What are hooks and their use?
16. Use of test.describe and test.describe.serial .
17. How do you get innerText from one locator as well as multiple locators?
18. How do you use Playwright Trace Viewer, video, and screenshots for debugging failures?
19. How do you handle SSL errors?
20. How do you set HTTP credentials (authentication) in Playwright?

## Medium
1. How do you handle alerts (dialogues)?
2. How do you handle a search box using filter() and hasText() ?
3. How do you handle multiple tabs/windows?
4. Why are iframes used in applications? How do you handle them in Playwright, and what
challenges have you faced with nested or dynamic iframes?
5. Why is Shadow DOM used in modern applications? How does Playwright handle it, and what
challenges have you faced?
6. How do you handle SVG and pseudo-elements?
7. Difference between page.on() vs page.waitForEvent() with examples.
8. When do you use page.evaluate() ? Provide a real use case.
9. How do you handle lazy loading / infinite scrolling?
10. How do you upload single and multiple files?
11. How do you download and validate files?
12. How do you handle flaky tests?
13. How do you manage dynamic test data?
14. How do you design a reusable Page Object Model?
15. How do you run tests in parallel?
16. How do you reuse login/session using storageState ?

## Advanced
1. Which Playwright features have you used in your framework?
2. What are the ways to manage test data in Playwright? Which is best?
3. What are fixtures in Playwright? Which built-in fixtures have you used?
4. Explain one custom fixture you created. What problem did it solve?
5. How do you handle multiple environments (QA, UAT, Prod) using fixtures or config?
6. How do you debug flaky tests in real projects? Provide one example.
7. What was the most challenging automation problem you faced? How did you solve it?
8. Explain the folder structure of your automation framework.
9. How would you design an automation framework to manage 10k+ tests?
10. How do you use route() for network mocking? Provide a real scenario.
11. How do you ensure code quality in automation (code reviews, standards, best practices)?
12. How do you integrate Playwright with CI/CD? Which tools and workflows have you used?
13. Do you have experience running tests on the cloud?

---

# API

## Basic
1. What is API testing and why is it important?
2. How do you perform API testing in Playwright? Which fixture do you use?
3. What is schema validation in API testing?
4. What is contract testing in APIs?
5. How do you validate API response status, headers, and body?
6. How do you handle authentication (token, basic auth)?
7. Difference between GET, POST, PUT, DELETE.
8. How do you mock APIs in Playwright ( route() basic)?
9. How do you parse JSON responses in Playwright?

## Medium
1. How do you pass dynamic data between API calls (chaining requests)?
2. How do you manage test data in API automation?
3. How do you validate complex nested JSON?
4. How do you handle multiple environments (QA/UAT/Prod)?
5. How do you reuse authentication tokens across tests?
6. How do you validate API schema using libraries like Ajv or Joi?
7. How do you handle negative testing in APIs?
8. How do you test APIs with dynamic payloads?
9. How do you integrate API tests with UI tests in Playwright?
10. How do you log and debug API failures?

## Advanced
1. How do you create a framework for API automation? Explain folder structure.
2. How do you ensure data consistency between API and UI validation?
3. How do you create reusable API clients/services?
4. How do you validate large and complex API responses efficiently?

---

# Programming (TypeScript or Any Language)

## Basic
1. Reverse String. Input - Hitesh Darji otuput - ijraD hsetiH
2. Reverse word.  Input = Hitesh Darji output = hsetiH ijraD
2. Print Maxium Duplicate Character count using hashmap . For e.g abccddeffaaaa output =  a=5
3. Fibo Series first 10 digit print.  0 1 1 2 3 5 8 13 21 34
4. Sum of digit. input= 1234 output=10
5. Check if string contains at least one digit.Input=100 Output=True, "HUNDRED" output=false, Input=12A = True
6. Check whether a number is prime. Input=7, Output="its prime number"
7. Capitalize first letter of each word and convert others to lowercase. Input = "hiTeSh daRji", Output="Hitesh Darji"

## Medium
1.From array, find duplicate value of array?  input = [10,30,20,40,50,10,20], output= [10,20]
2. From Array,find unique value. input = [10,30,20,40,50,10,20], output= [30,40,50]
3. charctercount. Input: "aaabbc", Output: "a3b2c1"
4. Given array [10,20,30,40,42,52,5,9,45,100], find 52 present in Array or not.
5. Given input 1,2,4,5,6,7, print Hi for odd and Hello for even numbers. Input=[1,2,4,5,6,7], Output=[Hi,Hello,Hello,Hi,Hello,Hi]

## Advanced
1. using filter,map and reduce perform below program
  - Take one Array [85, 92, 67, 78, 95, 43, 88, 76, 91, 82]. From that filter value which greater then 70, what ever numbers come add +5 in every number and perform average of that numbers. output = 90.875
2. Missing number from array. Input = [5,7,10], output= [6,8,9]
3. Given array [1,2,3,4,5,6,7,8,9,10], rotate by 4 and print output.Input= [1,2,3,4,5,6,7,8,9,10] Output=[5,6,7,8,9,10,1,2,3,4]
4. Given list of WebElements with prices like ["$1,200.50", "$499.99", "$750", "$2,300", "$120", "$999.99", "$5,000.75", "$450.25", "$800", "$50"], filter > 500 and sort.

---

# Playwright + TypeScript Programming Tasks

## Basic
1. https://the-internet.herokuapp.com/windows – Get title from new window and close it.
2. https://the-internet.herokuapp.com/download – Download file.
3. https://the-internet.herokuapp.com/dropdown – Select dropdown.
4. https://the-internet.herokuapp.com/drag_and_drop – Handle drag and drop.

## Medium
1. https://testautomationpractice.blogspot.com/ – Complete registration form.
2. https://testautomationpractice.blogspot.com/ - Upload single file.
3. https://testautomationpractice.blogspot.com/ - Upload multiple files.

## Advanced
1. https://testautomationpractice.blogspot.com/- Pagination Web Table. Check the checkbox
containing value "laptop".
2. https://testautomationpractice.blogspot.com/ - Enter value inside Shadow DOM element.
3. https://testautomationpractice.blogspot.com/- From dynamic web table, get CPU value of
"Chrome".
4. Create a Playwright framework for login scenarios.

---

# Behavioral Round

1. Which best practices did you follow in your last company specific to automation?
2. How do you set deadlines and manage your tasks?
3. What is your future roadmap? Where do you see yourself in the coming years?
4. What is your role in sprint planning and Agile processes?
5. How do you work with a team? What challenges have you faced?
6. What are the best ways to work effectively with a team?
7. How do you handle conflicts within a team?

---