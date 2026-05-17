# Tabla de ayuda — Atributos comunes en HTML5

| Atributo          | ¿Para qué sirve?                        | Ejemplo rápido                        |
| ----------------- | --------------------------------------- | ------------------------------------- |
| `id`              | Identificador único del elemento        | `<div id="menu">`                     |
| `class`           | Agrupa elementos para estilos o scripts | `<p class="texto">`                   |
| `title`           | Muestra información al pasar el mouse   | `<abbr title="HyperText">HTML</abbr>` |
| `style`           | Aplica estilos CSS en línea             | `<p style="color:red;">`              |
| `hidden`          | Oculta el elemento                      | `<div hidden>`                        |
| `tabindex`        | Controla navegación con TAB             | `<input tabindex="1">`                |
| `contenteditable` | Permite editar contenido                | `<div contenteditable="true">`        |
| `draggable`       | Permite arrastrar el elemento           | `<img draggable="true">`              |
| `lang`            | Define el idioma del contenido          | `<html lang="es">`                    |
| `dir`             | Dirección del texto (`ltr` / `rtl`)     | `<p dir="rtl">`                       |
| `data-*`          | Guarda datos personalizados             | `<div data-id="10">`                  |
| `spellcheck`      | Activa corrección ortográfica           | `<textarea spellcheck="true">`        |
| `translate`       | Indica si el texto debe traducirse      | `<p translate="no">`                  |
| `accesskey`       | Atajo de teclado                        | `<button accesskey="s">`              |
| `autofocus`       | Enfoca automáticamente                  | `<input autofocus>`                   |
| `disabled`        | Deshabilita interacción                 | `<button disabled>`                   |
| `readonly`        | Solo lectura                            | `<input readonly>`                    |
| `required`        | Campo obligatorio                       | `<input required>`                    |
| `placeholder`     | Texto guía en campos                    | `<input placeholder="Nombre">`        |
| `value`           | Valor inicial                           | `<input value="Hola">`                |
| `name`            | Nombre enviado en formularios           | `<input name="correo">`               |


<br/><br/>

# Tabla de ayuda — Atributos especiales por etiqueta

## Formularios (`<input>`, `<textarea>`, `<select>`)

| Atributo    | Etiqueta     | ¿Para qué sirve?                 | Ejemplo                           |
| ----------- | ------------ | -------------------------------- | --------------------------------- |
| `type`      | `<input>`    | Tipo de entrada                  | `<input type="email">`            |
| `min`       | `<input>`    | Valor mínimo                     | `<input type="number" min="1">`   |
| `max`       | `<input>`    | Valor máximo                     | `<input type="number" max="10">`  |
| `maxlength` | `<input>`    | Máximo de caracteres             | `<input maxlength="20">`          |
| `pattern`   | `<input>`    | Expresión regular                | `<input pattern="[0-9]+">`        |
| `multiple`  | `<input>`    | Permite varios archivos/opciones | `<input type="file" multiple>`    |
| `checked`   | `<input>`    | Marca checkbox/radio             | `<input type="checkbox" checked>` |
| `selected`  | `<option>`   | Opción seleccionada              | `<option selected>`               |
| `rows`      | `<textarea>` | Número de filas                  | `<textarea rows="5">`             |
| `cols`      | `<textarea>` | Número de columnas               | `<textarea cols="30">`            |

<br/><br/>

## Enlaces y navegación (`<a>`)

| Atributo   | ¿Para qué sirve?      | Ejemplo                          |
| ---------- | --------------------- | -------------------------------- |
| `href`     | URL destino           | `<a href="https://ejemplo.com">` |
| `target`   | Dónde abrir el enlace | `<a target="_blank">`            |
| `download` | Descarga archivo      | `<a download>`                   |
| `rel`      | Relación del enlace   | `<a rel="noopener">`             |

<br/><br/>

## Imágenes (`<img>`)

| Atributo  | ¿Para qué sirve?  | Ejemplo                |
| --------- | ----------------- | ---------------------- |
| `src`     | Ruta de imagen    | `<img src="foto.jpg">` |
| `alt`     | Texto alternativo | `<img alt="Paisaje">`  |
| `width`   | Ancho             | `<img width="300">`    |
| `height`  | Alto              | `<img height="200">`   |
| `loading` | Carga diferida    | `<img loading="lazy">` |

<br/><br/>

## Multimedia (`<audio>`, `<video>`)

| Atributo   | Etiqueta    | ¿Para qué sirve?          | Ejemplo                          |
| ---------- | ----------- | ------------------------- | -------------------------------- |
| `controls` | Audio/Video | Muestra controles         | `<video controls>`               |
| `autoplay` | Audio/Video | Reproduce automáticamente | `<audio autoplay>`               |
| `loop`     | Audio/Video | Repite reproducción       | `<video loop>`                   |
| `muted`    | Audio/Video | Silencia audio            | `<video muted>`                  |
| `poster`   | `<video>`   | Imagen previa             | `<video poster="miniatura.jpg">` |

<br/><br/>

## Tablas (`<table>`)

| Atributo  | ¿Para qué sirve? | Ejemplo            |
| --------- | ---------------- | ------------------ |
| `colspan` | Une columnas     | `<td colspan="2">` |
| `rowspan` | Une filas        | `<td rowspan="3">` |

<br/><br/>

## Scripts y recursos

| Atributo | Etiqueta   | ¿Para qué sirve?          | Ejemplo                   |
| -------- | ---------- | ------------------------- | ------------------------- |
| `src`    | `<script>` | Archivo JS externo        | `<script src="app.js">`   |
| `defer`  | `<script>` | Ejecuta al terminar carga | `<script defer>`          |
| `async`  | `<script>` | Carga asíncrona           | `<script async>`          |
| `href`   | `<link>`   | Archivo relacionado       | `<link href="style.css">` |
| `rel`    | `<link>`   | Tipo de relación          | `<link rel="stylesheet">` |

<br/><br/>

# Atributos modernos y semánticos útiles en HTML5

| Atributo         | ¿Para qué sirve?           | Ejemplo                        |
| ---------------- | -------------------------- | ------------------------------ |
| `aria-*`         | Accesibilidad              | `<button aria-label="Cerrar">` |
| `role`           | Define rol semántico       | `<div role="navigation">`      |
| `loading="lazy"` | Lazy loading imágenes      | `<img loading="lazy">`         |
| `autocomplete`   | Autocompletado formularios | `<input autocomplete="email">` |
| `inputmode`      | Tipo de teclado móvil      | `<input inputmode="numeric">`  |
| `capture`        | Uso de cámara/micrófono    | `<input type="file" capture>`  |
