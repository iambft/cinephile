import {Deserializable} from './deserializable.model';

interface IMovieDirector {
  name: string;
  id: string;
}

interface IMovieSimple {
  title: string;
  year: string;
  urlIMDB: string;
  idIMDB: string;
  rating: string;
  ranking: number;
}

export interface IMovie extends IMovieSimple {
  releaseDate: string;
  directors: IMovieDirector[];
  runtime: string;
  urlPoster: string;
  countries: string[];
  languages: string[];
  genres: string[];
  plot: string;
  simplePlot: string;
  metascore: string;
  rated: string;
  votes: string;
  type: string;

}

export class Movie implements Deserializable, IMovie {
  public countries;
  public directors;
  public genres;
  public languages;
  public metascore;
  public plot;
  public rated;
  public releaseDate;
  public runtime;
  public simplePlot;
  public type;
  public urlPoster;
  public votes;
  public idIMDB;
  public ranking;
  public rating;
  public title;
  public urlIMDB;
  public year;

  constructor() {}

  deserialize(input: any) {
    // noinspection TypeScriptValidateTypes
    Object.assign(this, input);
    return this;
  }
}
