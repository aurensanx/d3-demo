import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FilmsComponent} from './films/films.component';
import {ShapeComponent} from './shape/shape.component';
import {SelectionComponent} from './selection/selection.component';
import {RotatingGlobeComponent} from './rotating-globe/rotating-globe.component';
import {BasicGeoComponent} from './basic-geo/basic-geo.component';
import {AfricaComponent} from './africa/africa.component';


const routes: Routes = [
  {path: 'films', component: FilmsComponent},
  {path: 'shape', component: ShapeComponent},
  {path: 'selection', component: SelectionComponent},
  {path: 'rotating-globe', component: RotatingGlobeComponent},
  {path: 'basic-geo', component: BasicGeoComponent},
  {path: 'africa', component: AfricaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
