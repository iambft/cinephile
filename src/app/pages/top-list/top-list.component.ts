import {Component, HostBinding, OnInit} from '@angular/core';
import {ApiService} from '../../core/http/api.service';
import {IMovie} from '../../core/models/movie.model';
import {LikedMovieStoreService} from '../../core/services/liked-movie-store.service';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.scss']
})
export class TopListComponent implements OnInit {
  public movies: IMovie[];
  public loading: boolean;

  constructor(public api: ApiService, public movieStore: LikedMovieStoreService) { }

  ngOnInit() {
    const isFull = true;
    this.loading = true;
    this.api.getTopMovies(isFull)
      .subscribe(
        movies => {
          this.movies = movies || [];
        },
        error => {},
        () => {
        this.loading = false;
        });
  }

  public setLike([status, movie]): void {
    console.log(status, movie);
    if (status) {
      this.movieStore.addMovieToLiked(movie);
    } else {
      this.movieStore.removeMovieFromLiked(movie);
    }
  }
}
