import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import {BaseType} from 'd3';

@Component({
  selector: 'app-rotating-globe',
  templateUrl: './rotating-globe.component.html',
  styleUrls: ['./rotating-globe.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RotatingGlobeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    let geojson: any = {};

    const node: any = d3.select('#content canvas').node();

    const context = node.getContext('2d');

    const projection = d3.geoOrthographic()
      .scale(300);

    const geoGenerator = d3.geoPath()
      .projection(projection)
      .pointRadius(4)
      .context(context);

    let yaw = 300;

    function update() {
      projection.rotate([yaw, -45]);

      context.clearRect(0, 0, 800, 600);

      context.lineWidth = 0.5;
      context.strokeStyle = '#333';

      context.beginPath();
      geoGenerator({type: 'FeatureCollection', features: geojson.features});
      context.stroke();

      // Graticule
      const graticule = d3.geoGraticule();
      context.beginPath();
      context.strokeStyle = '#ccc';
      geoGenerator(graticule());
      context.stroke();

      yaw -= 0.2;
    }


    // REQUEST DATA
    // tslint:disable-next-line:max-line-length
    d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json')
      .then(data => {
        geojson = data;
        window.setInterval(update, 100);
      });
  }

}
