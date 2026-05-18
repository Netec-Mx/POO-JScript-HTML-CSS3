# Demo / POC — Mi Primer Demo en Angular 21

<br/><br/>

## Objetivo

Crear una primera aplicación en Angular moderna utilizando:

* Angular 21
* Standalone Components
* Angular CLI
* Property Binding
* Event Binding
* Interpolación
* Signals
* Templates
* Estilos CSS

La aplicación será un **contador interactivo**.

<br/><br/>


# ¿Qué es Angular?

Angular es un framework frontend desarrollado por Google para construir aplicaciones web modernas, dinámicas y escalables.

Angular permite crear:

* aplicaciones SPA (Single Page Applications)
* dashboards
* sistemas empresariales
* aplicaciones web complejas
* aplicaciones híbridas y móviles

Angular utiliza principalmente:

* HTML
* CSS
* TypeScript

<br/><br/>


## Ventajas de Angular

### Arquitectura robusta

Angular ofrece una estructura clara para aplicaciones grandes.

<br/>

### Componentes reutilizables

La UI se construye mediante componentes independientes.

<br/>

### TypeScript

Angular trabaja oficialmente con TypeScript, lo cual mejora:

* mantenimiento
* detección de errores
* escalabilidad

<br/>

### CLI poderosa

Angular CLI automatiza:

* creación de proyectos
* generación de componentes
* compilación
* testing
* despliegue

<br/>

### Ecosistema empresarial

Angular es ampliamente usado en:

* banca
* telecomunicaciones
* dashboards corporativos
* sistemas ERP

<br/>

## Desventajas de Angular

### Curva de aprendizaje

Angular tiene más conceptos que otras librerías frontend.

<br/>

### Más “opinioned”

En español normalmente se explica como:

* Framework con reglas definidas
* Framework con estructura preestablecida
* Framework que impone convenciones
* Framework con arquitectura guiada

En Angular significa que:

* Angular “te dice” cómo organizar el proyecto
* Define patrones recomendados
* Tiene una forma oficial de trabajar

Por ejemplo:

* Estructura de carpetas
* Uso de componentes
* Servicios
* Routing
* DI (Dependency Injection), concepto **importante**, la idea principal es que un componente **No** crea directamente los objetos que necesita, en su lugar, los marcos de trabajo los **inyecta**.

Mientras que React es mucho más flexible y deja más decisiones al desarrollador.

<br/>

### Tamaño inicial

Puede generar aplicaciones más grandes comparado con otras opciones ligeras.

<br/>

## Competencia de Angular

| Tecnología | Tipo       |
| ---------- | ---------- |
| React      | Librería   |
| Vue.js     | Framework  |
| Svelte     | Compilador |
| Lit        | Librería   |
| Next.js    | Framework  |

<br/>

* [Google Trends](https://trends.google.com/trends)

<br/>

> Con Angular o React:
> El navegador ejecuta parte importante del framework.
> Con Svelte:
> Mucho trabajo ya fue convertido a JavaScript optimizado durante compilación.


<br/><br/>

## Grandes Cambios Modernos en Angular

Angular moderno ha cambiado muchísimo respecto a versiones anteriores.

### Antes

* NgModules obligatorios
* Sintaxis más compleja
* Mucho RxJS obligatorio (Reactive Extensions for JavaScript)
    * RxJS es una librería para trabajar con: eventos, datos asíncronos, streams de información, programación reactiva.
* Mayor configuración

<br/>

## Ahora (Angular 21)

Angular moderno incorpora:

* Standalone Components
* Signals, nueva forma de gestionar el estado, la reactividad, actualización automática de UI.
* Control Flow moderno (`@if`, `@for`)
* Mejor rendimiento
* Menos boilerplate
* Arquitectura más simple

<br/><br/>

## Versión utilizada en este curso (Mayo, 2026)

Trabajaremos con:

### Angular 21

Usando:

* standalone components
* signals
* Angular CLI moderno

<br/><br/>

## Arquitectura básica de Angular

Los elementos más importantes de Angular son:

<br/><br/>

### 1. Componentes

Los componentes representan partes visuales de la aplicación.

Ejemplos:

* header
* menú
* tarjeta
* formulario
* tabla
* Lista
* Una página, es un componente que tiene otros componentes.


<br/><br/>

### 2. Directivas

Las directivas modifican el comportamiento del HTML.

Ejemplos modernos:

```html
@if
@for
```

<br/><br/>

### 3. Servicios

Los servicios contienen:

* lógica de negocio
* acceso a APIs
* estado compartido
* usualmente no tienen interacción directa con el usuario, esto es, no usan HTML ni CSS.

<br/><br/>

### 4. Pipes

Los pipes transforman información visualmente.

Ejemplos:

```html
{{ fecha | date }}
{{ nombre | uppercase }}
```

<br/><br/>

## Instalación previa

### Requisitos

* Node.js
* npm
* Visual Studio Code o cualquier editor

<br/>

## Crear el Proyecto

### Crear proyecto Angular

```bash
ng new mi-primer-angular
```

<br/><br/>

### Entrar al proyecto

```bash
cd mi-primer-angular
```

<br/>

### Ejecutar aplicación

```bash
ng serve
```

<br/><br/>

## Angular CLI — Tabla de Ayuda

| Comando                 | ¿Para qué sirve?    | Ejemplo                    |
| ----------------------- | ------------------- | -------------------------- |
| `ng new`                | Crear proyecto      | `ng new demo-angular`      |
| `ng serve`              | Ejecutar aplicación | `ng serve`                 |
| `ng generate component` | Crear componente    | `ng g c contador`          |
| `ng build`              | Compilar proyecto   | `ng build`                 |
| `ng test`               | Ejecutar pruebas    | `ng test`                  |
| `ng version`            | Ver versión Angular | `ng version`               |
| `ng add`                | Agregar librerías   | `ng add @angular/material` |


<br/>

![Angular CLI Reference](https://angular.dev/cli)

<br/><br/>

# Primera Demo — Contador

## Objetivo

Construir un contador interactivo usando:

* interpolación
* eventos
* métodos
* property binding
* reactividad


<br/><br/>


## Código TypeScript

Archivo:

```text
contador.ts
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {

  contador = 0;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  reiniciar() {
    this.contador = 0;
  }

 }
```

<br/><br/>

# Código HTML

```html
<h2>Contador</h2>

<p>Valor actual: {{ contador }}</p>

<section class="container">
    <button (click)="decrementar()">Decrementar</button>
    <button (click)="reiniciar()">Reiniciar</button>
    <button (click)="incrementar()">Incrementar</button>
</section>
```

<br/><br/>

# Código CSS

Basado en el ejemplo proporcionado por el usuario. 

```css
p {
    border: 3px solid #5e0ae4;
    border-radius: 15px;
    padding: 20px;
    background-color: rgb(80, 212, 8);
    color: darkblue;
    text-align: center;
    font-size: 30px;
}

.container {
  display: flex;
  flex-direction: row;
  background-color: DodgerBlue;
  justify-content: center;
  align-items: center;
}

.container button {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  font-size: 14px;
}
```

<br/><br/>

## Conceptos Angular utilizados

| Concepto        | Uso                          |
| --------------- | ---------------------------- |
| Interpolación   | `{{ contador }}`             |
| Event Binding   | `(click)`                    |
| Métodos         | incrementar(), decrementar() |
| Componentes     | `@Component`                 |
| Templates       | HTML separado                |
| CSS encapsulado | estilos del componente       |


<br/><br/>

## Angular reacciona automáticamente

Observarás que:

* Cambia una variable
* Angular detecta el cambio
* La pantalla se actualiza sola

Sin:

* Manipular manualmente el DOM
* Usar `document.getElementById`
* Refrescar la página

<br/><br/>

## Posibles errores comunes

| Error                | Causa                        |
| -------------------- | ---------------------------- |
| No compila           | olvidar `standalone: true`   |
| No aparecen estilos  | nombre incorrecto `styleUrl` |
| Eventos no funcionan | olvidar `(click)`            |
| No actualiza valor   | modificar mal `contador`     |
| Error Angular CLI    | Node.js incorrecto           |

<br/><br/>

## Reto

1. Agrega un botón que aumente de 5 en 5.
2. Agrega un botón que disminuya de 5 en 5.
3. Muestra un mensaje si el contador llega a 10.
4. Evita que el contador baje de 0.