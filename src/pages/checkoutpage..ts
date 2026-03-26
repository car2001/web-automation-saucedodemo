import { Page } from "playwright";

export class CheckoutPage {
  constructor(private page: Page) {}

  private checkoutButton = () => this.page.locator('[data-test="checkout"]');

  private firstNameInput = () => this.page.locator('[data-test="firstName"]');
  private lastNameInput = () => this.page.locator('[data-test="lastName"]');
  private postalCodeInput = () => this.page.locator('[data-test="postalCode"]');
  private continueButton = () => this.page.locator('[data-test="continue"]');

  private finishButton = () => this.page.locator('[data-test="finish"]');

  async startCheckout(): Promise<void> {
    await this.checkoutButton().click();
  }

  async enterFirstName(firstName: string): Promise<void> {
    await this.firstNameInput().fill(firstName);
  }

  async enterLastName(lastName: string): Promise<void> {
    await this.lastNameInput().fill(lastName);
  }

  async enterPostalCode(postalCode: string): Promise<void> {
    await this.postalCodeInput().fill(postalCode);
  }

  async continueCheckout(): Promise<void> {
    await this.continueButton().click();
  }

  async finishCheckout(): Promise<void> {
    await this.finishButton().click();
  }
}