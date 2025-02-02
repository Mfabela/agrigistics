import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./core/modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path:'dashboard',
    loadChildren: () => import('./core/modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path:'**',
    loadChildren: () => import('./core/modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
