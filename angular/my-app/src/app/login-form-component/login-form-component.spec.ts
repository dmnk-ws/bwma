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
    expect(component.loginForm.valid).toEqual(false);
  });

  it('should have the expected initial form values', () => {
    expect(component.loginForm.value).toEqual({
      email: '',
      password: '',
      remember: false,
    });
  });
});
