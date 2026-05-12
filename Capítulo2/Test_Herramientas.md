# Demo / POC — Validación de Herramientas Frontend y Desarrollo Web

<br/><br/>

# 1. Navegador Web — POC Frontend Developer Ready

## Objetivos

Validar que el navegador:

* Está correctamente instalado
* Soporta JavaScript moderno (ES6+)
* Tiene acceso a DevTools
* Puede ejecutar pruebas básicas frontend
* Tiene extensiones útiles para desarrollo web

<br/><br/>

## Tabla de ayuda

| Herramienta                                                                                 | Breve descripción                          |
| ------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [Google Chrome](https://www.google.com/chrome)                      | Navegador moderno para desarrollo frontend |
| [Microsoft Edge](https://www.microsoft.com/edge)                     | Navegador basado en Chromium               |
| [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) | Auditoría de performance y accesibilidad   |
| [React DevTools](https://react.dev/learn/react-developer-tools)      | Inspección de aplicaciones React           |
| [Angular DevTools](https://angular.dev/tools/devtools)               | Inspección de aplicaciones Angular         |



<br/><br/>

## Extensiones recomendadas

| Extensión        | Uso                         |
| ---------------- | --------------------------- |
| JSON Viewer      | Visualizar JSON formateado  |
| Lighthouse       | Auditoría frontend          |
| React DevTools   | Inspección React            |
| Angular DevTools | Inspección Angular          |
| ModHeader        | Manipular headers HTTP      |
| Wappalyzer       | Detectar tecnologías        |
| ColorZilla       | Captura de colores          |
| uBlock Origin    | Bloquear ruido publicitario |
| Requestly        | Interceptar requests        |

<br/><br/>

## Instrucciones  

### Paso 1. Revisar versión del navegador

Abrir:

```text
chrome://version
```

o en Edge:

```text
edge://version
```

<br/><br/>

### Paso 2. Abrir DevTools

Presionar:

```text
F12
```

o:

```text
Ctrl + Shift + I
```

<br/><br/>

### Paso 3. Probar consola JavaScript

En la pestaña Console ejecutar:

```javascript
console.log("Hola Frontend");
```

<br/><br/>

### Paso 4. Probar alert

```javascript
alert("POC Frontend OK");
```


<br/><br/>


### Paso 5. Probar ES6+

```javascript
const sumar = (a,b) => a+b;
console.log(sumar(5,3));
```

<br/><br/>

### Paso 6. Validar fetch

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(r => r.json())
  .then(console.log);
```

<br/><br/>

### Paso 7. Validar localStorage

```javascript
localStorage.setItem("curso","Netec: frontend");
console.log(localStorage.getItem("curso"));
```

<br/><br/>

### Paso 8. Revisar User Agent

```javascript
navigator.userAgent
```

* navigator.userAgent es una propiedad de JavaScript que devuelve una cadena de texto con información del navegador web, sistema operativo y motor de renderizado utilizado por el usuario.

+ Qué se valida o comprueba

| Validación   | Resultado esperado      |
| ------------ | ----------------------- |
| Consola JS   | Ejecuta código          |
| ES6+         | Soporta arrow functions |
| fetch API    | Consume APIs            |
| localStorage | Guarda datos            |
| DevTools     | Inspección correcta     |
| Red HTTP     | Requests visibles       |


<br/>

### Paso 9. Instala la extensión JSON Viewer

Abre en Chrome la siguiente URL de prueba:

```text id="yrj4o4"
https://jsonplaceholder.typicode.com/posts/1
```

Observa cómo el navegador muestra el contenido JSON de forma simple o en texto plano.

Ahora instala una extensión tipo `JSON Viewer` desde la tienda de extensiones del navegador.

Por ejemplo:

* [Chrome Web Store - JSON Viewer](https://chromewebstore.google.com/search/json%20viewer)

Una vez instalada:

1. Recarga la página (`F5`)
2. Vuelve a abrir la URL anterior
3. Observa cómo ahora el JSON aparece:

   * Formateado
   * Coloreado
   * Organizado
   * Más fácil de leer

Esta extensión es muy útil para desarrolladores frontend y backend que consumen APIs REST.

<br/>

### Paso 10. Lighthouse

Verifica si el navegador ya incluye Lighthouse integrado.

1. Abre cualquier página web
2. Presiona:

```text
F12
```

3. Busca la pestaña:

```text
Lighthouse
```

> En algunos navegadores puede encontrarse dentro del menú `>>`.

Genera un reporte sobre:

* Una página sencilla, por ejemplo:

  * [Wikipedia](https://www.wikipedia.org/?utm_source=chatgpt.com)

* Una página corporativa moderna, por ejemplo:

  * [Apple](https://www.apple.com/?utm_source=chatgpt.com)

Selecciona las categorías:

* Performance
* Accessibility
* Best Practices
* SEO

Compara los resultados obtenidos entre ambos sitios, especialmente:

* Tiempo de carga
* Puntaje SEO
* Accesibilidad
* Cantidad de recursos descargados
* Uso de imágenes y scripts

Esto permite observar cómo el tamaño y complejidad de una aplicación web impactan directamente en el rendimiento y calidad frontend.


* **Notas:**

El puntaje SEO es una calificación que indica qué tan optimizada está una página web para motores de búsqueda como:

* [Google](https://www.google.com?utm_source=chatgpt.com)
* [Bing](https://www.bing.com?utm_source=chatgpt.com)


Un puntaje alto indica que la página:

* Puede ser encontrada más fácilmente.
* Sigue buenas prácticas web.
* Es compatible con dispositivos móviles.
* Tiene estructura HTML correcta.
* Facilita el trabajo de indexación de buscadores.


Interpretación:

| Puntaje    | Significado      |
| ---------- | ---------------- |
| 90 - 100   | Excelente        |
| 50 - 89    | Aceptable        |
| Menor a 50 | Necesita mejoras |


<br/>

## ¿Qué analiza Lighthouse para SEO?

| Elemento                   | Ejemplo                     |
| -------------------------- | --------------------------- |
| Título de página           | `<title>`                   |
| Meta descripción           | `<meta name="description">` |
| Responsive design          | Compatible móvil            |
| HTTPS                      | Sitio seguro                |
| Etiquetas HTML correctas   | `<header>`, `<main>`, etc.  |
| Texto alternativo imágenes | `alt`                       |
| Enlaces válidos            | Links funcionales           |


<br/>

El puntaje SEO NO mide:

* Popularidad real del sitio
* Ventas
* Posicionamiento exacto en Google
* Calidad del negocio

Mide principalmente:

```text id="8n3p51"
Buenas prácticas técnicas de optimización web
```

<br/><br/>


## Problemas comunes y solución

| Problema                 | Solución              |
| ------------------------ | --------------------- |
| DevTools no abre         | Usar F12              |
| fetch bloqueado          | Revisar internet/CORS |
| Extensión no aparece     | Reiniciar navegador   |
| JavaScript deshabilitado | Revisar configuración |

<br/><br/>

## Referencias oficiales

* [Chrome DevTools Docs](https://developer.chrome.com/docs/devtools)
* [Can I Use](https://caniuse.com/)
* [HTML 5 Test - Dead](https://html5test.com)
* [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?utm_source=chatgpt.com)
* [Lighthouse SEO Audits](https://developer.chrome.com/docs/lighthouse/seo/?utm_source=chatgpt.com)


<br/><br/>

# 2. Visual Studio Code — POC Entorno Frontend

## Objetivos

Validar:

* Instalación de VS Code
* Terminal integrada
* IntelliSense
* Extensiones
* Snippets
* Formateo automático

<br/><br/>

## Tabla de ayuda

| Herramienta                                                                 | Breve descripción              |  
| --------------------------------------------------------------------------- | ------------------------------ |  
| [Visual Studio Code](https://code.visualstudio.com/) | Editor moderno multiplataforma |  
| [Prettier](https://prettier.io/)                     | Formateador de código          |  
| [ESLint](https://eslint.org/)                        | Análisis de calidad JS/TS      |  

<br/><br/>

## Plugins recomendados

| Plugin                   | Uso          |
| ------------------------ | ------------ |
| HTML Snippets            | Atajos HTML  |
| JavaScript ES6 Snippets  | Snippets JS  |
| Prettier                 | Formateo     |
| ESLint                   | Calidad      |
| Angular Language Service | Angular      |


<br/><br/>

## Instrucciones  

### Paso 1. Abrir terminal integrada

Menú:

```text
Terminal → New Terminal
```

<br/><br/>

### Paso 2. Crear archivo HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>POC VSCode</title>
</head>
<body>
  <h1>Hola VS Code</h1>
</body>
</html>
```

<br/><br/>

### Paso 3. Usar snippets

Escribir:

```text
html:5
```

y presionar:

```text
TAB
```

<br/><br/>

### Paso 4. Validar IntelliSense

Escribir:

```javascript
document.
```

Debe mostrar sugerencias.

<br/><br/>


### Paso 5. Formatear documento

Presionar:

```text
Shift + Alt + F
```

<br/><br/>

## Qué se valida

| Validación   | Resultado               |
| ------------ | ----------------------- |
| IntelliSense | Sugerencias automáticas |
| Snippets     | Expansión HTML          |
| Terminal     | Funciona                |
| Plugins      | Activos                 |


<br/><br/>

## Problemas comunes

| Problema              | Solución                     |
| --------------------- | ---------------------------- |
| Snippets no funcionan | Revisar extensión            |
| Prettier no formatea  | Configurar default formatter |
| Terminal no abre      | Reiniciar VS Code            |


<br/><br/>

## Referencias oficiales

* [VS Code Docs](https://code.visualstudio.com/docs)
* [Marketplace VS Code](https://marketplace.visualstudio.com/vscode)


<br/><br/>

# 3. Git — POC Control de Versiones

## Objetivos

Validar:

* Instalación de Git
* Configuración inicial
* Clonado de repositorios
* Estado del repositorio

<br/><br/>

## Tabla de ayuda

| Herramienta                                        | Breve descripción                |  
| -------------------------------------------------- | -------------------------------- |  
| [Git](https://git-scm.com/) | Control de versiones distribuido |  


<br/><br/>

## Instrucciones

### Paso 1. Revisar instalación

```bash
git --version
```

<br/><br/>


### Paso 2. Configurar usuario

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "Tu Correo"
```

<br/><br/>


### Paso 3. Validar configuración

```bash
git config --list
```

<br/><br/>

### Paso 4. Clonar repositorio

```bash
git clone https://github.com/Netec-Mx/POO-JScript-HTML-CSS3.git
```

<br/><br/>


### Paso 5. Entrar al proyecto

```bash
cd angular-tour-of-heroes
```

<br/><br/>

### Paso 6. Ejecutar comandos básicos

```bash
git status
git log
git branch
```

<br/><br/>

## Qué se valida

| Validación          | Resultado              |
| ------------------- | ---------------------- |
| Git instalado       | Versión visible        |
| Usuario configurado | Configuración correcta |
| Clone               | Descarga exitosa       |


<br/><br/>


## Problemas comunes

| Problema          | Solución           |
| ----------------- | ------------------ |
| git no reconocido | Reiniciar terminal |
| Permisos HTTPS    | Revisar firewall   |
| Error SSL         | Actualizar Git     |


<br/><br/>

## Referencias oficiales

* [Git Documentation](https://git-scm.com/doc)
* [GitHub Docs](https://docs.github.com/)

<br/><br/>

# 4. Node.js — POC Runtime JavaScript

## Objetivos

Validar:

* Instalación de Node.js
* Instalación de npm
* Ejecución JS
* Instalación de paquetes
* Servidor HTTP básico

<br/><br/>


## Tabla de ayuda

| Herramienta                                           | Breve descripción  |  
| ----------------------------------------------------- | ------------------ |  
| [Node.js](https://nodejs.org/) | Runtime JavaScript |  
| [npm](https://www.npmjs.com/)  | Gestor de paquetes |  


<br/><br/>

## Instrucciones

### Paso 1. Revisar instalación

```bash
node -v
npm -v
```

<br/><br/>

### Paso 2. Inicializar proyecto

```bash
npm init -y

# Verifica el contenido creado
dir

```

<br/><br/>


### Paso 3. Demo printcow

```bash
npm install cowsay
```

<br/>

Ejecutar:

```bash
npx cowsay "Hola Frontend"
```

<br/>
**npm**: Node Package Manager, administrador oficial de paquetes en Node.js y se instala automáticamente junto con Node.js

Sirve para:
* Instalar librerías y frameworks de JavaScript
* Admiistrar dependencias de proyectos
* Ejecutar scripts
* Publicas paquetes

<br/>

**npx**: Herramienta incluida con npm que permite ejecutar paquetes de Node.js sin integrarlos globalmente



<br/><br/>


### Paso 4. Crear hola.js

```javascript
console.log("Hola Node.js");
```

<br/>

Ejecutar:

```bash
node hola.js
```

<br/><br/>


### Paso 5. Crear servidor.js

```javascript
const http = require('http');

const server = http.createServer((req,res)=>{
  res.write("Servidor Node OK");
  res.end();
});

server.listen(3000);

console.log("Servidor en puerto 3000");
```

<br/><br/>

### Paso 6. Ejecutar servidor

```bash
node servidor.js
```

Abrir:

```text
http://localhost:3000
```

<br/><br/>

## Explicación rápida

| Concepto  | Descripción                  |
| --------- | ---------------------------- |
| localhost | Tu propia computadora        |
| puerto    | Canal lógico de comunicación |
| request   | Solicitud cliente            |
| response  | Respuesta servidor           |


<br/><br/>

## Qué se valida

| Validación | Resultado          |
| ---------- | ------------------ |
| Node       | Funciona           |
| npm        | Instala paquetes   |
| JS         | Ejecuta scripts    |
| HTTP       | Responde navegador |


<br/><br/>


## Problemas comunes

| Problema           | Solución           |
| ------------------ | ------------------ |
| Puerto ocupado     | Cambiar puerto     |
| node no reconocido | Reiniciar terminal |
| npm lento          | Revisar proxy      |


<br/><br/>

## Referencias oficiales

* [Node.js Docs](https://nodejs.org/docs/latest/api/)
* [npm Docs](https://docs.npmjs.com/)


<br/><br/>

# 5. TypeScript — POC Transpilación

## Objetivos

Validar:

* Instalación TypeScript
* Transpilación TS → JS
* Ejecución Node.js

<br/><br/>


## Tabla de ayuda

| Herramienta                                                          | Breve descripción             |  
| -------------------------------------------------------------------- | ----------------------------- |  
| [TypeScript](https://www.typescriptlang.org/) | Superset tipado de JavaScript |  

<br/><br/>


### ¿Qué es transpilar?

Transformar código TypeScript en JavaScript compatible con navegadores o Node.js.

<br/><br/>


## Instrucciones

### Paso 1. Instalar TypeScript

Si no has instalado TypeScript, realiza lo siguiente:

```bash
npm install -g typescript
```

<br/><br/>


### Paso 2. Revisar instalación

```bash
tsc --version
```

<br/><br/>


### Paso 3. Crear saludo.ts

```typescript
function saludar(nombre:string):string{
  return "Hola " + nombre;
}

console.log(saludar("TypeScript"));
```

<br/>


### Paso 4. Compilar

```bash
tsc saludo.ts
```

<br/>


### Paso 5. Ejecutar

```bash
node saludo.js
```

<br/>


## tsconfig básico

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "strict": true
  }
}
```

<br/><br/>


## Qué se valida

| Validación | Resultado  |
| ---------- | ---------- |
| tsc        | Compila    |
| TS → JS    | Genera JS  |
| Node       | Ejecuta JS |


<br/><br/>


## Problemas comunes

| Problema          | Solución           |
| ----------------- | ------------------ |
| tsc no reconocido | Reiniciar terminal |
| Error tipos       | Revisar tipado     |
| No genera JS      | Revisar permisos   |


<br/><br/>

## Referencias oficiales

* [TypeScript Docs](https://www.typescriptlang.org/docs/)


<br/><br/>


# 6. Angular — POC Framework Frontend

## Objetivos

Validar:

* Angular CLI
* Creación proyecto
* ng serve
* Hot Reload

<br/><br/>


## Tabla de ayuda

| Herramienta                                                         | Breve descripción             |  
| ------------------------------------------------------------------- | ----------------------------- |  
| [Angular](https://angular.dev/)              | Framework frontend            |  
| [Angular CLI](https://angular.dev/tools/cli) | Herramienta línea de comandos |  

<br/><br/>

## Instrucciones

### Paso 1. Instalar Angular CLI

```bash
npm install -g @angular/cli
```

<br/><br/>

### Paso 2. Revisar versión

```bash
ng version
```

<br/><br/>

### Paso 3. Crear proyecto

```bash
ng new demo-angular
```

Seleccionar:

```text
CSS
```

<br/><br/>

### Paso 4. Entrar al proyecto

```bash
cd demo-angular
```

<br/><br/>

### Paso 5. Levantar servidor

```bash
ng serve
```

Abrir:

```text
http://localhost:4200
```

<br/><br/>

### Paso 6. Modificar app.component.html

```html
<h1>Angular funcionando correctamente</h1>
```

Guardar y observar recarga automática.

<br/><br/>

## Explicación básica estructura

| Carpeta/Archivo | Uso                   |
| --------------- | --------------------- |
| src/            | Código fuente         |
| app/            | Componentes           |
| angular.json    | Configuración Angular |
| package.json    | Dependencias npm      |

<br/><br/>

## Comandos útiles

```bash
ng help
```

<br/>

```bash
ng generate component ejemplo
```

<br/><br/>

## Qué se valida

| Validación  | Resultado          |
| ----------- | ------------------ |
| Angular CLI | Funciona           |
| ng serve    | Servidor activo    |
| Hot Reload  | Recarga automática |
| npm         | Dependencias       |


<br/><br/>

## Problemas comunes

| Problema                   | Solución                       |
| -------------------------- | ------------------------------ |
| PowerShell bloquea scripts | Ejecutar PowerShell como admin |
| Puerto 4200 ocupado        | ng serve --port 4300           |
| npm install falla          | Limpiar cache npm              |


<br/><br/>


## Referencias oficiales

* [Angular Docs](https://angular.dev/overview)
* [Angular CLI Docs](https://angular.dev/tools/cli)
* [Angular Tutorial](https://angular.dev/tutorials)

<br/><br/>


---



