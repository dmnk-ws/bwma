import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header-component/header-component';
import {UserService} from './user-service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [UserService],
})
export class App {
  protected readonly title = signal('my-app');
}
