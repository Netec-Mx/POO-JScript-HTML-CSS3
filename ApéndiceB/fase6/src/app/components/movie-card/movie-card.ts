import { Component, inject, Input } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { Favoritos } from '../../services/favoritos';


@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {

  @Input({ required: true })
  pelicula!: Pelicula;

  favoritos = inject(Favoritos);

  toggleFavorito() {
    this.favoritos.alternarFavorito(this.pelicula);
  }

}
