import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IGenresResponce} from "../intarfaces/IGenre.responce";
import {HttpClient} from "@angular/common/http";
import {urls} from "../contants/urls";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) {
  }

  private _apiKey: string = '?api_key=91f1bad541329fdda7bad9cf7f7c9c34';

  getGenres(): Observable<IGenresResponce> {
    return this.httpClient.get<IGenresResponce>(urls.mainURL + urls.genres + this._apiKey)
  }
}
