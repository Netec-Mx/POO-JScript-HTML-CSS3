import { Injectable, signal } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root',
})
export class Favoritos {
  favoritos = signal<Pelicula[]>([]);

  alternarFavorito(pelicula: Pelicula) {
    const existe = this.esFavorita(pelicula.id);

    if (existe) {
      this.favoritos.update(lista =>
        lista.filter(item => item.id !== pelicula.id)
      );
    } else {
      this.favoritos.update(lista => [...lista, pelicula]);
    }
  }

  esFavorita(id: number): boolean {
    return this.favoritos().some(pelicula => pelicula.id === id);
  }

  total(): number {
    return this.favoritos().length;
  }

}
