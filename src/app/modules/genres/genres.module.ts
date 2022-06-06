import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';

import { MoviesByGenreComponent } from './components/movies-by-genre/movies-by-genre.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MovieByGenreComponent} from "./components/movie-by-genre/movie-by-genre.component";





@NgModule({
  declarations: [
    MoviesByGenreComponent,
    MovieByGenreComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class GenresModule { }
