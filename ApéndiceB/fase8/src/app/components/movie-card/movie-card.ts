import { Component, inject, Input } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { Favoritos } from '../../services/favoritos';
import { TruncarPipe } from '../../pipes/truncar-pipe';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [TruncarPipe],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
 @Input({ required: true }) pelicula!: Pelicula;

  favoritos = inject(Favoritos);

  alternar() {
    this.favoritos.alternarFavorito(this.pelicula);
  }

}
