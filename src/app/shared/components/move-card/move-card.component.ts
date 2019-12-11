import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ApiService} from '../../../core/http/api.service';

@Component({
  selector: 'app-move-card',
  templateUrl: './move-card.component.html',
  styleUrls: ['./move-card.component.scss']
})
export class MoveCardComponent implements OnInit {
  @HostBinding('class.movie-card-holder') private readonly movieCardHolder = true;

  @Input() movie: any;
  public liked: string;

  constructor(public api: ApiService) {}

  ngOnInit() {}

  public openDirectorPage(directorId: string): void {
    window.open(`https://www.imdb.com/name/${directorId}/`);
  }

  public setLiked(liked) {
    this.liked = liked ? '' : 'warn';
  }

  public showTrailer(title): void {
    this.api.getTrailer(title)
      .subscribe(data => {
        console.log(data);
      });
  }
}
