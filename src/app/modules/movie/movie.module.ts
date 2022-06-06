import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {MoviesRoutingModule} from "./movie-routing.module";
import { MovieComponent } from './components/movie/movie.component';
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieComponent,
  ],
    imports: [
        CommonModule,
        MoviesRoutingModule,
      FormsModule,

    ],
})
export class MoviesModule { }
