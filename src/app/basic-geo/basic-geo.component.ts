import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import map from '../../assets/basic-map.json';

@Component({
  selector: 'app-basic-geo',
  templateUrl: './basic-geo.component.html',
  styleUrls: ['./basic-geo.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class BasicGeoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const projection = d3.geoEquirectangular()
      .scale(200)
      .translate([200, 150]);

    const geoGenerator = d3.geoPath()
      .projection(projection);

    function update(geojson) {
      const u = d3.select('#content g.map')
        .selectAll('path')
        .data(geojson.features);

      u.enter()
        .append('path')
        .attr('d', geoGenerator);
    }

    update(map);
  }

}
