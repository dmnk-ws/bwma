import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IUser } from '../user-component/user.interface';
import { UserService } from '../user-service';

@Component({
  selector: 'app-users-component',
  imports: [RouterLink],
  templateUrl: './users-component.html',
  styleUrl: './users-component.scss',
})
export class UsersComponent {
  private readonly userService: UserService;
  protected users: IUser[] = [];
  protected loading: boolean = false;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.loading = true;
    this.userService.fetchUsers().subscribe((users: IUser[]) => {
      this.users = users;
      this.loading = false;
    });
  }
}
