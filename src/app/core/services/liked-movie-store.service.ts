import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IMovie} from '../models/movie.model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class LikedMovieStoreService {
  private readonly moviesSubj = new BehaviorSubject<IMovie[]>([]);
  readonly $movies = this.moviesSubj.asObservable();

  private readonly storageKey = 'my-liked-movies-from-imdb';

  constructor() {
    this.movies = _.compact(this.getLikedMoviesFromLocalStorage());
  }

  private getLikedMoviesFromLocalStorage(): IMovie[] {
    return JSON.parse(localStorage.getItem(this.storageKey)) || [];
  }

  private setLikedMoviesToLocalStorage(movies: IMovie[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(movies));
  }

  get movies(): IMovie[] {
    return  this.moviesSubj.getValue();
  }

  set movies(val: IMovie[]) {
    this.moviesSubj.next(val);
  }

  public addMovieToLiked(movie: IMovie): void {
    this.movies = [
      ...this.movies,
      movie
    ];
    this.setLikedMoviesToLocalStorage(this.movies);
  }

  public removeMovieFromLiked(removedMovie: IMovie): void {
    this.movies = this.movies.filter(movie => movie.idIMDB !== removedMovie.idIMDB);
    this.setLikedMoviesToLocalStorage(this.movies);
  }
}
