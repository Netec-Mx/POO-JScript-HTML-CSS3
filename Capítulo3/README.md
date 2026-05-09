# Práctica 3. Diseñando y estructurando una página web con HTML.

<br/>
<br/>

## Objetivos
Al finalizar la práctica, serás capaz de:
- Aprender cómo se diseña una página web.
- Definir la estructura de una página.
- Explicar los elementos y atributos básicos de HTML.
- Crear y marcar correctamente una página HTML que contiene elementos de texto.
- Agregar barras de navegación y enlaces.
- Adicionar imágenes e íconos a la página.
- Crear formularios para recopilar datos y validar la entrada del usuario.

<br/>
<br/>

## Objetivo visual:
![imagen](../imagenes/capitulo3/objetivo_visual.png)

<br/>
<br/>

## Duración aproximada:
- 60 minutos.

<br/>
<br/>

## Tabla de ayuda:

| Requisito | Descripcion|
| --- | --- |
| Navegador Web | Navegador web como Chrome, Firefox, Safari. |
| Editor Código | Visual Studio Code. |
| Live Preview | Instalar la extension "Live Preview" en Visual Studio Code. |
| Terminal | Acceso a la terminal de comandos del sistema. |


<br/>
<br/>

## Instrucciones:

### Tarea 1. Diseñar y crear una página web.

**Paso 1.** Abre una ventana línea de comandos, cámbiate al directorio `DesarrolloWeb\capitulo3` e invoca el VSC.

![imagen](../imagenes/capitulo3/textos/invocar_vsc.png)

<br/>

**Paso 2.** En el VSC crea un nuevo archivo `index.html` y genera la página web básica tecleando `html:5` en el área de trabajo.

<br/>

![imagen](../imagenes/capitulo3/textos/crear_html5_index.png)

<br/>

![imagen](../imagenes/capitulo3/textos/html5_index.png)

<br/>

**Paso 3.** Instala la extensión `Live Preview` de Visual Studio Code.

![imagen](../imagenes/capitulo3/textos/instalar_Live_Preview.png)

<br/>

En Visual Studio Code, en la parte superior derecha, puedes darle clic al ícono de la siguiente imagen para ver en cualquier momento la presentación de la página web:

<br/>

![imagen](../imagenes/capitulo3/vista_previa_pag_web.png)

<br/>

**Paso 4.** Define los TEXTOS de la página web.

- Escribe en el cuerpo de la página las siguientes etiquetas html.
- Puedes generar diferentes tipos de contenidos; para ello, dirígete a: https://loremipsum.io/es

<br/>

![imagen](../imagenes/capitulo3/textos/agregar_texto.png)  

<br/>

**Paso 5.** Formatea el documento.

> [!TIP]
> Puedes usar las teclas de acceso rápido `Shift + alt + F` para dar formato html a la página.

<br/>

![imagen](../imagenes/capitulo3/textos/formatear.png)

<br/>

**Paso 6.** Estructura la página.

De acuerdo con las recomendaciones de agrupación, estuctura la página web en construcción:

<br/>

![imagen](../imagenes/capitulo3/solo_estructura.png)

<br/>

![imagen](../imagenes/capitulo3/estructura_html.png)

<br/>

**Paso 7.** Crea los enlaces de navegación.

Usa la etiqueta:
        
        <nav></nav>
        
Y dentro de ella usa las etiquetas:

        <a href="#">contenido<a/>

<br/>

El signo `#` significa: "aún no está decidido el enlace de la página a visitar". 
Define un enlace para la página de contacto en vez de un nivel `<h2>`, tal como se ve en las siguientes imágenes:

<br/>

> [!TIP]
> Puedes usar la combinación de teclas `Shift + alt + Flecha abajo` para copiar una o más veces la línea donde está el cursor.

<br/>

![imagen](../imagenes/capitulo3/enlaces_1.png)

<br/>

![imagen](../imagenes/capitulo3/enlaces_2.png)

<br/>

**Paso 8.** Añade las imágenes que requiera la página web. 

Existen diferentes servicios de imágenes precreadas, por ejemplo: `Tabler Icons` https://tablericons.com/, `Hero Icons` https://heroicons.com/ y `Font Awesome` https://fontawesome.com/, desde donde se pueden copiar y pegar las imágenes.

- Añade abajo de la barra de navegación una imagen de fondo usando la etiqueta:

                <img src="nombre de la imagen">

- Añade un ícono desde `Table Icons`, busca uno que se llame `map-pin`, dale clic en copiar y pégalo abajo del encabezado `Diseño y Desarrollo web`.

<br/>

![imagen](../imagenes/capitulo3/imagenes_1.png)

<br/>

![imagen](../imagenes/capitulo3/elegir_icono.png)

<br/>

- Agrega los íconos `pallet`, `brand-android`, `brand-apple` y `brand-shopee` abajo de cada una de los encabezados de servicios.

<br/>

![imagen](../imagenes/capitulo3/iconos_servicios.png)

<br/>

![imagen](../imagenes/capitulo3/imagenes_2.png)

<br/>

- La página al final de esta práctica se deberá ver así:

![image](../imagenes/capitulo3/final_capitulo3.png)


<br/>

**Paso 9.** Define el formulario.

- Cambia el enlace de `Contacto` nuevamente por un encabezado tipo `<h2>`.

<br/>

- Agrega la etiqueta:
  
                <form></form>
  
  después del encabezado de `Contacto`. Aquí van los campos del formulario.

<br/>

- Define un grupo de campos con la etiqueta

                <fieldset></fieldset>

  y dentro de ella agrega un título con la etiqueta
  
                <legend></legend>

<br/>

- Agrega las siguientes etiquetas por pares

                  <label>nombre de campo</label> <input type="tipo de entrada text, email, tel"/>

  de acuerdo con la información que desees capturar.

<br/>

- Cada pareja `<label><input>` deberá ir dentro de una etiqueta división `<div></div>` para que aparezcan una por línea.
        
- Deberá verse tal y como se muestra en la siguiente imagen:

<br/>

![image](../imagenes/capitulo3/campos_con_divs.png)

<br/>

![image](../imagenes/capitulo3/campos_divs_imagen.png)

<br/>
<br/>

## Resultado esperado:

![imagen](../imagenes/capitulo3/objetivo_visual.png)

<br/>
<br/>

---

## Índice

- [Práctica 2. Instalación del Software de Desarrollo Web.](../Capítulo2/README.md)
- [Práctica 4. Aplicación de Hojas de Estilo en Cascada.](../Capítulo4/README.md)
