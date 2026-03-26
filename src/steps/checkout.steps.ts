import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../core/world";

When(
  "el usuario inicia el proceso de checkout",
  async function (this: CustomWorld) {
    await this.checkoutPage.startCheckout();
  }
);

When(
  "ingresa el nombre {string}",
  async function (this: CustomWorld, firstName: string) {
    await this.checkoutPage.enterFirstName(firstName);
  }
);

When(
  "ingresa el apellido {string}",
  async function (this: CustomWorld, lastName: string) {
    await this.checkoutPage.enterLastName(lastName);
  }
);

When(
  "ingresa el código postal {string}",
  async function (this: CustomWorld, postalCode: string) {
    await this.checkoutPage.enterPostalCode(postalCode);
  }
);

When(
  "continúa con la compra",
  async function (this: CustomWorld) {
    await this.checkoutPage.continueCheckout();
  }
);

When(
  "finaliza la compra",
  async function (this: CustomWorld) {
    await this.checkoutPage.finishCheckout();
  }
);

Then(
  "debería visualizar el mensaje de confirmación {string}",
  async function (this: CustomWorld, expectedMessage: string) {
    const actualMessage = await this.checkoutCompletePage.getConfirmationMessage();
    expect(actualMessage).toBe(expectedMessage);
  }
);