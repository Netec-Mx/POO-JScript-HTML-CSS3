# Práctica 8. Manejando Objetos con TypeScript.

## Objetivo de la práctica:
Al finalizar la práctica, serás capaz de:
- Comprender el concepto de la Orientación a Objetos con TyprScript.
- Familiarizarse con la herencia, uno de los pilares fundamentales de la programación orientada a objetos.
- Practicar la creación y uso de clases Base y Derivadas.
- Aplicar Polimorfismo por medio de la Herencia e implementar y utilizar métodos Sobrescritos.
- Familiarizarse con la creación de Instancias de Clases.


## Objetivo visual:

![[diagrama1](../images/img1.png)](https://github.com/Netec-Mx/POO-JScript-HTML-CSS3/blob/main/imagenes/Capitulo6/OrientacionObjetosTS.png)

## Duración aproximada:
- 60 minutos.

## Tabla de ayuda:
| Requisito | Descripción|
| --- | --- |
| Navegador Web | Navegador web como Chrome, Firefox, Safari. |
| Editor Código | Visual Studio Code. |
| Live Preview | Extension "Live Preview" instalada en Visual Studio Code. |
| Node.js | Node.js instalado en el S.O.|
| Lenguaje TypeScript | Lenguaje instalado en el S.O.|
| Terminal | Acceso a la terminal de comandos del sistema. |

## Instrucciones:

### Tarea 1. Crear clases Base y Derivadas en TypeScript.
**Paso 1.** Define la clase base.

Crea y abre un archivo con VSC llamado `personal.ts` en el directorios actual.

Primero definiremos una clase base llamada `Persona`. Esta clase tendrá un constructor para inicializar los atributos básicos y un método para mostrar información.

### TypeScript
```
// Definición de la clase base Persona
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para mostrar la información de la persona
    mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}
```

**Explicación:**

- La clase `Persona` tiene dos propiedades: nombre (de tipo string) y edad (de tipo number).
- El constructor de la clase toma dos parámetros (nombre y edad) y los asigna a las propiedades de la instancia.
- El método `mostrarInformacion()` imprime en la consola los valores de nombre y edad.

**Paso 2.** Define la clase derivada.

Ahora crearemos una clase derivada llamada `Empleado` que extiende de `Persona`. Esta clase tendrá propiedades adicionales y métodos específicos.

### TypeScript
```
// Definición de la clase derivada Empleado que hereda de Persona
class Empleado extends Persona {
    puesto: string;

    constructor(nombre: string, edad: number, puesto: string) {
        // Llamar al constructor de la clase base (Persona)
        super(nombre, edad);
        this.puesto = puesto;
    }

    // Método para mostrar información específica del empleado
    mostrarInformacionEmpleado(): void {
        // Llamar al método de la clase base
        this.mostrarInformacion();
        console.log(`Puesto: ${this.puesto}`);
    }
}
```
**Explicación:**

- La clase `Empleado` usa la palabra clave `extends` para indicar que hereda de la clase `Persona`.
- El constructor de `Empleado` llama a `super(nombre, edad)` para invocar el constructor de la clase base `Persona`, lo cual es necesario antes de poder utilizar `this` en una clase derivada.
- `Empleado` introduce una nueva propiedad llamada `puesto` para almacenar el puesto de trabajo del empleado.
- Se define un método adicional `mostrarInformacionEmpleado()` que llama al método `mostrarInformacion()` de la clase base y añade información específica del empleado.

**Paso 3.** Crea instancias y usa las clases.
Ahora crearemos instancias de las clases `Persona` y `Empleado`, y utilizaremos sus métodos.

### TypeScript
```
// Crear una instancia de la clase base Persona
const persona1 = new Persona("Juan", 30);
persona1.mostrarInformacion(); // Salida: Nombre: Juan, Edad: 30

// Crear una instancia de la clase derivada Empleado
const empleado1 = new Empleado("Ana", 25, "Desarrolladora");
empleado1.mostrarInformacionEmpleado(); // Salida: Nombre: Ana, Edad: 25
                                        //         Puesto: Desarrolladora
```

**Explicación:**

- Creamos una instancia de `Persona` llamada `persona1` y llamamos a su método `mostrarInformacion()` para mostrar los datos.
- Creamos una instancia de `Empleado` llamada `empleado1`. Llamamos al método `mostrarInformacionEmpleado()` que muestra tanto la información básica de la persona como el puesto del empleado.

**Paso 4.** Polimorfismo y Métodos Sobrescritos.

En herencia podemos sobrescribir métodos de la clase base en la clase derivada para cambiar su comportamiento.

Modificaremos el ejemplo para sobrescribir el método `mostrarInformacion()` en la clase `Empleado`.

### TypeScript
```
// Definición de la clase derivada Empleado que hereda de Persona
class Empleado extends Persona {
    puesto: string;

    constructor(nombre: string, edad: number, puesto: string) {
        super(nombre, edad);
        this.puesto = puesto;
    }

    // Sobrescribir el método mostrarInformacion
    mostrarInformacion(): void {
        super.mostrarInformacion(); // Llamar al método de la clase base
        console.log(`Puesto: ${this.puesto}`);
    }
}

// Crear una instancia de la clase derivada Empleado
const empleado2 = new Empleado("Carlos", 40, "Gerente");
empleado2.mostrarInformacion(); // Salida: Nombre: Carlos, Edad: 40
                                //         Puesto: Gerente
```

**Explicación:**

- Sobrescribimos el método `mostrarInformacion()` en la clase `Empleado` para añadir información específica del empleado.
- Usamos `super.mostrarInformacion()` para llamar al método de la clase base y luego añadimos la información adicional del puesto.

**Resumen del programa completo.**

Aquí está el código completo del ejemplo que integra todos los pasos anteriores:

### TypeScript
```
// Definición de la clase base Persona
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

// Definición de la clase derivada Empleado que hereda de Persona
class Empleado extends Persona {
    puesto: string;

    constructor(nombre: string, edad: number, puesto: string) {
        super(nombre, edad); // Llamar al constructor de la clase base
        this.puesto = puesto;
    }

    mostrarInformacion(): void {
        super.mostrarInformacion(); // Llamar al método de la clase base
        console.log(`Puesto: ${this.puesto}`);
    }
}

// Crear instancias y probar los métodos
const persona1 = new Persona("Juan", 30);
persona1.mostrarInformacion(); // Salida: Nombre: Juan, Edad: 30

const empleado1 = new Empleado("Ana", 25, "Desarrolladora");
empleado1.mostrarInformacion(); // Salida: Nombre: Ana, Edad: 25
                                //         Puesto: Desarrolladora

const empleado2 = new Empleado("Carlos", 40, "Gerente");
empleado2.mostrarInformacion(); // Salida: Nombre: Carlos, Edad: 40
                                //         Puesto: Gerente
```

**Paso 5.** Transpila y ejecuta el código del ejercicio.

Ahora, transpila con TSC y ejecuta el código con Node.js

**Línea de comandos.**

```
tsc personal.ts
```

```
node personal.js
```

### Resultado esperado

    Salida: 

    Nombre: Juan, Edad: 30

    Nombre: Ana, Edad: 25
    Puesto: Desarrolladora
    
    Nombre: Carlos, Edad: 40
    Puesto: Gerente

## [Índice:](../README.md)<br>
## - [Práctica 7. Manejando Objetos con JavaScript.](../Capítulo7/README.md)<br>
## - [Práctica 9. Creación de Componentes en Angular.](../ApéndiceB/README.md)<br>
