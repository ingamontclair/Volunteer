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

export class AtlantaComponent implements OnInit {

  startDate: Date;
  endDate : Date;
  newDate: string;
  cityCode: String;

  cityCodemap = new Map();

      // this.cityCode = this.cityCodemap.get(this.selectedCity);

  cities: string[] = ["Atlanta", "Boston", "Chicago","Cincinnati","Dallas","Des Moines","Houston","Kansas City","Las Vegas","Mimmeapolis","NewYork","Philadelphia","Portland","Sacramento","Tuscon"];
  selectedCity: string = "Select City";
  
  ChangeCity(newCity: string) { 
    this.selectedCity = newCity;
  }

  atlantaResponse:any[]=[];
  
  // Define a property to hold our city data
  cityHistoricalData_Atlanta: Array<any>;

  chart = [];
  temp_max_ny: any[] = [];


  // Create an instance of the DataService through dependency injection
  constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) { 
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

      console.log(this.cityCodemap);
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
      // Selected Citycode
      this.cityCode = this.cityCodemap.get(this.selectedCity);
      console.log(this.cityCode);

      // Data Service which gets the data from database with startdate, enddate and city filter
      this._dataService.dateRangeFilter(this.startDate,this.endDate,this.cityCode)
      .subscribe(res => {
          let atlantaResponse = res['data'].map(res => res);
          let alldates = [];
          let temp_max = [];
          let temp_min = [];
          let temp_mean = [];
          atlantaResponse.forEach((res) => {
            if( res.city_code == this.cityCode && new Date(res.date) >= new Date(this.startDate) && new Date(res.date)<= new Date(this.endDate)){
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
          
        });
    }
  }

  ngOnInit(){

  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}