import { Page } from "playwright";

export class LoginPage {
  url: string;

  constructor(private page: Page) {
    this.url = 'https://www.saucedemo.com/';
  }

  private usernameInput = () => this.page.locator('[data-test="username"]');
  private passwordInput = () => this.page.locator('[data-test="password"]');
  private loginButton = () => this.page.locator('[data-test="login-button"]');
  private errorMessage = () => this.page.locator('[data-test="error"]');

  async navigate() {
    await this.page.goto(this.url);
  }

  async enterUsername(username: string) {
    await this.usernameInput().fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput().fill(password);
  }

  async clickLogin() {
    await this.loginButton().click();
  }

  async getErrorMsg(): Promise<string> {
    return (await this.errorMessage().textContent())?.trim() ?? "";
  }
}