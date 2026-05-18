import { Injectable, signal } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root',
})
export class Peliculas {
  peliculas = signal<Pelicula[]>([]);
  loading = signal(true);

  cargarPeliculas() {
    setTimeout(() => {
      this.peliculas.set([
        {
          id: 1,
          titulo: 'Interstellar',
          genero: 'Ciencia ficción',
          descripcion: 'Un grupo de exploradores viaja a través de un agujero de gusano para buscar un nuevo hogar para la humanidad.',
          imagen: 'https://picsum.photos/300/200?random=1',
        },
        {
          id: 2,
          titulo: 'Batman Begins',
          genero: 'Acción',
          descripcion: 'Bruce Wayne inicia su camino para convertirse en Batman y proteger Ciudad Gótica.',
          imagen: 'https://picsum.photos/300/200?random=2',
        },
        {
          id: 3,
          titulo: 'Coco',
          genero: 'Animación',
          descripcion: 'Miguel viaja al mundo de los muertos para descubrir la historia de su familia.',
          imagen: 'https://picsum.photos/300/200?random=3',
        },
        {
          id: 4,
          titulo: 'Titanic',
          genero: 'Drama',
          descripcion: 'Una historia de amor ocurre durante el trágico viaje del famoso barco Titanic.',
          imagen: 'https://picsum.photos/300/200?random=4',
        },
      ]);

      this.loading.set(false);
    }, 1200);
  }
}
