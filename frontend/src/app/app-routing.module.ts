import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; //Added
import { WeatherStationsComponent } from './weather-stations/weather-stations.component'; //Added

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'weather-stations',
    component: WeatherStationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }