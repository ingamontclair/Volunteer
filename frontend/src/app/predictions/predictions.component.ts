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
  s:string;
  e:string;
  startDateForPred: string;
  endDateForPred : string;
  replace: string = "-";
  reg: string = "/\//g";
  cityResponse:any[]=[];
  chart = [];
  args = [];
  hello = "hi";

  cityCodemap = new Map();
  cities: string[] = ["Atlanta", "Cincinnati","Dallas","Las Vegas","Minneapolis","NewYork","Sacramento"];
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
    this.cityCodemap.set("Cincinnati","KLUK");
    this.cityCodemap.set("Dallas","KDAL");
    this.cityCodemap.set("Las Vegas","KVGT");
    this.cityCodemap.set("Minneapolis", "KMIC");
    this.cityCodemap.set("NewYork","KNYC");
    this.cityCodemap.set("Sacramento","KSAC");
  }

  // Getting Date range from ui to get filtered data from database
  value = '';

  addDate(newDate) {
    if (newDate) {
      this.value= newDate;
      //StartDate
      this.startDate = new Date(this.value.split(" - ")[0]);
      this.s = this.value.split(" - ")[0];
      this.startDateForPred = this.s.replace(/\//g, this.replace);

      //EndDate
      this.endDate = new Date(this.value.split(" - ")[1]);
      this.e = this.value.split(" - ")[1];
      this.endDateForPred = this.e.replace(/\//g, this.replace);

      //Calculate difference between two dates
      var diff = Math.abs(this.startDate.getTime() - this.endDate.getTime());
      this.diffDays = Math.ceil(diff / (1000 * 3600 * 24));

      // Selected Citycode
      this.cityCode = this.cityCodemap.get(this.selectedCity);

      // Data Service which gets the data from database with startdate, enddate and city filter
      this._dataService.dateRangeForPrediction(this.startDateForPred,this.endDateForPred,this.cityCode)
      .subscribe(res => {

          let cityResponse = res['data'];
          console.log("Response 1 : ",cityResponse.actual_prices);
          let alldates = cityResponse.dates_for_label;
          let predicted_hdd = cityResponse.sum_to_date_pred_arr; 
          let actual_hdd = cityResponse.sum_to_date_arr;
          let prices = cityResponse.flat_line;
          let actual_prices = cityResponse.actual_prices;
          let predicted_prices = cityResponse.predicted_prices;


          // Chart for data less than or equal to 30 days
          if(this.diffDays <= 31){
            console.log("data less than or equal to 30 days");
            this.chart = new Chart('canvas',{
              type: 'line',
              data: {
                labels: alldates,
                datasets:[
                  {
                    data: actual_hdd,
                    label: "Actual HDD",
                    backgroundColor: "#ff1000",
                    borderColor: "#ff1000",
                    fill: false,
                  },
                  {
                    data: predicted_hdd,
                    label: "Predicted HDD",
                    backgroundColor: "#FF8C00",
                    borderColor: "#FF8C00",
                    fill: false,
                  },
                  {
                    data: prices,
                    label: "Prices",
                    backgroundColor: "#ab70d3",
                    borderColor: "#ab70d3",
                    fill: false,
                  },
                  {
                    data: actual_prices,
                    label: "Actual Prices",
                    backgroundColor: "#7aafff",
                    borderColor: "#7aafff",
                    fill: false,
                  },
                  {
                    data: predicted_prices,
                    label: "Predicted Prices",
                    backgroundColor: "#4da552",
                    borderColor: "#4da552",
                    fill: false,
                  }
                ]
              },
              options: {
                responsive: true,
                title: {
                    display: true,
                    text:  this.selectedCity + ' , Predicted Weather Derivatives prices'
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
                      labelString: 'Price Range'
                    }
                  }]
                }
              }
            })
          }
        });
    }
  }

  ngOnInit(){}

}

