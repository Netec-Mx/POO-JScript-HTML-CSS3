import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pelicula } from '../models/pelicula';

//     'https://dummyjson.com/products'
//     'https://ghibliapi.vercel.app/films' trae UUID

@Injectable({
  providedIn: 'root'
})
export class PeliculasApiService {

  private http = inject(HttpClient);

  obtenerPeliculas() {
    return this.http.get<any>(
    'https://ghibliapi.vercel.app/films'
    );
  }

  mapearPeliculas(data: any[]): Pelicula[] {

    return data.map((pelicula, index) => {

    return {
        id: index + 1,
        titulo: pelicula.title,
        descripcion: pelicula.description,
        imagen: pelicula.image
      };
    });
  }

}