# 🧪 Automatización Web – Sauce Demo (Playwright + Cucumber)

## 📌 Descripción

Este proyecto contiene una suite de pruebas automatizadas para la aplicación web **Sauce Demo** utilizando las siguientes tecnologías:

* **Playwright** (Motor de automatización)
* **Cucumber** (Framework BDD)
* **TypeScript** (Lenguaje de programación)
* **Page Object Model (POM)** (Patrón de diseño)

---

## 🎯 Objetivo

Validar los flujos principales del usuario dentro de la plataforma:

* **Login:** Validación de accesos exitosos e inválidos.
* **Carrito:** Agregar productos y visualizar el listado.
* **Checkout:** Completar el proceso de compra de principio a fin.

---

## 🚀 Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone <TU_REPO_URL>
    cd web-automation-saucedemo
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Instalar navegadores de Playwright:**
    ```bash
    npx playwright install
    ```

---

## ▶️ Ejecución de pruebas

### 🔹 Ejecutar todas las pruebas
```bash
npm test
