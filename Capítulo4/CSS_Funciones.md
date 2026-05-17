# Demo / POC — Funciones y Gradientes en CSS

<br/><br/>

## Objetivo

Aprender a utilizar funciones modernas de CSS como:

* `calc()`
* `attr()`
* `linear-gradient()`
* `radial-gradient()`
* `repeating-linear-gradient()`
* `repeating-radial-gradient()`

<br/><br/>

# Resultado esperado

La página mostrará:

* Una tarjeta con tamaño calculado dinámicamente
* Texto generado desde atributos HTML
* Fondos con gradientes lineales
* Fondos radiales
* Patrones repetitivos usando gradientes

<br/><br/>

## Pregunta 

¿Cómo crear efectos visuales modernos en CSS sin usar imágenes externas?

<br/><br/>

# Explicación breve

CSS incluye funciones especiales que permiten:

* realizar cálculos,
* leer atributos HTML,
* generar imágenes dinámicas,
* crear patrones y fondos visuales.

Todo esto ocurre dentro del navegador.

<br/><br/>


# Tabla de ayuda

| Función                       | ¿Para qué sirve?           | Ejemplo                        |
| ----------------------------- | -------------------------- | ------------------------------ |
| `calc()`                      | Realiza cálculos CSS       | `width: calc(100% - 40px)`     |
| `attr()`                      | Obtiene atributos HTML     | `content: attr(data-info)`     |
| `linear-gradient()`           | Degradado lineal           | `linear-gradient(red, blue)`   |
| `radial-gradient()`           | Degradado circular         | `radial-gradient(yellow, red)` |
| `repeating-linear-gradient()` | Repite gradientes lineales | Rayas                          |
| `repeating-radial-gradient()` | Repite gradientes radiales | Círculos                       |


<br/><br/>


# Archivos de la práctica

```text 
index.html
styles.css
```

<br/><br/>

# index.html

```html id="3q3q7f"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Funciones CSS</title>

  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <header class="encabezado">
    <h1>Funciones CSS Modernas</h1>
    <p>Ejemplos de gradientes y funciones.</p>
  </header>

  <main>

    <section class="bloque">
      <h2>calc()</h2>

      <div class="caja-calc">
        Caja usando calc()
      </div>
    </section>

    <section class="bloque">
      <h2>attr()</h2>

      <p class="mensaje"
         data-info="Texto generado desde HTML usando attr()">
      </p>
    </section>

    <section class="bloque">
      <h2>linear-gradient()</h2>

      <div class="gradiente-lineal"></div>
    </section>

    <section class="bloque">
      <h2>radial-gradient()</h2>

      <div class="gradiente-radial"></div>
    </section>

    <section class="bloque">
      <h2>repeating-linear-gradient()</h2>

      <div class="rayas"></div>
    </section>

    <section class="bloque">
      <h2>repeating-radial-gradient()</h2>

      <div class="circulos"></div>
    </section>

  </main>

</body>
</html>
```

<br/><br/>

# styles.css

```css 
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: #f2f2f2;
}

.encabezado {
  background: linear-gradient(to right, #1e3c72, #2a5298);
  color: white;
  text-align: center;
  padding: 30px;
}

main {
  padding: 40px;
}

.bloque {
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

/* calc() */

.caja-calc {
  width: calc(100% - 80px);
  padding: 20px;
  background-color: steelblue;
  color: white;
}

/* attr() */

.mensaje::after {
  content: attr(data-info);
  color: crimson;
  font-weight: bold;
}

/* linear-gradient() */

.gradiente-lineal {
  height: 120px;

  background:
    linear-gradient(to right, blue, cyan);
}

/* radial-gradient() */

.gradiente-radial {
  height: 120px;

  background:
    radial-gradient(circle, yellow, red);
}

/* repeating-linear-gradient() */

.rayas {
  height: 120px;

  background:
    repeating-linear-gradient(
      45deg,
      black 0px,
      black 10px,
      white 10px,
      white 20px
    );
}

/* repeating-radial-gradient() */

.circulos {
  height: 120px;

  background:
    repeating-radial-gradient(
      circle,
      purple 0px,
      pink 20px
    );
}
```

<br/><br/>

# ¿Qué lograste hasta este punto?

* Crear fondos modernos sin imágenes
* Generar patrones visuales
* Leer atributos HTML desde CSS
* Realizar cálculos dinámicos
* Entender funciones avanzadas CSS

<br/><br/>

# Problemas comunes

| Problema                | Causa                                   |
| ----------------------- | --------------------------------------- |
| No aparece el gradiente | Error en la sintaxis                    |
| `attr()` no funciona    | Falta `::after` o `content`             |
| `calc()` no calcula     | Faltan espacios alrededor de operadores |
| Fondo no se ve          | El `div` no tiene altura                |


<br/><br/>

# Experimentos sugeridos

Cambiar:

```css "
to right
```

por:

```css"
45deg
```

<br/><br/>

Cambiar:

```css 
circle
```

por:

```css 
ellipse
```

<br/><br/>

# Resultado visual esperado

* Encabezado azul degradado
* Caja azul ajustable
* Texto rojo generado automáticamente
* Gradientes horizontales
* Efecto circular
* Rayas diagonales
* Patrones repetitivos

<br/><br/>


# Referencias 

* [MDN CSS Functions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions?utm_source=chatgpt.com)

* [MDN linear-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/
gradient/linear-gradient?utm_source=chatgpt.com)

* [MDN radial-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient?utm_source=chatgpt.com)

* [MDN calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc?utm_source=chatgpt.com)
