import { Component, inject } from '@angular/core';
import { Favoritos } from '../../servicios/favoritos';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  favoritos = inject(Favoritos);
 }
