import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../../../shared/models/user.model';
import { DataService } from '../../../../../shared/services/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private dataService: DataService){

  }


  ngOnInit(): void {

    this.dataService.getEmployeeData().subscribe(res => {
      console.log(res);
      this.employees = res;
    })

  }

}
