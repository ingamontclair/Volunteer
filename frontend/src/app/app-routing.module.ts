import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; //Added
import { WeatherStationsComponent } from './weather-stations/weather-stations.component'; //Added
import { WeatherComponent } from './weather/weather.component'; //Added
import { ClimateComponent } from './climate/climate.component'; //Added

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'weather-stations',
    component: WeatherStationsComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'climate',
    component: ClimateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
