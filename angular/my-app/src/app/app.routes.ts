import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard-component/dashboard-component';
import {UsersComponent} from './users-component/users-component';
import {UserComponent} from './user-component/user-component';
import {UserEditComponent} from './user-edit-component/user-edit-component';
import {MaterialUsersComponent} from './material-users-component/material-users-component';
import {MaterialUserEditComponent} from './material-user-edit-component/material-user-edit-component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'user/:id/edit', component: UserEditComponent },
  { path: 'material/user/:id/edit', component: MaterialUserEditComponent },
  { path: 'material/users', component: MaterialUsersComponent },
];
