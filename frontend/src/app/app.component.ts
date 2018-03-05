import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {}
}
