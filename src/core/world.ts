import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "playwright";
import { LoginPage } from "../pages/loginpage";
import { InventoryPage } from "../pages/inventorypage";
import { CartPage } from "../pages/cartpage";
import { CheckoutPage } from "../pages/checkoutpage.";
import { CheckoutCompletePage } from "../pages/checkoutcompletepage";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  loginPage!: LoginPage;
  inventoryPage!: InventoryPage;
  cartPage!: CartPage;
  checkoutPage!: CheckoutPage;
  checkoutCompletePage!: CheckoutCompletePage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  initPages() {
    this.loginPage = new LoginPage(this.page);
    this.inventoryPage = new InventoryPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page);
    this.checkoutCompletePage = new CheckoutCompletePage(this.page);
  }
}

setWorldConstructor(CustomWorld);