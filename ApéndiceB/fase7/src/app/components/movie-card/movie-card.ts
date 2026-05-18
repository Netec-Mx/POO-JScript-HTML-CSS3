import { Component, Input } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [TruncatePipe],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  @Input({ required: true })
  pelicula!: Pelicula;

}
