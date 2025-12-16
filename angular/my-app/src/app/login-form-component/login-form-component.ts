import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-login-form-component',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButton,
    MatError,
  ],
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
