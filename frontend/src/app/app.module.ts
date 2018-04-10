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
import { WeatherStationsComponent } from './weather-stations/weather-stations.component';
import { WeatherComponent } from './weather/weather.component';
import { ClimateComponent } from './climate/climate.component';
import { ToolsComponent } from './tools/tools.component';
import { HttpClientModule } from '@angular/common/http';
import { AtlantaComponent } from './atlanta/atlanta.component';
// import { GraphComponent } from './atlanta/graph.component';
import { WeathervsderivativesComponent } from './weathervsderivatives/weathervsderivatives.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContainerComponent,
    WeatherStationsComponent,
    WeatherComponent,
    ClimateComponent,
    ToolsComponent,
    AtlantaComponent,
    WeathervsderivativesComponent
    // GraphComponent
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
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
