import {NgModule, isDevMode, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeaderComponent} from '../header-component/header-component';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {AppStateService} from '../app-state-service';
import {LoginFormComponent} from '../login-form-component/login-form-component';
import {App} from '../app';
import {ReactiveFormsModule} from '@angular/forms';
import {MatError, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {BrowserModule} from '@angular/platform-browser';
import {UserService} from '../user-service';
import {routes} from '../app.routes';
import {provideHttpClient} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    MatButton,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatError,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    provideHttpClient(),
    AppStateService,
    UserService,
  ],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
