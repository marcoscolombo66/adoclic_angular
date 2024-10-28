import { AuthGuard } from './auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      
      {
        path: 'Productos',
        canActivate: [AuthGuard],
        title: 'Productos',
        loadComponent: () => import('./product-list/product-list.component').then(m => m.ProductListComponent)
      },   
      {
        path: '',
        redirectTo: 'dashboard', 
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    title: 'LogIn',
    loadComponent: () => import('./login/login.component'),
  },
];
