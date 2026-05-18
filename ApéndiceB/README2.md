
# POC/Demo: Contador reactivo con Signals en Angular

<br/><br/>

## Objetivo

Crear un contador reactivo usando `signal()` para mostrar cómo Angular actualiza la vista automáticamente cuando cambia el estado.

<br/>
<br/>

Conceptos:

* Estado
* Signals
* Lectura de signals
* Actualización con `.set()` y `.update()`
* Valores derivados con `computed()`
* Eventos en Angular
* Interpolación

<br/>

Angular define los signals como una forma de envolver un valor para que Angular pueda saber cuándo cambia y actualizar lo que depende de él. Los `computed` son valores derivados, de solo lectura, que se recalculan cuando cambian sus signals dependientes. 

<br/><br/>

## ¿Qué es el estado?

El **estado** es la información que puede cambiar mientras la aplicación está funcionando.

<br/>

En esta demo, el estado es:

```ts
contador = signal(0);
```

<br/>

Ese `0` no es solo un número. Es el valor actual del contador.

Cuando el usuario presiona botones, el estado cambia:

```ts
this.contador.update(valor => valor + 1);
```

Y cuando el estado cambia, Angular actualiza automáticamente la pantalla.

<br/>

## ¿Qué es un Signal?

Un **signal** es un contenedor reactivo de datos.

En lugar de tener esto:

```ts
contador = 0;
```

Usamos esto:

```ts
contador = signal(0);
```

La diferencia es que Angular puede "vigilar"  ese valor.

Para leerlo:

```ts
contador()
```

Para cambiarlo:

```ts
contador.set(10);
```

Para actualizarlo usando el valor anterior:

```ts
contador.update(valor => valor + 1);
```

<br/>

`computed()` permite crear valores reactivos derivados a partir de uno o varios signals.
Angular recalcula automáticamente el valor cuando cambian sus dependencias.

<br/>
<br/>


## Crear un nuevo proyecto

```bash
ng new contador-signals
cd contador-signals
ng serve -o
```

<br/>


Puedes usar:

```bash
ng new contador-signals --standalone --style=css
```

<br/>
<br/>

## Código completo

## `src/app/app.ts`

```ts
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  contador = signal(0);

  doble = computed(() => this.contador() * 2);

  mensaje = computed(() => {
    if (this.contador() === 0) {
      return 'El contador está en cero';
    }

    if (this.contador() > 0) {
      return 'El contador es positivo';
    }

    return 'El contador es negativo';
  });

  incrementar() {
    this.contador.update(valorActual => valorActual + 1);
  }

  decrementar() {
    this.contador.update(valorActual => valorActual - 1);
  }

  reiniciar() {
    this.contador.set(0);
  }
}
```

<br/>
<br/>

## `src/app/app.html`

```html
<main class="contenedor">
  <section class="card">
    <h1>Contador reactivo con Signals</h1>

    <p class="descripcion">
      Esta demo muestra cómo Angular actualiza la pantalla automáticamente
      cuando cambia el estado del contador.
    </p>

    <div class="contador">
      {{ contador() }}
    </div>

    <p class="mensaje">
      {{ mensaje() }}
    </p>

    <p>
      Doble del contador: <strong>{{ doble() }}</strong>
    </p>

    <div class="acciones">
      <button (click)="decrementar()">-1</button>
      <button (click)="reiniciar()">Reiniciar</button>
      <button (click)="incrementar()">+1</button>
    </div>
  </section>
</main>
```

<br/>
<br/>

## `src/app/app.css`

```css
.contenedor {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f6f8;
  font-family: Arial, sans-serif;
}

.card {
  width: 420px;
  padding: 32px;
  border-radius: 18px;
  background: white;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

h1 {
  margin-bottom: 12px;
  color: #222;
}

.descripcion {
  color: #666;
  font-size: 15px;
}

.contador {
  margin: 28px auto;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #1976d2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: bold;
}

.mensaje {
  font-size: 18px;
  font-weight: bold;
  color: #444;
}

.acciones {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
}

button {
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  background: #1976d2;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: #125aa0;
}
```

<br/><br/>

### Signal writable

```ts
contador = signal(0);
```

Es un signal que sí puede cambiar.

<br/>

### Leer el valor

```html
{{ contador() }}
```

Importante: se lee como función, con paréntesis.

<br/>

### Cambiar directamente

```ts
this.contador.set(0);
```

Reemplaza el valor actual.

<br/>

### Cambiar usando el valor anterior

```ts
this.contador.update(valorActual => valorActual + 1);
```

Es ideal para contadores porque depende del valor anterior.

<br/>

### Valor derivado

```ts
doble = computed(() => this.contador() * 2);
```

`doble` depende de `contador`. Si `contador` cambia, `doble` se actualiza automáticamente. Los `computed` son lazy y memoized: se calculan cuando se leen y Angular reutiliza el valor hasta que cambie alguna dependencia. ([Angular][1])

<br/><br/>

## Observaciones

Antes, con JavaScript tradicional, teníamos que cambiar el valor y luego actualizar manualmente el DOM. Con Angular y Signals, nosotros cambiamos el estado y Angular se encarga de reflejar el cambio en la pantalla.

El contador es el estado. Los botones modifican ese estado. La vista lee el estado usando `contador()`. Cuando el signal cambia, Angular sabe qué partes de la pantalla dependen de ese signal y las actualiza.

La idea importante es:

```ts
Estado cambia -> Angular reacciona -> Vista se actualiza
```

<br/><br/>

## Referencias Adicionales 

![Signals](https://angular.dev/guide/signals)  