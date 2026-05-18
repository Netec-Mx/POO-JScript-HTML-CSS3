import { Component, inject, signal } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';
import { Pelicula } from '../../models/pelicula';
import { PeliculasApiService } from '../../services/peliculas-api';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCard],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  peliculas = signal<Pelicula[]>([]);

  cargando = signal(true);

  private peliculasService = inject(PeliculasApiService);

  constructor() {

    this.obtenerPeliculas();

  }

  obtenerPeliculas() {

    this.peliculasService
      .obtenerPeliculas()
      .subscribe({

        next: (respuesta) => {

          const peliculasMapeadas =
            this.peliculasService.mapearPeliculas(respuesta);

          this.peliculas.set(peliculasMapeadas);

          this.cargando.set(false);

        },

        error: (error) => {

          console.error(error);

          this.cargando.set(false);

        }

      });

  }
}
