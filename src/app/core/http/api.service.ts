import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import * as _ from 'lodash';
import {IMovie, Movie} from '../models/movie.model';
import {APP_CONFIG, IAppConfig} from '../../app.config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient,
              @Inject(APP_CONFIG) private config: IAppConfig) { }

  private extractData(response: Response): object {
    return response || { };
  }

  private extractMovies(data: any): IMovie[] {
    return _.get(data, 'data.movies', []);
  }

  public getTopMovies(full = false): Observable<IMovie[]> {
    const isFull = full ? '1' : '0';
    const httpParams = {
      params: new HttpParams()
        .set('end', '20')
        .set('format', 'json')
        .set('data', isFull)
        .set('token', this.config.endpointToken)
    };
    return this.http.get(`${this.config.apiEndpoint}imdb/top`, {
      ...httpOptions,
      ...httpParams
    }).pipe(
      map(this.extractData),
      map(this.extractMovies),
      map(data => data.map((movie: Movie) => new Movie().deserialize(movie))));
  }

  public getTrailer(filmTitle: string): Observable<any> {
    const httpParams = {
      params: new HttpParams()
        .set('count', '8')
        .set('credit', '')
        .set('format', 'json')
        .set('token', this.config.endpointToken)
        .set('film', filmTitle)
    };
    return this.http.get(`${this.config.apiEndpoint}/trailerAddict/taapi`, {
      ...httpOptions,
      ...httpParams
    }).pipe(
      map(this.extractData));
  }
}
