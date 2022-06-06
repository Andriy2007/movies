import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../../contants/urls";
import {IMovieResponce} from "../../../intarfaces/IMovie.responce";

@Injectable({
  providedIn: 'root'
})
export class GenreMovieListService {
  private _apiKey: string = '&api_key=91f1bad541329fdda7bad9cf7f7c9c34';
  constructor(private httpClient:HttpClient) { }
  getMoviesWithGenre(movieId:number, page:number):Observable<IMovieResponce>{
    return this.httpClient.get<IMovieResponce>(urls.mainURL+urls.genreMovieList+movieId+this._apiKey+`&page=${page}`)
  }
}
