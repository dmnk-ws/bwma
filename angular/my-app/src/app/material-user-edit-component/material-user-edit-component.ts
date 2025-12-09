import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user-service';
import {IAddress, IUser} from '../user-component/user.interface';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-material-user-edit-component',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './material-user-edit-component.html',
  styleUrl: './material-user-edit-component.scss',
})
export class MaterialUserEditComponent {
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
