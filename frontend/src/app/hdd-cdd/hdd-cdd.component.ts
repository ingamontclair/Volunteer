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

  constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) { }

  ngOnInit() {
  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}
