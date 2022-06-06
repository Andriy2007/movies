import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../../contants/urls";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }

  private _apiKey: string = '?api_key=91f1bad541329fdda7bad9cf7f7c9c34';

  getAllMovies(page: number): Observable<any> {
    return this.httpClient.get<any>(urls.mainURL + urls.Movies + this._apiKey + `&page=${page}`)
  }
}

