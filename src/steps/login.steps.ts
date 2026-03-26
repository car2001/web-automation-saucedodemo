import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../core/world";

Given(
  "que el usuario navega a la página de login de Sauce Demo",
  async function (this: CustomWorld) {
    await this.loginPage.navigate();
  }
);

When(
  "el usuario ingresa el username {string}",
  async function (this: CustomWorld, username: string) {
    await this.loginPage.enterUsername(username);
  }
);

When(
  "el usuario ingresa el password {string}",
  async function (this: CustomWorld, password: string) {
    await this.loginPage.enterPassword(password);
  }
);

When(
  "el usuario inicia sesión con username {string} y password {string}",
  async function (this: CustomWorld, username: string, password: string) {
    await this.loginPage.enterUsername(username);
    await this.loginPage.enterPassword(password);
    await this.loginPage.clickLogin();
  }
);

When(
  "hace clic en el botón de login",
  async function (this: CustomWorld) {
    await this.loginPage.clickLogin();
  }
);

Then(
  "debería visualizar la página de productos",
  async function (this: CustomWorld) {
    await expect(this.page).toHaveURL(/inventory/);
  }
);

Then(
  "debería ver el título {string}",
  async function (this: CustomWorld, expectedTitle: string) {
    const title = await this.inventoryPage.getTitle();
    expect(title).toBe(expectedTitle);
  }
);

Then(
  "debería permanecer en la página de login",
  async function (this: CustomWorld) {
    await expect(this.page).toHaveURL(/saucedemo/);
  }
);

Then(
  'debería ver un {string} de error de acceso',
  async function (this: CustomWorld, expectedMessage: string) {
    const error = await this.loginPage.getErrorMsg();
    expect(error).toContain(expectedMessage);
  }
);