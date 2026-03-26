import { Page } from "playwright";

export class CartPage {
  constructor(private page: Page) {}

  private cartItemByName = (productName: string) =>
    this.page.locator('.cart_item').filter({
      has: this.page.locator('[data-test="inventory-item-name"]', { hasText: productName }),
    });

  private productNameLocator = (productName: string) =>
    this.cartItemByName(productName).locator('[data-test="inventory-item-name"]');

  private productQuantityLocator = (productName: string) =>
    this.cartItemByName(productName).locator('[data-test="item-quantity"]');

  async isProductVisible(productName: string): Promise<boolean> {
    return await this.productNameLocator(productName).isVisible();
  }

  async getProductName(productName: string): Promise<string> {
    return (await this.productNameLocator(productName).textContent())?.trim() ?? "";
  }

  async getProductQuantity(productName: string): Promise<string> {
    return (await this.productQuantityLocator(productName).textContent())?.trim() ?? "";
  }

    async removeProduct(productName: string) {
    await this.page.locator(
      `//div[text()="${productName}"]/ancestor::div[@class="cart_item"]//button`
    ).click();
  }
}