# Práctica 1. Creando una página web con HTML5, CSS y JS.

## Objetivo de la práctica:
Al finalizar la práctica, serás capaz de:
- Aprender a crear una página web.
- Usar los elementos básicos de una página con HTML.
- Aplicar estilos a la página creada.
- Agregar código JavaScript.

## Objetivo Visual 
Al realizar la práctica, podrás ver en el navegador la siguiente imagen:

![imagen](../imagenes/capitulo1/saludo_inicial.png)

## Duración aproximada:
- 30 minutos.

## Tabla de ayuda:
| Requisito | Descripción|
| --- | --- |
| Editor Código | Un editor de texto como VSCode, Sublime Text o similar. |
| Terminal | Acceso a la terminal de comandos del sistema. |

## Instrucciones 

### Tarea 1. Descripción de la tarea a realizar.

Paso 1. Crear el directorio de trabajo "DesarrolloWeb" y los directorios para cada capitulo. 

Abre una ventana de línea de comandos CMD en tu directorio default.

Crea el directorio `DesarrolloWeb`.

Cambiate al directorio `DesarrolloWeb` y crea un directorio por cada capítulo del curso.

![imagen](../imagenes/capitulo1/crear_dir__Desarrollo_Web.png)

Paso 2. Cambiate al directorio capitulo1 e invoca el Visual Studio Code.

![imagen](../imagenes/capitulo1/cambiarse_cap1_invocar_vsc.png)

Paso 3. Crear la pagina web inicial:

En tu editor de código y crea un nuevo archivo con la extensión .html, por ejemplo, index.html.

![imagen](../imagenes/capitulo1/crear_index_html.png)

Paso 4. Estructura básica HTML:

    Escribe el siguiente código en tu archivo index.html:

### HTML
```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saludo</title>
    <link rel="stylesheet" href="styles.css">   

</head>
<body>
    <h1>¡Hola, mundo!</h1>
    <p>Esta es mi primera página Web.</p>
    <script src="script.js"></script>
</body>
</html>
```

```
Explicación:

<!DOCTYPE html>: Declara el tipo de documento.
<html>: Raíz de la página.
<head>: Contiene metadatos y enlaces a archivos externos.
<body>: Contiene el contenido visible de la página.
<title>: Define el título que aparece en la pestaña del navegador.
<link>: Enlaza el archivo CSS styles.css.
<script>: Enlaza el archivo JavaScript script.js.
```

Paso 5. Crea los archivos CSS y JavaScript:

    Crea dos archivos nuevos en la misma carpeta que index.html:
    
    styles.css para el estilo.
    script.js para el código JavaScript.

Paso 6. Estiliza con CSS:

    En el archivo styles.css, agrega reglas CSS para cambiar la apariencia de los elementos:

### CSS
```
body {
    font-family: Arial, sans-serif;
    text-align: center;
}

h1 {
    color: blue;
}
```

Paso 7. Agrega interactividad con JavaScript:

    En el archivo script.js, escribe código JavaScript para agregar funcionalidad. Por ejemplo, puedes cambiar el color del texto al hacer clic en él:

### JavaScript

```
const h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
    h1.style.color = 'red';
});
```

Paso 8. Abre el archivo en tu navegador:

    Haz doble clic en index.html para abrirlo en tu navegador.


### Resultado esperado

Despliegue de la pagina index.html de manera inicial:

![imagen](../imagenes/capitulo1/saludo_inicial.png)

Despliegue de la pagina index.html después de dar clic en el mensaje "¡Hola mundo!"

![imagen](../imagenes/capitulo1/saludo_final.png)
