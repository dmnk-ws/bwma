import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AppStateService} from '../app-state-service';

@Component({
  selector: 'app-header-component',
  standalone: false,
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  private readonly appStateService: AppStateService;
  private readonly router: Router;

  constructor(appStateService: AppStateService, router: Router) {
    this.appStateService = appStateService;
    this.router = router;
  }

  protected logout() {
    this.appStateService.logout();

    this.router.navigate(['/login']);
  }

  protected isLoggedIn() {
    return this.appStateService.isLoggedIn();
  }

  protected getUserEmail() {
    return this.appStateService.getUserEmail();
  }
}
