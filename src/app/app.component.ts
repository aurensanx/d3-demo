import {Component} from '@angular/core';

interface RouteLink {
  title: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebas';

  routes: RouteLink[] = [
    {title: 'Films', path: 'films'},
    {title: 'Shape Generator', path: 'shape'},
    {title: 'Selection', path: 'selection'},
    {title: 'Rotating Globe', path: 'rotating-globe'},
    {title: 'Basic Geo Example', path: 'basic-geo'},
    {title: 'Africa', path: 'africa'},
  ];
}
