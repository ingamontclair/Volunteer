import { Component, OnInit, Input , NgModule, OnChanges, SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss']
})
export class PredictionsComponent implements OnInit {

  startDate: Date;
  endDate : Date;
  newDate: string;
  cityCode: String;
  cityResponse:any[]=[];
  chart = [];

  cityCodemap = new Map();
  cities: string[] = ["Atlanta", "Boston", "Chicago","Cincinnati","Dallas","Des Moines","Houston","Kansas City","Las Vegas","Mimmeapolis","NewYork","Philadelphia","Portland","Sacramento","Tuscon"];
  selectedCity: string = "Select City";
  diffDays: number;

  ChangeCity(newCity: string) {
    this.selectedCity = newCity;
  }

  // Create an instance of the DataService through dependency injection
  constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService, private datePipe: DatePipe) {
    let startDate : Date;
    let endDate : Date;

    this.cityCodemap.set("Atlanta","KFTY");
    this.cityCodemap.set("Boston", "KBOS");
    this.cityCodemap.set("Chicago", "KORD");
    this.cityCodemap.set("Cincinnati","KLUX");
    this.cityCodemap.set("Dallas","KDAL");
    this.cityCodemap.set("Des Moines","KDSM");
    this.cityCodemap.set("Houston", "KHOU");
    this.cityCodemap.set("Kansas City","KMKC");
    this.cityCodemap.set("Las Vegas","KVGT");
    this.cityCodemap.set("Minneapolis", "KMIC");
    this.cityCodemap.set("NewYork","KNYC");
    this.cityCodemap.set("Philadelphia", "KPHL");
    this.cityCodemap.set("Portland","KPDX");
    this.cityCodemap.set("Sacramento","KSAC");
    this.cityCodemap.set("Tuscon","KDMA");
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

      //Calculate difference between two dates
      var diff = Math.abs(this.startDate.getTime() - this.endDate.getTime());
      this.diffDays = Math.ceil(diff / (1000 * 3600 * 24));

      // Selected Citycode
      this.cityCode = this.cityCodemap.get(this.selectedCity);

      // Data Service which gets the data from database with startdate, enddate and city filter
      this._dataService.dateRangeForPrediction(this.startDate,this.endDate,this.cityCode)
      .subscribe(res => {
          let cityResponse = res['data'].map(res => res);
          let alldates = [];
          let temp_max = [];
          let temp_min = [];
          let temp_mean = [];
          cityResponse.forEach((res) => {
            if( res.city_code == this.cityCode && new Date(res.date) >= new Date(this.startDate) && new Date(res.date)<= new Date(this.endDate)){
              alldates.push(res.date);
              temp_max.push(res.temp_max);
              temp_min.push(res.temp_min);
              temp_mean.push(res.temp_mean);
            }
          });

          // Chart for data less than or equal to 30 days
          if(this.diffDays <= 30){
            console.log("data less than or equal to 30 days");
            this.chart = new Chart('canvas',{
              type: 'line',
              data: {
                labels: alldates,
                datasets:[
                  {
                    data: temp_max,
                    label: "Temp_max",
                    backgroundColor: "#3cba9f",
                    borderColor: "#3cba9f",
                    fill: false,
                  },
                  {
                    data: temp_min,
                    label: "Temp_min",
                    backgroundColor: "#ffcc00",
                    borderColor: "#ffcc00",
                    fill: false,
                  },
                  {
                    data: temp_mean,
                    label: "Temp_mean",
                    backgroundColor: "#ff0059",
                    borderColor: "#ff0059",
                    fill: false,
                  }
                ]
              },
              options: {
                responsive: true,
                title: {
                    display: true,
                    text:  this.selectedCity + ' , Historical Weather Data'
                },
                scales: {
                  xAxes: [{
                    type: 'time',
                    time: {
                      unit: 'day',
                      displayFormats: {
                        day: 'MMM D',
                      },
                    },
                    ticks: {
                      autoSkip: false
                    },
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Date Range'
                    }
                  }],
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                    },
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Temperature Range'
                    }
                  }]
                }
              }
            })
          }
          // Chart for data between 1-3 months displayed weekly
          else if(this.diffDays > 30 && this.diffDays <=90){
            console.log("data between 1-3 months displayed weekly");
            this.chart = new Chart('canvas',{
              type: 'line',
              data: {
                labels: alldates,
                datasets:[
                  {
                    data: temp_max,
                    label: "Temp_max",
                    backgroundColor: "#3cba9f",
                    borderColor: "#3cba9f",
                    fill: false,
                  },
                  {
                    data: temp_min,
                    label: "Temp_min",
                    backgroundColor: "#ffcc00",
                    borderColor: "#ffcc00",
                    fill: false,
                  },
                  {
                    data: temp_mean,
                    label: "Temp_mean",
                    backgroundColor: "#ff0059",
                    borderColor: "#ff0059",
                    fill: false,
                  }
                ]
              },
              options: {
                responsive: true,
                title: {
                    display: true,
                    text:  this.selectedCity + ' , Historical Weather Data'
                },
                scales: {
                  xAxes: [{
                    type: 'time',
                    time: {
                      unit: 'week',
                      displayFormats: {
                        week: 'll',
                      },
                    },
                    ticks: {
                      autoSkip: false
                    },
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Date Range'
                    }
                  }],
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                    },
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Temperature Range'
                    }
                  }]
                }
              }
            })
          }
          // Chart for data between 3-6 months displayed monthly
          else if(this.diffDays > 90 && this.diffDays <= 180){
            console.log("data between 3-6 months displayed monthly");
            this.chart = new Chart('canvas',{
              type: 'line',
              data: {
                labels: alldates,
                datasets:[
                  {
                    data: temp_max,
                    label: "Temp_max",
                    backgroundColor: "#3cba9f",
                    borderColor: "#3cba9f",
                    fill: false,
                  },
                  {
                    data: temp_min,
                    label: "Temp_min",
                    backgroundColor: "#ffcc00",
                    borderColor: "#ffcc00",
                    fill: false,
                  },
                  {
                    data: temp_mean,
                    label: "Temp_mean",
                    backgroundColor: "#ff0059",
                    borderColor: "#ff0059",
                    fill: false,
                  }
                ]
              },
              options: {
                responsive: true,
                title: {
                    display: true,
                    text:  this.selectedCity + ' , Historical Weather Data'
                },
                scales: {
                  xAxes: [{
                    type: 'time',
                    time: {
                      unit: 'month',
                      displayFormats: {
                        month: 'MMM YYYY',
                      },
                    },
                    ticks: {
                      autoSkip: false
                    },
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Date Range'
                    }
                  }],
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                    },
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Temperature Range'
                    }
                  }]
                }
              }
            })
          }
          // Chart for data between 6-12 months displayed quaterly
          else if(this.diffDays > 180 && this.diffDays <= 365){
            console.log("data between 6-12 months displayed quaterly");
            this.chart = new Chart('canvas',{
              type: 'line',
              data: {
                labels: alldates,
                datasets:[
                  {
                    data: temp_max,
                    label: "Temp_max",
                    backgroundColor: "#3cba9f",
                    borderColor: "#3cba9f",
                    fill: false,
                  },
                  {
                    data: temp_min,
                    label: "Temp_min",
                    backgroundColor: "#ffcc00",
                    borderColor: "#ffcc00",
                    fill: false,
                  },
                  {
                    data: temp_mean,
                    label: "Temp_mean",
                    backgroundColor: "#ff0059",
                    borderColor: "#ff0059",
                    fill: false,
                  }
                ]
              },
              options: {
                responsive: true,
                title: {
                    display: true,
                    text:  this.selectedCity + ' , Historical Weather Data'
                },
                scales: {
                  xAxes: [{
                    type: 'time',
                    time: {
                      unit: 'quarter',
                      displayFormats: {
                        quarter: '[Q]Q - YYYY',
                      },
                    },
                    ticks: {
                      autoSkip: false
                    },
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Date Range'
                    }
                  }],
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                    },
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Temperature Range'
                    }
                  }]
                }
              }
            })
          }
          // Chart for data more than 12 months displayed yearly
          else if(this.diffDays > 365){
            console.log("data more than 12 months displayed yearly");
            this.chart = new Chart('canvas',{
              type: 'line',
              data: {
                labels: alldates,
                datasets:[
                  {
                    data: temp_max,
                    label: "Temp_max",
                    backgroundColor: "#3cba9f",
                    borderColor: "#3cba9f",
                    fill: false,
                  },
                  {
                    data: temp_min,
                    label: "Temp_min",
                    backgroundColor: "#ffcc00",
                    borderColor: "#ffcc00",
                    fill: false,
                  },
                  {
                    data: temp_mean,
                    label: "Temp_mean",
                    backgroundColor: "#ff0059",
                    borderColor: "#ff0059",
                    fill: false,
                  }
                ]
              },
              options: {
                responsive: true,
                title: {
                    display: true,
                    text:  this.selectedCity + ' , Historical Weather Data'
                },
                scales: {
                  xAxes: [{
                    type: 'time',
                    time: {
                      unit: 'year',
                      displayFormats: {
                        year: 'YYYY',
                      },
                    },
                    ticks: {
                      autoSkip: false
                    },
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Date Range'
                    }
                  }],
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                    },
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Temperature Range'
                    }
                  }]
                }
              }
            })
          }
        });
    }
  }

  ngOnInit(){

  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}

