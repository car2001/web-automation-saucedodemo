@cart
Feature: Gestión del carrito de compras
  Como cliente de Sauce Demo
  Quiero agregar productos al carrito
  Para poder revisarlos antes de comprarlos

  Background:
    Given que el usuario navega a la página de login de Sauce Demo
    When el usuario inicia sesión con username "standard_user" y password "secret_sauce"
    Then debería visualizar la página de productos

  @happypath @regresion 
  Scenario: Agregar un producto al carrito desde la página de productos
    When el usuario agrega el producto "Sauce Labs Backpack" al carrito
    Then el ícono del carrito debería mostrar la cantidad "1"

  @happypath @regresion
  Scenario: Visualizar un producto agregado en el carrito
    Given que el usuario agregó el producto "Sauce Labs Backpack" al carrito
    When el usuario navega al carrito de compras
    Then debería visualizar el producto "Sauce Labs Backpack" en el carrito
    And debería visualizar la cantidad "1" para el producto