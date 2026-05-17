# Demo / POC — Funciones Matemáticas en JavaScript

<br/>

## Objetivos

* Utilizar funciones matemáticas integradas de JavaScript.
* Realizar cálculos comunes.
* Comprender redondeo, potencias y números aleatorios.
* Ejecutar ejemplos rápidos en Node.js o consola del navegador.

<br/>

# Tabla de Ayuda

| Función         | Descripción                         |
| --------------- | ----------------------------------- |
| `Math.pow()`    | Eleva un número a una potencia      |
| `Math.sqrt()`   | Calcula raíz cuadrada               |
| `Math.abs()`    | Obtiene valor absoluto              |
| `Math.floor()`  | Redondea hacia abajo                |
| `Math.ceil()`   | Redondea hacia arriba               |
| `Math.random()` | Genera número aleatorio entre 0 y 1 |


<br/>

## 1. `Math.pow()`

Eleva un número a una potencia.

<br/>

### Ejemplo

```javascript 
let resultado = Math.pow(5, 3);
console.log(resultado);
```

<br/><br/>



## 2. `Math.sqrt()`

Calcula la raíz cuadrada de un número.

<br/>

### Ejemplo

```javascript id="pk5z8d"
let raiz = Math.sqrt(64);

console.log(raiz);
```

<br/>
<br/>

## 3. `Math.abs()`

Obtiene el valor absoluto.
Convierte números negativos en positivos.

<br/>

## Ejemplo

```javascript id="d2v5m7"
console.log(Math.abs(-50));
console.log(Math.abs(20));
```

<br/><br/>

## 4. `Math.floor()`

Redondea hacia abajo. Es el entero más próximo por la derecha.

<br/>

### Ejemplo

```javascript  
console.log(Math.floor(9.9));
console.log(Math.floor(4.2));
```

<br/><br/>

# 5. `Math.ceil()`

Redondea hacia arriba. O el entero más próximo por la derecha

<br/>

## Ejemplo

```javascript 
console.log(Math.ceil(9.1));
console.log(Math.ceil(4.2));
```

<br/><br/>

## 6. `Math.random()`

Genera números aleatorios entre [0,1)

Cada ejecución genera un número diferente.

Nunca llega exactamente a `1`.


```javascript 
console.log(Math.random());

Math.random();   // Ejecutala varias veces

Math.floor(Math.random() * 10);

```

<br/><br/>

# Número aleatorio entre 1 y 10

## Ejemplo

```javascript id="w6r8c0"
let numero = Math.floor(Math.random() * 10) + 1;

console.log(numero);
```

<br/><br/>

## Ejemplo completo para copiar

```javascript 
console.log("Potencia:");
console.log(Math.pow(3, 2));

console.log("----------------");

console.log("Raíz cuadrada:");
console.log(Math.sqrt(81));

console.log("----------------");

console.log("Valor absoluto:");
console.log(Math.abs(-120));

console.log("----------------");

console.log("Floor:");
console.log(Math.floor(8.9));

console.log("----------------");

console.log("Ceil:");
console.log(Math.ceil(8.1));

console.log("----------------");

console.log("Random:");
console.log(Math.random());

console.log("----------------");

console.log("Random 1-10:");
console.log(Math.floor(Math.random() * 10) + 1);
```

<br/><br/>

# Qué reforzamos

* Potencias y raíces
* Redondeo numérico
* Manejo de números negativos
* Generación de números aleatorios
* Uso del objeto global `Math` en JavaScript
