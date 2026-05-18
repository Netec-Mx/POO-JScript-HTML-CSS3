import { Component, inject } from '@angular/core';
import { MovieCard } from '../../components/movie-card/movie-card';
import { Favoritos } from '../../services/favoritos';

@Component({
  selector: 'app-favorites',
  imports: [MovieCard],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
    favoritos = inject(Favoritos);
}
