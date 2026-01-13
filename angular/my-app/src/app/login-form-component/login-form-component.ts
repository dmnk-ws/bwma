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
  private readonly router: Router;
  private readonly appStateService: AppStateService;
  protected loginForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }>;

  constructor(router: Router, appStateService: AppStateService) {
    this.router = router;
    this.appStateService = appStateService;
    this.loginForm = new FormGroup({
      email: new FormControl(
        '',
        {nonNullable: true, validators: [Validators.required, Validators.email]}
      ),
      password: new FormControl(
        '',
        {nonNullable: true, validators: Validators.required}
      ),
      remember: new FormControl(
        this.appStateService.hasRememberMe(),
        {nonNullable: true}
      ),
    });
  }

  onSubmit() {
    if (this.loginForm.invalid || !this.loginForm.value.email) return;

    const rememberMe = this.loginForm.value.remember;
    if (typeof rememberMe === 'boolean') this.appStateService.setRememberMe(rememberMe);

    this.appStateService.login(this.loginForm.value.email);

    this.router.navigate(['/dashboard']);
  }
}
