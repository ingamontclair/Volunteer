import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-atlanta',
  templateUrl: './atlanta.component.html',
  styleUrls: ['./atlanta.component.css']
})
export class AtlantaComponent implements OnInit {

  // Define a users property to hold our user data
  cityHistoricalData_Atlanta: Array<any>;

  chart = [];

  // Create an instance of the DataService through dependency injection
  constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) {
      this._dataService.getUsers().subscribe(res => this.cityHistoricalData_Atlanta = res);
  }

  ngOnInit() {
      this._dataService.historicalWeather()
        .subscribe(res => {

            let temp_max = res['data'].map(res => res.temp_max);
            let temp_min = res['data'].map(res => res.temp_min);
            let temp_mean = res['data'].map(res => res.temp_mean);
            let alldates = res['data'].map(res => res.date);
            console.log(temp_max);
            console.log(temp_min);
            console.log(temp_mean);
            console.log(alldates);

            this.chart = new Chart('canvas',{
              type: 'line',
              data: {
                labels: alldates,
                datasets:[
                  {
                    data: temp_max,
                    borderColor: '#3cba9f',
                    fill: false
                  },
                  {
                    data: temp_min,
                    borderColor: '#ffcc00',
                    fill: false
                  },
                  {
                    data: temp_mean,
                    borderColor: '#ff0059',
                    fill: false
                  },
                ]
              },
              options: {
                responsive: true,
                // title: {
                //     display: true,
                //     text: 'Custom Chart Title'
                // },
                legend: {
                  display: false
                },
                scales: {
                  xAxes: [{
                    display: true,
                    scaleLable: {
                      display: true
                    }
                  }],
                  yAxes: [{
                    ticks: {
                      reverse: false,
                      max: 100
                    },
                    display: true,
                    scaleLable: {
                      display: true
                    }
                  }]
                }
              }
            });
        })
  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}