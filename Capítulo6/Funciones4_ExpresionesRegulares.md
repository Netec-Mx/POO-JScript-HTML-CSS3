# Demo / POC — Expresiones Regulares y Búsqueda de Patrones en JavaScript

<br/><br/>

## Objetivos

* Comprender qué es una expresión regular.
* Buscar texto usando patrones.
* Reemplazar texto automáticamente.
* Probar ejemplos rápidos en Node.js o consola del navegador.

<br/><br/>

# Tabla de Ayuda

| Función     | Descripción                  |
| ----------- | ---------------------------- |
| `RegExp()`  | Crea una expresión regular   |
| `match()`   | Busca coincidencias en texto |
| `replace()` | Reemplaza texto encontrado   |


<br/><br/>

# ¿Qué es una Expresión Regular?

Una expresión regular (Regex) es un patrón de búsqueda.

Sirve para:

* Buscar texto
* Validar datos
* Reemplazar contenido
* Detectar formatos

<br/><br/>

# Ejemplo visual

```text id="v5m2k7"

Texto:
Hola JavaScript Hola JS

Patrón:
Hola

Coincidencias:
Hola
Hola
```

<br/><br/>

# 1. `RegExp()`

Crea un objeto de expresión regular.

<br/><br/>

## Ejemplo 

```javascript 
let patron = new RegExp("hola");

console.log(patron);
console.log(typeof patron);
console.log(patron instanceof RegExp);
```


## Forma corta más usada

También puede escribirse así:

```javascript id="c6p4k2"
let patron = /hola/;
```

<br/><br/>

## 2. `match()`

Busca coincidencias dentro de una cadena. Devuelve un arreglo con las coincidencias encontradas.

## Ejemplo

```javascript id="w7m1u4"
let texto = "Hola JavaScript javaScript";

let resultado = texto.match(/JavaScript/);
console.log(resultado);

```

<br/><br/>

## Ejemplo 2 — Buscar varias coincidencias

La bandera:

```text 
g significa global
```

<br/>

```javascript id="n8v2k6"
let texto = "hola hola hola";

let resultado = texto.match(/hola/g);

console.log(resultado);
```

<br/>

## Ejemplo 3 — Ignorar mayúsculas/minúsculas

La bandera:

```text 
i ignore case
```

<br/><br/>

```javascript id="k5u1v9"
let texto = "Hola hOLA HOLA";

let resultado = texto.match(/hola/gi);

console.log(resultado);
```

<br/><br/>

## 3. `replace()`

Reemplaza texto encontrado.

<br/>

# Ejemplo 

```javascript id="p7x2m4"
let texto = "Hola Mundo";

let nuevo = texto.replace("Mundo", "JavaScript");

console.log(nuevo);
```

<br/>

## Ejemplo con Expresión Regular

```javascript 
let texto = "rojo azul rojo";
let nuevo = texto.replace(/rojo/g, "verde");

console.log(nuevo);
```

<br/><br/>

# Ejemplo 

```javascript id="t3x7m9"
console.log("REGEXP");

let patron = new RegExp("Java");

console.log(patron);

console.log("----------------");

console.log("MATCH");

let texto = "Java JavaScript Java";

let resultado = texto.match(/Java/g);

console.log(resultado);

console.log("----------------");

console.log("REPLACE");

let nuevoTexto = texto.replace(/Java/g, "JS");

console.log(nuevoTexto);
```

---

<br/><br/>

Cuando hablamos de expresiones regulares en JavaScript, también aplican los metacaracteres de Regex.

JavaScript implementa su propio motor de expresiones regulares y utiliza prácticamente los mismos conceptos clásicos de Regex que existen en otros lenguajes.

<br/>

# ¿Qué son los metacaracteres?

Son símbolos especiales que tienen significado dentro de una expresión regular.

NO representan texto literal.

Representan reglas o patrones.

<br/>

# Ejemplo 

## Texto

```text 
hola123
```

## Regex

```javascript 
/\d/
```

<br/>

# ¿Qué significa `\d`?

```text id="v7u1k5"
cualquier dígito numérico
```

Entonces encuentra:

```text id="j3p8x2"
1
```

<br/>

# Ejemplo en JavaScript

```javascript id="r9u5m4"
let texto = "hola123";

console.log(texto.match(/\d/g));
```

<br/><br/>

# Metacaracteres más comunes en JavaScript

| Metacarácter | Significado         |
| ------------ | ------------------- |
| `.`          | Cualquier carácter  |
| `\d`         | Dígito              |
| `\D`         | No dígito           |
| `\w`         | Letra/número/_      |
| `\W`         | No alfanumérico     |
| `\s`         | Espacio en blanco   |
| `\S`         | No espacio          |
| `^`          | Inicio              |
| `$`          | Final               |
| `*`          | 0 o más             |
| `+`          | 1 o más             |
| `?`          | Opcional            |
| `{n}`        | Exactamente n veces |
| `{n,m}`      | Entre n y m veces   |
| `[]`         | Conjunto            |
| `()`         | Grupo               |
| `\|`         | OR lógico           |
| `\b`         | Límite de palabra   |

<br/><br/>

# Ejemplos 

# 1. `\d`

## Buscar números

```javascript id="y4u9k2"
let texto = "abc123";
console.log(texto.match(/\d/g));
```

<br/>

# 2. `\w`

## Buscar letras y números

```javascript id="u3m7p4"
let texto = "Hola_123";

console.log(texto.match(/\w/g));
```

<br/>

## 3. `.`

## Cualquier carácter

```javascript id="n1x5u8"
let texto = "abc";

console.log(texto.match(/./g));
```

<br/>

# 4. `+`

## Uno o más

```javascript id="w7u4k1"
let texto = "111222";

console.log(texto.match(/\d+/g));
```

<br/>

## 5. `*` Cero o más

```javascript id="b2u8m6"
/a*/
```

Puede encontrar:

* `"a"`
* `"aa"`
* `"aaa"`
* incluso vacío

<br/>

# 6. `^` y `$`

## Inicio y final

```javascript id="p4x1u7"
let texto = "JavaScript";

console.log(/^Java/.test(texto));
```

<br/>


# 7. `[]`

## Conjunto de caracteres

```javascript id="x6p2u5"
let texto = "abc123";

console.log(texto.match(/[a-z]/g));
```

<br/>

# 8. `|`

## OR lógico

```javascript id="d9u4m1"
let texto = "gato";

console.log(texto.match(/gato|perro/));
```


<br/>

## Notas:

Las expresiones regulares pueden escribirse de dos formas:


### Forma literal (más usada)

```javascript  
/hola/
```

<br/>

# Constructor RegExp

```javascript  
new RegExp("hola")
```

<br/>

# Diferencia importante con `\`

Cuando usas `RegExp()` necesitas escapar doble.

<br/>

# Ejemplo

## Literal

```javascript id="f6u1m9"
/\d/
```

<br/>

## Constructor

```javascript id="a3x8p2"
new RegExp("\\d")
```

Porque:

```text 
\ es carácter especial en strings
```

<br/><br/>

# Ejemplo completo

```javascript id="q7u2m5"
let texto = "Usuario123";

console.log(texto.match(/\d/g));
console.log(texto.match(/\w/g));
console.log(texto.match(/[A-Z]/g));
```

<br/><br/>

# Conclusión

En JavaScript las expresiones regulares incluyen:

* metacaracteres
* cuantificadores
* grupos
* rangos
* banderas
* validaciones
* reemplazos
* búsquedas complejas

JavaScript soporta Regex bastante completo y moderno.
