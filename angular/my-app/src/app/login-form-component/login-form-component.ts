import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppStateService} from '../app-state-service';

@Component({
  selector: 'app-login-form-component',
  standalone: false,
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.scss',
})
export class LoginFormComponent {
  private router: Router;
  private readonly appStateService: AppStateService;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    remember: new FormControl(false),
  });

  constructor(router: Router, appStateService: AppStateService) {
    this.router = router;
    this.appStateService = appStateService;
  }

  onSubmit() {
    if (this.loginForm.invalid || !this.loginForm.value.email) return;

    const rememberMe = this.loginForm.value.remember;
    if (typeof rememberMe == 'boolean') window.localStorage.setItem('remember', String(rememberMe));

    this.appStateService.login(this.loginForm.value.email);

    this.router.navigate(['/dashboard']);
  }
}
