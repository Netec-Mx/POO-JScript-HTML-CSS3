# Demo / POC — Objetos y Funciones en JavaScript

## Objetivos

* Comprender cómo funcionan objetos y funciones en JavaScript.
* Manipular propiedades de objetos.
* Entender el uso de `this`.
* Utilizar `apply()`, `bind()` y funciones de `Object`.

<br/><br/>

# Tabla de Ayuda

| Función           | Descripción                                     |
| ----------------- | ----------------------------------------------- |
| `apply()`         | Ejecuta una función usando un `this` específico |
| `bind()`          | Crea una nueva función con `this` fijo          |
| `Object.create()` | Crea objetos usando un prototipo                |
| `Object.keys()`   | Obtiene nombres de propiedades                  |
| `Object.values()` | Obtiene valores de propiedades                  |

<br/><br/>

# Antes de empezar — ¿Qué es `this`?

`this` representa el objeto actual que ejecuta una función.

<br/><br/>

# Ejemplo 

```javascript id="n7u2m4"
let persona = {
  nombre: "Ana",

  saludar: function() {
    console.log(this.nombre);
  }
};

persona.saludar();
```

<br/><br/>


## 1. `apply()`

Permite ejecutar una función usando otro objeto como `this`.

<br/>

# Ejemplo

```javascript 
function saludar(ciudad, pais) {
  console.log(
    "Hola soy " +
    this.nombre +
    " de " +
    ciudad +
    ", " +
    pais
  );

  // Cambia la concatenación por un Literal String
}

let persona = {
  nombre: "Carlos"
};

saludar.apply(persona, ["CDMX", "México"]);
```


<br/><br/>

# Explicación detallada

```javascript id="u4m9x6"
apply(objeto, [argumentos])
```

* Primer parámetro → valor de `this`
* Segundo parámetro → arreglo de argumentos

<br/><br/>

## 2. `bind()`

Crea una nueva función con `this` permanentemente asociado.

<br/><br/>

# Ejemplo

```javascript 
let persona = {
  nombre: "Laura"
};

function mostrarNombre() {
  console.log(this.nombre);
}

let nuevaFuncion = mostrarNombre.bind(persona);

nuevaFuncion();
```

<br/>


```javascript 
bind()
```

NO ejecuta inmediatamente.

Crea otra función lista para ejecutarse después.

<br/><br/>

# Diferencia rápida

| Función   | Ejecuta inmediatamente |
| --------- | ---------------------- |
| `apply()` | Sí                     |
| `bind()`  | No                     |

<br/><br/>

## 3. `Object.create()`

Crea un objeto usando otro objeto como prototipo.

<br/><br/>

# Ejemplo

```javascript  
let animal = {
  tipo: "Perro"
};

let mascota = Object.create(animal);

console.log(mascota.tipo);
```

<br/><br/>
  
## Explicación visual

```text id="h7u3m5"
animal
   ↑
mascota
```

`mascota` hereda propiedades de `animal`.

<br/><br/>

# Agregar propiedades propias

```javascript  
let animal = {
  tipo: "Perro"
};

let mascota = Object.create(animal);

mascota.nombre = "Firulais";

console.log(mascota.nombre);
console.log(mascota.tipo);
```


<br/><br/>

## 4. `Object.keys()`

Obtiene nombres de propiedades.

<br/><br/>

# Ejemplo

```javascript id="v1u7m3"
let usuario = {
  nombre: "Gabriela",
  edad: 25,
  pais: "México"
};

console.log(Object.keys(usuario));
```

<br/><br/>

# 5. `Object.values()`

Obtiene valores de las propiedades.

<br/>

# Ejemplo

```javascript id="k6u2m9"
let usuario = {
  nombre: "Gabriela",
  edad: 25,
  pais: "México"
};

console.log(Object.values(usuario));
```

<br/><br/>

## Ejemplo completo 

```javascript 
console.log("APPLY");

function saludar(ciudad) {
  console.log("Hola soy " + this.nombre + " de " + ciudad);
}

let persona = {
  nombre: "Carlos"
};

saludar.apply(persona, ["CDMX"]);

console.log("----------------");

console.log("BIND");

function mostrar() {
  console.log(this.nombre);
}

let usuario = {
  nombre: "Laura"
};

let funcionNueva = mostrar.bind(usuario);

funcionNueva();

console.log("----------------");

console.log("OBJECT.CREATE");

let animal = {
  tipo: "Perro"
};

let mascota = Object.create(animal);

mascota.nombre = "Firulais";

console.log(mascota.nombre);
console.log(mascota.tipo);

console.log("----------------");

console.log("OBJECT.KEYS");

console.log(Object.keys(usuario));

console.log("----------------");

console.log("OBJECT.VALUES");

console.log(Object.values(usuario));
```

<br/><br/>
