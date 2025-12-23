import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUsersComponent } from './material-users-component';
import {provideHttpClient} from '@angular/common/http';

describe('MaterialUsersComponent', () => {
  let component: MaterialUsersComponent;
  let fixture: ComponentFixture<MaterialUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialUsersComponent],
      providers: [provideHttpClient()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
