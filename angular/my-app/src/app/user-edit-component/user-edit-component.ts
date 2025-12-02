import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user-service';
import {IAddress, IUser} from '../user-component/user.interface';

@Component({
  selector: 'app-user-edit-component',
  imports: [],
  templateUrl: './user-edit-component.html',
  styleUrl: './user-edit-component.scss',
})
export class UserEditComponent {
  private readonly route: ActivatedRoute;
  private readonly userService: UserService;
  protected user: IUser | null = null;

  constructor(route: ActivatedRoute, userService: UserService) {
    this.route = route;
    this.userService = userService;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const param = params.get('id');
      const parsed = param ? parseInt(param, 10) : null;

      this.user = parsed && !isNaN(parsed) ? this.userService.getUser(parsed) : null;
    });
  }

  protected parseAddress(address: IAddress|undefined): string {
    if (!address) return '-';

    const parts = [
      address.street,
      [address.zip, address.city].filter(Boolean).join(' '),
      address.state,
      address.country,
    ].filter(Boolean);

    return parts.join(', ');
  }
}
