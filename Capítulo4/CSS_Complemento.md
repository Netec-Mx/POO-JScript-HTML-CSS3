# Práctica 4.2 Creación de hoja de estilos CSS externa

<br/><br/>

## Objetivo

Al finalizar esta práctica, serás capaz de crear y vincular una hoja de estilos CSS externa, aplicar estilos mediante selectores por etiqueta, clase e identificador, y mejorar visualmente una página HTML existente.

<br/><br/>

## Planteamiento

En prácticas anteriores se trabajó sobre la estructura HTML de una página web empresarial.

Ahora deberás mejorar visualmente esa página utilizando CSS.

Se te proporciona un archivo `index.html` ya funcional. Tu tarea consistirá en:

* Crear una hoja de estilos externa.
* Vincularla al documento HTML.
* Aplicar reglas CSS utilizando distintos tipos de selectores.
* Probar visualmente cada cambio en el navegador.

<br/><br/>

## Estructura esperada del proyecto

```text
practica-css/
├── index.html
└── estilos.css
```

<br/><br/>

## Tabla de ayuda

| Selector CSS | ¿Para qué sirve?                                    | Ejemplo rápido         |
| ------------ | --------------------------------------------------- | ---------------------- |
| Etiqueta     | Aplica estilos a todas las etiquetas del mismo tipo | `body {}`              |
| Clase        | Aplica estilos a elementos con la misma clase       | `.tarjeta {}`          |
| ID           | Aplica estilos a un único elemento                  | `#titulo-principal {}` |
| Descendente  | Aplica estilos a elementos dentro de otro           | `.menu-principal a {}` |
| Agrupado     | Aplica reglas a varios elementos                    | `input, textarea {}`   |
| Pseudoclase  | Cambia el estado visual de un elemento              | `button:hover {}`      |

<br/><br/>

# Instrucciones

<br/><br/>

## Paso 1. Abrir el proyecto

Abre la carpeta del proyecto en Visual Studio Code.

Verifica que existan los archivos:

```text
index.html
```

y

```text
estilos.css
```

Si `estilos.css` no existe, créalo manualmente.

<br/><br/>

## Paso 2. Verificar el vínculo CSS

Abre el archivo `index.html`.

Dentro de la etiqueta `<head>`, verifica que exista la siguiente línea:

```html
<link rel="stylesheet" href="estilos.css">
```

Guarda los cambios.

<br/><br/>

## Paso 3. Aplicar estilo general al documento

Dentro de `estilos.css`, agrega:

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f4f6f8;
  margin: 0;
  color: #222;
}
```

Guarda el archivo y actualiza el navegador.

<br/><br/>

## Paso 4. Estilizar el encabezado principal

Agrega:

```css
header {
  background-color: #1f4e79;
  color: white;
  padding: 20px;
  text-align: center;
}
```

Verifica el cambio visual.

<br/><br/>

## Paso 5. Estilizar el título principal usando id

Busca en el HTML el elemento:

```html
<h1 id="titulo-principal">
```

Ahora agrega esta regla:

```css
#titulo-principal {
  margin: 0;
  font-size: 36px;
}
```

<br/><br/>

## Paso 6. Estilizar el menú de navegación

Agrega:

```css
.menu-principal {
  background-color: #163a5c;
  padding: 10px;
  text-align: center;
}
```

<br/><br/>

## Paso 7. Estilizar los enlaces del menú

Agrega:

```css
.menu-principal a {
  color: white;
  text-decoration: none;
  margin: 10px;
}
```

<br/><br/>

## Paso 8. Aplicar estilos a todas las secciones

Agrega:

```css
section {
  background-color: white;
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
}
```

<br/><br/>

## Paso 9. Estilizar tarjetas de servicios usando class

Busca en el HTML:

```html
class="tarjeta"
```

Agrega:

```css
.tarjeta {
  border: 1px solid #cccccc;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 6px;
}
```

<br/><br/>

## Paso 10. Estilizar campos del formulario

Agrega:

```css
.campo-formulario {
  margin-bottom: 15px;
}
```

<br/><br/>

## Paso 11. Estilizar etiquetas label

Agrega:

```css
label {
  font-weight: bold;
}
```

<br/><br/>

## Paso 12. Estilizar inputs y textarea

Agrega:

```css
input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #999999;
  border-radius: 4px;
}
```

<br/><br/>

## Paso 13. Estilizar botón

Agrega:

```css
button {
  background-color: #1f4e79;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  cursor: pointer;
}
```

<br/><br/>

## Paso 14. Agregar efecto hover al botón

Agrega:

```css
button:hover {
  background-color: #122b44;
}
```

Prueba colocar el cursor sobre el botón.

<br/><br/>

## Paso 15. Estilizar el footer

Agrega:

```css
footer {
  background-color: #dddddd;
  text-align: center;
  padding: 15px;
  margin-top: 30px;
}
```

<br/><br/>

# Resultado esperado

La página deberá mostrar:

* Fondo gris claro.
* Encabezado azul.
* Menú horizontal.
* Secciones blancas centradas.
* Tarjetas para servicios.
* Formulario más ordenado.
* Botón estilizado con efecto hover.
* Pie de página diferenciado.

<br/><br/>

# Reglas CSS utilizadas

| No. | Selector            | Tipo        |
| --: | ------------------- | ----------- |
|   1 | `body`              | Etiqueta    |
|   2 | `header`            | Etiqueta    |
|   3 | `#titulo-principal` | ID          |
|   4 | `.menu-principal`   | Clase       |
|   5 | `.menu-principal a` | Descendente |
|   6 | `section`           | Etiqueta    |
|   7 | `.tarjeta`          | Clase       |
|   8 | `.campo-formulario` | Clase       |
|   9 | `input, textarea`   | Agrupado    |
|  10 | `button:hover`      | Pseudoclase |

<br/><br/>

# Qué se valida

* Uso correcto de una hoja de estilos externa.
* Uso de selectores CSS.
* Aplicación de estilos visuales básicos.
* Identificación de clases e identificadores en HTML.
* Relación entre estructura HTML y presentación CSS.

<br/><br/>

# Problemas comunes

| Problema                          | Posible causa                                  |
| --------------------------------- | ---------------------------------------------- |
| No cambia el diseño               | El archivo CSS no está vinculado correctamente |
| No funciona una clase             | Falta el punto `.`                             |
| No funciona un id                 | Falta el símbolo `#`                           |
| Los estilos no aparecen           | El navegador no se actualizó                   |
| Los inputs se salen de la sección | El width ocupa demasiado espacio               |

<br/><br/>

# Conclusión

En esta práctica utilizaste CSS externo para transformar visualmente una página HTML ya funcional. También aplicaste selectores fundamentales de CSS como etiquetas, clases, ids, selectores descendentes y pseudoclases.
