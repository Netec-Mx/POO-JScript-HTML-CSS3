import { Injectable, signal } from '@angular/core';
import { Pelicula } from '../modelos/pelicula';

@Injectable({
  providedIn: 'root',
})
export class Favoritos {

  favoritos = signal<Pelicula[]>([]);

  agregarFavorito(pelicula: Pelicula) {
    const yaExiste = this.esFavorita(pelicula.id);

    if (!yaExiste) {
      this.favoritos.update(lista => [...lista, pelicula]);
    }
  }

  eliminarFavorito(id: number) {
    this.favoritos.update(lista =>
      lista.filter(pelicula => pelicula.id !== id)
    );
  }

  alternarFavorito(pelicula: Pelicula) {
    if (this.esFavorita(pelicula.id)) {
      this.eliminarFavorito(pelicula.id);
    } else {
      this.agregarFavorito(pelicula);
    }
  }

  esFavorita(id: number): boolean {
    return this.favoritos().some(pelicula => pelicula.id === id);
  }

  totalFavoritos(): number {
    return this.favoritos().length;
  }

}
