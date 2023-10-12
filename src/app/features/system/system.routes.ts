import { Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

export const SYSTEM_ROUTES: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      {
        path: '',
        pathMatch: "full",
        redirectTo: 'dashboard'
      }, {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];
