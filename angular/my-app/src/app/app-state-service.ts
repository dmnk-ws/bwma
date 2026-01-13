import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private currentUser: WritableSignal<string> = signal('');
  private loggedIn: Signal<boolean> = computed(() => this.currentUser() !== '');

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
}
