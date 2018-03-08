import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-weathervsderivatives',
  templateUrl: './weathervsderivatives.component.html',
  styleUrls: ['./weathervsderivatives.component.scss']
})
export class WeathervsderivativesComponent implements OnInit {

  // Define a users property to hold our user data
  hdd_janz18: Array<any>;
  new_york_temp_0118: Array<any>;
  chart = [];
 // Create an instance of the DataService through dependency injection
  constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) {
  this._dataService.getHDD_janz18().subscribe(res => this.hdd_janz18 = res);
  }

  ngOnInit(){
      this._dataService.historicalHDD_janz18()
        .subscribe(res => {
            console.log(res);
            let hdd_price = res['data'].map(res => res.price);
            let alldates = res['data'].map(res => res.date);
            console.log(hdd_price);
            console.log(alldates);
            this.chart = new Chart('canvas',{
              type: 'line',
              data: {
                labels: alldates,
                datasets:[
                  {
                    data: hdd_price,
                    borderColor: '#3cba9f',
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
                      min: 0,
                      max: 1200
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
