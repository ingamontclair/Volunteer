import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule }   from '@angular/forms';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { HttpClientModule } from '@angular/common/http';
import { AtlantaComponent } from './atlanta/atlanta.component';
import { WeathervsderivativesComponent } from './weathervsderivatives/weathervsderivatives.component';
import { HistoricalWeatherComponent } from './historical-weather/historical-weather.component';
import { HddCddComponent } from './hdd-cdd/hdd-cdd.component';
import { PredictionsComponent } from './predictions/predictions.component';
import {DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContainerComponent,
    AtlantaComponent,
    WeathervsderivativesComponent,
    HistoricalWeatherComponent,
    HddCddComponent,
    PredictionsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BsDatepickerModule.forRoot(),
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
