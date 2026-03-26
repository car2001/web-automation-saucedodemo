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
       //button[text()='Add to cart']`
    );

  async getTitle(): Promise<string> {
    return (await this.title().textContent())?.trim() ?? "";
  }

  async addProductToCart(productName: string): Promise<void> {
    await this.addToCartButtonByProduct(productName).click();
  }

  async getCartBadgeCount(): Promise<string> {
    const badge = this.cartBadge();

    if (await badge.isVisible().catch(() => false)) {
      return (await badge.textContent())?.trim() ?? "0";
    }
    return "0";
  }

  async goToCart(): Promise<void> {
    await this.cartLink().click();
  }

  async removeProduct(productName: string) {
    await this.page.locator(
      `//div[text()="${productName}"]/ancestor::div[@class="inventory_item"]//button[text()='Remove']`
    ).click();
  }
}