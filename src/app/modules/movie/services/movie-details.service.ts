import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IDetailsMovie} from "../../../intarfaces/IDetailsMovies";
import {urls} from "../../../contants/urls";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  private _apiKey: string = '?api_key=91f1bad541329fdda7bad9cf7f7c9c34';

  constructor(private httpClient: HttpClient) {
  }

  getMovieDetails(id: number): Observable<IDetailsMovie> {
    return this.httpClient.get<IDetailsMovie>(urls.mainURL + urls.detailsMovie + id + this._apiKey)
  }
}
