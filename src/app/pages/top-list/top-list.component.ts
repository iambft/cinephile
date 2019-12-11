import {Component, HostBinding, OnInit} from '@angular/core';
import {ApiService} from '../../core/http/api.service';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.scss']
})
export class TopListComponent implements OnInit {
  public movies: {}[];
  public loading: boolean;

  constructor(public api: ApiService) { }

  ngOnInit() {
    const isFull = true;
    this.loading = true;
    this.api.getTopMovies(isFull)
      .subscribe(movies => {
        this.movies = movies || [];
      },
        error => {},
        () => {
        this.loading = false;
        });
  }
}
