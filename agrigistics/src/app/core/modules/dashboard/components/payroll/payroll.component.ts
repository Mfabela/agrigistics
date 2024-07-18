import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../../shared/services/data.service';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrl: './payroll.component.scss'
})
export class PayrollComponent implements OnInit {

  user: User;

  constructor(private dataService: DataService){

  }


  ngOnInit(): void {

    this.dataService.getUserData().subscribe(res => {
      this.user = res;
      console.log(res);
    })

  }

}
