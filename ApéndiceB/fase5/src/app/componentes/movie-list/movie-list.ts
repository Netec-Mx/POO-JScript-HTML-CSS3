import { Component,signal } from '@angular/core';

import { MovieCard } from '../movie-card/movie-card';
import { Pelicula } from '../../modelos/pelicula';


@Component({
  selector: 'app-movie-list',
  standalone : true,
  imports: [MovieCard],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
    peliculas = signal<Pelicula[]>([
    {
      id: 1,
      titulo: 'Batman Begins',
      descripcion: 'El origen de Batman como héroe de Ciudad Gótica.',
      imagen: 'https://picsum.photos/300/200?random=1'
    },
    {
      id: 2,
      titulo: 'Interstellar',
      descripcion: 'Un viaje espacial para salvar a la humanidad.',
      imagen: 'https://picsum.photos/300/200?random=2'
    },
    {
      id: 3,
      titulo: 'Inception',
      descripcion: 'Una historia sobre sueños dentro de sueños.',
      imagen: 'https://picsum.photos/300/200?random=3'
    },
    {
      id: 4,
      titulo: 'The Matrix',
      descripcion: 'Un programador descubre la verdad sobre su realidad.',
      imagen: 'https://picsum.photos/300/200?random=4'
    }
  ]);
}
