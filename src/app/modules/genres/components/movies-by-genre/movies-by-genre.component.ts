import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GenreMovieListService} from "../../services/movie-by-genre.service";
import {IMovie} from "../../../../intarfaces/IMovie";


@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {
  movies: IMovie[]
  page: number = 1

  constructor(private genreMovieListService: GenreMovieListService,
              private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.genreMovieListService.getMoviesWithGenre(id, this.page).subscribe(responce => {
        const {results} = responce
        this.movies = results
      })

    })
  }

  left(): void {
    if (this.page > 1 && this.page <= 500) {
      --this.page
      this.activatedRoute.params.subscribe(({id}) => {
        this.genreMovieListService.getMoviesWithGenre(id, this.page).subscribe(responce => {
          const {results} = responce
          this.movies = results
        })

      })
    }
  }

  right(): void {
    if (this.page > 0 && this.page <= 500) {
      ++this.page
      this.activatedRoute.params.subscribe(({id}) => {
        this.genreMovieListService.getMoviesWithGenre(id, this.page).subscribe(responce => {
          const {results} = responce
          this.movies = results
        })

      })
    }
  }

  goTo(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.genreMovieListService.getMoviesWithGenre(id, this.page).subscribe(responce => {
        const {results} = responce
        this.movies = results
      })

    })
  }
}


