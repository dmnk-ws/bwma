import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard-component/dashboard-component';
import {UsersComponent} from './users-component/users-component';
import {UserComponent} from './user-component/user-component';
import {UserEditComponent} from './user-edit-component/user-edit-component';
import {MaterialUsersComponent} from './material-users-component/material-users-component';
import {MaterialUserEditComponent} from './material-user-edit-component/material-user-edit-component';
import {LoginFormComponent} from './login-form-component/login-form-component';
import {CounterComponent} from './counter-component/counter-component';
import {authGuard} from './auth-guard';

export const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'counter', component: CounterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'user/:id/edit', component: UserEditComponent },
  { path: 'material/user/:id/edit', component: MaterialUserEditComponent },
  { path: 'material/users', component: MaterialUsersComponent },
];
