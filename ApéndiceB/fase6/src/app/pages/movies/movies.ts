import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { MovieList } from '../../components/movie-list/movie-list';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [Header, MovieList],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  peliculas: Pelicula[] = [
    {
      id: 1,
      titulo: 'Batman Begins',
      descripcion: 'Origen de Batman.',
      imagen: 'https://picsum.photos/300/200?random=1'
    },
    {
      id: 2,
      titulo: 'Interstellar',
      descripcion: 'Viaje espacial.',
      imagen: 'https://picsum.photos/300/200?random=2'
    },
    {
      id: 3,
      titulo: 'Matrix',
      descripcion: 'Mundo virtual.',
      imagen: 'https://picsum.photos/300/200?random=3'
    }
  ];

}
