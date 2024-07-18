import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../../shared/shared.module';
import { EmployeesComponent } from './components/employees/employees.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    EmployeesComponent,
    PayrollComponent,
    RightBarComponent,
    LeftBarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
