import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {DatePipe} from '@angular/common';

@Injectable()
export class DataService {


  result:any;

  constructor(private _http: Http,private _httpClient: HttpClient,private datePipe: DatePipe) { }

  dailyForecast() {
    return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22").map(result => result);
  }

  historicalWeather(){
    const uri = "/api/cityHistoricalData_Atlanta";
    return this._httpClient.get(uri)
      .map(result => result);
  }

  dateRangeFilter(startDate,endDate,cityCode){

    const uri = "/api/cityHistoricalData_Atlanta";

    return this._httpClient.get(uri)
      .map(result => result);
  }

  dateRangeForPrediction(startDate,endDate,cityCode){
  console.log("begin 22");
  console.log(this.datePipe.transform(startDate,"yyyy-MM-dd"));
  console.log(endDate);
  console.log(cityCode);

    const uri = "/api/weatherPrediction/"+this.datePipe.transform(startDate,"yyyy-MM-dd")
    + "/" + this.datePipe.transform(endDate,"yyyy-MM-dd")
    + "/" + cityCode;

    return this._httpClient.get(uri)
      .map((result: any) => {
               this.result = result;
               console.log("before result");
               console.log(this.result);
               console.log("end result");
               return result;
              });
  }


  historicalWeather_Newyork(){
    const uri = "/api/cityHistoricalData_NewYork";
    return this._httpClient.get(uri)
      .map(result => result);
  }

  historicalHDD_janz18(){
    const uri = "/api/hdd_janz18";
    return this._httpClient.get(uri)
      .map(result => result);
  }
  getHDD_janz18() {
    const uri = "/api/hdd_janz18";
    return this._http.get(uri)
      .map(result => this.result = result.json().data);
  }

  tempNYjan18(){
    const uri = "/api/new_york_temp_0118";
    return this._httpClient.get(uri)
      .map(result => result);
  }
  gettempNYjan18() {
    const uri = "/api/new_york_temp_0118";
    return this._http.get(uri)
      .map(result => this.result = result.json().data);
  }

  hddNY_avg(){
    const uri = "/api/hdd_cdd_avg";
    return this._httpClient.get(uri)
      .map(result => result);
  }
  gethddNY_avg() {
    const uri = "/api/hdd_cdd_avg";
    return this._http.get(uri)
      .map(result => this.result = result.json().data);
  }

  naive_est(){
      const uri = "/api/naive_est_jan18";
      return this._httpClient.get(uri)
        .map(result => result);
  }
  get_naive_est() {
      const uri = "/api/naive_est_jan18";
      return this._http.get(uri)
        .map(result => this.result = result.json().data);
  }


}
