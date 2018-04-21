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

  ChangeFuture(newFuture: string) { 
    this.selectedFuture = newFuture;
  }

  cities: string[] = ["Atlanta", "Boston", "Chicago","Cincinnati","Dallas","Des Moines","Houston","Kansas City","Las Vegas","Mimmeapolis","NewYork","Philadelphia","Portland","Sacramento","Tuscon"];
  selectedCity: string = "Select City";

  ChangeCity(newCity: string) { 
    this.selectedCity = newCity;
  }

  constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) { }

  ngOnInit() {
  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}
