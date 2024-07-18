import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { Employee, User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  
  employees: Employee[] = [];
  user: User;

  constructor(private dataService: DataService){

  }


  ngOnInit(): void {

    this.dataService.getEmployeeData().subscribe(res => {
      console.log(res);
      this.employees = res;
    })

    this.dataService.getUserData().subscribe(res => {
      this.user = res;
      console.log(res);
    })

  }

}
