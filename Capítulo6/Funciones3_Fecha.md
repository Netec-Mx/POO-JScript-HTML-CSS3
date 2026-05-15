# Demo / POC — Funciones de Fecha y Hora en JavaScript

<br/>

## Objetivos

* Comprender cómo manejar fechas en JavaScript.
* Crear objetos de fecha.
* Obtener año, mes y día.
* Trabajar con timestamps.

<br/><br/>

# Tabla de Ayuda

| Función         | Descripción                             |
| --------------- | --------------------------------------- |
| `Date.now()`    | Obtiene la fecha actual en milisegundos |
| `new Date()`    | Crea un objeto fecha                    |
| `getFullYear()` | Obtiene el año                          |
| `getMonth()`    | Obtiene el mes                          |
| `getDate()`     | Obtiene el día del mes                  |


<br/><br/>

## `Date.now()`

Devuelve la fecha y hora actual en milisegundos desde:

```text 
1 de enero de 1970 a las 00:00:00
```

Esto se conoce como:

```text 
Unix Timestamp
```

<br/><br/>

## Ejemplo

```javascript  
let timestamp = Date.now();
console.log(timestamp);

// Espera algunos segundos

timestamp = Date.now();
console.log(timestamp);

```

## 2. `new Date()`

Crea un objeto fecha, con la fecha actual.


```javascript id="q7y1u4"
let fecha = new Date();

console.log(fecha);
```

<br/><br/>

## Crear fecha específica
Formato YYYY-MM-DD

### Ejemplo

```javascript  
let navidad = new Date("2026-12-25");  
console.log(navidad);
```

<br/><br/>


## 3. `getFullYear()`

Obtiene el año de una fecha.

<br/>

## Ejemplo

```javascript id="n5h2d8"
let fecha = new Date();

console.log(fecha.getFullYear());


<br/><br/>


## 4. `getMonth()`

Obtiene el mes.

Los meses empiezan desde:

```text 
0 = Enero
1 = Febrero
2 = Marzo
...
11 = Diciembre
```

<br/>

## Ejemplo

```javascript  
let fecha = new Date();
console.log(fecha.getMonth());
```

<br/>

## Obtener mes real

### Ejemplo

```javascript 
let fecha = new Date();
console.log(fecha.getMonth() + 1);
```

<br/><br/>

## 5. `getDate()`

Obtiene el día del mes. Siii, y getDay() devuelve el día de la semana 0 Domingo, 1 Lunes...

<br/>

## Ejemplo

```javascript  
let fecha = new Date();

console.log(fecha.getDate());
console.log(fecha.getDay())
```


<br/><br/>

# Ejemplo completo para copiar

```javascript id="b5y9m2"
console.log("Timestamp actual:");
console.log(Date.now());

console.log("----------------");

let fechaActual = new Date();

console.log("Fecha completa:");
console.log(fechaActual);

console.log("----------------");

console.log("Año:");
console.log(fechaActual.getFullYear());

console.log("----------------");

console.log("Mes:");
console.log(fechaActual.getMonth() + 1);

console.log("----------------");

console.log("Día:");
console.log(fechaActual.getDate());

console.log("----------------");

let fechaPersonalizada = new Date("2026-12-25");

console.log("Fecha personalizada:");
console.log(fechaPersonalizada);
```


## Qué reforzamos

* Uso del objeto `Date`
* Manejo de fechas actuales
* Creación de fechas personalizadas
* Obtención de año, mes y día
* Uso de timestamps en JavaScript
