import { Component, OnInit } from '@angular/core';
// Import the DataService
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title ='app';

  // Define a users property to hold our user data
  users: Array<any> = [];

  // Create an instance of the DataService through dependency injection
  constructor(private http: HttpClient,private _dataService: DataService) {}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    // Access the Data Service's getUsers() method we defined
    // this._dataService.getUsers()
    //     .subscribe(res => this.users = res as any);
     this._dataService.getUsers().subscribe(res => {
           this.users = res as any;
     });
  }
}
