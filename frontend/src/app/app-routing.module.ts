import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; //Added
import { AtlantaComponent } from './atlanta/atlanta.component';
import { WeathervsderivativesComponent } from './weathervsderivatives/weathervsderivatives.component';
import { HistoricalWeatherComponent } from './historical-weather/historical-weather.component';
import { HddCddComponent } from './hdd-cdd/hdd-cdd.component';
import { PredictionsComponent } from './predictions/predictions.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'historical-weather',
    component: HistoricalWeatherComponent
  },
  {
    path: 'hdd-cdd',
    component: HddCddComponent
  },
  {
    path: 'predictions',
    component: PredictionsComponent
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
