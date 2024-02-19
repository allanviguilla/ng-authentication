import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';

export const routes: Routes = [
  // { path: 'login', component: LoginComponent, title: 'Login Page' },
  {
    path: '',
    loadComponent: () =>
      import('../login/login.component').then((a) => a.LoginComponent),
  },
];
