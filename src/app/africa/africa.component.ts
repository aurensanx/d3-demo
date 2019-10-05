import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import africa from '../../assets/africa.json';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AfricaComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    const projection = d3.geoMercator()
      .scale(400)
      .translate([200, 280])
      .center([0, 5]);

    const geoGenerator = d3.geoPath()
      .projection(projection);

    function handleMouseover(d) {

      const pixelArea = geoGenerator.area(d);
      const bounds = geoGenerator.bounds(d);
      const centroid = geoGenerator.centroid(d);
      const measure = geoGenerator.measure(d);

      d3.select('#content .info')
        .text(d.properties.name + ' (path.area = ' + pixelArea.toFixed(1) + ' path.measure = ' + measure.toFixed(1) + ')');

      d3.select('#content .bounding-box rect')
        .attr('x', bounds[0][0])
        .attr('y', bounds[0][1])
        .attr('width', bounds[1][0] - bounds[0][0])
        .attr('height', bounds[1][1] - bounds[0][1]);

      d3.select('#content .centroid')
        .style('display', 'inline')
        .attr('transform', 'translate(' + centroid + ')');
    }

    function update(geojson) {
      const u = d3.select('#content g.map')
        .selectAll('path')
        .data(geojson.features);

      u.enter()
        .append('path')
        .attr('d', geoGenerator)
        .on('mouseover', handleMouseover);
    }

    update(africa);
  }

}
