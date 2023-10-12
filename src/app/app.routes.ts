import { Routes } from '@angular/router';
import { HomeComponent } from "./features/home/home.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }, {
    path: 'system',
    title: 'System Preferences',
    loadChildren: () => import('./features/system/system.routes').then(m => m.SYSTEM_ROUTES),
  }
];
