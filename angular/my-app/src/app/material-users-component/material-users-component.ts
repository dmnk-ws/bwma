import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UserService } from '../user-service';
import { IUser } from '../user-component/user.interface';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-material-users-component',
  imports: [MatTableModule, MatButtonModule, RouterLink],
  templateUrl: './material-users-component.html',
  styleUrl: './material-users-component.scss',
})
export class MaterialUsersComponent {
  private readonly userService: UserService;
  protected users: IUser[] = [];
  protected loading: boolean = false;
  protected displayedColumns: string[] = ['user', 'details', 'edit', 'delete'];

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
