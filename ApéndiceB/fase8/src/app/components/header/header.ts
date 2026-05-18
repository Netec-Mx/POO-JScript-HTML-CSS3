import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Favoritos } from '../../services/favoritos';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    favoritos = inject(Favoritos);
 }
