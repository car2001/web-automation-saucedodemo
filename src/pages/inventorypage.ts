import { Page } from "playwright";

export class InventoryPage {
  
  constructor(private page: Page) {}

  private title = () => this.page.locator('[data-test="title"]');
  private cartBadge = () => this.page.locator('[data-test="shopping-cart-badge"]');
  private cartLink = () => this.page.locator('[data-test="shopping-cart-link"]');

  private addToCartButtonByProduct = (productName: string) =>
    this.page.locator(
      `//div[@data-test="inventory-item-name" and text()="${productName}"]
       /ancestor::div[@class="inventory_item"]
       //button`
    );

  async getTitle(): Promise<string> {
    return (await this.title().textContent())?.trim() ?? "";
  }

  async addProductToCart(productName: string): Promise<void> {
    await this.addToCartButtonByProduct(productName).click();
  }

  async getCartBadgeCount(): Promise<string> {
    return (await this.cartBadge().textContent())?.trim() ?? "0";
  }

  async goToCart(): Promise<void> {
    await this.cartLink().click();
  }
}