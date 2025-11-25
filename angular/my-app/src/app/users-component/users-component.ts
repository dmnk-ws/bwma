import { Component } from '@angular/core';
import {IUser} from '../user-component/user.interface';
import {UserService} from '../user-service';

@Component({
  selector: 'app-users-component',
  imports: [],
  templateUrl: './users-component.html',
  styleUrl: './users-component.scss',
})
export class UsersComponent {
  private readonly userService: UserService;
  protected users: IUser[] = [];

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
