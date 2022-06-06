import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieDetailsResolver} from "./components/movie-details/movie-details.resolver";
import {HttpClientModule} from "@angular/common/http";
import {MoviesService} from "./services/movie.service";

const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: ':id', component: MovieDetailsComponent, resolve: {movieData: MovieDetailsResolver},}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [MoviesService, MovieDetailsResolver]
})
export class MoviesRoutingModule { }
