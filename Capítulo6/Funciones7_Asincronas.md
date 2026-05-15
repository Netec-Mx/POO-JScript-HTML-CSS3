# Demo / POC — Funciones Asíncronas y Comunicación HTTP en JavaScript

<br/><br/>

## Objetivo

Aprender el uso de funciones asíncronas y mecanismos de comunicación HTTP en JavaScript utilizando:

* `setTimeout()`
* `Promise`
* `then()`
* `catch()`
* `fetch()`
* `XMLHttpRequest`
* `open()`
* `send()`
* `getResponseHeader()`
* `alert()`

<br/><br/>

# Resultado esperado

La página permitirá:

* Simular operaciones asíncronas
* Consumir datos desde una API pública
* Realizar peticiones HTTP modernas con `fetch`
* Realizar peticiones HTTP clásicas con `XMLHttpRequest`
* Detectar errores HTTP
* Mostrar encabezados de respuesta
* Manipular dinámicamente el DOM

<br/><br/>

## Pregunta 

### ¿Cuál es la diferencia entre una operación síncrona y una asíncrona?

<br/>

JavaScript trabaja de manera asíncrona para evitar bloquear la interfaz del navegador.

Existen varias formas de trabajar con asincronía:

* Temporizadores (`setTimeout`)
* Promesas (`then/catch`)
* APIs modernas (`fetch`)
* APIs clásicas (`XMLHttpRequest`)


<br/><br/>

# Tabla de ayuda

| Método                | ¿Para qué sirve?                    | Ejemplo rápido             |
| --------------------- | ----------------------------------- | -------------------------- |
| `setTimeout()`        | Ejecuta código después de un tiempo | `setTimeout(fn,1000)`      |
| `then()`              | Maneja éxito de Promesas            | `promesa.then()`           |
| `catch()`             | Maneja errores                      | `promesa.catch()`          |
| `fetch()`             | Realiza solicitudes HTTP modernas   | `fetch(url)`               |
| `XMLHttpRequest()`    | API clásica HTTP                    | `new XMLHttpRequest()`     |
| `open()`              | Configura la petición               | `xhr.open("GET",url,true)` |
| `send()`              | Envía la solicitud                  | `xhr.send()`               |
| `getResponseHeader()` | Lee encabezados HTTP                | `xhr.getResponseHeader()`  |
| `alert()`             | Muestra mensajes emergentes         | `alert("Error")`           |


<br/><br/>

# Descripción de la página

La página tendrá:

1. Simulación de carga asíncrona
2. Ejemplo con Promesas
3. Consumo HTTP usando `fetch`
4. Consumo HTTP usando `XMLHttpRequest`
5. Visualización de resultados en pantalla

<br/>

Se utilizará la API pública:

```text
https://jsonplaceholder.typicode.com/users
```

<br/><br/>


# Resume de Instrucciones 

1. Crear archivo `index.html`
2. Crear archivo `app.js`
3. Vincular el JavaScript externo
4. Abrir la página en navegador
5. Probar cada botón
6. Abrir consola del navegador

<br/><br/>

# Código HTML 

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Demo Asincronía y HTTP</title>
</head>
<body>

    <h1>Demo Asincronía y Comunicación HTTP</h1>

    <hr>

    <h2>1. Simulación Asíncrona</h2>

    <button onclick="simularCarga()">
        Simular carga
    </button>

    <p id="resultadoCarga"></p>

    <hr>

    <h2>2. Consumo HTTP con fetch()</h2>

    <button onclick="cargarUsuariosFetch()">
        Consumir API con fetch
    </button>

    <ul id="listaFetch"></ul>

    <hr>

    <h2>3. Consumo HTTP con XMLHttpRequest</h2>

    <button onclick="cargarUsuariosXHR()">
        Consumir API con XMLHttpRequest
    </button>

    <p id="tipoRespuesta"></p>

    <ul id="listaXHR"></ul>

    <script src="app.js"></script>

</body>
</html>
```

<br/><br/>

# Código JavaScript completo

```javascript
// ======================================================
// 1. setTimeout()
// ======================================================

function simularCarga() {

    const resultado = document.getElementById("resultadoCarga");

    resultado.innerHTML = "Cargando información...";

    // Simula una operación asíncrona
    setTimeout(() => {

        resultado.innerHTML = "Carga finalizada correctamente";

        // ======================================================
        // 2. Promise + then() + catch()
        // ======================================================

        const promesa = new Promise((resolve, reject) => {

            const exito = true;

            if (exito) {
                resolve("Promesa completada");
            } else {
                reject("Error en la promesa");
            }

        });

        promesa
            .then((mensaje) => {

                console.log(mensaje);

            })
            .catch((error) => {

                console.error(error);

            });

    }, 2000);

}



// ======================================================
// 3. fetch()
// ======================================================

function cargarUsuariosFetch() {

    const lista = document.getElementById("listaFetch");

    lista.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/users")

        .then((response) => {

            // Validación HTTP
            if (!response.ok) {

                throw new Error("Error HTTP: " + response.status);

            }

            return response.json();

        })

        .then((usuarios) => {

            usuarios.forEach(usuario => {

                const li = document.createElement("li");

                li.innerHTML = usuario.name;

                lista.appendChild(li);

            });

        })

        .catch((error) => {

            console.error(error);

            alert("Error al consumir API con fetch");

        });

}



// ======================================================
// 4. XMLHttpRequest()
// ======================================================

function cargarUsuariosXHR() {

    const lista = document.getElementById("listaXHR");

    const tipo = document.getElementById("tipoRespuesta");

    lista.innerHTML = "";

    // Constructor XMLHttpRequest()
    const xhr = new XMLHttpRequest();


    // ======================================================
    // open()
    // ======================================================

    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/users",
        true
    );


    // Evento cuando cambia el estado
    xhr.onreadystatechange = function () {

        // Estado finalizado
        if (xhr.readyState === 4) {

            // Éxito HTTP
            if (xhr.status === 200) {

                // ======================================================
                // getResponseHeader()
                // ======================================================

                const contentType =
                    xhr.getResponseHeader("Content-Type");

                tipo.innerHTML =
                    "Tipo de respuesta: " + contentType;



                const usuarios = JSON.parse(xhr.responseText);

                usuarios.forEach(usuario => {

                    const li = document.createElement("li");

                    li.innerHTML = usuario.name;

                    lista.appendChild(li);

                });

            } else {

                // ======================================================
                // alert()
                // ======================================================

                alert(
                    "Error HTTP: " + xhr.status
                );

            }

        }

    };



    // ======================================================
    // send()
    // ======================================================

    xhr.send();

}
```

<br/><br/>

## Funciones usadas en el código

| Parte                 | Explicación                     |
| --------------------- | ------------------------------- |
| `setTimeout()`        | Simula retrasos                 |
| `Promise`             | Representa una operación futura |
| `then()`              | Ejecuta código exitoso          |
| `catch()`             | Captura errores                 |
| `fetch()`             | API moderna HTTP                |
| `XMLHttpRequest`      | API clásica HTTP                |
| `open()`              | Configura solicitud             |
| `send()`              | Envía petición                  |
| `getResponseHeader()` | Obtiene encabezados             |
| `alert()`             | Muestra errores                 |

<br/><br/>

# Qué reforzamos?

* Programación asíncrona
* Temporizadores
* Promesas
* Manejo de errores
* Comunicación HTTP
* Consumo de APIs REST
* Diferencia entre `fetch` y `XMLHttpRequest`

<br/><br/>

# Problemas comunes

| Problema            | Causa                    |
| ------------------- | ------------------------ |
| API no responde     | Sin Internet             |
| Error CORS          | Restricción del servidor |
| `undefined` en JSON | Error al parsear         |
| `404`               | URL incorrecta           |
| `fetch` falla       | Error de red             |


<br/><br/>

# Conclusiones

* `fetch()` es la forma moderna recomendada.
* `XMLHttpRequest` sigue existiendo en proyectos antiguos.
* Las Promesas simplifican el manejo asíncrono.
* JavaScript utiliza asincronía para no bloquear la interfaz.

<br/><br/>

# Referencias oficiales

* [MDN JavaScript Promises](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise?utm_source=chatgpt.com)
* [MDN fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API?utm_source=chatgpt.com)
* [MDN XMLHttpRequest](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest?utm_source=chatgpt.com)
* [JSONPlaceholder API](https://jsonplaceholder.typicode.com?utm_source=chatgpt.com)
