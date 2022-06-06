import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IDetailsMovie} from "../../../../intarfaces/IDetailsMovies";



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  details: IDetailsMovie

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({movieData}) => {
      return this.details = movieData;
    })
  }

}
