import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard-component/dashboard-component';
import {UsersComponent} from './users-component/users-component';
import {UserComponent} from './user-component/user-component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
];
