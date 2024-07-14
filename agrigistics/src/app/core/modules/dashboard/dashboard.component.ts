import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DataService){

  }


  ngOnInit(): void {
    this.dataService.getData().subscribe(res => {
      console.log(res);
    })
  }

}
