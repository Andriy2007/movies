import {Component, Input, OnInit} from '@angular/core';
import {IGenres} from "../../intarfaces/IGenres";
import {Router} from "@angular/router";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input()
  genre: IGenres;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  genres() {
    this.router.navigate([`genre/${this.genre.id}`])
  }
}

