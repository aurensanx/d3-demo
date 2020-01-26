import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {

  // data = [[0, 50], [100, 80], [200, 40], [300, 60], [400, 30]];
  data: [number, number][] = [[0, 50], [100, 80], [200, 40], [300, 60], [400, 30]];

  constructor() {
  }

  ngOnInit() {

    const lineGenerator = d3.line();

    const lineGenerator2 = d3.line()
      .curve(d3.curveNatural);

    const pathString = lineGenerator(this.data);
    const pathString2 = lineGenerator2(this.data);

    console.log(pathString);

    d3.select('path#line')
      .attr('d', pathString);
    d3.select('path#curve')
      .attr('d', pathString2);

  }

}
