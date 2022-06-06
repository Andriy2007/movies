import {IMovie} from "./IMovie";

export interface IMovieResponce {
  page: number;
  results: IMovie [];
  total_pages: number;
  total_results: number;
}

