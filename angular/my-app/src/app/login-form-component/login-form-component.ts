import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.scss',
})
export class LoginFormComponent {
  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    remember: new FormControl(false),
  });
}
