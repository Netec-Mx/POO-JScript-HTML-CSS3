# Práctica 7. Manejando Objetos con JavaScript.

## Objetivo de la práctica:
Al finalizar la práctica, serás capaz de:
- Comprender el concepto de la orientación a objetos con JavaScript.
- Familiarizarte con la herencia, uno de los pilares fundamentales de la programación orientada a objetos.
- Practicar la creación y uso de clases Base y Derivadas.
- Aplicar Polimorfismo por medio de la herencia e implementar y utilizar métodos sobrescritos.
- Familiarizarte con la creación de Instancias de Clases.


## Objetivo visual:

![[diagrama1](../images/img1.png)](https://github.com/Netec-Mx/POO-JScript-HTML-CSS3/blob/main/imagenes/Capitulo6/orientacion_objetos.png)

## Duración aproximada:
- 60 minutos.

## Tabla de ayuda:
| Requisito | Descripción|
| --- | --- |
| Navegador Web | Navegador web como Chrome, Firefox o Safari. |
| Editor Código | Visual Studio Code. |
| Live Preview | Instalar la extension "Live Preview" en Visual Studio Code. |
| Terminal | Acceso a la terminal de comandos del sistema. |

## Instrucciones:

**Paso 1.** Define la clase base.

Vamos a comenzar definiendo una clase base llamada `Animal`. Esta clase tendrá un constructor que inicializa el nombre del animal y un método para mostrar el nombre.

### JavaScript
```
// Definición de la clase base Animal
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    // Método para mostrar el nombre del animal
    mostrarNombre() {
        console.log(`Este es un ${this.nombre}`);
    }
}

```

**Explicación:**

La clase `Animal` tiene un constructor que toma un parámetro `nombre` y lo asigna a una propiedad de instancia `this.nombre`.
El método `mostrarNombre()` simplemente imprime en la consola el nombre del animal.

**Paso 2.** Define la clase derivada.

Ahora, vamos a definir una clase llamada `Perro` que herede de la clase `Animal`. La clase `Perro` tendrá un método adicional para mostrar un sonido característico.

### JavaScript
```
// Definición de la clase derivada Perro que hereda de Animal
class Perro extends Animal {
    constructor(nombre, raza) {
        // Llamar al constructor de la clase base (Animal)
        super(nombre);
        this.raza = raza;
    }

    // Método adicional para mostrar un sonido característico
    ladrar() {
        console.log(`${this.nombre} está ladrando: ¡Guau, guau!`);
    }

    // Método para mostrar la raza del perro
    mostrarRaza() {
        console.log(`${this.nombre} es un ${this.raza}`);
    }
}
```
**Explicación:**

- La clase `Perro` usa la palabra clave `extends` para heredar de la clase `Animal`.
- En el constructor de `Perro`, usamos `super(nombre)` para llamar al constructor de la clase base `Animal`. Esto inicializa la propiedad `nombre` en la instancia de `Perro`.
- Añadimos una propiedad nueva, `raza`, que es específica para los perros.
- Definimos dos métodos adicionales: `ladrar()`, que imprime un sonido característico del perro, y `mostrarRaza()`, que imprime la raza del perro.

**Paso 3.** Crea Instancias y usa las Clases.

Ahora, crearemos instancias de nuestras clases y utilizaremos sus métodos para ver cómo funciona la herencia.

### JavaScript
```
// Crear una instancia de la clase base Animal
const animal1 = new Animal("Animal Genérico");
animal1.mostrarNombre(); // Salida: Este es un Animal Genérico

// Crear una instancia de la clase derivada Perro
const perro1 = new Perro("Firulais", "Labrador");
perro1.mostrarNombre(); // Salida: Este es un Firulais
perro1.ladrar();        // Salida: Firulais está ladrando: ¡Guau, guau!
perro1.mostrarRaza();   // Salida: Firulais es un Labrador
```
**Explicación:**

- Creamos una instancia de la clase `Animal` llamada `animal1` y llamamos a su método `mostrarNombre()`, que muestra el nombre del animal.
- Creamos una instancia de la clase `Perro` llamada `perro1`, que es un `Labrador` llamado `Firulais`. Llamamos a los métodos `mostrarNombre()`, `ladrar()`, y `mostrarRaza()` para demostrar que `Perro` tiene acceso a métodos de la clase base y también a sus propios métodos.

**Paso 4.** Polimorfismo y Métodos Sobrescritos.

En herencia a veces queremos que una clase derivada tenga su propia implementación de un método que también existe en la clase base. Esto se llama sobrescribir un método.

Agreguemos un método sobrescrito en la clase `Perro`.

### JavaScript
```
// Sobrescribir el método mostrarNombre en la clase Perro
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }

    mostrarNombre() {
        // Llamar al método mostrarNombre de la clase base usando super
        super.mostrarNombre();
        console.log(`Y es un perro de raza ${this.raza}`);
    }

    ladrar() {
        console.log(`${this.nombre} está ladrando: ¡Guau, guau!`);
    }

    mostrarRaza() {
        console.log(`${this.nombre} es un ${this.raza}`);
    }
}

// Crear una nueva instancia de Perro
const perro2 = new Perro("Rex", "Pastor Alemán");
perro2.mostrarNombre(); // Salida: Este es un Rex
                        //         Y es un perro de raza Pastor Alemán
perro2.ladrar();        // Salida: Rex está ladrando: ¡Guau, guau!
```

**Explicación:**

- En la clase `Perro`, sobrescribimos el método `mostrarNombre()`. Utilizamos `super.mostrarNombre()` para llamar al método original de la clase base y luego agregamos más información específica de la clase `Perro`.
- Creamos una instancia de `Perro` llamada `perro2` y demostramos cómo el método sobrescrito `mostrarNombre()` imprime información adicional específica de los perros.

**Resumen del programa completo.**

Aquí está el código completo del ejemplo, integrando todos los pasos anteriores:

### JavaScript
```
// Definición de la clase base Animal
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    mostrarNombre() {
        console.log(`Este es un ${this.nombre}`);
    }
}

// Definición de la clase derivada Perro que hereda de Animal
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llamar al constructor de la clase base
        this.raza = raza;
    }

    mostrarNombre() {
        super.mostrarNombre(); // Llamar al método de la clase base
        console.log(`Y es un perro de raza ${this.raza}`);
    }

    ladrar() {
        console.log(`${this.nombre} está ladrando: ¡Guau, guau!`);
    }

    mostrarRaza() {
        console.log(`${this.nombre} es un ${this.raza}`);
    }
}

// Crear instancias y probar los métodos
const animal1 = new Animal("Animal Genérico");
animal1.mostrarNombre(); // Salida: Este es un Animal Genérico

const perro1 = new Perro("Firulais", "Labrador");
perro1.mostrarNombre(); // Salida: Este es un Firulais
                        //         Y es un perro de raza Labrador
perro1.ladrar();        // Salida: Firulais está ladrando: ¡Guau, guau!
perro1.mostrarRaza();   // Salida: Firulais es un Labrador

const perro2 = new Perro("Rex", "Pastor Alemán");
perro2.mostrarNombre(); // Salida: Este es un Rex
                        //         Y es un perro de raza Pastor Alemán
perro2.ladrar();        // Salida: Rex está ladrando: ¡Guau, guau!
```

### Resultado esperado

    Este es un Animal Genérico

    Este es un Firulais
    Y es un perro de raza Labrador
    Firulais está ladrando: ¡Guau, guau!
    Firulais es un Labrador

    Este es un Rex
    Y es un perro de raza Pastor Alemán
    Rex está ladrando: ¡Guau, guau!

## [Índice:](../README.md)<br>
## - [Práctica 6. Usando el Protocolo HTTP para acceder datos en la web.](../Capítulo6/README.md)<br>
## - [Práctica 8. Manejando Objetos con TypeScript.](../ApéndiceA/README.md)<br>
