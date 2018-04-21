import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss']
})
export class PredictionsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) { }

  ngOnInit() {
  }

  sendMeHome(){
    this.router.navigate(['']);
  }
}
