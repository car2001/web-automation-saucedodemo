import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../core/world";

When(
  "el usuario agrega el producto {string} al carrito",
  async function (this: CustomWorld, productName: string) {
    await this.inventoryPage.addProductToCart(productName);
  }
);

Then(
  "el ícono del carrito debería mostrar la cantidad {string}",
  async function (this: CustomWorld, expectedCount: string) {
    const cartCount = await this.inventoryPage.getCartBadgeCount();
    expect(cartCount).toBe(expectedCount);
  }
);

Given(
  "que el usuario agregó el producto {string} al carrito",
  async function (this: CustomWorld, productName: string) {
    await this.inventoryPage.addProductToCart(productName);
  }
);

When(
  "el usuario navega al carrito de compras",
  async function (this: CustomWorld) {
    await this.inventoryPage.goToCart();
  }
);

Then(
  "debería visualizar el producto {string} en el carrito",
  async function (this: CustomWorld, productName: string) {
    const isVisible = await this.cartPage.isProductVisible(productName);
    expect(isVisible).toBeTruthy();

    const actualProductName = await this.cartPage.getProductName(productName);
    expect(actualProductName).toBe(productName);
  }
);

Then(
  "debería visualizar la cantidad {string} para el producto",
  async function (this: CustomWorld, expectedQuantity: string) {
    const quantity = await this.cartPage.getProductQuantity("Sauce Labs Backpack");
    expect(quantity).toBe(expectedQuantity);
  }
);