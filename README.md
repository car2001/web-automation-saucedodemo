🧪 Automatización Web – Sauce Demo (Playwright + Cucumber)
📌 Descripción

Este proyecto contiene una suite de pruebas automatizadas para la aplicación web Sauce Demo utilizando:

Playwright
Cucumber
TypeScript
Patrón de diseño Page Object Model (POM)
🎯 Objetivo

Validar el flujo principal de usuario:

Login exitoso e inválido
Agregar productos al carrito
Visualizar carrito
Completar proceso de compra

🚀 Instalación

Clonar el repositorio:

git clone 
cd web-automation-saucedemo

Instalar dependencias:

npm install

Instalar navegadores de Playwright:

npx playwright install
▶️ Ejecución de pruebas
🔹 Ejecutar todas las pruebas
npm test
🔹 Ejecutar pruebas por tag
npx cucumber-js --tags "@login"

🏁 Autor

Carlos Alberto Pingo Aguilar
