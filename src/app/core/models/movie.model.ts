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

export class Movie {
}
