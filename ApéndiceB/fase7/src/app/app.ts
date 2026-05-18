import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MovieList } from './components/movie-list/movie-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, MovieList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
