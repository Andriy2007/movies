import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IDetailsMovie} from "../../../../intarfaces/IDetailsMovies";
import {MovieDetailsService} from "../../services/movie-details.service";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolver implements Resolve<IDetailsMovie> {

  constructor(private movieDetailsService: MovieDetailsService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDetailsMovie> | Promise<IDetailsMovie> | IDetailsMovie {
    const id = route.params['id'];
    return this.movieDetailsService.getMovieDetails(id)
  }

}
