import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from "./app-routing.module";


import { HomeComponent } from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import {MovieDetailsResolver} from "./modules/movie/components/movie-details/movie-details.resolver";
import { GenreComponent } from './components/genre/genre.component';
import { GenresComponent } from './components/genres/genres.component';






@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        GenreComponent,
        GenresComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,

    ],
    providers: [MovieDetailsResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
