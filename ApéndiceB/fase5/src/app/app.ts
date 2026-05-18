import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header';
import { MovieList } from './componentes/movie-list/movie-list';
import { Favorites } from './paginas/favorites/favorites';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, MovieList, Favorites],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
