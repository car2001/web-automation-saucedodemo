@checkout
Feature: Proceso de compra en Sauce Demo
  Como cliente de Sauce Demo
  Quiero completar una compra
  Para adquirir los productos que necesito

  Background:
    Given que el usuario navega a la página de login de Sauce Demo
    When el usuario inicia sesión con username "standard_user" y password "secret_sauce"
    And el usuario agrega el producto "Sauce Labs Backpack" al carrito
    And el usuario navega al carrito de compras
    Then debería visualizar el producto "Sauce Labs Backpack" en el carrito

  @smoke @happypath
  Scenario: Completar exitosamente el proceso de compra
    When el usuario inicia el proceso de checkout
    And ingresa el nombre "Carlos"
    And ingresa el apellido "Pingo"
    And ingresa el código postal "15001"
    And continúa con la compra
    And finaliza la compra
    Then debería visualizar el mensaje de confirmación "Thank you for your order!"