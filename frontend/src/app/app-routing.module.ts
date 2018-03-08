import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; //Added
import { WeatherStationsComponent } from './weather-stations/weather-stations.component'; //Added
import { WeatherComponent } from './weather/weather.component'; //Added
import { ClimateComponent } from './climate/climate.component'; //Added
import { ToolsComponent } from './tools/tools.component'; //Added
import { AtlantaComponent } from './atlanta/atlanta.component';
import { WeathervsderivativesComponent } from './weathervsderivatives/weathervsderivatives.component';

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
  },
  {
    path: 'tools',
    component: ToolsComponent
  },
  {
    path: 'weather-stations/atlanta',
    component : AtlantaComponent
  },
  {
    path: 'tools/weathervsderivatives',
    component : WeathervsderivativesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
