import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IAddress, IUser} from './user.interface';
import {UserService} from '../user-service';

@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.scss',
})
export class UserComponent implements OnInit {
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
