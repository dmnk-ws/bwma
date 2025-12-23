import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form-component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid initial form', () => {
    expect(component.loginForm.valid).toBe(false);
  });

  it('should have the expected initial form values', () => {
    expect(component.loginForm.value).toEqual({
      email: '',
      password: '',
      remember: false,
    });
  });

  it('should have valid form', () => {
    component.loginForm.setValue({
      email: 'luke.skywalker@jediorder.holo',
      password: 'secret',
      remember: true,
    });
    fixture.detectChanges();

    expect(component.loginForm.valid).toBe(true);
    expect(component.loginForm.value).toEqual({
      email: 'luke.skywalker@jediorder.holo',
      password: 'secret',
      remember: true,
    });
  });

  it('should have invalid form without email', () => {
    component.loginForm.setValue({
      email: '',
      password: 'secret',
      remember: true,
    });
    fixture.detectChanges();

    expect(component.loginForm.valid).toBe(false);
    expect(component.loginForm.value).toEqual({
      email: '',
      password: 'secret',
      remember: true,
    });
  });

  it('should have invalid form with incorrect email format', () => {
    component.loginForm.setValue({
      email: 'luke.skywalker',
      password: '',
      remember: true,
    });
    fixture.detectChanges();

    expect(component.loginForm.valid).toBe(false);
    expect(component.loginForm.value).toEqual({
      email: 'luke.skywalker',
      password: '',
      remember: true,
    });
  });

  it('should have invalid form without password', () => {
    component.loginForm.setValue({
      email: 'luke.skywalker@jediorder.holo',
      password: '',
      remember: true,
    });
    fixture.detectChanges();

    expect(component.loginForm.valid).toBe(false);
    expect(component.loginForm.value).toEqual({
      email: 'luke.skywalker@jediorder.holo',
      password: '',
      remember: true,
    });
  });

  it('should have set \'remember\' to local storage', () => {
    const localStorageSpy = spyOn(window.localStorage, 'setItem');
    component.loginForm.setValue({
      email: 'luke.skywalker@jediorder.holo',
      password: 'secret',
      remember: true,
    });

    component.onSubmit();

    expect(localStorageSpy).toHaveBeenCalledOnceWith('remember', 'true');
  });
});
