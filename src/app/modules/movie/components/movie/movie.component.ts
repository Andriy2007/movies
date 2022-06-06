import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../../../intarfaces/IMovie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: IMovie;
  constructor() { }

  ngOnInit(): void {
  }

}
