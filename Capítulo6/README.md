# Práctica 6. Usando el Protocolo HTTP para acceder datos en la web.

## Objetivo de la práctica:
Al finalizar la práctica, serás capaz de:
- Introducción al manejo de solicitudes y errores con el protocolo HTTP.
- Comprender el uso de Promesas en JavaScript.
- Aprender cómo se realiza la iteración y visualización de datos.
- Obtener los fundamentos para trabajar con APIs REST.


## Objetivo Visual 
Crear un diagrama o imagen que resuma las actividades a realizar, un ejemplo es la siguiente imagen: 

![diagrama1](../images/img1.png)

## Duración aproximada:
- 60 minutos.

## Tabla de ayuda:
| Requisito | Descripcion|
| --- | --- |
| Navegador Web | Navegador web como Chrome, Firefox, Safari. |
| Editor Código | Visual Studio Code. |
| Live Preview | Instalar la extension "Live Preview" en Visual Studio Code. |
| Terminal | Acceso a la terminal de comandos del sistema. |

## Instrucciones 

### Tarea 1. Crear un programa en JavaScript que acceda datos en la internet.

**Paso 1:** Entender qué es la función `fetch()`.

`fetch()` es una función nativa de JavaScript que nos permite hacer solicitudes HTTP desde el navegador. Es una API basada en promesas, lo que significa que devuelve una promesa que se resuelve con la respuesta de la solicitud.

**Paso 2.** Configuración Básica del Proyecto.

Primero necesitamos crear un archivo HTML para alojar nuestro código JavaScript. Puedes crear un archivo llamado `index.html` y agregar el siguiente código:

### HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Fetch API</title>
</head>
<body>
    <h1>Ejemplo de uso de Fetch API</h1>
    <script src="script.js"></script>
</body>
</html>
```

Este archivo HTML incluye una etiqueta `<script>` que enlaza a nuestro archivo de JavaScript `(script.js)`, donde escribiremos el código de la solicitud HTTP.

**Paso 3.** Escribe el código JavaScript para la solicitud HTTP.

Ahora crea un archivo llamado `script.js` en el mismo directorio y añade el siguiente código:

### JavaScript
```
// Paso 1: Definir la URL de la API desde donde vamos a obtener los datos
const url = 'https://jsonplaceholder.typicode.com/users';

// Paso 2: Usar fetch() para hacer una solicitud HTTP GET a la URL
fetch(url)
    .then(response => {
        // Paso 3: Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Error en la solicitud HTTP: ' + response.status);
        }
        // Paso 4: Convertir la respuesta en un objeto JSON
        return response.json();
    })
    .then(data => {
        // Paso 5: Manejar los datos obtenidos de la API
        console.log('Datos de los usuarios:', data);

        // Opcional: Mostrar nombres de usuarios en la consola
        data.forEach(usuario => {
            console.log('Nombre de usuario:', usuario.name);
        });
    })
    .catch(error => {
        // Paso 6: Manejar errores de la solicitud HTTP
        console.error('Hubo un problema con la solicitud:', error);
    });
```

**Explicación paso a paso del código:**

1. Definir la URL de la API:

`const url = 'https://jsonplaceholder.typicode.com/users';`

Aquí, estamos definiendo una variable url que contiene la dirección de la API de donde vamos a obtener los datos. En este caso, es una lista de usuarios.

2. Usar `fetch()` para hacer una solicitud HTTP GET a la URL:

`fetch(url)` realiza una solicitud HTTP GET a la URL especificada. `fetch()` devuelve una promesa que se resuelve en un objeto Response.
    
3. Verificar si la respuesta es exitosa:

`if (!response.ok) { throw new Error('Error en la solicitud HTTP: ' + response.status); }`

En este paso verificamos si la respuesta fue exitosa comprobando la propiedad ok de la respuesta. Si no fue exitosa, lanzamos un error con el código de estado de la respuesta.

4. Convertir la respuesta en un objeto JSON:

`return response.json();`

Si la respuesta fue exitosa, la convertimos en un objeto JSON usando el método `.json()`. Esto también devuelve una promesa que se resuelve con los datos JSON.

5. Manejar los datos obtenidos de la API:

`console.log('Datos de los usuarios:', data);`

Aquí mostramos en la consola los datos de los usuarios obtenidos de la API. También usamos un ciclo `forEach` para imprimir los nombres de los usuarios individualmente.

6. Manejar errores de la solicitud HTTP:

`.catch(error => { console.error('Hubo un problema con la solicitud:', error); });`

Si ocurre algún error durante la solicitud (por ejemplo, si la red está desconectada o la URL no es válida), lo capturamos y mostramos en la consola.

**Paso 4.** Prueba el programa.

- Abre el archivo `index.html` en un navegador.
- Observa los resultados en la consola del navegador.

> [!TIP]
> Puedes abrir la consola presionando `F12 o Ctrl+Shift+I` y luego seleccionando la pestaña `Consola`.

### Resultado esperado

### JSON
```
// 20240826020234
// https://jsonplaceholder.typicode.com/users

[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
}
```


