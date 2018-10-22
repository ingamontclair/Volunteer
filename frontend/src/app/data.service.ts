import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {DatePipe} from '@angular/common';

@Injectable()
export class DataService {


  result:any;

  constructor(private _http: Http,private _httpClient: HttpClient,private datePipe: DatePipe) { }

  hdd_cdd_DataFilter(startDate,endDate,cityCode,future){
    const uri = "/api/hdd_cdd";
    return this._httpClient.get(uri)
      .map(result => result);
  }

  dateRangeFilter(startDate,endDate,cityCode){
    const uri = "/api/historicalWeatherData";
    return this._httpClient.get(uri)
      .map(result => result);
  }

  dateRangeForPrediction(startDate,endDate,cityCode){

    const uri = "/api/weatherPrediction/"+this.datePipe.transform(startDate,"yyyy-MM-dd")
    + "/" + this.datePipe.transform(endDate,"yyyy-MM-dd")
    + "/" + cityCode;
    return this._httpClient.get(uri)
      .map(result => result);
  }

}
