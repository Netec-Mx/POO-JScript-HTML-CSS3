import { Injectable, signal } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root',
})
export class Favoritos {

  favoritos = signal<Pelicula[]>([]);

  alternarFavorito(pelicula: Pelicula) {

    const existe = this.favoritos()
      .some(p => p.id === pelicula.id);

    if (existe) {

      this.favoritos.update(lista =>
        lista.filter(p => p.id !== pelicula.id)
      );

    } else {

      this.favoritos.update(lista => [
        ...lista,
        pelicula
      ]);

    }

  }

  esFavorito(id: number): boolean {

    return this.favoritos()
      .some(p => p.id === id);

  }

}
