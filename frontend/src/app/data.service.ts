import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
      .map(result => result);
  }

  getUsers() {
    const uri = 'http://localhost:3000/api/users';
    return this._http
               .get(uri)
               .map(result => {
                 return result || [];
      });
  }

}
