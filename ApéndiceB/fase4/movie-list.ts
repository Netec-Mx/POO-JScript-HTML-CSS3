import { Component, signal } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCard],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  peliculas = signal<Pelicula[]>([
    {
      id: 1,
      titulo: 'Batman Begins',
      descripcion: 'Origen de Batman dirigido por Christopher Nolan.',
      imagen: 'https://picsum.photos/300/200?random=1'
    },
    {
      id: 2,
      titulo: 'Interstellar',
      descripcion: 'Exploración espacial y relatividad.',
      imagen: 'https://picsum.photos/300/200?random=2'
    },
    {
      id: 3,
      titulo: 'The Matrix',
      descripcion: 'La realidad no es lo que parece.',
      imagen: 'https://picsum.photos/300/200?random=3'
    }
  ]);

}
