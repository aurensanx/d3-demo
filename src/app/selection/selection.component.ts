import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    // d3.selectAll('circle')
    //   .style('fill', 'orange')
    //   .attr('r', () => 10 + Math.random() * 40);

    const scores = [
      {
        name: 'Andy',
        score: 25
      },
      {
        name: 'Beth',
        score: 39
      },
      {
        name: 'Craig',
        score: 42
      },
      {
        name: 'Diane',
        score: 35
      },
      {
        name: 'Evelyn',
        score: 48
      }
    ];

    d3.selectAll('circle')
      .data(scores)
      .attr('r', d => d.score);
  }

}
