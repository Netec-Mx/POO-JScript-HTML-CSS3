import { Component, computed, effect, inject, signal } from '@angular/core';
import { Peliculas } from '../../services/peliculas';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCard],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {

  peliculasService = inject(Peliculas);

  busqueda = signal('');
  genero = signal('Todos');

  constructor() {
    effect(() => {
      if (this.peliculasService.peliculas().length === 0) {
        this.peliculasService.cargarPeliculas();
      }
    });
  }

  generos = computed(() => {
    const generos = this.peliculasService.peliculas().map(p => p.genero);
    return ['Todos', ...new Set(generos)];
  });

  peliculasFiltradas = computed(() => {
    const texto = this.busqueda().toLowerCase();
    const generoSeleccionado = this.genero();

    return this.peliculasService.peliculas().filter(pelicula => {
      const coincideTexto =
        pelicula.titulo.toLowerCase().includes(texto) ||
        pelicula.descripcion.toLowerCase().includes(texto);

      const coincideGenero =
        generoSeleccionado === 'Todos' ||
        pelicula.genero === generoSeleccionado;

      return coincideTexto && coincideGenero;
    });
  });

  actualizarBusqueda(event: Event) {
    const input = event.target as HTMLInputElement;
    this.busqueda.set(input.value);
  }

  actualizarGenero(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.genero.set(select.value);
  }
}
