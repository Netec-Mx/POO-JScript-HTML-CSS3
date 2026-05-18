
# Apéndice B - Angular Prácticas

<br/><br/>

# FASE 1 — Mi Primera Pantalla Angular

## Objetivo 

Descubrir cómo Angular renderiza información dinámica en pantalla usando componentes modernos.

<br/>

## Conceptos 

### Angular CLI

Angular CLI es la herramienta oficial para crear y administrar proyectos Angular.

Permite:

* crear proyectos
* generar componentes
* ejecutar servidor local
* compilar la aplicación
* automatizar configuraciones, etc.

<br/><br/>

Ejemplos comunes:

```bash
ng new
ng serve
ng generate component
```

<br/><br/>

### Componente Standalone

Un componente standalone es un componente independiente que no necesita `NgModule`.

Angular moderno promueve este enfoque porque:

* simplifica la arquitectura
* reduce configuración
* facilita aprendizaje
* mejora mantenibilidad

> Todo en Angular gira alrededor de componentes.


<br/><br/>

### Template

El template es el HTML controlado por Angular.

Es aquí donde Angular conecta:

* datos
* lógica
* interfaz visual

El alumno entiende que el HTML deja de ser estático.

<br/><br/>

## Interpolación

La interpolación usa:

```html
{{ variable }}
```

Permite mostrar datos del componente directamente en HTML.

Ejemplo conceptual:

```html
{{ titulo }}
```

Angular reemplaza automáticamente el contenido.

> La UI puede mostrar datos dinámicos.

<br/><br/>

## Property Binding

Permite conectar propiedades HTML con datos Angular.

Ejemplo típico:

```html
[src]="imagen"
```

Angular actualiza automáticamente atributos HTML usando datos del componente.

Debemos entender la diferencia entre:

```html
src=""
```

y

```html
[src]=""
```

<br/><br/>


### CSS Básico

Introducción ligera a estilos locales del componente.

Conceptos:

* separación visual
* encapsulamiento de estilos
* diseño inicial

<br/><br/>

### Resultado "mental"

Pasamos de:

```text 
HTML estático
```

a:

```text 
HTML controlado por Angular
```

<br/><br/>

# FASE 2 — Interactividad y Estado

## Objetivo 

Mostrar que Angular puede reaccionar automáticamente a eventos y cambios.

<br/><br/>


## Conceptos 

### Eventos

Angular escucha eventos HTML usando:

```html
(click)
```

<br/>

Ejemplo conceptual:

```html
(click)="incrementar()"
```

<br/>

Cuando el usuario interactúa:

* Angular ejecuta lógica
* la UI puede cambiar automáticamente


> La interfaz ya puede responder al usuario.


<br/><br/>

### Métodos en Componentes

Los componentes contienen lógica TypeScript.

Ejemplo:

```ts
incrementar() {
}
```

Empezamos a separar:

* interfaz
* lógica

<br/><br/>

### Estado

El estado es la información actual de la aplicación.

Ejemplos:

* contador actual
* película seleccionada
* favoritos
* filtros activos

Angular renderiza la UI basándose en el estado.

<br/><br/>


### Reactividad

La reactividad significa:

> cuando los datos cambian, la interfaz se actualiza automáticamente.

Esto es el núcleo moderno de Angular.

<br/><br/>


### Signals

Signals son el nuevo sistema reactivo moderno de Angular. En Angular 16 aparecieron como: `Developer Preview`.

Un signal:

* almacena estado
* detecta cambios
* notifica automáticamente a Angular

<br/>

Ejemplo:

```ts
contador = signal(0)
```

Angular observa automáticamente ese valor.

<br/>
<br/>

## Actualización Automática

Antes, en JavaScript tradicional:

* había que manipular DOM manualmente

Ahora Angular:

* detecta cambios
* actualiza pantalla automáticamente

<br/>
<br/>

## Resultado "mental"

Antes:

```text
Pantallas estáticas
```

Ahora:

```text
Interfaces reactivas
```

<br/>
<br/>


## FASE 3 — Renderizado Dinámico

## Objetivo 

Aprender a renderizar múltiples elementos usando datos.

<br/>
<br/>


## Conceptos nuevos

### Arrays

Ahora la aplicación trabaja con colecciones:

```ts
peliculas = []
```

Angular puede renderizar múltiples elementos automáticamente.

<br/>
<br/>


### Interfaces TypeScript

Las interfaces definen la forma de los datos.

Ejemplo conceptual:

```ts
interface Pelicula {
    // datos
}
```

<br/>

Beneficios:

* tipado
* autocompletado
* seguridad
* claridad

<br/>
<br/>

### Rendering Dinámico

Angular genera UI basándose en datos.

La interfaz deja de escribirse manualmente elemento por elemento.

<br/>
<br/>


### @for

Nueva sintaxis moderna de Angular para iterar listas.

Angular repite automáticamente un bloque HTML por cada elemento.

Conceptualmente:

```html
@for (...)
```

Beneficios:

* más limpio
* más rápido
* más moderno

<br/>
<br/>


### Track Expressions

Permiten a Angular identificar elementos únicos.

Beneficio:

* optimización de renderizado
* menos trabajo del DOM

<br/>
<br/>


### Separación Datos/UI

La información vive en TypeScript.

La visualización vive en HTML.

Esto introduce arquitectura frontend real.

<br/>
<br/>

### Resultado "mental"

> Angular construye interfaces desde datos.

<br/>
<br/>


# FASE 4 — Componentización

<br/>

## Objetivo 

Dividir la aplicación en piezas reutilizables.

<br/>

## Conceptos 

### Componentes Reutilizables

Cada parte visual se convierte en componente.

Ejemplos:

* Header
* MovieCard
* MovieList

<br/>

Beneficios:

* reutilización
* mantenimiento
* claridad

<br/>
<br/>

### Imports

Los componentes standalone deben importar explícitamente otros componentes.

Esto es una composición visual. 

<br/>


### @Input

Permite enviar información desde componente padre hacia hijo.

Ejemplo conceptual:

```html
[pelicula]="pelicula"
```

El hijo recibe datos externos.

<br/>


### Comunicación Padre → Hijo

Angular construye interfaces jerárquicas.

Esto introduce:

* flujo de datos
* composición
* arquitectura UI

<br/>


### Encapsulamiento

Cada componente tiene:

* HTML
* CSS
* TypeScript

independientes.

Esto reduce caos en aplicaciones grandes.

<br/>

### Resultado "mental"

* Angular se construye ensamblando componentes.


<br/>
<br/>


## FASE 5 — Estado Compartido y Favoritos

### Objetivo 

Compartir información entre múltiples componentes.

<br/>


### Conceptos

### Servicios

Los servicios contienen lógica compartida.

Se usan para:

* datos
* APIs
* estado global
* lógica reusable

Angular separa:

* UI
* lógica compartida


<br/>
<br/>


### Dependency Injection (DI)

Angular puede proporcionar automáticamente objetos a componentes.

Ejemplo conceptual:

```ts
inject(FavoritosService)
```

Beneficios:

* desacoplamiento
* reutilización
* arquitectura profesional


<br/>
<br/>


### Estado Global

Ahora múltiples componentes observan el mismo estado.

Ejemplos:

* favoritos
* usuario
* carrito

<br/>
<br/>


### Signals Compartidos

Un signal dentro de un servicio puede ser observado desde muchos componentes.

Cuando cambia:

* toda la aplicación reacciona

<br/>
<br/>


### Sincronización Reactiva

Observamos que:

* contador cambia
* favoritos cambian
* múltiples componentes se actualizan solos

<br/>
<br/>

# Resultado mental

* Toda la aplicación puede compartir estado reactivo.

<br/><br/>

## FASE 6 — Navegación SPA

## Objetivo 

Convertir la app en una aplicación multipágina moderna.

<br/>
<br/>

## Conceptos

### SPA

Single Page Application.

La aplicación:

* no recarga toda la página
* cambia vistas dinámicamente

Experiencia similar a apps móviles.

<br/>
<br/>

### Router

Angular Router controla navegación.

Decide:

* qué componente mostrar
* según la URL

<br/>
<br/>

### Rutas

Se define:

```ts
path
component
```

Angular mapea URLs a pantallas.

<br/>

### router-outlet

Zona dinámica donde Angular renderiza páginas.

Conceptualmente:

> Aparece la pantalla actual, como si navegaramos a otra página.

<br/><br/>

### routerLink

Permite navegación declarativa.

Angular cambia vistas sin recargar navegador.

<br/>
<br/>


### Organización por Páginas

La app comienza a tener estructura real:

* Home
* Movies
* Favorites

<br/>
<br/>


## Resultado "mental"

* Angular puede construir aplicaciones reales multipágina. Aplicando un patrón conocido como Composite.

<br/>
<br/>


## FASE 7 — Consumo de APIs

### Objetivo 

Consumir información real desde internet.

<br/>
<br/>


## Conceptos nuevos

### HttpClient

Servicio oficial Angular para HTTP.

Permite:

* GET
* POST
* PUT
* DELETE

<br/>
<br/>


### APIs REST

La aplicación obtiene datos desde servidores externos.

Unimos Frontend y backend para que trabajen juntos.


<br/>
<br/>


### Datos Asíncronos

Los datos no llegan instantáneamente.

Angular debe esperar respuestas.

<br/>
<br/>


### subscribe()

Permite reaccionar cuando llegan datos.

Conceptualmente:

> “Cuando llegue la respuesta, ejecuta esto.”

<br/>
<br/>


### Mapping de Datos

La API puede tener estructura distinta.

Angular transforma datos hacia:

```ts
interface Pelicula {
    ...
}
```

Esto introduce adaptación de modelos.

<br/>
<br/>


### Pipes Personalizados

Permiten transformar visualmente datos.

Ejemplos:

* truncar texto
* uppercase
* formato visual

<br/>
<br/>


### Resultado "mental"

* Angular puede consumir sistemas reales.

<br/>
<br/>


## FASE 8 — Pulido Visual y UX

### Objetivo 

Mejorar experiencia de usuario y percepción profesional.

<br/>
<br/>


### Conceptos

## UX

User Experience.

No basta con que funcione.

Debe sentirse:

* clara
* fluida
* agradable

>**Nota**:

> En una vieja certificación Java Developer, de 400 puntos del examen, 80 puntos era Usability, de todo lo que se evaluaba, este tópico era el puntaje más alto

<br/>


### Loading States

La aplicación comunica cuando:

* carga información
* espera datos

Esto mejora percepción profesional.

<br/>


### Mensajes Vacíos

Cuando no existen resultados:

* Angular comunica claramente al usuario

Ejemplo:

```text 
No se encontraron películas
```

<br/>


### Búsqueda Reactiva

La UI filtra automáticamente mientras el usuario escribe.

Introduce:

* filtros dinámicos
* reactividad avanzada

<br/>


### Filtros

Transformar listas dinámicamente.

La UI ahora responde al contenido.

<br/>



### Refinamiento Visual

Mejoras:

* spacing
* hover
* sombras
* layouts
* responsive

<br/>

### Resultado "mental"

* Angular ya puede crear experiencias modernas reales.

<br/><br/>

## Referencias Adicionales

* [Awesome-angular](https://github.com/PatrickJS/awesome-angular)

* [Angular-Realworld-example-app](https://github.com/realworld-apps/angular-realworld-example-app)

* [Stackblitz](https://stackblitz.com/edit/angular-wyagcaka)

* [Angular Material](https://material.angular.dev)

* [Angular w3school](https://www.w3schools.com/angular/)