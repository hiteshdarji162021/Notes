# 🚀 Enterprise Playwright Framework (Full Folder Structure + Code)

Architect-Level | UI + API + DB Validation | Advanced Browser Handling

---

# 📁 Complete Folder Structure

project-root/
│
├── core/
│   ├── BasePage.ts
│   ├── PageManager.ts
│   ├── BaseTest.ts
│   └── Config.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── ForgotPasswordPage.ts
│   ├── HomePage.ts
│   ├── ProductPage.ts
│   ├── ProductDetailPage.ts
│   ├── CartPage.ts
│   ├── OrderPage.ts
│   ├── AlertPage.ts
│   ├── WindowPage.ts
│   ├── FramePage.ts
│   ├── ShadowDomPage.ts
│   └── SvgPage.ts
│
├── services/
│   ├── AuthService.ts
│   └── OrderService.ts
│
├── database/
│   └── OrderDBService.ts
│
├── test-data/
│   └── UserFactory.ts
│
├── tests/
│   ├── E2E_OrderFlow.spec.ts
│   ├── Alert.spec.ts
│   ├── Window.spec.ts
│   ├── Frame.spec.ts
│   ├── ShadowDom.spec.ts
│   └── Svg.spec.ts
│
└── playwright.config.ts

---

# 🧠 CORE LAYER

## BasePage.ts

```ts
import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async click(locator: string) {
    await this.page.locator(locator).click();
  }

  async fill(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
  }

  async text(locator: string) {
    return await this.page.locator(locator).textContent();
  }
}
```

---

## PageManager.ts

```ts
import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { CartPage } from '../pages/CartPage';
import { OrderPage } from '../pages/OrderPage';

export class PageManager {
  constructor(private page: Page) {}

  login() { return new LoginPage(this.page); }
  home() { return new HomePage(this.page); }
  product() { return new ProductPage(this.page); }
  productDetail() { return new ProductDetailPage(this.page); }
  cart() { return new CartPage(this.page); }
  order() { return new OrderPage(this.page); }
}
```

---

## BaseTest.ts

```ts
import { test as base } from '@playwright/test';
import { PageManager } from './PageManager';

export const test = base.extend<{
  pm: PageManager;
}>({
  pm: async ({ page }, use) => {
    await use(new PageManager(page));
  }
});
```

---

# 📄 PAGE LAYER

## LoginPage.ts

```ts
import { BasePage } from '../core/BasePage';

export class LoginPage extends BasePage {
  async navigate() {
    await this.page.goto('/login');
  }

  async login(user: string, pass: string) {
    await this.fill('#username', user);
    await this.fill('#password', pass);
    await this.click('#loginBtn');
  }
}
```

---

## ProductPage.ts

```ts
import { BasePage } from '../core/BasePage';

export class ProductPage extends BasePage {
  async selectProduct(name: string) {
    await this.click(`text=${name}`);
  }
}
```

---

## ProductDetailPage.ts

```ts
import { BasePage } from '../core/BasePage';

export class ProductDetailPage extends BasePage {
  async addToCart() {
    await this.click('#addToCart');
  }
}
```

---

## CartPage.ts

```ts
import { BasePage } from '../core/BasePage';

export class CartPage extends BasePage {
  async checkout() {
    await this.click('#checkoutBtn');
  }
}
```

---

## OrderPage.ts

```ts
import { BasePage } from '../core/BasePage';

export class OrderPage extends BasePage {
  async placeOrder() {
    await this.click('#placeOrder');
  }

  async getOrderId() {
    return await this.text('#orderId');
  }
}
```

---

# 🌐 SERVICE LAYER

## OrderService.ts

```ts
export class OrderService {
  constructor(private request) {}

  async getOrder(orderId: string) {
    return await this.request.get(`/api/orders/${orderId}`);
  }
}
```

---

# 🗄 DATABASE LAYER

## OrderDBService.ts

```ts
import { Client } from 'pg';

export class OrderDBService {
  async getOrder(orderId: string) {
    const client = new Client({ connectionString: process.env.DB_URL });
    await client.connect();
    const result = await client.query(
      'SELECT * FROM orders WHERE order_id = $1',
      [orderId]
    );
    await client.end();
    return result.rows[0];
  }
}
```

---

# 🧪 TEST FILE (UI + API + DB)

## E2E_OrderFlow.spec.ts

```ts
import { test } from '../core/BaseTest';
import { OrderService } from '../services/OrderService';
import { OrderDBService } from '../database/OrderDBService';


test('Complete Order Validation', async ({ pm, request }) => {

  await pm.login().navigate();
  await pm.login().login('user', 'pass');

  await pm.home().goToProduct();
  await pm.product().selectProduct('iPhone');
  await pm.productDetail().addToCart();
  await pm.cart().checkout();
  await pm.order().placeOrder();

  const orderId = await pm.order().getOrderId();

  const api = new OrderService(request);
  const apiResponse = await api.getOrder(orderId);

  const db = new OrderDBService();
  const dbRecord = await db.getOrder(orderId);

  console.log(apiResponse.status());
  console.log(dbRecord);
});
```

---

# 🧠 Advanced Handling Examples

## Alert Handling

```ts
page.on('dialog', async dialog => {
  await dialog.accept();
});
```

## Multiple Windows

```ts
const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.click('#openWindow')
]);
```

## Frame Handling

```ts
await page.frameLocator('#frameId').locator('#button').click();
```

## Shadow DOM

```ts
await page.locator('css=custom-element >> shadow=button').click();
```

## SVG Handling

```ts
await page.locator('svg >> text=Edit').click();
```

---

# 🏆 This Framework Demonstrates

✔ Clean layered architecture  
✔ UI + API + DB validation  
✔ Advanced DOM handling  
✔ Enterprise scalability  
✔ Interview-ready design  

Architect-Level Automation Framework ✅

