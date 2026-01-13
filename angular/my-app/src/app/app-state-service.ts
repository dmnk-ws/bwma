import {computed, effect, Injectable, Signal, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private currentUser: WritableSignal<string> = signal('');
  private loggedIn: Signal<boolean> = computed(() => this.currentUser() !== '');
  private rememberMe: WritableSignal<boolean> = signal(window.localStorage.getItem('rememberMe') === 'true');

  constructor() {
    effect(() => {
      console.log('Update - Remember me ' + this.rememberMe());
      window.localStorage.setItem('rememberMe', String(this.rememberMe()));
    });
  }

  public login(email: string) {
    this.currentUser.set(email);
  }

  public logout() {
    this.currentUser.set('')
  }

  public getUserEmail(): string {
    return this.currentUser();
  }

  public isLoggedIn(): boolean {
    return this.loggedIn();
  }

  public hasRememberMe() {
    return this.rememberMe();
  }

  public setRememberMe(value: boolean) {
    this.rememberMe.set(value);
  }
}
