# Diseñando y Estructurando una Página Web con HTML

## Objetivo de la práctica:
Al finalizar la práctica, serás capaz de:
- Aprender como se diseña una página web
- Definir la estructura de una página
- Explicar los elementos y atributos básicos de HTML.
- Crear y marcar correctamente una página HTML que contiene elementos de texto.
- Agregar barras de navegación y enlaces.
- Adicionar imágenes e íconos a la página.
- Crear formularios para recopilar datos y validar la entrada del usuario.

## Objetivo Visual 
![imagen](../imagenes/capitulo3/objetivo_visual.png)

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

### Tarea 1. Diseñar y crear una página web.
Paso 1. Abrir una ventana linea de comandos, cambiarse al directorio DesarrolloWeb\capitulo3 e invocar el VSC.

![imagen](../imagenes/capitulo3/textos/invocar_vsc.png)

Paso 2. En el VSC crear un nuevo archivo index.html y generar la pagina web básica tecleando html:5 en el area de trabajo.

![imagen](../imagenes/capitulo3/textos/crear_html5_index.png)

![imagen](../imagenes/capitulo3/textos/html5_index.png)

Paso 3. Instalar la extensión "Live Preview" de Visual Studio Code.

![imagen](../imagenes/capitulo3/textos/instalar_Live_Preview.png)

        En la parte superior derecha en Visual Studio Code puedes darle clic al icono de la siguiente imagen para ver en 
        cualquier momento la presentación de la página web.
        
![imagen](../imagenes/capitulo3/vista_previa_pag_web.png)

Paso 4. Definir los TEXTOS de la página web.

        Escribe en el cuerpo de la página las siguientes etiquetas html.
        Puedes generar diferentes tipos de contenidos yendo a https://loremipsum.io/es

![imagen](../imagenes/capitulo3/textos/agregar_texto.png)  

Paso 5. Formatear el documento.

        Sugerencia: Puedes usar las teclas de acceso rápido shift-alt-f para dar formato html a la página.

![imagen](../imagenes/capitulo3/textos/formatear.png)

Paso 6. Estructurar la página.

        De acuerdo a las recomendaciones de agrupación, estucturar la página web en construcción.

![imagen](../imagenes/capitulo3/solo_estructura.png)

![imagen](../imagenes/capitulo3/estructura_html.png)

Paso 7. Crear los enlaces de navegación.

        Usa la etiqueta <nav></nav> y dentro de ella las etiquetas <a href="#">contenido<a/>, el signo #
        significa, "aun no esta decidido el enlace de la página a visitar". 
        Define un enlace para la página de contacto en vez de un nivel <h2>, tal y como se ve en las siguientes imágenes.

        Sugerencia:  puedes usar la combinación de teclas shit-alt-flechaAbajo para copiar una o mas veces la línea donde
        esta el cursor.

![imagen](../imagenes/capitulo3/enlaces_1.png)

![imagen](../imagenes/capitulo3/enlaces_2.png)

Paso 8. Añadir las imágenes que requiera la página web. 

        Existen diferentes servicios de imágenes precreadas, por ejemplo Tabler Icons https://tablericons.com/, Hero Icons
        https://heroicons.com/ y Font Awesome https://fontawesome.com/, desde donde se pueden copiar y pegar las imágenes.

        Añade abajo de la barra de navegación una imagen de fondo usando la etiqueta <img src="nombre de la imagen">

        Añade un icono desde Table Icons, busca uno que se llame map-pin, dale clic en copiar y pégalo abajo del encabezado
        Diseño y Desarrollo web.

![imagen](../imagenes/capitulo3/imagenes_1.png)

![imagen](../imagenes/capitulo3/elegir_icono.png)

        Agrega los iconos "pallet", "brand-android", "brand-apple", "brand-shopee" abajo de cada una de los encabezados de 
        servicios.

![imagen](../imagenes/capitulo3/iconos_servicios.png)

![imagen](../imagenes/capitulo3/imagenes_2.png)

        La página al final de esta práctica se deberá ver asi:

![image](../imagenes/capitulo3/final_capitulo3.png)

Paso 9. Definir el formulario.

        Cambia el enlace de "Contacto" nuevamente por un encabezado tipo <h2>.
        Agrega la etiqueta <form></form> despues del encabezaddo de Contacto, aqui van los campos del formulario.
        Define un grupo de campos con la etiqueta <fieldset></fieldset> y dentro de ella agrega una titulo con la etiqueta 
        <legend></legend>.
        Agrega las siguientas etiquetas por pares <label>nombre de campo</label> <input type="tipo de entrada text, email, tel"/>
        de acuerdo a la información que se desee capturar. 
        Cada pareja <label><input> deberán ir dentro de una etiqueta división, <div></div> para que aparezcan una por linea.
        
        Deberá verse tal y como se muestra en la siguiente imagen.

![image](../imagenes/capitulo3/campos_con_divs.png)

![image](../imagenes/capitulo3/campos_divs_imagen.png)
    
### Resultado esperado

![imagen](../imagenes/capitulo3/objetivo_visual.png)


