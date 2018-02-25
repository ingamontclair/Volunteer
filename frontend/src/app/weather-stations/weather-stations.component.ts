import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather-stations',
  templateUrl: './weather-stations.component.html',
  styleUrls: ['./weather-stations.component.css']
})
export class WeatherStationsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { }

  ngOnInit() {
  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}
