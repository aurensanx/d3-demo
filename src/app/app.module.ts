import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilmsComponent} from './films/films.component';
import {ShapeComponent} from './shape/shape.component';
import {SelectionComponent} from './selection/selection.component';
import { RotatingGlobeComponent } from './rotating-globe/rotating-globe.component';
import { BasicGeoComponent } from './basic-geo/basic-geo.component';
import { AfricaComponent } from './africa/africa.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    ShapeComponent,
    SelectionComponent,
    RotatingGlobeComponent,
    BasicGeoComponent,
    AfricaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
