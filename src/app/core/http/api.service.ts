import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const endpoint = 'https://www.myapifilms.com/';
const token = '1a829fc2-bb62-4e96-b6cb-ddf49ebc6039';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  private extractData(response: Response): object {
    return response || { };
  }

  private extractMovies(data: any): object[] {
    return data.data.movies || [];
  }

  public getTopMovies(full = false): Observable<any> {
    const isFull = full ? '1' : '0';
    const httpParams = {
      params: new HttpParams()
        .set('end', '20')
        .set('format', 'json')
        .set('data', isFull)
        .set('token', token)
    };
    return this.http.get(`${endpoint}imdb/top`, {
      ...httpOptions,
      ...httpParams
    }).pipe(
      map(this.extractData),
      map(this.extractMovies));
  }

  public getTrailer(filmTitle: string): Observable<any> {
    const httpParams = {
      params: new HttpParams()
        .set('count', '8')
        .set('credit', '')
        .set('format', 'json')
        .set('token', token)
        .set('film', filmTitle)
    };
    return this.http.get(`${endpoint}/trailerAddict/taapi`, {
      ...httpOptions,
      ...httpParams
    }).pipe(
      map(this.extractData));
  }
}
