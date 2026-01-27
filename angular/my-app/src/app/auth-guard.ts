import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AppStateService} from './app-state-service';

export const authGuard: CanActivateFn = () => {
  const appStateService = inject(AppStateService);
  const router = inject(Router);

  return appStateService.isLoggedIn() ? true : router.parseUrl('/login');
};
