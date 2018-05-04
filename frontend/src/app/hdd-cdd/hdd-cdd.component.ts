import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hdd-cdd',
  templateUrl: './hdd-cdd.component.html',
  styleUrls: ['./hdd-cdd.component.scss']
})
export class HddCddComponent implements OnInit {

  futures: string[] = ["HDD", "CDD"];
  selectedFuture: string = "Select";
  startDate: Date;
  endDate : Date;
  newDate: string;
  cityCode: String;
  hdd_cdd_Response:any[]=[];
  filteredResponse: any[] = [];

  ChangeFuture(newFuture: string) { 
    this.selectedFuture = newFuture;
  }

  cityCodemap = new Map();
  cities: string[] = ["Atlanta", "Boston", "Chicago","Cincinnati","Dallas","Des Moines","Houston","Kansas City","Las Vegas","Mimmeapolis","NewYork","Philadelphia","Portland","Sacramento","Tuscon"];
  selectedCity: string = "Select City";

  ChangeCity(newCity: string) { 
    this.selectedCity = newCity;
  }

  constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) { 
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
  hdd_cdd_filter(newDate){
    if (newDate) {
      this.value= newDate;
      //StartDate
      this.startDate = new Date(this.value.split(" - ")[0]);
      //EndDate
      this.endDate = new Date(this.value.split(" - ")[1]);

      // Selected Citycode
      this.cityCode = this.cityCodemap.get(this.selectedCity);

      // Data Service which gets the data from database with startdate, enddate and city filter
      this._dataService.hdd_cdd_DataFilter(this.startDate,this.endDate,this.cityCode,this.selectedFuture)
      .subscribe(res => {
        let hdd_cdd_Response = res['data'].map(res => res);
        // let businessDate = [];
        // let rank = [];
        // let price = [];
        // let currency = [];
        // let securityDescription = [];
        // let city_code = [];
        // let index_code = [];
        let filteredResponse = [];
        hdd_cdd_Response.forEach((res) => {
          //TODO : add : res.city_code == this.cityCode in if condition
          if(new Date(res.BusinessDate) >= new Date(this.startDate) && new Date(res.BusinessDate)<= new Date(this.endDate)){
            // businessDate.push(res.BusinessDate);
            // rank.push(res.Rank);
            // price.push(res.Price);
            // currency.push(res.Currency);
            // securityDescription.push(res.SecurityDescription);
            // city_code.push(res.city_code);
            // index_code.push(res.index_code);
            filteredResponse.push(res);
          }
        });
        console.log(filteredResponse);
        this.filteredResponse = filteredResponse;
      });
    }

  }

  ngOnInit() {
  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}
