import { Component, OnInit, Input , NgModule, OnChanges, SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atlanta',
  templateUrl: './atlanta.component.html',
  styleUrls: ['./atlanta.component.css']
})
export class AtlantaComponent implements OnInit{

  startDate: Date;
  endDate : Date;

  newDate: string;

  atlantaResponse:any[]=[];
  
  // Define a property to hold our city data
  cityHistoricalData_Atlanta: Array<any>;

  chart = [];
  temp_max_ny: any[] = [];


  // Create an instance of the DataService through dependency injection
  constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) { 
      let startDate : Date;
      let endDate : Date;
  }

  // Getting Date range from ui to get filtered data from database
  value = '';
  addDate(newDate) {
    if (newDate) {
      this.value= newDate;
      //StartDate
      this.startDate = new Date(this.value.split(" - ")[0]);
      //EndDate
      this.endDate = new Date(this.value.split(" - ")[1]);

      // Data Service which gets the data from database
      this._dataService.dateRangeFilter(this.startDate,this.endDate)
      .subscribe(res => {
          let atlantaResponse = res['data'].map(res => res);
          let alldates = [];
          let temp_max = [];
          let temp_min = [];
          let temp_mean = [];
          atlantaResponse.forEach((res) => {
            if(new Date(res.date) >= new Date(this.startDate) && new Date(res.date)<= new Date(this.endDate)){
              alldates.push(res.date);
              temp_max.push(res.temp_max);
              temp_min.push(res.temp_min);
              temp_mean.push(res.temp_mean);
            }
          });
          
          // Draw chart using the retrived data
          this.chart = new Chart('canvas',{
            type: 'line',
            data: {
              labels: alldates,
              datasets:[
                {
                  data: temp_max,
                  lable: "Temp_max",
                  borderColor: '#3cba9f',
                  fill: false
                },
                {
                  data: temp_min,
                  lable: "Temp_min",
                  borderColor: '#ffcc00',
                  fill: false
                },
                {
                  data: temp_mean,
                  lable: "Temp_mean",
                  borderColor: '#ff0059',
                  fill: false
                }
              ]
            },
            options: {
              responsive: true,
              title: {
                  display: true,
                  text: 'Atlanta,GA Historical Weather Data'
              },
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
          })  
          
        });
    }
  }

  ngOnInit(){

    // this._dataService.historicalWeather()
    //     .subscribe(res => {
    
    //         let myData = res['data'].map(res => res);
    //         let temp_max = myData.map(res => res.temp_max);
    //         let temp_min = myData.map(res => res.temp_min);
    //         let temp_mean = myData.map(res => res.temp_mean);
    //         let alldates = myData.map(res => res.date);
    //         let weatherDates = [];
    //         alldates.forEach((res) => {
    //             if(new Date(res) >= new Date('11/1/17') && new Date(res)<= new Date('11/30/17')){
    //               weatherDates.push(res);
    //             }
    //         })
    //         console.log(weatherDates);

    //         // Draw chart using the retrived data
    //         this.chart = new Chart('canvas',{
    //           type: 'line',
    //           data: {
    //             labels: alldates,
    //             datasets:[
    //               {
    //                 data: temp_max,
    //                 borderColor: '#3cba9f',
    //                 fill: false
    //               },
    //               {
    //                 data: temp_min,
    //                 borderColor: '#ffcc00',
    //                 fill: false
    //               },
    //               {
    //                 data: temp_mean,
    //                 borderColor: '#ff0059',
    //                 fill: false
    //               },
    //               {
    //                 data: this.temp_max_ny,
    //                 borderColor: '#00ffe9',
    //                 fill: false
    //               },
    //             ]
    //           },
    //           options: {
    //             responsive: true,
    //             // title: {
    //             //     display: true,
    //             //     text: 'Custom Chart Title'
    //             // },
    //             legend: {
    //               display: false
    //             },
    //             scales: {
    //               xAxes: [{
    //                 display: true,
    //                 scaleLable: {
    //                   display: true
    //                 }
    //               }],
    //               yAxes: [{
    //                 ticks: {
    //                   reverse: false,
    //                   max: 100
    //                 },
    //                 display: true,
    //                 scaleLable: {
    //                   display: true
    //                 }
    //               }]
    //             }
    //           }
    //         })  
    //     })
  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}