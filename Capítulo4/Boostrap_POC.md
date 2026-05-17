

# Demo / POC — Vinculando Bootstrap en una Página HTML

## Objetivo

Aprender a integrar la librería CSS Bootstrap dentro de una página HTML sencilla usando CDN, aplicando estilos rápidos a:

* Una tabla
* Un formulario
* Botones
* Contenedores

<br/><br/>

## Resultado esperado

La página deberá verse moderna automáticamente, sin escribir CSS propio.

Antes:

* Tabla simple
* Formulario básico
* Botones sin estilo

Después:

* Tabla con colores y bordes
* Formulario alineado y limpio
* Botones estilizados automáticamente

<br/><br/>


## ¿Qué aprenderás?

* Cómo vincular Bootstrap usando `<link>`
* Qué es un CDN
* Cómo usar clases de Bootstrap
* Cómo aplicar estilos rápidos sin CSS manual

<br/><br/>


# Tabla de ayuda

| Elemento        | ¿Para qué sirve?        | Ejemplo                        |
| --------------- | ----------------------- | ------------------------------ |
| `container`     | Centra el contenido     | `<div class="container">`      |
| `table`         | Activa estilos de tabla | `<table class="table">`        |
| `table-striped` | Filas alternadas        | `class="table table-striped"`  |
| `form-control`  | Estilo para inputs      | `<input class="form-control">` |
| `btn`           | Estilo base para botón  | `<button class="btn">`         |
| `btn-primary`   | Botón azul              | `class="btn btn-primary"`      |


<br/><br/>


# Instrucciones

## Paso 1 — Crear el archivo

Crear:

```text
index.html
```

<br/><br/>


## Paso 2 — Vincular Bootstrap

Agregar dentro de `<head>`:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
```

<br/><br/>


## Paso 3 — Crear contenedor principal

Usar:

```html
<div class="container mt-4">
```

<br/><br/>


## Paso 4 — Crear tabla con Bootstrap

Usar clases:

```html
table table-striped table-bordered
```

<br/><br/>


## Paso 5 — Crear formulario con Bootstrap

Usar:

```html
form-control
```

en los inputs.

<br/><br/>


## Paso 6 — Crear botón Bootstrap

Usar:

```html
btn btn-primary
```

<br/><br/>


# Código completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Demo Bootstrap</title>

  <!-- Bootstrap CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <div class="container mt-4">

    <h1 class="text-center mb-4">
      Demo Bootstrap
    </h1>

    <!-- TABLA -->
    <h2>Tabla de estudiantes</h2>

    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>Nombre</th>
          <th>Curso</th>
          <th>Calificación</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Ana</td>
          <td>HTML5</td>
          <td>95</td>
        </tr>

        <tr>
          <td>Luis</td>
          <td>CSS</td>
          <td>88</td>
        </tr>

        <tr>
          <td>Marta</td>
          <td>JavaScript</td>
          <td>92</td>
        </tr>
      </tbody>
    </table>

    <hr>

    <!-- FORMULARIO -->
    <h2>Formulario de registro</h2>

    <form>

      <div class="mb-3">
        <label class="form-label">
          Nombre
        </label>

        <input
          type="text"
          class="form-control"
          placeholder="Escribe tu nombre">
      </div>

      <div class="mb-3">
        <label class="form-label">
          Correo
        </label>

        <input
          type="email"
          class="form-control"
          placeholder="correo@ejemplo.com">
      </div>

      <button class="btn btn-primary">
        Guardar
      </button>

    </form>

  </div>

</body>
</html>
```

<br/><br/>


## Sin Bootstrap

Si eliminan el `<link>`:

* Todo vuelve al estilo básico del navegador.

## Con Bootstrap

Bootstrap:

* Agrega colores
* Márgenes
* Tipografía
* Diseño responsive
* Botones modernos

<br/><br/>


# Problemas comunes

| Problema            | Causa                       |
| ------------------- | --------------------------- |
| No cambia el diseño | Bootstrap no está vinculado |
| Tabla sigue simple  | Falta `class="table"`       |
| Inputs sin estilo   | Falta `form-control`        |
| Botón sin color     | Falta `btn btn-primary`     |


<br/><br/>


## Sugerencias

Cambiar:

```html
btn-primary
```

por:

```html
btn-danger
btn-success
btn-warning
```

<br/><br/>


Cambiar:

```html
table-striped
```

por:

```html
table-hover
```

<br/><br/>


## Referencias oficiales

* [Bootstrap Official Site](https://getbootstrap.com)
* [Bootstrap Tables Documentation](https://getbootstrap.com/docs/5.3/content/tables/)
* [Bootstrap Forms Documentation](https://getbootstrap.com/docs/5.3/forms/overview/)



<br/><br/>

