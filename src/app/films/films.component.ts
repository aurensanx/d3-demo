import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

interface Film {
  title: string;
  year: number;
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  filmList: Film[] = [];

  constructor() {
  }

  ngOnInit() {
    d3.csv('/assets/films.csv', film => {
      // Do something with the data
      this.filmList.push({
        title: film.Film,
        year: +film.Year,
      });
      return film;
    });

  }

}
