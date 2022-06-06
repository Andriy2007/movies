import { Component, OnInit } from '@angular/core';
import {IGenres} from "../../intarfaces/IGenres";
import {GenresService} from "../../services/genres.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: IGenres[];

  constructor(private genreService: GenresService) { }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(value => {
      this.genres = value.genres
      console.log(value.genres)
    })
  }

}
