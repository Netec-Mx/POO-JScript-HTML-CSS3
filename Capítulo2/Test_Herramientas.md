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

| Herramienta                                                                                 | Breve descripción                          | Sitio oficial     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------ | ----------------- |
| [Google Chrome](https://www.google.com/chrome/?utm_source=chatgpt.com)                      | Navegador moderno para desarrollo frontend | Chrome oficial    |
| [Microsoft Edge](https://www.microsoft.com/edge?utm_source=chatgpt.com)                     | Navegador basado en Chromium               | Edge oficial      |
| [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/?utm_source=chatgpt.com) | Auditoría de performance y accesibilidad   | Google Developers |
| [React DevTools](https://react.dev/learn/react-developer-tools?utm_source=chatgpt.com)      | Inspección de apps React                   | React oficial     |
| [Angular DevTools](https://angular.dev/tools/devtools?utm_source=chatgpt.com)               | Inspección de apps Angular                 | Angular oficial   |


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


<br/><br/>

### Problemas comunes y solución

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

| Herramienta                                                                 | Breve descripción              | Sitio oficial   |
| --------------------------------------------------------------------------- | ------------------------------ | --------------- |
| [Visual Studio Code](https://code.visualstudio.com/?utm_source=chatgpt.com) | Editor moderno multiplataforma | VS Code oficial |
| [Prettier](https://prettier.io/?utm_source=chatgpt.com)                     | Formateador de código          | Prettier        |
| [ESLint](https://eslint.org/?utm_source=chatgpt.com)                        | Análisis de calidad JS/TS      | ESLint          |

<br/><br/>

## Plugins recomendados

| Plugin                   | Uso          |
| ------------------------ | ------------ |
| HTML Snippets            | Atajos HTML  |
| JavaScript ES6 Snippets  | Snippets JS  |
| Prettier                 | Formateo     |
| ESLint                   | Calidad      |
| Angular Language Service | Angular      |
| GitLens                  | Git avanzado |

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

* [VS Code Docs](https://code.visualstudio.com/docs?utm_source=chatgpt.com)
* [Marketplace VS Code](https://marketplace.visualstudio.com/vscode?utm_source=chatgpt.com)


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

| Herramienta                                        | Breve descripción                | Sitio oficial |
| -------------------------------------------------- | -------------------------------- | ------------- |
| [Git](https://git-scm.com/?utm_source=chatgpt.com) | Control de versiones distribuido | Git oficial   |


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
git clone https://github.com/angular/angular-tour-of-heroes.git
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

* [Git Documentation](https://git-scm.com/doc?utm_source=chatgpt.com)
* [GitHub Docs](https://docs.github.com/?utm_source=chatgpt.com)

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

| Herramienta                                           | Breve descripción  | Sitio oficial   |
| ----------------------------------------------------- | ------------------ | --------------- |
| [Node.js](https://nodejs.org/?utm_source=chatgpt.com) | Runtime JavaScript | Node.js oficial |
| [npm](https://www.npmjs.com/?utm_source=chatgpt.com)  | Gestor de paquetes | npm oficial     |


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

* [Node.js Docs](https://nodejs.org/docs/latest/api/?utm_source=chatgpt.com)
* [npm Docs](https://docs.npmjs.com/?utm_source=chatgpt.com)


<br/><br/>

# 5. TypeScript — POC Transpilación

## Objetivos

Validar:

* Instalación TypeScript
* Transpilación TS → JS
* Ejecución Node.js

<br/><br/>


## Tabla de ayuda

| Herramienta                                                          | Breve descripción             | Sitio oficial      |
| -------------------------------------------------------------------- | ----------------------------- | ------------------ |
| [TypeScript](https://www.typescriptlang.org/?utm_source=chatgpt.com) | Superset tipado de JavaScript | TypeScript oficial |

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

* [TypeScript Docs](https://www.typescriptlang.org/docs/?utm_source=chatgpt.com)


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

| Herramienta                                                         | Breve descripción             | Sitio oficial   |
| ------------------------------------------------------------------- | ----------------------------- | --------------- |
| [Angular](https://angular.dev/?utm_source=chatgpt.com)              | Framework frontend            | Angular oficial |
| [Angular CLI](https://angular.dev/tools/cli?utm_source=chatgpt.com) | Herramienta línea de comandos | Angular CLI     |

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

* [Angular Docs](https://angular.dev/overview?utm_source=chatgpt.com)
* [Angular CLI Docs](https://angular.dev/tools/cli?utm_source=chatgpt.com)
* [Angular Tutorial](https://angular.dev/tutorials?utm_source=chatgpt.com)

<br/><br/>

## 

