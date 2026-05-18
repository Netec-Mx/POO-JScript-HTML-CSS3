import { Component } from '@angular/core';
import { MovieList } from '../../components/movie-list/movie-list';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieList],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {}
