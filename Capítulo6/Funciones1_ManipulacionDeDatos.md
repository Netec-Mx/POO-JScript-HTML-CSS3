# Demo / POC — Funciones de Manipulación de Datos en JavaScript

## Objetivos

* Comprender funciones básicas para manipular texto, números y arreglos.
* Ejecutar ejemplos rápidos en Node.js o en la consola del navegador.
* Observar cómo cambian los datos después de usar cada función.

<br/><br/>

# Tabla de Ayuda

| Función         | Descripción                             |
| --------------- | --------------------------------------- |
| `parseInt()`    | Convierte texto a número entero         |
| `parseFloat()`  | Convierte texto a número decimal        |
| `isNaN()`       | Verifica si un valor NO es numérico     |
| `toUpperCase()` | Convierte texto a mayúsculas            |
| `toLowerCase()` | Convierte texto a minúsculas            |
| `concat()`      | Une cadenas de texto                    |
| `push()`        | Agrega un elemento al final del arreglo |
| `pop()`         | Elimina el último elemento del arreglo  |
| `sort()`        | Ordena elementos de un arreglo          |

<br/><br/>

## 1. `parseInt()`

Convierte texto a número entero.

Si el texto contiene decimales, elimina la parte decimal.

## Ejemplo

```javascript
let numero = parseInt("150");

console.log(numero);
console.log(typeof numero);
```

<br/><br/>

# 2. `parseFloat()`

Convierte texto a número decimal.

## Ejemplo

```javascript
let precio = parseFloat("99.95");

console.log(precio);
console.log(typeof precio);
```

<br/><br/>

# 3. `isNaN()`

Sirve para validar si un valor NO es numérico.

```text
is Not a Number
```


## Ejemplo

```javascript
console.log(isNaN("hola"));
console.log(isNaN(123));
console.log(isNaN("500"));
console.log(isNaN(0/0));
```

<br/><br/>

# 4. `toUpperCase()`

Convierte texto a MAYÚSCULAS.

## Ejemplo

```javascript
let nombre = "juan";
console.log(nombre.toUpperCase());
```

<br/><br/>

# 5. `toLowerCase()`

Convierte texto a minúsculas.

## Ejemplo

```javascript
let mensaje = "HOLA MUNDO cruel y ContaMinado";

console.log(mensaje.toLowerCase());
```

<br/><br/>

# 6. `concat()`

Une cadenas de texto.

## Ejemplo

```javascript
let nombre = "Pedro";
let apellido = "Villarejo";

let completo = nombre.concat(" ", apellido);

console.log(completo);
console.log(`${nombre} ${apellido}`);
console.log( nombre + " " + apellido);
```

<br/><br/>

# 7. `push()`

Agrega elementos al final de un arreglo.

## Ejemplo

```javascript
let frutas = ["Manzana", "Pera", "Limón", "Fresa"];

frutas.push("Uva");
frutas.push(frutas);
console.log(frutas);

frutas.push(1);
frutas.push(2);
frutas.push(3);

console.log(frutas);
console.log(frutas.length);   

```

<br/><br/>

# 8. `pop()`

Elimina el último elemento del arreglo.

## Ejemplo

```javascript
let numeros = [10, 20, 30];

let eliminado = numeros.pop();

console.log(eliminado);
console.log(numeros);
```

<br/><br/>

# 9. `sort()`

Ordena elementos de un arreglo.

## Ejemplo con texto

```javascript
let nombres = ["Carlos", "ana", "Luis", 'Zaira'];
console.log(nombres);
nombres.sort();
console.log(nombres);
```

<br/>

## Ejemplo con números

```javascript
let numeros = [100, 5, 20, 1];

console.log(numeros);
numeros.sort();
console.log(numeros);
```

<br/>

## Ejemplo con fechas

```javascript

let fechas = [
  new Date("2026-01-10"),
  new Date("2025-12-25"),
  new Date("2026-05-01")
];

console.log(fechas);

fechas.forEach(fecha => {
  console.log(fecha.toDateString());
});

fechas.sort((a, b) => a - b);

fechas.forEach(fecha => {
  console.log(fecha.toDateString());
});

```

### Importante

`sort()` ordena texto por defecto.

Para ordenar números correctamente:

```javascript
let numeros = [100, 5, 20, 1];

numeros.sort((a, b) => a - b);

console.log(numeros);
```

<br/><br/>

## ¿Dónde ejecutar los ejemplos?

### Opción 1 — Consola del navegador

1. Abrir Chrome
2. Presionar `F12`
3. Abrir pestaña `Console`
4. Pegar el código

<br/>

### Opción 2 — Node.js

Crear archivo:

```text
demo.js
```

Ejecutar:

```bash
node demo.js
```

**Nota:** Recuerda que también puedes directamente en la consola de Node.js

<br/><br/>

## Qué reforzamos

* Conversión de texto a números
* Validación de datos
* Manipulación de cadenas
* Manipulación de arreglos
* Ordenamiento de datos
* Diferencia entre texto y números en JavaScript
