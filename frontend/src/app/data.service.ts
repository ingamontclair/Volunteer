import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http,private _httpClient: HttpClient) { }

  dailyForecast() {
    return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22").map(result => result);
  }

  historicalWeather(){
    const uri = "/api/cityHistoricalData_Atlanta";
    return this._httpClient.get(uri)
      .map(result => result);
  }

  getUsers() {
    const uri = "/api/cityHistoricalData_Atlanta";
    return this._http.get(uri)
      .map(result => this.result = result.json().data);
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
