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
    this.cityCodemap.set("Boston", "KBOS");
    this.cityCodemap.set("Chicago", "KORD");
    this.cityCodemap.set("Cincinnati","KLUK");
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
      this._dataService.dateRangeFilter(this.startDate,this.endDate,this.cityCode)
      .subscribe(res => {

          let cityResponse = res['data'].map(res => res);
          let alldates = [];
          let historical_hdd = [0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310]; 
          let actual_hdd = [0,12,25,32,42,55,68,71,84,96,105,111,124,135,146,157,161,179,181,192,203,214,225,236,247,258,269,271,282,293,304,315];
          let prices = [310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310];
          let actual_prices = [410,415,420,425,423,421,431,441,440,430,435,425,420,415,400,380,390,370,360,350,355,345,340,345,335,330,320,310,310,310,310];
          let predicted_prices = [310,315,320,323,325,327,325,323,330,336,339,342,337,335,325,324,323,322,315,313,311,310,310,314,314,314,313,313,313,312,310];

          cityResponse.forEach((res) => {
            if( res.city_code == this.cityCode && new Date(res.date) >= new Date(this.startDate) && new Date(res.date)<= new Date(this.endDate)){
              alldates.push(res.date);
            }

          });

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
                    data: historical_hdd,
                    label: "Historical HDD",
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
        });
    }
  }

  ngOnInit(){

  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}

