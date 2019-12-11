import { Component, OnInit } from '@angular/core';
import {LikedMovieStoreService} from '../../core/services/liked-movie-store.service';
import {IMovie} from '../../core/models/movie.model';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent implements OnInit {
  public movies: IMovie[];

  constructor(public movieStore: LikedMovieStoreService) { }

  ngOnInit() {
    this.movieStore.$movies
      .subscribe(data => {
          console.log(data);
          this.movies = data;
        }
      );
  }

  public removeFromLiked([status, movie]): void {
    if (!status) {
      this.movieStore.removeMovieFromLiked(movie);
    }
  }
}
