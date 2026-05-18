import { Component, Input } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCard],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  @Input({ required: true })
  peliculas!: Pelicula[];
}
