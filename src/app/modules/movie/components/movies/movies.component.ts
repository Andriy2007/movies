import { Component, OnInit } from '@angular/core';
import {IMovie} from "../../../../intarfaces/IMovie";
import {MoviesService} from "../../services/movie.service";
import {ActivatedRoute} from "@angular/router";




@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[]
  page: number = 1

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.moviesService.getAllMovies(this.page).subscribe(object => {
      const {page, results} = object
      this.movies = results
    })
  }

  left(): void {
    if (this.page > 1 && this.page <= 500) {
      --this.page
      this.moviesService.getAllMovies(this.page).subscribe(object => {
        const {page, results} = object
        this.movies = results
      })
    }
  }

  right(): void {
    if (this.page > 0 && this.page <= 500) {
      ++this.page
      this.moviesService.getAllMovies(this.page).subscribe(object => {
        const {page, results} = object
        this.movies = results
      })
    }
  }

  goTo(): void {
    if (this.page > 0 && this.page <= 500) {
      this.page
      this.moviesService.getAllMovies(this.page).subscribe(object => {
        const {page, results} = object
        this.movies = results
      })
    }
  }
}
