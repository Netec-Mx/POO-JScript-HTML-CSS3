import { Component, inject } from '@angular/core';
import { Favoritos } from '../../servicios/favoritos';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {

    favoritos = inject(Favoritos);
}
