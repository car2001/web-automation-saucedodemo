import { Page } from "playwright";

export class CheckoutCompletePage {
  constructor(private page: Page) {}

  private confirmationMessage = () => this.page.locator('[data-test="complete-header"]');

  async getConfirmationMessage(): Promise<string> {
    return (await this.confirmationMessage().textContent())?.trim() ?? "";
  }
}