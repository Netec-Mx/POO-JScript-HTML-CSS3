import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { MovieList } from '../../components/movie-list/movie-list';
import { Favoritos } from '../../services/favoritos';

@Component({
  selector: 'app-favorites',
  standalone : true,
  imports: [Header, MovieList],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
    favoritos = inject(Favoritos);
}
