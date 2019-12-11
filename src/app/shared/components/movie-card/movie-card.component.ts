import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../../../core/http/api.service';
import {IMovie} from '../../../core/models/movie.model';
import {LikedMovieStoreService} from '../../../core/services/liked-movie-store.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @HostBinding('class.movie-card-holder') private readonly movieCardHolder = true;

  @Input() movie: IMovie;
  @Output() setLikeMovie = new EventEmitter();

  public likedColor: string;
  public likedStatus: boolean;

  constructor(public api: ApiService, public movieStore: LikedMovieStoreService) {}

  ngOnInit() {
    const idIMDB = this.movie.idIMDB;
    const likedMovies = this.movieStore.movies;
    const status = !!_.find(likedMovies, {idIMDB} );
    this.showLike(status);
  }

  public openDirectorPage(directorId: string): void {
    window.open(`https://www.imdb.com/name/${directorId}/`);
  }

  public setLike(oldStatus: boolean, item: IMovie): void {
    const status = !oldStatus;
    this.showLike(status);
    this.setLikeMovie.emit([status, item]);
  }

  public showLike(status) {
    this.likedStatus = status;
    this.likedColor = status ? 'warn' : '';
  }

  public showTrailer(title: string): void {
    this.api.getTrailer(title)
      .subscribe(data => {
        alert('do not work yet');
      });
  }
}
