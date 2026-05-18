import { Component, Input, inject } from '@angular/core';
import { Pelicula } from '../../modelos/pelicula';
import { Favoritos } from '../../servicios/favoritos';


@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {

  @Input({ required: true }) pelicula!: Pelicula;

  favoritos = inject(Favoritos);

  alternarFavorito() {
    this.favoritos.alternarFavorito(this.pelicula);
  }

  esFavorita(): boolean {
    return this.favoritos.esFavorita(this.pelicula.id);
  }
}
