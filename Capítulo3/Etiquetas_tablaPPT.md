
Explicación breve de las etiquetas en la tabla de la PPT

| Etiqueta     | ¿Qué hace?                                                      | Ejemplo rápido               |
| ------------ | --------------------------------------------------------------- | ---------------------------- |
| `bdi`        | Aísla texto con distinta dirección de escritura (árabe/hebreo). | `<bdi>محمد</bdi>`            |
| `command`    | Antigua etiqueta para comandos o acciones. Obsoleta.            | `<command>`                  |
| `summary`    | Título visible de un bloque desplegable `details`.              | `<summary>Ver más</summary>` |
| `figure`     | Agrupa contenido visual independiente.                          | Imagen, diagrama             |
| `figcaption` | Texto descriptivo de un `figure`.                               | Pie de imagen                |
| `hgroup`     | Agrupaba títulos y subtítulos. Obsoleta.                        | `<hgroup>`                   |
| `meter`      | Medidor de un valor dentro de un rango.                         | Batería, satisfacción        |
| `progress`   | Barra de progreso de una tarea.                                 | Descarga 60%                 |
| `ruby`       | Contenedor para anotaciones fonéticas asiáticas.                | Japonés                      |
| `rt`         | Pronunciación dentro de `ruby`.                                 | Furigana                     |
| `rp`         | Texto alternativo si ruby no es soportado.                      | Paréntesis                   |
| `time`       | Representa fechas y horas.                                      | `<time datetime="">`         |
| `wbr`        | Punto opcional para cortar palabras largas.                     | `super<wbr>largo`            |
| `source`     | Fuente multimedia alternativa.                                  | MP3, MP4                     |
| `embed`      | Inserta contenido externo.                                      | PDF                          |
| `track`      | Agrega subtítulos o pistas de texto a video/audio.              | Subtítulos                   |
| `keygen`     | Generaba claves criptográficas. Obsoleta/eliminada.             | `<keygen>`                   |

<br/><br/>


## `bdi`

Significa:

> Bi-Directional Isolation

Sirve para evitar problemas visuales cuando mezclas idiomas que se escriben diferente.

Ejemplo:

```html id="0xw2ia"
Usuario: <bdi>محمد</bdi>
```

El navegador mantiene correctamente el orden del texto árabe.

<br/><br/>

## `command`

Era una etiqueta pensada para representar comandos o acciones del usuario.

Nunca tuvo mucho soporte.

Actualmente está obsoleta.

<br/><br/>

## `summary`

Es el título visible de un bloque `details`.

Ejemplo:

```html id="0ms6pn"
<details>
  <summary>Ver ayuda</summary>
  <p>Contenido oculto</p>
</details>
```

Cuando haces clic en “Ver ayuda”, se despliega el contenido.

<br/><br/>

## `figure`

Agrupa contenido visual independiente.

Muy usado para:

* imágenes
* diagramas
* gráficos
* capturas

<br/><br/>

## `figcaption`

Es la descripción de una figura.

Ejemplo:

```html
<figcaption>Figura 1. Arquitectura del sistema.</figcaption>
```

<br/><br/>

## `hgroup`

Agrupaba títulos y subtítulos:

```html id="e7n8u0"
<hgroup>
  <h1>Título</h1>
  <h2>Subtítulo</h2>
</hgroup>
```

Hoy ya no se recomienda.

 
<br/><br/>


# `meter`

```html 
<meter value="8" min="0" max="10">
```

Representa un valor dentro de un rango conocido.

Ejemplos:

* batería
* satisfacción
* señal
* temperatura

No representa progreso.

<br/><br/>

# `progress`

```html id="3u3fhz"
<progress value="30" max="100">
```

Muestra avance de una tarea.

Ejemplos:

* descarga
* instalación
* avance de curso

Sí representa progreso.

<br/><br/>

# `ruby`

```html 
<ruby>
```

Se usa para anotaciones fonéticas en idiomas asiáticos.

Muy común en japonés.

Permite mostrar pronunciaciones encima o junto al texto.

<br/><br/>


# `rt`

```html 
<rt>kan</rt>
```

Significa **Ruby Text**.

Contiene la pronunciación o anotación fonética.

<br/>
<br/>

# `rp`

```html id="5zk9rk"
<rp>(</rp>
```

Significa **Ruby Parenthesis**.

Muestra texto alternativo si el navegador no soporta ruby.

Generalmente paréntesis.

<br/>
<br/>

# `time`

```html id="fxa2zv"
<time datetime="2026-05-12">
```

Representa fechas u horas.

El usuario ve texto legible.

El navegador entiende la fecha real mediante `datetime`.

Útil para:

* SEO
* accesibilidad
* calendarios

<br/>
<br/>

# `wbr`

```html id="j4tdtz"
super<wbr>largo
```

Significa **Word Break Opportunity**.

Le dice al navegador:

“si necesitas cortar la palabra, puedes hacerlo aquí”.

Muy útil en palabras extremadamente largas.

<br/>
<br/>

# `source`

```html id="lnmchm"
<source src="video.mp4" type="video/mp4">
```

Define archivos multimedia alternativos.

Se usa dentro de:

* `<audio>`
* `<video>`
* `<picture>`

Permite múltiples formatos.

<br/>
<br/>


# `embed`

```html id="t9m1qa"
<embed src="archivo.pdf">
```

Inserta contenido externo directamente en la página.

Ejemplos:

* PDF
* multimedia
* contenido externo

<br/>
<br/>

# `track`

```html id="6g5r08"
<track src="subtitulos.vtt">
```

Agrega pistas de texto a videos.

Ejemplos:

* subtítulos
* captions
* descripciones

Muy importante para accesibilidad.

<br/>
<br/>

# `keygen`

```html id="l9h3js"
<keygen>
```

Era una etiqueta usada para generar claves criptográficas en formularios.

Fue eliminada por:

* problemas de seguridad
* poco soporte
* soluciones modernas mejores

Actualmente es obsoleta.
