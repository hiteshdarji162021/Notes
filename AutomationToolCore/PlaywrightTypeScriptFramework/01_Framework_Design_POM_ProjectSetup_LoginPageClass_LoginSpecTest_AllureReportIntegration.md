# Playwright TypeScript Automation Framework (From Scratch)

This canvas explains **everything step-by-step**, assuming the reader is a **new student**. Follow steps in order.

---

## STEP 1: Create a Blank Project Folder

1. Create a new empty folder (example):
   ```
   playwrightTypescriptFramework
   ```
2. Open this folder in **VS Code**

---

## STEP 2: Install Playwright

1. Open terminal in VS Code
2. Go to https://playwright.dev
3. Copy install command (TypeScript project):
   ```bash
   npm init playwright@latest
   ```
4. Answer prompts:
   - Language → **TypeScript**
   - Tests folder → **tests**
   - Add GitHub Actions → optional
   - Install browsers → **Yes**

This creates:
- `package.json`
- `playwright.config.ts`
- `tests/`
- `node_modules/`

---

## STEP 3: Update package.json (Modern JS)

Ensure this exists:
```json
"type": "module"
```

Why?
- Enables modern ES module syntax
- Required for Playwright + TypeScript

---

## STEP 4: Create tsconfig.json

Create `tsconfig.json` in root folder:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "es2015",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "types": ["node", "@playwright/test"]
  },
  "include": [
    "tests/**/*.ts",
    "playwright.config.ts"
  ]
}
```

Meaning:
- Enables strict TypeScript
- Supports Playwright types
- Prevents runtime type issues

---

## STEP 5: Configure playwright.config.ts

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  use: {
    baseURL: 'https://naveenautomationlabs.com/opencart/index.php',
    headless: !!process.env.CI,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'Google Chrome',
      use: {
        channel: 'chrome',
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
          ignoreDefaultArgs: ['--window-size=1280,720']
        }
      }
    }
  ]
});
```

Why this config:
- Real Google Chrome
- Full screen execution
- CI-safe
- HTML + Allure reports

---

## STEP 6: Create utils/ElementUtil.ts

Purpose:
- Central place for all element actions
- Avoid duplicate code
- Clean Page Object classes

### Code

```ts
import { Page, Locator, expect } from '@playwright/test';

type flexibleLocator = string | Locator;

export class ElementUtil {

    private page: Page;
    private defaultTimeOut: number = 30000;


    constructor(page: Page, timeOut: number = 30000) {
        this.page = page;
        this.defaultTimeOut = timeOut;
    }

    /**
     * this method to convert the string to Locator else it will return the semantic based locators on the basis of given index
     * @param locator 
     * @param index
     * @returns 
     */
    private getLocator(locator: flexibleLocator, index?: number): Locator {
        if (typeof locator === 'string') {
            if (index) {
                return this.page.locator(locator).nth(index);
            }
            else {
                return this.page.locator(locator).first();
            }
        }
        else {
            if (index) {
                return locator.nth(index);
            }
            else {
                return locator.first();
            }
        }
    }

    /**
     * Click on an element
     * @param locator 
     * @param options
     * @param index
     */
    async click(locator: flexibleLocator, options?: { force?: boolean; timeout?: number }, index?: number): Promise<void> {
        await this.getLocator(locator, index).click({
            force: options?.force,
            timeout: options?.timeout || this.defaultTimeOut
        });
        console.log(`Clicked on element : ${locator}`);
    }


    /**
     * Double clock on element
     * @param locator
     */
    async doubleClick(locator: flexibleLocator): Promise<void> {
        await this.getLocator(locator).dblclick({
            timeout: this.defaultTimeOut
        });
        console.log(`Double Clicked on element : ${locator}`);
    }

    /**
     * Right Click on element
     * @param locator 
     */
    async rightClick(locator: flexibleLocator): Promise<void> {
        await this.getLocator(locator).click({
            button: 'right',
            timeout: this.defaultTimeOut
        });
        console.log(`Right Clicked on element : ${locator}`);
    }


    /**
     * Fill text into an input field
     * @param locator 
     * @param text 
     */
    async fill(locator: flexibleLocator, text: string): Promise<void> {
        await this.getLocator(locator).fill(text, { timeout: this.defaultTimeOut });
        console.log(`Filled text : ${text} into element : ${locator}`);
    }

    /**
     * Type text with delay (default delay: 500 ms)
     * @param locator 
     * @param text 
     * @param delay 
     */
    async type(locator: flexibleLocator, text: string, delay: number = 500): Promise<void> {
        await this.getLocator(locator).pressSequentially(text, { delay, timeout: this.defaultTimeOut });
        console.log(`Typed text as human : ${text} into element : ${locator}`);
    }


    async clear(locator: flexibleLocator): Promise<void> {
        await this.getLocator(locator).clear({ timeout: this.defaultTimeOut });
        console.log(`cleared the element : ${locator}`);
    }


    /**
     * Get text context of an element
     */
    async getText(locator: flexibleLocator): Promise<string | null> {
        const text = await this.getLocator(locator).textContent({ timeout: this.defaultTimeOut });
        return text;
    }


    /**
     * Get text context of an element
     */
    async getInnerText(locator: flexibleLocator): Promise<string> {
        const text = await this.getLocator(locator).innerText({ timeout: this.defaultTimeOut });
        return text.trim();
    }

    /**
     * Get attribute value of an element
     */
    async getAttributeValue(locator: flexibleLocator, attributeName: string): Promise<string | null> {
        return await this.getLocator(locator).getAttribute(attributeName);
    }

    /**
     * Get input(entered) value of an element(text field)
     */
    async getInputValue(locator: flexibleLocator): Promise<string | null> {
        return await this.getLocator(locator).inputValue({ timeout: this.defaultTimeOut });
    }


    /**
     * Get all text content from multiple elements
     */
    async getAllInnerTexts(locator: flexibleLocator): Promise<string[]> {
        return await this.getLocator(locator).allInnerTexts();
    }


    //============================ Element Visibility & State Check ================//

    /**
      * check element is hidden
      */
    async isVisible(locator: flexibleLocator, index?: number): Promise<boolean> {
        return await this.getLocator(locator, index).isVisible({ timeout: this.defaultTimeOut });
    }

    /**
     * check element is hidden
     */
    async isHidden(locator: flexibleLocator): Promise<boolean> {
        return await this.getLocator(locator).isHidden({ timeout: this.defaultTimeOut });
    }

    /**
     * check element is enabled
     */
    async isEnabled(locator: flexibleLocator): Promise<boolean> {
        return await this.getLocator(locator).isEnabled({ timeout: this.defaultTimeOut });
    }

    /**
     * check element is disabled
     */
    async isDisabled(locator: flexibleLocator): Promise<boolean> {
        return await this.getLocator(locator).isDisabled({ timeout: this.defaultTimeOut });
    }

    /**
     * check element is checked (radio/checkbox)
     */
    async isChecked(locator: flexibleLocator): Promise<boolean> {
        return await this.getLocator(locator).isChecked({ timeout: this.defaultTimeOut });
    }

    /**
     * check element is checked (radio/checkbox)
     */
    async isEditable(locator: flexibleLocator): Promise<boolean> {
        return await this.getLocator(locator).isEditable({ timeout: this.defaultTimeOut });
    }

    //====================wait utils===========//

    /**
     * wait for element to be visible
     */
    async waitForElementVisible(locator: flexibleLocator, timeout: number = 5000): Promise<boolean> {
        try {
            await this.getLocator(locator).waitFor({ state: 'visible', timeout });
            console.log(`waited for element to be visible `);
            return true;
        }
        catch {
            return false;
        }
    }

    /**
     * wait for element to be attached to DOM
     */
    async waitForElementAttached(locator: flexibleLocator, timeout: number = 5000): Promise<boolean> {
        try {
            await this.getLocator(locator).waitFor({ state: 'attached', timeout });
            console.log(`waited for element to be visible `);
            return true;
        }
        catch {
            return false;
        }
    }

    /**
     * wait for page load state
     */
    async waitForPageLoad(state: 'load' | 'domcontentloaded' | 'networkidle' = 'load'): Promise<void> {
        await this.page.waitForLoadState(state);
        console.log(`waitd for page load state: ${state}`);
    }


    /**
     * wait for a specific timeout (static)
     */
    async sleep(timeout: number): Promise<void> {
        this.page.waitForTimeout(timeout);
        console.log(`waited for ${timeout} ms`);
    }



    //********************Drop Down Utils/Select Based Drop Downs ****************/
    async selectByText(locator: flexibleLocator, text: string) {
        await this.getLocator(locator).selectOption({ label: text }, { timeout: this.defaultTimeOut });
        console.log(`selected option ${text} from drop down ${locator}`);
    }

    async selectByValue(locator: flexibleLocator, value: string) {
        await this.getLocator(locator).selectOption({ value: value }, { timeout: this.defaultTimeOut });
        console.log(`selected option ${value} from drop down ${locator}`);
    }

    async selectByIndex(locator: flexibleLocator, index: number) {
        await this.getLocator(locator).selectOption({ index: index }, { timeout: this.defaultTimeOut });
        console.log(`selected option ${index} from drop down ${locator}`);
    }




}
```

(Create exactly the same code you provided)

Key concepts:
- Accepts **string OR Locator**
- Handles waits internally
- Makes framework scalable

---

## STEP 7: Create pages/LoginPage.ts

Purpose:
- Page Object Model (POM)
- UI locators + actions only
### Code
```ts
import { Locator, Page } from "@playwright/test";
import { ElementUtil } from "../utils/ElementUtil"

export class LoginPage {

    //1.page locator/object
    private readonly page: Page;
    private readonly eleUtil;
    private readonly emailID: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly warningMsg: Locator;


    //2. page class constructor
    constructor(page: Page) {
        this.page = page;
        this.eleUtil = new ElementUtil(page);
        this.emailID = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.warningMsg = page.locator('.alert.alert-danger.alert-dismissible');
    }

    //3. page actions/methods

    /**
     * navigate to login page
     */
    async goToLoginPage() {
        await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    }

    /**
     * 
     * @param emailID login to app using username and password
     * @param password 
     * @returns 
     */

    async doLogin(emailID: string, password: string): Promise<string> {
        await this.eleUtil.fill(this.emailID, emailID);
        await this.eleUtil.fill(this.password, password);
        await this.eleUtil.click(this.loginBtn, { force: true, timeout: 5000 });
        const title = await this.page.title();
        console.log('Home page title ', title);
        return title;
    }

    /**
     * get warning message incase of login.
     * @returns 
     */

    async inValidLoginMessage(): Promise<string | null> {

        const errorMsg = await this.eleUtil.getText(this.warningMsg);
        console.log('invalid login warning message', errorMsg);
        return errorMsg;
    }

}
```

Key ideas:
- No assertions inside page
- Returns data to tests
- Uses ElementUtil

Your implementation is correct.

Important note:
```ts
inValidLoginMessage(): Promise<string | null>
```
This returns **STRING**, not Locator.

---

## STEP 8: Create Test Spec (loginpage.spec.ts)

```ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// VALID LOGIN
test('verify valid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  const actualTitle = await loginPage.doLogin('valid@email.com', 'validPassword');
  await expect(page).toHaveTitle(actualTitle);
});

// INVALID LOGIN
test('verify invalid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.doLogin('wrong@email.com', 'wrongPass');
  const actualWarnMsg = await loginPage.inValidLoginMessage();
  expect(actualWarnMsg).toContain('Warning');
});
```

Why `toContain`:
- `actualWarnMsg` is a **string**
- Visibility checks work only on Locators

---

## STEP 9: Allure Integration (Reporting)

### Install packages

```bash
npm install -D allure-playwright
```
Meaning:
- Captures Playwright test results
- Generates `allure-results/`

```bash
npm install -D allure-commandline --legacy-peer-deps
```
Meaning:
- Converts results into HTML report
- Opens report in browser

---

### Run tests

```bash
npx playwright test
```

What happens:
- Tests execute
- `allure-results/` folder created

---

### Generate Allure Report

```bash
allure generate allure-results --clean -o allure-report
```

Meaning:
- Reads raw results
- Creates human-readable HTML

---

### Open Allure Report

```bash
npx allure open allure-report
```

Meaning:
- Launches report in browser

---

## FINAL PROJECT STRUCTURE

```
playwrightTypescriptFramework
├── pages
│   └── LoginPage.ts
├── tests
│   └── loginpage.spec.ts
├── utils
│   └── ElementUtil.ts
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── node_modules
```

---

## KEY LEARNING SUMMARY

- Page Object → UI logic
- Test → Assertions
- Locator → Visibility checks
- String → Text assertions
- Allure → Reporting only

----
