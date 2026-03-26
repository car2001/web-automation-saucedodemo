@login
Feature: Login en Sauce Demo
  Como cliente de Sauce Demo
  Quiero iniciar sesión
  Para acceder a la tienda y comprar productos

  Background:
    Given que el usuario navega a la página de login de Sauce Demo

  @happypath @regresion
  Scenario: Login exitoso
    When el usuario ingresa el username "standard_user"
    And el usuario ingresa el password "secret_sauce"
    And hace clic en el botón de login
    Then debería visualizar la página de productos
    And debería ver el título "Products"

  @unhappypath @regresion
  Scenario Outline: Login fallido con usuario bloqueado
    When el usuario ingresa el username "<username>"
    And el usuario ingresa el password "<password>"
    And hace clic en el botón de login
    And debería permanecer en la página de login
    Then debería ver un "<mensaje>" de error de acceso

    Examples:
    | username         | password      | mensaje                                                                   |
    | unknow_user      | secret_sauce  | Epic sadface: Username and password do not match any user in this service |
    | locked_out_user  | secret_sauce  | Epic sadface: Sorry, this user has been locked out.                       |