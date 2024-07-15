import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  
  employees: any[] = [];
  user: any;

  constructor(private dataService: DataService){

  }


  ngOnInit(): void {

    this.dataService.getEmployeeData().subscribe(res => {
      console.log(res);
      this.employees = res.employees;
    })

    this.dataService.getUserData().subscribe(res => {
      this.user = res;
      console.log(res);
    })

  }

}
