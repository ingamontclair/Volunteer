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
  new_york_temp_0118: any[] = [];
  hdd_cdd_avg: any[] = [];
  naive_est: any[] = [];
  perfect_est: any[] = [];
  chart = [];

 // Create an instance of the DataService through dependency injection

  constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) {
  //this._dataService.getHDD_janz18().subscribe(res => this.hdd_janz18 = res);
  let new_york_temp_0118 : Array<number>;
  let hdd_cdd_avg : Array<number>;
  let naive_est : Array<number>;
  let perfect_est : Array<number>;
  }

  ngOnInit(){
  console.log("Printing using array object.....");
      this._dataService.tempNYjan18()
      .subscribe(res => {
         this.new_york_temp_0118 = res['data'].map(res =>res.hdd);
         console.log(this.new_york_temp_0118);
this.perfect_est = this.new_york_temp_0118.slice(); //ger the data
this.perfect_est.fill(this.new_york_temp_0118[this.new_york_temp_0118.length-1]);//fill the temp array defined above with  the last day data
  console.log(this.perfect_est);
         })
      this._dataService.hddNY_avg()
      .subscribe(res => {this.hdd_cdd_avg = res['data'].map(res =>res.hdd); console.log(this.hdd_cdd_avg);})
      this._dataService.naive_est()
      .subscribe(res => {this.naive_est = res['data'].map(res =>res.hdd); console.log(this.naive_est);})

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
		            	{
                    data: this.new_york_temp_0118,
			              borderColor: '#00ffe9',
			              fill: false
			            },
		            	{
                    data: this.hdd_cdd_avg,
			              borderColor: '#ff0000',
			              fill: false
			            },
			            {
                    data: this.naive_est,
                  	borderColor: '#00ff00',
                    fill: false
                  },
                  {
                    data: this.perfect_est,
                    borderColor: '#ffff00',
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
