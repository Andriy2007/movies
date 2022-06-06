import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesByGenreComponent} from "./components/movies-by-genre/movies-by-genre.component";
import {HttpClientModule} from "@angular/common/http";



const routes: Routes = [
  {path: ':id', component: MoviesByGenreComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
})
export class GenresRoutingModule { }
